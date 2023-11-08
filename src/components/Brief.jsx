import React from 'react';
import { useCart } from './CartContext';

function Brief() {
  const { cart } = useCart();

  return (
    <div className="summary">
      <h1>Resumen de Compra</h1>
      <ul className="summary-list">
        {cart.map((product) => (
          <li key={product.id} className="summary-item">
            <div className="summary-item-info">
              <img src={product.image} alt={product.name} className="summary-item-image" />
              <div className="summary-item-details">
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p className="summary-item-quantity">Cantidad: {product.quantity}</p>
              </div>
            </div>
            <p className="summary-item-price">{product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Brief;
