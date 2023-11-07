import React, { useEffect, useState } from 'react';
import './components/app.css';
import './jupeta-ec.global.css';
import { Routes, Route} from 'react-router-dom';
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
import WelcomePage from './PAGES/WelcomePage';
import Overview from './PAGES/Overview';
import ProductListing from './PAGES/ProductListing';
import Tiles from './components/Tiles';
import SearchResult from './components/SearchResult';
import { ThemeProvider } from 'styled-components';

const theme = {
  media: {
    mobile: '768px', 
  },
};

function App() {


  const initCart = JSON.parse(localStorage.getItem("Cart"));
  const [cartItems, setCartItems] = useState(initCart);


  

  const onAdd = (productdata) => {
    const exist = cartItems.find(x => x.id === productdata.id);
    if (exist) {
      setCartItems(cartItems.map(x => x.id === productdata.id ? { ...exist, qty: exist.qty + 1 } : x));
    } else {
      setCartItems([...cartItems, { ...productdata, qty: 1 }]);
    }
  };

  const onRemove = (productdata) => {
    const exist = cartItems.find(x => x.id === productdata.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== productdata.id));
    } else {
      setCartItems(cartItems.map(x => x.id === productdata.id ? { ...exist, qty: exist.qty - 1 } : x));
    }
  };
  
 useEffect(()=>{
    const data = JSON.parse(localStorage.getItem("Cart"));
    localStorage.setItem("Cart",JSON.stringify(data));
    initCart == null && setCartItems(data);
  },[initCart]);

  useEffect(()=>{
    localStorage.setItem("Cart",JSON.stringify(cartItems));
  },[cartItems])
/* <a>Learn React</a>  this is need to run Jest remove during production*/
  return (
    <>
    <ThemeProvider theme={theme}>
  {/* Your application components */}
</ThemeProvider>

<Routes>
  <>
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
    <Route path="/login" element={<LoginPage />} />
    <Route path="/welcome" element={<WelcomePage />} />
    <Route path="/overview" element={<Overview />} />
    <Route path="/productlisting" element={<ProductListing />} />
    <Route path="/tiles" element={<Tiles />} />
    <Route path="/srchResult" element={<SearchResult onAdd={onAdd} />} />
  </>
</Routes>
</>

  );
}

export default App;
