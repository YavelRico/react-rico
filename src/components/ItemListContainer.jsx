import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts, getProductsByCategory } from './asyncMock';
import ItemList from './ItemList';

function ItemListContainer() {
  const { categories } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        if (!categories || categories === 'Inicio') {
          const allProducts = await getProducts();
          setProducts(allProducts);
        } else {
          const categoriesArray = categories.split(',');
          const productsByCategory = [];

          for (const cat of categoriesArray) {
            const response = await getProductsByCategory(cat.trim());
            productsByCategory.push(...response);
          }

          setProducts(productsByCategory);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }

    fetchProducts();
  }, [categories]);

  if (loading) {
    return <p>Cargando productos...</p>;
  }

  return (
    <div>
      <h1>Productos en la categoría {categories || 'Inicio'}</h1>
      <ItemList products={products} />
    </div>
  );
}

export default ItemListContainer;
