// src/components/Cart.js
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function Cart() {
  const { cart } = useContext(CartContext); // Make sure CartContext is imported correctly

  if (!cart || cart.length === 0) {
    return <div>Your cart is empty.</div>;
  }

  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>{item.name} - ${item.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
