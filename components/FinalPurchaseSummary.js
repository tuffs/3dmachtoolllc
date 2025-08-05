import getOrderDetails from '@/actions/getOrderDetails';
import ReceiptActions from '@/components/ReceiptActions';

export default async function FinalPurchaseSummary({ purchaseId }) {
  let purchaseDetails = null;
  let error = null;

  if (!purchaseId) {
    return (
      <div className="w-full max-w-3xl mx-auto p-6 bg-gray-900 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-200 text-center">Order Receipt</h1>
        <div className="text-red-400 mt-4 text-center">
          No purchase ID was provided, please check your validity of the data you are referencing.
        </div>
      </div>
    );
  }

  try {
    const result = await getOrderDetails(purchaseId);

    if (result.success) {
      purchaseDetails = result.data;
    } else {
      error = result.error;
    }
  } catch (err) {
    error = 'Could not find the order referenced. Check the Unique Order ID';
  }

  let cumulativeQuantity = 0;
  let cumulativePrice = 0;

  return (
    <div className="w-full">
      <div id="receipt-content" className="w-full max-w-3xl mx-auto p-6 bg-gray-900 rounded-lg shadow-lg">
        <div className="border-b border-gray-700 pb-4 mb-4">
          <h1 className="text-4xl font-bold text-gray-200 text-center">Purchase Order</h1>
          <h3 className="text-md font-semibold text-gray-400 text-center mt-2">Proof of Purchase</h3>
          <p className="text-sm text-gray-500 text-center mt-1">
            Print or save this receipt for your records.
          </p>
        </div>

        <div className="mb-6">
          <img
            src="/logo_file.png"
            alt="3D Machine and Tool, LLC Logo"
            className="h-auto w-64"
          />
          <div className="text-sm text-gray-200 mt-2 space-y-1">
            <p>11275 US HWY 98 W NO. 6 - 266</p>
            <p>Miramar Beach, FL 32550</p>
            <p><a href="tel:850.365.7001" className="text-blue-400 hover:underline">850.365.7001</a></p>
            <p><a href="mailto:devon@3dmandt.com" className="text-blue-400 hover:underline">devon@3dmandt.com</a></p>
          </div>
        </div>

        {error && (
          <div className="text-red-400 mb-4 p-4 bg-red-950/50 rounded-md text-center">
            Error: {error}
          </div>
        )}

        {purchaseDetails ? (
          <>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <h3 className="text-sm text-gray-200">Order No. {purchaseDetails.orderNumber}</h3>
                <h3 className="text-lg font-semibold text-gray-200">{purchaseDetails.customer.name}</h3>
                <p className="text-sm text-blue-400">
                  <a href={`tel:${purchaseDetails.customer.phone}`} className="hover:underline">
                    {purchaseDetails.customer.phone}
                  </a>
                </p>
                <p className="text-sm text-blue-400">
                  <a href={`mailto:${purchaseDetails.customer.email}`} className="hover:underline">
                    {purchaseDetails.customer.email}
                  </a>
                </p>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-200">Shipping Address</h4>
                  <p className="text-sm text-gray-300">
                    {purchaseDetails.shippingAddress.addressOne}<br />
                    {purchaseDetails.shippingAddress.addressTwo && (
                      <>
                        {purchaseDetails.shippingAddress.addressTwo}<br />
                      </>
                    )}
                    {purchaseDetails.shippingAddress.city}, {purchaseDetails.shippingAddress.state}&nbsp;&nbsp;{purchaseDetails.shippingAddress.zipCode}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-200">Billing Address</h4>
                  <p className="text-sm text-gray-300">
                    {purchaseDetails.billingAddress.addressOne ? (
                      <>
                        {purchaseDetails.billingAddress.addressOne}<br />
                        {purchaseDetails.billingAddress.addressTwo && (
                          <>
                            {purchaseDetails.billingAddress.addressTwo}<br />
                          </>
                        )}
                        {purchaseDetails.billingAddress.city}, {purchaseDetails.billingAddress.state}&nbsp;&nbsp;{purchaseDetails.billingAddress.zipCode}
                      </>
                    ) : (
                      'Same as shipping address.'
                    )}
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold text-gray-200 mb-2">Items Purchased</h3>
              <div className="border border-gray-700 rounded-md overflow-hidden">
                <table className="w-full text-sm text-gray-300">
                  <thead className="bg-gray-800">
                    <tr>
                      <th className="py-2 px-4 text-left">Item</th>
                      <th className="py-2 px-4 text-right">Qty</th>
                      <th className="py-2 px-4 text-right">Price</th>
                      <th className="py-2 px-4 text-right">Ext</th>
                    </tr>
                  </thead>
                  <tbody>
                    {purchaseDetails.items.map((item, index) => {
                      const itemQuantity = Number(item.quantity.toFixed(2));
                      const itemUnitPrice = Number(item.price.toFixed(2));
                      const itemTotal = itemQuantity * itemUnitPrice;
                      cumulativeQuantity += itemQuantity;
                      cumulativePrice += itemTotal;
                      return (
                        <tr key={index} className="border-t border-gray-700">
                          <td className="py-2 px-4">{item.productName} ({item.modelNumber})</td>
                          <td className="py-2 px-4 text-right">{itemQuantity.toLocaleString('en-US')}</td>
                          <td className="py-2 px-4 text-right">${itemUnitPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                          <td className="py-2 px-4 text-right">${itemTotal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold text-gray-200 mb-2">Amount Paid</h3>
              <div className="border border-gray-700 rounded-md overflow-hidden">
                <table className="w-full text-sm text-gray-300">
                  <thead className="bg-gray-800">
                    <tr>
                      <th className="py-2 px-4 text-left">Description</th>
                      <th className="py-2 px-4 text-right">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-gray-700">
                      <td className="py-2 px-4">Subtotal</td>
                      <td className="py-2 px-4 text-right">${cumulativePrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                    </tr>
                    {purchaseDetails.financials.isTaxExempt ? (
                      <tr className="border-t border-gray-700">
                        <td className="py-2 px-4">Order is Tax Exempt</td>
                        <td className="py-2 px-4 text-right">$0.00</td>
                      </tr>
                    ) : (
                      <tr className="border-t border-gray-700">
                        <td className="py-2 px-4">Tax ({(purchaseDetails.financials.taxRate * 100).toFixed(2)}%)</td>
                        <td className="py-2 px-4 text-right">${purchaseDetails.financials.totalTax.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                      </tr>
                    )}
                    <tr className="border-t border-gray-700 font-semibold text-gray-200">
                      <td className="py-2 px-4">Total</td>
                      <td className="py-2 px-4 text-right">${purchaseDetails.financials.total.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </>
        ) : !error ? (
          <div className="text-yellow-400 text-center">
            Loading order details...
          </div>
        ) : (
          <div className="text-red-400 text-center">
            No purchase found with ID: {purchaseId}
          </div>
        )}
      </div>

      {/* Client component for PDF/Email actions */}
      {purchaseDetails && <ReceiptActions purchaseDetails={purchaseDetails} />}
    </div>
  );
}