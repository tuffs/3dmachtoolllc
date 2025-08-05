'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import html2pdf from 'html2pdf.js';
import { sendEmailReceipt } from '@/actions/sendEmailReceipt';
import { reorderPurchase } from '@/actions/reorderPurchase';

export default function ReceiptActions({ purchaseDetails }) {
  const router = useRouter();
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const [isSendingEmail, setIsSendingEmail] = useState(false);
  const [isReordering, setIsReordering] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [emailError, setEmailError] = useState(null);
  const [showNotice, setShowNotice] = useState(false);

  const handlePrintPDF = async () => {
    const receiptElement = document.getElementById('receipt-content');
    if (!receiptElement || !purchaseDetails) return;

    setIsGeneratingPDF(true);

    try {
      const opt = {
        margin: 0.5,
        filename: `Receipt-${purchaseDetails.orderNumber}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: {
          scale: 2,
          useCORS: true,
          allowTaint: true,
        },
        jsPDF: {
          unit: 'in',
          format: 'letter',
          orientation: 'portrait',
        },
      };

      await html2pdf().set(opt).from(receiptElement).save();
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to generate PDF. Please try again.');
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  const handleSendEmail = async () => {
    if (!purchaseDetails || !purchaseDetails.customer || !purchaseDetails.customer.email || isSendingEmail) {
      console.error('Invalid purchaseDetails or email:', purchaseDetails);
      setEmailError('Cannot send email: Missing purchase details or email address.');
      setShowNotice(true);
      return;
    }

    setIsSendingEmail(true);
    setEmailError(null);
    setShowNotice(false);

    try {
      const result = await sendEmailReceipt(purchaseDetails, purchaseDetails.customer.email);

      if (result.success) {
        setEmailSent(true);
        setShowNotice(true);
        // Auto-hide success notice after 5 seconds
        setTimeout(() => setShowNotice(false), 5000);
      } else {
        throw new Error(result.error || 'Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setEmailError('Failed to send receipt email. Please try again.');
      setShowNotice(true);
    } finally {
      setIsSendingEmail(false);
    }
  };

  const handleReorder = async () => {
    if (!purchaseDetails || isReordering) return;

    setIsReordering(true);

    try {
      const result = await reorderPurchase(purchaseDetails);

      if (result.success) {
        // Trigger cart update event for other components
        if (typeof window !== "undefined") {
          window.dispatchEvent(new Event('cartUpdated'));
        }

        // Navigate to cart/checkout page
        router.push('/cart');
      } else {
        throw new Error(result.error || 'Failed to reorder items');
      }
    } catch (error) {
      console.error('Error reordering:', error);
      alert('Failed to add items to cart. Please try again.');
    } finally {
      setIsReordering(false);
    }
  };

  return (
    <>
      {/* Notice Area */}
      <EmailNoticesArea
        emailSent={emailSent}
        emailError={emailError}
        showNotice={showNotice}
        onClose={() => setShowNotice(false)}
      />

      {/* Action Buttons */}
      <div className="flex justify-center gap-4 mt-8">
        {/* Print Receipt Button */}
        <button
          onClick={handlePrintPDF}
          disabled={isGeneratingPDF}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isGeneratingPDF ? 'Generating PDF...' : 'Print Receipt'}
        </button>

        {/* Reorder Button */}
        <button
          onClick={handleReorder}
          disabled={isReordering}
          className="px-6 py-3 bg-inherit border-2 border-orange-500 text-orange-500 rounded-lg hover:bg-orange-500 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
        >
          {isReordering ? 'Adding to Cart...' : 'Reorder Items'}
        </button>

        {/* Email Receipt Button */}
        <button
          onClick={handleSendEmail}
          disabled={isSendingEmail}
          className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
        >
          {isSendingEmail ? 'Sending...' : emailSent ? 'Email Sent ✓' : 'Email Receipt'}
        </button>
      </div>
    </>
  );
}

// Email notices component (unchanged)
function EmailNoticesArea({ emailSent, emailError, showNotice, onClose }) {
  if (!showNotice) return null;

  if (emailSent && !emailError) {
    return (
      <div className="w-full max-w-3xl mx-auto mb-4">
        <div className="p-4 bg-green-800 border border-green-600 text-green-200 rounded-lg flex justify-between items-center">
          <span>✅ Receipt has been emailed successfully!</span>
          <button
            onClick={onClose}
            className="text-green-200 hover:text-white ml-4"
          >
            ✕
          </button>
        </div>
      </div>
    );
  }

  if (emailError) {
    return (
      <div className="w-full max-w-3xl mx-auto mb-4">
        <div className="p-4 bg-red-800 border border-red-600 text-red-200 rounded-lg flex justify-between items-center">
          <span>❌ {emailError}</span>
          <button
            onClick={onClose}
            className="text-red-200 hover:text-white ml-4"
          >
            ✕
          </button>
        </div>
      </div>
    );
  }

  return null;
}