import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { getProductsById } from './asyncMock';

function ItemDetailContainer() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductsById(productId)
      .then((productDetails) => setProduct(productDetails));
  }, [productId]);

  return (
    <div>
      {product ? <ItemDetail product={product} /> : 'Cargando detalles...'}
    </div>
  );
}

export default ItemDetailContainer;
