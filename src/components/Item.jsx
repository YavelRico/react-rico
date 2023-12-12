import React, { useState } from 'react';
import { useCart } from './CartContext';

function Item({ product }) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(0);

  const handleAddToCart = () => {
    if (quantity > 0) {
      addToCart({ ...product, quantity });

   
      const currentCart = JSON.parse(localStorage.getItem('cart')) || [];

    
      const updatedCart = [...currentCart, { ...product, quantity }];
      localStorage.setItem('cart', JSON.stringify(updatedCart));

      setQuantity(0); 
    }
  };

  return (
    <div className="card">
      <img src={product.image} alt={product.name} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        <div className="quantity-controls">
          <button
            onClick={() => setQuantity(quantity > 0 ? quantity - 1 : 0)}
            disabled={quantity === 0}
            className="btn btn-primary"
          >
            -
          </button>
          <span className="quantity">{quantity}</span>
          <button onClick={() => setQuantity(quantity + 1)} className="btn btn-primary">
            +
          </button>
        </div>
        <button onClick={handleAddToCart} className="btn btn-primary">Agregar al carrito</button>
      </div>
    </div>
  );
}

export default Item;

