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
        <Route path="/" element={<HomePage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/cart" element={<CartPage/>} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/allproducts" element={<AllCategories/>} />
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
        <Route path='/sell' element={<SellListing />} />
        <Route path="/product-detail/:productId" element={<ProductDetailPage />} />
        <Route path="/catHome" element={<CatHomePage/>} />
      </Routes>
      </CartProvider>
    </div>
    
  );
}

export default App;
