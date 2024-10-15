import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Checkout from './pages/Checkout';
import Login from './components/Login'; // Import Login component
import Register from './components/Register'; // Import Register component

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} /> {/* Add Login route */}
          <Route path="/register" element={<Register />} /> {/* Add Register route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
