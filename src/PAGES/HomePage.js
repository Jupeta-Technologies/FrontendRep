import React, {useState, useEffect} from 'react'
import {Hero, DailyDeals, ExploreBestSelling, Footer, NewArrival, SignUp, WhatIsTrending, HolidaySale, SubNavbar, Navbar,Tiles,Grid } from '../components';
import JupetaECnavBar from '../components/JupetaECnavBar';
import SellButton from '../components/SellButton';
import AllCategories from '../components/AllCategories';
import { GetAllProdAPI } from '../APIs/GetAllProdAPI';
import Pagenation from '../Search/Pagination';
import Carousel from 'react-multi-carousel';

const HomePage = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const recentViewed = [];
  

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

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 736, min: 320 },
      items: 2,
      slidesToSlide: 1,
    },
  };
  

  return (
    <>
      <Hero/>
      <JupetaECnavBar/>
      <div className='mainContainer'>
        {
          recentViewed.length !== 0 &&
        <div className='recentViewed'>
          <h6>Recently viewed</h6>
          <div style={{width:'248px', height:'148px', backgroundColor:'#F5F5F7', borderRadius:'20px'}}></div>
        </div>
      }
        <h4 style={{margin:'14px 0'}}>Technology</h4>
        
          
        
            <Carousel responsive={responsive}>
              {
          products.map((x,index)=>{return(<div style={{width:'348px', height:'448px', backgroundColor:'#F5F5F7', borderRadius:'20px',overflow:'clip', flexShrink:0,cursor:'pointer'}} key={index}>
            <img src={x.imageFileUrl} style={{width:'100%',height:'100%',objectFit:'cover'}}/>
            <span style={{position:'absolute', bottom:'10px',left:'10px', padding:'2px 14px',borderRadius:'14px', backgroundColor:'#FFF'}}>{x.price}</span>
          </div>)})
              }
          </Carousel>
          
         
        <h4 style={{margin:'14px 0'}}>Aution</h4>
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