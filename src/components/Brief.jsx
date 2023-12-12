import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';

function Brief() {
  const { cart, addToCart, removeFromCart } = useCart();

  const handleRemove = (productId) => {
    removeFromCart(productId);

    const updatedCart = cart.filter((product) => product.quantity > 0);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
      storedCart.forEach((product) => addToCart(product));
    }
  }, [cart, addToCart]);

  if (cart.length === 0) {
    return null;
  }

  return (
    <div className="summary">
      <h1>Resumen de Compra</h1>
      <ul className="summary-list">
        {cart.map((product) => {
          const quantity = product.quantity;

          if (quantity > 0) {
            return (
              <li key={product.id} className="summary-item">
                <div className="summary-item-info">
                  <img src={product.image} alt={product.name} className="summary-item-image" />
                  <div className="summary-item-details">
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <p className="summary-item-quantity">Cantidad: {quantity}</p>
                  </div>
                </div>
                <div>
                  <p className="summary-item-price">{product.price}</p>
                  <button onClick={() => handleRemove(product.id)}>Eliminar</button>
                </div>
              </li>
            );
          }

          return null;
        })}
      </ul>

      <div>
        <p>Total: </p>
        <Link to="/checkout">
          <button>Ir al Checkout</button>
        </Link>
      </div>
    </div>
  );
}

export default Brief;
