import getOrderDetails from '@/actions/getOrderDetails';

export default async function FinalPurchaseSummary({ purchaseId }) {
  console.log(`Final purchase summary - received purchaseId: ${purchaseId}`);

  let purchaseDetails = null;
  let error = null;

  if (!purchaseId) {
    console.log('No purchaseId provided.');
    return (
      <div className="w-full p-8">
        <h1 className="text-4xl font-bold text-gray-200">Order Receipt</h1>
        <div className="texxt-red-400 mt-4">
          No purchase ID provided in the URL.
        </div>
      </div>
    );
  }

  try {
    console.log('Calling getOrderDetails with: ', purchaseId);
    const result = await getOrderDetails(purchaseId);
    console.log('getOrderDetails result:', result);

    if (result.success) {
      purchaseDetails = result.data;
      console.log('Purchase details retrieved successfully.');
    } else {
      error = result.error;
      console.log('getOrderDetails failed with error:', error);
    }
  } catch (err) {
    error = 'Could not find the order referenced. Check the Unique Orer ID';
    console.error('Exception in getOrderDetails:', err);
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

        {/* Debug info */}
        <div className="mb-4 p-2 bg-blue-900 text-blue-200 text-xs rounded">
          Debug: purchaseId = {purchaseId} (type: {typeof purchaseId})
        </div>

        {error && (
          <div className="text-red-400 mb-4 p-4 bg-red-900 rounded">
            Error: {error}
          </div>
        )}

        {purchaseDetails ? (
          <>
            <h3 className="text-sm text-gray-200 mb-0 pb-0">Order No. {purchaseDetails.orderNumber}</h3>
            <h3 className="text-lg text-gray-200 font-semibold">{purchaseDetails.customer.name}</h3>
            <h3 className="text-md text-gray-200 underline cursor-pointer mb-0 pb-0"><a href="tel:{purchaseDetails.customer.phone}">{purchaseDetails.customer.phone}</a></h3>
            <h3 className="text-md text-gray-200 underline cusor-pointer mb-4 pb-0"><a href="{purchaseDetails.customer.email}">{purchaseDetails.customer.email}</a></h3>
            <div className="mt-3">
              <strong>Shipping Address</strong><br />
              {purchaseDetails.shippingAddress.addressOne}<br />
              {purchaseDetails.shippingAddress.addressTwo != null ? (<>${purchaseDetails.shippingAddress.addressTwo} <br /></>) : ``}
              {purchaseDetails.shippingAddress.city},&nbsp;
              {purchaseDetails.shippingAddress.state} <br />
            </div>
            <div className="mt-3">
              <strong>Billing Address</strong><br />
              {purchaseDetails.billingAddress.addressOne != null ? (
                <>
                  ${purchaseDetails.billingAddress.addressOne}<br />
                  ${purchaseDetails.billingAddress.addressTwo ? (<>${purchaseDetails.billingAddress.addressTwo}<br /></>) : ''}
                  ${purchaseDetails.billingAddress.city}, ${purchaseDetails.billingAddress.state}<br />
                </>
              ) : (<>Same as shipping address.</>)}
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <pre className="text-sm text-gray-300 whitespace-pre-wrap overflow-auto max-h-96">
                {JSON.stringify(purchaseDetails, null, 2)}
              </pre>
            </div>
          </>
        ) : !error ? (
          <div className="text-yellow-400">
            Loading order details...
          </div>
        ) : (
          <div className="text-red-400">
            No purchase found with ID: {purchaseId}
          </div>
        )}
      </div>
    </>
  );
};