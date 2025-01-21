import Cookies from 'js-cookie';

const CART_COOKIE_NAME = '3dmandt_cart';


// Cart getter fX
export function getCart() {
  const cartCookie = Cookies.get(CART_COOKIE_NAME);
  return cartCookie ? JSON.parse(cartCookie) : {};
}

// Cart setter fX
export function setCart(cart) {
  Cookies.set(CART_COOKIE_NAME, JSON.stringify(cart), { expires: 28 });
}

// Add to cart fX 
export function addToCart(productId, quantity) {
  const cart = getCart();

  if (cart[productId]) {
    cart[productId] += quantity;
  } else {
    cart[productId] = quantity;
  }

  setCart(cart);
}

// Update cart item quantity fX
export function updateCartItem(productId, quantity) {
  const cart = getCart();

  if (quantity > 0) {
    cart[productId] = quantity;
  } else {
    delete cart[productId];
  }

  setCart(cart);
}

// Remove from cart fX
export function removeFromCart(productId) {
  const cart = getCart();
  delete cart[productId];

  setCart(cart);
}