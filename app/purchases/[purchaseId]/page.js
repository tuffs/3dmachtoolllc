import FinalPurchaseSummary from '@/components/FinalPurchaseSummary';

export default function PurchasesPage({ params }) {
  const purchaseId = params.purchaseId;

  console.log('PurchasePage - purchaseId:', purchaseId);
  console.log('PurchasePage - params:', params);

  return (
    <div className="container mx-auto p-8">
      <FinalPurchaseSummary purchaseId={purchaseId} />
    </div>
  );
};