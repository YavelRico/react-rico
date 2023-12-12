import React, { useState } from 'react';

function ItemCount({ product }) {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <p>Cantidad: {count}</p>
      <button className="btn btn-primary" onClick={handleIncrement}>
        Sumar
      </button>
      <button className="btn btn-danger" onClick={handleDecrement}>
        Restar
      </button>
    </div>
  );
}

export default ItemCount;
