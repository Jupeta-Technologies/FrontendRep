import React, { useEffect, useState,useContext } from 'react';
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
import Tiles from './components/Tiles';
import SearchResult from './components/SearchResult';
import SellListing from './components/SellListing';
import CatHomePage from './PAGES/CatHomePage';
import { Cartcontext } from "./context/context";
import { GetAllProdAPI } from './APIs/GetAllProdAPI';
import { CartProvider } from './context/CartContext';
function App() {

  const [searchResults, setSearchResults] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  // ... Other state and functions ...

  const handleSearch = (searchTerm) => {
    // Implement search and filter logic here.
    // Update the searchResults state with the filtered results.
    // Example: You can use the searchTerm to filter products.
    const data = []; // Define your data source here.
    const filteredResults = data.filter(item => item.name.includes(searchTerm));
    
    setSearchResults(filteredResults);
  };

 
  
 /*  const initCart = JSON.parse(localStorage.getItem("Cart"));
  const [cartItems, setCartItems] = useState(initCart == null?[]:initCart);
  const { dispatch } = useContext(Cartcontext);

  const handleAddToCart = (product) => {
    // Dispatch an action to add the product to the cart
    dispatch({ type: 'ADD', payload: product });
    console.log('Item added to cart:', product);
  };

  const onAdd = (productdata) => {
    const exist = cartItems.find(x => x.id === productdata.id);
    if (exist) {
      setCartItems(cartItems.map(x => x.id === productdata.id ? { ...exist, qty: exist.qty + 1 } : x));
    } else {
      setCartItems([...cartItems, { ...productdata, qty: 1 }]);
    }
    
  };

  //DO NOT TOUCH THIS CODE ==>
  useEffect(()=>{
    const data = JSON.parse(localStorage.getItem("Cart"));
    localStorage.setItem("Cart",JSON.stringify(data));
    initCart === null && setCartItems(data);
  },[initCart]);

  useEffect(()=>{
    localStorage.setItem("Cart",JSON.stringify(cartItems));
  },[cartItems])
// <==

  const onRemove = (productdata) => {
    const exist = cartItems.find(x => x.id === productdata.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== productdata.id));
    } else {
      setCartItems(cartItems.map(x => x.id === productdata.id ? { ...exist, qty: exist.qty - 1 } : x));
    }
  };
  */  

/* <a>Learn React</a>  this is need to run Jest remove during production*/

useEffect(() => {
  const fetchData = () => {
    

      GetAllProdAPI().then((res)=>{
        console.log(res);
        if (res.data.code !== "0") {
          throw new Error('Failed to fetch data');
        }
        const data = res.data.responseData;
        setProducts(data);
      }).catch( (error) => {
        console.error('Error fetching data:', error);
      } ).finally(setLoading(false)); 
      
  };

  fetchData();
}, []);

  return (
    
    <div>
      <CartProvider>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/cart" element={<CartPage/>} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/allproducts" element={<AllCategories/>} />
        <Route path="/sell" element={<SellPage />} />
        <Route path="/location" element={<Location />} />
        <Route path="/createanaccount" element={<SignUpPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route exact path="/product-detail" element={<ProductDetailPage />} />
        <Route path="/compTester" element={<CompTester />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/welcome' element={<WelcomePage />} />
        <Route path='/overview' element={<Overview />} />
        <Route path='/tiles' element={<Tiles />} />
        <Route path='/srchResult' element={<SearchResult/>} />
        <Route path='/selllisting' element={<SellListing />} />
        <Route path="/product-detail/:productId" element={<ProductDetailPage />} />
        <Route path="/catHome" element={<CatHomePage/>} />
      </Routes>
      </CartProvider>
    </div>
    
  );
}

export default App;
