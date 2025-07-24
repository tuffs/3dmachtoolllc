import prisma from '@/prisma/database';

export default async function FinalPurchaseSummary(purchaseId) {
  // Fetch the purchaseDetails with the server action getOrderDetails(purchaseId)
  try {
    const purchaseDetails = await getOrderDetails(purchaseId);
  } catch (error) {
    console.log('Could not find the order referenced. Check the Unique Order ID');

  }
  return (
    <>
      <div className="w-full">
        <h1 className="text-4xl text-bold text-gray-200">Order Receipt</h1>
        <h3 className="text-lg text-semibold text-gray-400">
          Proof of Purchase
        </h3>
        <h4 className="text-md text-gray-200 mb-6">
          Print or save this receipt for your records. It contains details pertinent to your order.
        </h4>
        {purchaseDetails && (purchaseDetails != {}) ? (
          <>
            {purchaseDetails}
          </>
        ) : (
          <>
            No purchase made, this page is blank because it is not attached to an active order.
          </>
        )}
      </div>
    </>
  );
};