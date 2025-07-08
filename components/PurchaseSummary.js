export default function PurchaseSummary({ preTaxSubtotal, stateTax, surtax, taxRate, total }) {
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
      <div className="w-full mt-6 p-4">
        <table className="">
          <tr>
            <td colSpan="2" className="text-left font-bold pb-12">
              <h1 className="mb-4">PURCHASE PRICE</h1>
              <span className="text-sm font-normal text-gray-400">Enter your State and Zip Code for tax calculation. Out of state sales are taxed at the current State of Florida base tax rate: {formatPercentage(stateTax)}. As noted, once you proceed in the checkout process you will be able to provide a Sales Tax Exemption Certificate in PDF format to remove sales tax if applicable.</span>
            </td>
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