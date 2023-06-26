import React, { useState } from 'react';
import './components/app.css';
import { Routes, Route } from 'react-router-dom';
import FavoritesPage from './PAGES/favoritesPage';
import CartPage from './PAGES/cartPage';
import ProfilePage from './PAGES/profilePage';
import AllCategories from './components/AllCategories';
import { SignUp } from './components';
import SellPage from './PAGES/SellPage';
import SignUpPage from './PAGES/SignUpPage';
import Location from './PAGES/Location';
import HomePage from './PAGES/HomePage';
import ProductDetailPage from './PAGES/ProductDetailPage';
import CompTester from './componentPreview';
import LoginPage from './PAGES/LoginPage';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (dat) => {
    const exist = cartItems.find(x => x.id === dat.id);
    if (exist) {
      setCartItems(cartItems.map(x => x.id === dat.id ? { ...exist, qty: exist.qty + 1 } : x));
    } else {
      setCartItems([...cartItems, { ...dat, qty: 1 }]);
    }
  };

  const onRemove = (dat) => {
    const exist = cartItems.find(x => x.id === dat.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== dat.id));
    } else {
      setCartItems(cartItems.map(x => x.id === dat.id ? { ...exist, qty: exist.qty - 1 } : x));
    }
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/cart" element={<CartPage cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} setCartItems={setCartItems} />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/allproducts" element={<AllCategories onAdd={onAdd} />} />
        <Route path="/sell" element={<SellPage />} />
        <Route path="/location" element={<Location />} />
        <Route path="/createanaccount" element={<SignUpPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route exact path="/product-detail" element={<ProductDetailPage />} />
        <Route path="/compTester" element={<CompTester />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
