// src/pages/Home.js
import React from 'react';
import Description from '../components/Description';
import ProductList from '../components/ProductList';

const products = [
  {
    id: 1,
    name: 'Gold Necklace',
    price: '199.99',
    image: 'https://example.com/gold-necklace.jpg',
  },
  // ... other products
];

function Home() {
  return (
    <div>
      <Description />
      <ProductList products={products} />
    </div>
  );
}

export default Home;
