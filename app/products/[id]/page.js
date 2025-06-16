import { notFound } from "next/navigation"
import database from "@/prisma/database"
import ProductDetails from "@/components/ProductDetails"

export default async function ProductPage({ params }) {

  const id = params.id

  if (!/^\d+$/.test(id)) {
    notFound()
  }

  const productId = Number.parseInt(id, 10)

  if (!Number.isInteger(productId)) {
    notFound()
  }

  const product = await database.product.findUnique({
    where: { id: productId },
  });

  if (!product) {
    return notFound()
  }

  return <ProductDetails product={product} />
}