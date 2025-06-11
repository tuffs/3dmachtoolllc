import Hero from '@/components/Hero';
import CheckoutButton from "@/components/ui/CheckoutButton";

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
          <div className="w-full flex justify-center bg-inherit p-4 md:p-8">
            <div className="w-full max-w-3xl">
              <table className="w-full rounded-xl overflow-hidden shadow-lg bg-gray-950 border border-gray-800">
                <thead>
                  <tr className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
                    <th className="p-5 text-left font-semibold tracking-wide border-b border-gray-700">ITEM</th>
                    <th className="p-5 text-right font-semibold tracking-wide border-b border-gray-700">QTY</th>
                    <th className="p-5 text-right font-semibold tracking-wide border-b border-gray-700">PRICE</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Blank Row for spacing */}
                  <tr>
                    <td className="py-2"></td>
                    <td className="py-2"></td>
                    <td className="py-2"></td>
                  </tr>
                  {/* Example Product Row */}
                  <tr className="hover:bg-gray-900 transition-colors">
                    <td className="p-5 border-b border-gray-800">
                      <a href={`/products/1`} className="underline text-blue-400 hover:text-blue-300 transition-colors">
                        EXMPL1 - My First Product
                      </a>
                    </td>
                    <td className="p-5 text-right border-b border-gray-800">1</td>
                    <td className="p-5 text-right border-b border-gray-800">$399.99</td>
                  </tr>
                  {/* Total Row */}
                  <tr>
                    <td></td>
                    <td className="p-5 text-right font-bold text-gray-300">TOTAL</td>
                    <td className="p-5 text-right font-bold text-white">$399.99</td>
                  </tr>
                </tbody>
              </table>

              <CheckoutButton />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}