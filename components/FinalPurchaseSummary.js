export default function FinalPurchaseSummary({ preTaxSubtotal, stateTax, surtax, taxRate }) {
  return (
    <>
      <div className="w-full mt-6 border border-1 border-gray-700 p-4">
        <h2 className="text-xl font-bold text-gray-300">Purchase Summary</h2>
        <h4 className="text-md font-bold">Subtotal: ${preTaxSubtotal}</h4>
        <h4 className="text-md font-bold">State Tax: ${stateTax}</h4>
        <h4 className="text-md font-bold">Surtax: ${surtax}</h4>
        <h4 className="text-md font-bold">Tax Rate: ${taxRate}</h4>
      </div>
    </>
  )
}