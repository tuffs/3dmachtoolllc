import Hero from "@/components/Hero"
import AnimatedNavLink from "@/components/ui/AnimatedNavLink"
import { listProducts } from "@/actions/listProducts"
import ProductCard from "@/components/ProductCard"
import ScrollToHero from "@/components/ScrollToHero"

export default async function ProductsPage() {
  const { success, products, error } = await listProducts()

  return (
    <>
      <ScrollToHero />
      <div className="my-24">
        <Hero />
        <div className="mt-24 text-white pt-0 p-8">
          <section className="mb-12">
            <h1 className="text-4xl font-bold text-center">Products</h1>
          </section>

          {success ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {products.map((product) => (
                <ProductCard product={product} key={product.id} />
              ))}
            </div>
          ) : (
            <p className="text-center text-red-500 mb-12">{error || "Failed to load products."}</p>
          )}

          <section className="w-[100%] text-center">
            <AnimatedNavLink link="/products/new" text="Create New Product" additionalClasses="!text-lg" />
          </section>
        </div>
      </div>
    </>
  )
}



