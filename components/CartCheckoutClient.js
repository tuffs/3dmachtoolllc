'use client';

import React, { useState, useEffect } from 'react';
import { getCart } from '@/lib/cartUtils';
import { getProductDetails } from '@/actions/getProductDetails';
import CheckoutForm from '@/components/CheckoutForm';
import CheckoutButton from "@/components/ui/CheckoutButton";

export default function CartCheckoutClient({ pre_tax_subtotal, children }) {
  const [showCheckout, setShowCheckout] = useState(false);
  const [cartData, setCartData] = useState({});
  const [productsData, setProductsData] = useState([]);
  const [subtotal, setSubtotal] = useState(pre_tax_subtotal);
  const [isLoadingProducts, setIsLoadingProducts] = useState(true);

  // Initialize cart data on mount
  useEffect(() => {
    const cart = getCart();
    setCartData(cart);
    fetchProducts(cart);
  }, []);

  const fetchProducts = async (cart) => {
    setIsLoadingProducts(true);
    const productIds = Object.keys(cart).map(id => Number(id));
    if (productIds.length > 0) {
      const products = await getProductDetails(productIds);
      setProductsData(products);

      // Recalculate subtotal
      const newSubtotal = products.reduce((sum, product) => {
        const qty = cart[product.id] || 0;
        return sum + product.price * qty;
      }, 0);
      setSubtotal(newSubtotal);
    } else {
      setProductsData([]);
      setSubtotal(0);
    }
    setIsLoadingProducts(false);
  }

  const handleCartUpdate = () => {
    const updatedCart = getCart();
    setCartData(updatedCart);
    fetchProducts(updatedCart);
  }

  if (showCheckout) {
    return (
      <CheckoutForm pre_tax_subtotal={subtotal}>
        {React.cloneElement(children, {
          products: productsData,
          cart: cartData,
          pre_tax_subtotal: subtotal,
          onCartUpdate: handleCartUpdate,
          isLoadingProducts: isLoadingProducts
        })}
      </CheckoutForm>
    );
  }

  return (
    <>
      {/* Clone children and pass updated props */}
      {React.cloneElement(children, {
        products: productsData,
        cart: cartData,
        pre_tax_subtotal: subtotal,
        onCartUpdate: handleCartUpdate,
        isLoadingProducts: isLoadingProducts
      })}
      <div className="flex justify-center mt-8">
        <CheckoutButton onClick={() => setShowCheckout(true)} />
      </div>
    </>
  );
}