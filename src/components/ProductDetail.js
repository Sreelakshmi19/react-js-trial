// src/components/ProductDetails.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import products from '../products'; // Import the products from the new location

function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div className="container mt-4">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} className="img-fluid" />
      <p><strong>Price:</strong> ${product.price}</p>
      <p>{product.description}</p>
      <button className="btn btn-primary">Add to Cart</button>
      <Link to="/products" className="btn btn-secondary mt-3">Back to Products</Link>
    </div>
  );
}

export default ProductDetails;
