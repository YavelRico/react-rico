import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';

function ItemDetail({ product, onAddToCart }) {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const addToCart = () => {
    onAddToCart(product);
  };

  return (
    <div className="card">
      <img src={product.image} alt={product.name} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        <p>Cantidad: {count}</p>
        <ItemCount stock={5} initial={1} onAdd={addToCart} />
        <Link to={`/checkout`} className="btn btn-primary mt-2">
          Ir al Checkout
        </Link>
      </div>
    </div>
  );
}

export default ItemDetail;
