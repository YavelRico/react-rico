import React, { useEffect, useState } from 'react';
import { useCart } from './CartContext';

function CartWidget() {
  const { cart, addToCart, removeFromCart, clearCart } = useCart();
  const [localCart, setLocalCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setLocalCart(storedCart);

    if (cart.length === 0) {
      storedCart.forEach((product) => addToCart(product));
    }
  }, [cart, addToCart]);

  const totalQuantity = localCart.reduce((total, product) => total + product.quantity, 0);

  const numberStyle = {
    color: 'cyan',
  };

  return (
    <div className="cart-widget">
      <i className="fa fa-shopping-cart"></i>
      <span className="badge badge-pill" style={numberStyle}>{totalQuantity}</span>
    </div>
  );
}

export default CartWidget;
