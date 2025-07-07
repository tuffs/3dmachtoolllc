export default function FinalPurchaseSummary({ preTaxSubtotal, stateTax, surtax, taxRate, total }) {
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
      <div className="w-full mt-6 border border-1 border-gray-700 p-4">
        <h2 className="text-xl font-bold text-gray-300">Purchase Summary</h2>
        <h4 className="text-md font-bold">Subtotal: ${formatCurrency(preTaxSubtotal)}</h4>
        <h4 className="text-md font-bold">State Tax Rate: {formatPercentage(stateTax)}</h4>
        <h4 className="text-md font-bold">Surtax: {formatPercentage(surtax)}</h4>
        <h4 className="text-md font-bold">Total Tax Rate: {formatPercentage(taxRate)}</h4>
        <h1 className="text-3xl font-bold text-gray-200">${formatCurrency(total)}</h1>
      </div>
    </>
  )
}