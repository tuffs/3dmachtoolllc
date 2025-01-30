"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import dynamic from "next/dynamic"
import AddToCartButton from "@/components/AddToCartButton"
import Hero from "@/components/Hero"
import ProductImages from '@/components/ProductImages'

const Lightbox = dynamic(() => import("@/components/Lightbox"), { ssr: false })

export default function ProductDetails({ product }) {
  const titleRef = useRef(null)

  useEffect(() => {
    if (window.location.hash === "#product-details" && titleRef.current) {
      titleRef.current.scrollIntoView({ behavior: "auto" })
    }
  }, []);

  return (
    <div className="min-h-screen bg-inherit text-white">
      <Hero />

      <div className="mt-24 p-8">
        <div className="w-[85%] mx-auto">
          <div
            className="mb-4" ref={titleRef} id="product-details" data-testid="main_product_details__container"
          >
            <h1 className="text-4xl font-bold" data-testid="product__name">
              {product.name}
            </h1>

            <p className="mb-2 text-gray-400" data-testid="product__short_description">
              {product.shortDescription}
            </p>
          </div>

          <div className="md:flex md:grid md:grid-cols-2" data-testid="product__details_array">


            <div className="product_details__right_side">
              <ProductImages
                images={product.imageUrls}
                productName={product.name}
              />
              <p className="text-xl mb-4" data-testid="product__description">
                {product.description}
              </p>
            </div>

            <div className="product_details__left_side">
              <div className="flex grid-cols-2">
                <div className="mb-3 md:pl-24">
                  <p className="mb-2">
                    <small>
                      <small>MODEL NO.</small>
                    </small>
                  </p>
                  <p className="p-3 border border-gray-200 rounded w-[100px] text-center cursor-default">
                    <small>{product.modelNumber}</small>
                  </p>
                  <p className="mt-6 mb-2">
                    <small>
                      <small>AVAILABILITY</small>
                    </small>
                  </p>
                  {product.quantity > 0 ? (
                    <p className="p-2 border border-green-500 rounded w-[100px] text-green-400 text-center cursor-default">
                      <small>IN STOCK</small>
                    </p>
                  ) : (
                    <p className="p-2 border border-red-500 rounded w-[100px] text-red-400 text-center cursor-default">
                      <small>SOLD OUT</small>
                    </p>
                  )}
                </div>

                <div className="mb-3 md:pl-6">
                  <p className="mb-2 pl-6 md:pl-0">
                    <small>
                      <small>UNIT PRICE *</small>
                    </small>
                  </p>
                  <h3 className="text-lg font-bold p-[10px] border border-gray-200 rounded w-[100px] text-gray-200 text-center cursor-default ml-6 md:ml-0">
                    ${product.price.toFixed(2)}
                  </h3>

                </div>
              </div>

              <div className="mb-2 md:pl-24 md:pt-12 pt-6">
                <AddToCartButton product={product} />
              </div>

              <div className="mb-2 pt-[50px] md:pl-24">
                <div className="mt-6 w-full text-center">
                  <center>
                    <img
                      src="/PROUDLY_DESIGNED_AND_ASSEMBLED_IN_THE_USA__FLAG.png"
                      alt="All completed products are proudly designed and assembled in the USA."
                      aria-label="USA flag with text PROUDLY DESIGNED AND ASSEMBLED IN THE USA"
                      className="w-[200px] mb-12 h-auto"
                    />
                  </center>
                </div>
                <small>
                  YOU WILL BE GIVEN THE OPPORTUNITY TO PROVIDE A RESALE CERTIFICATE PROVIDED BY YOUR STATE
                  GOVERNMENT OR LOCAL MUNICIPALITY FOR ORDERS WHICH MEET TAX EXEMPTIONS.
                  <br />
                  <br /> ALL SALES TAX EXEMPTION CERTIFICATES ARE CHECKED FOR AUTHENTICITY AND KEPT ON FILE FOR YOUR BUSINESS FOR ONE
                  CALENDAR YEAR.
                  <br />
                  <br />
                  CUSTOM, GRADE-A PROTECTIVE PACKAGING IS PROVIDED FREE OF CHARGE TO ENSURE THAT YOUR TOOLS, PARTS, OR ACCESSORIES ARRIVED SAFE AND SOUND.
                </small>
              </div>
            </div>
          </div>

          <div className="w-full bg-inherit mt-[100px]">
            <div className="mx-auto">
              <div className="rounded-lg shadow-sm">
                <p className="mb-2">
                  <small>
                    THIS PRODUCT SHIPS FROM DESTIN, FL 32541&nbsp;&nbsp;USA.<br />
                    *SHIPPING AND HANDLING ARE AN ADDITIONAL
                    $20.00 TO ANYWHERE IN THE CONTIGUOUS UNITED STATES.
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[75px] text-center">
          <Link
            href="/products"
            className="bg-blue-500 hover:bg-blue-600 text-white text-xs font-bold py-1 px-2 rounded inline-block"
          >
            Back to All Products
          </Link>
        </div>
      </div>
    </div>
  )
}
