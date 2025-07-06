"use client"

import React, { useState, useEffect } from "react"
import { FaShoppingCart } from "react-icons/fa"
import { getCart } from "@/lib/cartUtils"

const AnimatedShoppingCartNavLink = () => {
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    const updateCartCount = () => {
      const cart = getCart()
      const count = Object.values(cart).reduce((sum, quantity) => sum + quantity, 0)
      setCartCount(count)
    }

    updateCartCount()

    // Listen for storage events (when cart changes in other tabs)
    window.addEventListener("storage", updateCartCount)

    // Listen for custom cart update events (when cart changes on same page)
    window.addEventListener("cartUpdated", updateCartCount)

    return () => {
      window.removeEventListener("storage", updateCartCount)
      window.removeEventListener("cartUpdated", updateCartCount)
    }
  }, [])

  return (
    <div className="m-0">
      <a
        href="/cart"
        className="relative mx-2 pb-[.785rem] md:ml-[28px] text-gray-400 hover:text-gray-200 transition-colors duration-300 ease-in-out inline-block"
        style={{
          fontSize: "14px",
        }}
      >
        <div className="pt-5 relative">
          <FaShoppingCart className="inline-block mr-2 mb-1" />
          <span className="absolute bottom-0 left-1/2 w-0 h-[.045rem] bg-gray-400 transition-colors duration-300 ease-in-out group-hover:bg-gray-200"></span>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
              {cartCount}
            </span>
          )}
        </div>
      </a>
    </div>
  )
}

export default AnimatedShoppingCartNavLink
