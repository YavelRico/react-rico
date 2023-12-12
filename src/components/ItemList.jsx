import React from 'react';
import { Link } from 'react-router-dom';
import Item from './Item';

function ItemList({ products }) {
  return (
    <div>
      <h2>Productos</h2>
      <div className="card-container">
        {products.map((product) => (
          <Item key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ItemList;
