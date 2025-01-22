import Hero from '@/components/Hero';

export default function ShoppingCartPage() {
  return (
    <>
      <div className="my-24">
        <Hero />
        <div className="mt-24 text-white pt-0 p-8">
          <section className="mb-3">
            <h1 className="text-4xl font-bold text-center">
              My Shopping Cart
            </h1>
          </section>
        </div>

        <div className="w-full bg-inherit p-4 md:p-8">
          <table className="mx-auto w-[90%] border border-1 border-gray-500 cursor-default">
            <tr className="border border-1 border-gray-500 bg-gray-950">
              <td className="border border-1 border-gray-500 p-2">
                <strong>ITEM</strong>
              </td>
              <td className="border border-1 border-gray-500 p-2">
                <strong>QTY.</strong>
              </td>
              <td className="border border-1 border-gray-500 p-2">
                <strong>PRICE</strong>
              </td>
            </tr>

            { /* Start: Blank Inner Row */}
            <tr className="border border-1 border-gray-500">
              <td className="p-[.1rem]"></td>
              <td className="p-[.1rem]"></td>
              <td className="p-[.1rem]"></td>
            </tr>
            { /* End: Blank Inner Row */}


            <tr className="border border-1 border-gray-500">
              <td className="border border-1 border-gray-500 p-2"><a href={`/products/1`} className="underline cursor-pointer">EXMPL1 - My First Product</a></td>
              <td className="border border-1 border-gray-500 p-2 text-right">1</td>
              <td className="border border-1 border-gray-500 p-2 text-right">$399.99</td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}