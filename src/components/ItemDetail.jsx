import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import { useCart } from './CartContext';

function ItemDetail({ product }) {
  const { addToCart } = useCart();
  const [count, setCount] = useState(0);

  useEffect(() => {

    setCount(0);
  }, [product]);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  const handleAddToCart = () => {
    if (count > 0) {

      addToCart({ ...product, quantity: count });


      const currentCart = JSON.parse(localStorage.getItem('cart')) || [];


      const updatedCart = [...currentCart, { ...product, quantity: count }];
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
  };

  return (
    <div className="card">
      <img src={product.image} alt={product.name} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        <p>Cantidad: {count}</p>
        <ItemCount
          stock={5} 
          initial={1}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
        <button onClick={handleAddToCart} className="btn btn-primary mt-2">
          Agregar al Carrito
        </button>
        <Link to={`/checkout`} className="btn btn-primary mt-2">
          Ir al Checkout
        </Link>
      </div>
    </div>
  );
}

export default ItemDetail;
