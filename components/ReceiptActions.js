'use client';

import { useState } from 'react';
import html2pdf from 'html2pdf.js';
import { sendEmailReceipt } from '@/actions/sendEmailReceipt';

export default function ReceiptActions({ purchaseDetails }) {
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const [isSendingEmail, setIsSendinggEmail] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

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
          allowTaint: true
        },
        jsPDF: {
          unit: 'in',
          format: 'letter',
          oreintation: 'portrait',
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
    if (!purchaseDetails || isSendingEmail) return;

    setIsSendinggEmail(true);
    try {
      const result = await sendEmailReceipt(purchaseDetails, purchaseDetails.customer.email);

      if (result.success) {
        setEmailSent(true);
        alert('Rceipt sent to your email successfully!');
      } else {
        throw new Error(result.error || 'Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send receipt email. Please try again.');
    } finally {
      setIsSendinggEmail(false);
    }
  };

  return (
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
  );
}