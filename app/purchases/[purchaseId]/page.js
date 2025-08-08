import Hero from '@/components/Hero';
import FinalPurchaseSummary from '@/components/FinalPurchaseSummary';

export default async function PurchasesPage({ params }) {
  const purchaseId = params.purchaseId;

  return (
    <>
      <div className="my-24 mx-auto">
        <Hero />
      </div>
      <div className="container mx-auto p-8">
        <FinalPurchaseSummary purchaseId={purchaseId} />
      </div>
    </>
  );
}