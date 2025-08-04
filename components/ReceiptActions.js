'use client';

import { useState } from 'react';
import html2pdf from 'html2pdf.js';
import { sendEmailReceipt } from '@/actions/sendEmailReceipt';

export default function ReceiptActions({ purchaseDetails }) {
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const [isSendingEmail, setIsSendingEmail] = useState(false);
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

  return (
    <>
      {/* Notice Area - Above buttons */}
      <EmailNoticesArea
        emailSent={emailSent}
        emailError={emailError}
        showNotice={showNotice}
        onClose={() => setShowNotice(false)}
      />

      {/* Action Buttons */}
      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={handlePrintPDF}
          disabled={isGeneratingPDF}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isGeneratingPDF ? 'Generating PDF...' : 'Print Receipt'}
        </button>

        <button
          onClick={handleSendEmail}
          disabled={isSendingEmail}
          className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSendingEmail ? 'Sending...' : emailSent ? 'Email Sent ✓' : 'Email Receipt'}
        </button>
      </div>
    </>
  );
}

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