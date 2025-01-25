import { notFound } from "next/navigation"
import database from "@/prisma/database"
import ProductDetails from "@/components/ProductDetails"

export default async function ProductPage({ params }) {
  const productId = Number.parseInt(params.id)
  const product = await database.product.findUnique({
    where: { id: productId },
  });

  if (!product) {
    return notFound()
  }

  return <ProductDetails product={product} />
}