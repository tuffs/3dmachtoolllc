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
          <div className="mb-4" ref={titleRef} id="product-details" data-testid="main_product_details__container">

            <h1 className="text-4xl font-bold" data-testid="product__name">
              {product.name}
            </h1>

            <p className="mb-2 text-gray-400" data-testid="product__short_description">
              {product.shortDescription}
            </p>

          </div>

          <ProductImages
            images={product.imageUrls}
            productName={product.name}
          />

          <p className="text-xl mb-4">{product.description}</p>

          <div className="w-full bg-inherit p-4 md:p-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-2 rounded-lg shadow-sm">
                  <div className="mb-3">
                    <p className="mb-2">
                      <small>
                        <small>MODEL NO.</small>
                      </small>
                    </p>
                    <p className="p-2 border border-gray-500 rounded w-[100px] text-gray-400 text-center cursor-default">
                      <small>{product.modelNumber}</small>
                    </p>
                  </div>
                  <div className="mb-3">
                    <p className="mb-2">
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
                  <div>
                    <p className="mb-4">
                      <small>
                        <small>PRODUCT TAGS: {product.tags.join(", ")}</small>
                      </small>
                    </p>
                  </div>
                </div>
                <div className="p-2 rounded-lg shadow-sm">
                  <div className="mb-3">
                    <p className="mb-2">
                      <small>
                        <small>UNIT PRICE</small>
                      </small>
                    </p>
                    <h3 className="font-bold p-2 border border-blue-500 rounded w-[100px] text-blue-400 text-center cursor-default">
                      ${product.price.toFixed(2)}
                    </h3>
                  </div>
                  <AddToCartButton product={product} />
                </div>

                <div className="mb-2 pt-[20px]">
                  <small>
                    <small>
                      YOU WILL BE GIVEN THE OPPORTUNITY TO PROVIDE A RESALE CERTIFICATE PROVIDED BY YOUR STATE
                      GOVERNMENT OR LOCAL MUNICIPALITY FOR ORDERS WHICH MEET TAX EXEMPTIONS.
                      <br />
                      <br /> ALL CERTIFICATES ARE CHECKED FOR AUTHENTICITY AND KEPT ON FILE FOR YOUR BUSINESS FOR ONE
                      CALENDAR YEAR.
                    </small>
                  </small>
                  <div className="mt-6 w-full text-center">
                    <center>
                      <img
                        src="/PROUDLY_DESIGNED_AND_ASSEMBLED_IN_THE_USA__FLAG.png"
                        alt="All completed products are proudly designed and assembled in the USA."
                        aria-label="USA flag with text PROUDLY DESIGNED AND ASSEMBLED IN THE USA"
                        className="w-[200px] h-auto"
                      />
                    </center>
                  </div>
                </div>
              </div>
              <div className="p-2 rounded-lg shadow-sm">
                <p className="mb-2 pt-[20px]">
                  <small>
                    <small>
                      THIS PRODUCT SHIPS FROM DESTIN, FL 32541&nbsp;&nbsp;USA. SHIPPING AND HANDLING ARE AN ADDITIONAL
                      $20.00 TO ANYWHERE IN THE CONTIGUOUS UNITED STATES EXCL. HI, PR, AK, INTL SHIPPING AVAILABLE AT
                      YOUR COST.
                      <br />
                      <br />
                      SHIPPING IS PERFORMED BY UPS' SERVICES. CUSTOM, GRADE-A PROTECTIVE PACKAGING IS PROVIDED FREE OF
                      CHARGE TO ENSURE THAT YOUR TOOLS, PARTS, OR ACCESSORIES ARRIVED SAFE AND SOUND, PARTS MAY COME
                      LUBRICATED TO AVOID CORROSIVE ENVIRONS AND CONTAINMENANTS DURING THE SHIPPING PROCESS AS WELL.
                    </small>
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
