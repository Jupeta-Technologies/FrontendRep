import React, {useState, useEffect} from 'react'
import {Hero, DailyDeals, ExploreBestSelling, Footer, NewArrival, SignUp, WhatIsTrending, HolidaySale, SubNavbar, Navbar,Tiles,Grid } from '../components';
import JupetaECnavBar from '../components/JupetaECnavBar';
import SellButton from '../components/SellButton';
import AllCategories from '../components/AllCategories';
import { GetAllProdAPI } from '../APIs/GetAllProdAPI';
import Pagenation from '../Search/Pagination';

const HomePage = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    const fetchData = () => {
      
  
        GetAllProdAPI().then((res)=>{
          //console.log(res);
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
    <>
      <Hero/>
      <JupetaECnavBar/>
      <div className='mainContainer'>
        <div className='recentViewed'>
          <h6>Recently viewed</h6>
          <div style={{width:'248px', height:'148px', backgroundColor:'#F5F5F7', borderRadius:'20px'}}></div>
        </div>
        <h6>Technology</h6>
          <div className='techHighlight' style={{display:'flex', flexDirection:'row', gap:'16px'}}>
          <div style={{width:'348px', height:'448px', backgroundColor:'#F5F5F7', borderRadius:'20px'}}>
            <img src={''} width='100%' height='100%'/>
          </div>
          <div style={{width:'348px', height:'448px', backgroundColor:'#F5F5F7', borderRadius:'20px'}}></div>
          </div>
        <h6>Aution</h6>
          <div className='autionHighlight' style={{display:'flex', flexDirection:'row', gap:'16px'}}>
          <div style={{width:'348px', height:'448px', backgroundColor:'#F5F5F7', borderRadius:'20px'}}></div>
          <div style={{width:'348px', height:'448px', backgroundColor:'#F5F5F7', borderRadius:'20px'}}></div>
          </div>
        <h6>Fashion</h6>
          <div className='fashionHighlight' style={{display:'flex', flexDirection:'row', gap:'16px'}}>
          <div style={{width:'348px', height:'448px', backgroundColor:'#F5F5F7', borderRadius:'20px'}}></div>
          <div style={{width:'348px', height:'448px', backgroundColor:'#F5F5F7', borderRadius:'20px'}}></div>
          </div>

          
      </div>
      
      <SellButton />
        <Footer />
    </>
  )
}

export default HomePage