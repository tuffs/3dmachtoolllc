export default function FinalPurchaseSummary({ preTaxSubtotal, stateTax, surtax, taxRate, total }) {
  // Format currency to always show 2 decimal places
  const formatCurrency = (amount) => {
    return parseFloat(amount).toFixed(2);
  };

  // Format percentage to show as percentage with proper decimal places
  const formatPercentage = (rate) => {
    return (parseFloat(rate) * 100).toFixed(2) + '%';
  };

  // Provide absolute values for tax rates
  const surtaxCashTotal = "$" + parseFloat(preTaxSubtotal * surtax).toFixed(2).toString();

  return (
    <>
      <div className="w-full mt-6 border border-1 border-gray-700 p-4">
        <table className="w-full max-w-4xl mb-24">
          <tr>
            <td colSpan="2" className="text-left font-bold pb-2">FINAL PURCHASE PRICE</td>
          </tr>
          <tr>
            <td>SUBTOTAL</td>
            <td className="text-right">${formatCurrency(preTaxSubtotal)}</td>
          </tr>
          <tr>
            <td>TAX ({formatPercentage(stateTax)} + {formatPercentage(surtax)})</td>
            <td className="text-right">${formatCurrency(preTaxSubtotal * taxRate)}</td>
          </tr>
          <tr className="border-t border-gray-400">
            <td className="text-xl font-bold text-gray-200">TOTAL</td>
            <td className="text-xl text-right font-bold text-gray-200 pt-2">${formatCurrency(total)}</td>
          </tr>
        </table>
      </div>
    </>
  )
}