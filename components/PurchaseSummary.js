export default function PurchaseSummary({ preTaxSubtotal, stateTax, surtax, taxRate, total, isTaxExempt }) {
  // Format currency to always show 2 decimal places
  const formatCurrency = (amount) => {
    return parseFloat(amount).toFixed(2);
  };

  // Format percentage to show as percentage with proper decimal places
  const formatPercentage = (rate) => {
    return (parseFloat(rate) * 100).toFixed(2) + '%';
  };

  return (
    <>
      <div className="w-full mt-6 p-4">
        <table className="">
          <tr>
            <td colSpan="2" className="text-left font-bold pb-4">
              <h1>PURCHASE PRICE</h1>
            </td>
          </tr>
          <tr>
            <td>SUBTOTAL</td>
            <td className="text-right">${formatCurrency(preTaxSubtotal)}</td>
          </tr>
          {isTaxExempt ? (
            <tr>
              <td className="text-green-400">TAX (EXEMPT)</td>
              <td className="text-right text-green-400">$0.00</td>
            </tr>
          ) : (
            <tr>
              <td>TAX ({formatPercentage(taxRate)})</td>
              <td className="text-right">${formatCurrency(stateTax + surtax)}</td>
            </tr>
          )}
          <tr className="border-t border-gray-400">
            <td className="text-xl font-bold text-gray-200">TOTAL</td>
            <td className="text-xl text-right font-bold text-gray-200 pt-2">${formatCurrency(total)}</td>
          </tr>
          {isTaxExempt && (
            <tr>
              <td colSpan="2" className="pt-2">
                <span className="text-xs text-green-400">✓ Sales tax exemption applied</span>
              </td>
            </tr>
          )}
          <tr>
            <td colSpan="2" className="pt-12">
              <span className="text-sm font-normal text-gray-400">
                {isTaxExempt ? (
                  "Sales tax exemption has been applied to your order based on the certificate you provided. Your final total reflects the tax-exempt pricing."
                ) : (
                  `A default tax of ${formatPercentage(process.env.NEXT_PUBLIC_STATE_TAX || 0.06)} will be applied to your purchase. This is the State of Florida base sales tax rate. If you are ordering from within Florida, a surtax based on your county will be applied to the base tax rate. A breakdown of your tax rate will be provided on your invoice. Sales tax exemption certificates are accepted in PDF format during the payment process. You must provide a valid certificate at the time of purchase to avoid being charged sales tax.`
                )}
              </span>
            </td>
          </tr>
        </table>
      </div>
    </>
  )
}