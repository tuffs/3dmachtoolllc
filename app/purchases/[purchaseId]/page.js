import Hero from '@/components/Hero';
import FinalPurchaseSummary from '@/components/FinalPurchaseSummary';
import { sendReceiptEmail } from '@/actions/sendReceiptEmail';
import { getOrderDetails } from '@/actions/getOrderDetails';

export default async function PurchasesPage({ params, searchParams }) {
  const purchaseId = params.purchaseId;
  const shouldEmailReceipt = searchParams?.email === 'true';

  // Handle automatic email sending on server side
  if (shouldEmailReceipt && purchaseId) {
    try {
      const result = await getOrderDetails(purchaseId);
      if (result.success) {
        await sendReceiptEmail(result.data, result.data.customer.email);
      }
    } catch (error) {
      console.error('Error sending automatic receipt email:', error);
    }
  }

  return (
    <>
      <div className="my-24 mx-auto">
        <Hero />
      </div>
      <div className="container mx-auto p-8">
        {shouldEmailReceipt && (
          <div className="mb-4 p-4 bg-green-800 border border-green-600 text-green-200 rounded max-w-3xl mx-auto">
            ✅ Receipt has been emailed to you!
          </div>
        )}
        <FinalPurchaseSummary purchaseId={purchaseId} />
      </div>
    </>
  );
}