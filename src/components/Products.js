import React, { useEffect, useState } from 'react';
import ProductList from './ProductList';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = [
        { id: 1, name: 'Product 1', price: 100 },
        { id: 2, name: 'Product 2', price: 200 },
        { id: 3, name: 'Product 3', price: 300 },
      ];
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return <ProductList products={products} />;
}

export default Products;
