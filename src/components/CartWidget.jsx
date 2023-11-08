import React from 'react';
import { useCart } from './CartContext';

function CartWidget() {
  const { cart } = useCart();

  const numberStyle = {
    color: 'cyan',
  };

  return (
    <div className="cart-widget">
      <i className="fa fa-shopping-cart"></i>
      <span className="badge badge-pill" style={numberStyle}>{cart.length}</span>
    </div>
  );
}

export default CartWidget;
