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
        
          
        
           <div  className='featuredItemgrid'>
              {
          products.slice(0,8).map((x,index)=>{return(<div className="ftgridItems" key={index}>
            <img src={x.imageFileUrl} style={{width:'100%',height:'100%',objectFit:'cover'}}/>
            <span style={{position:'relative', bottom:'30px',left:'10px', padding:'2px 14px',borderRadius:'14px', backgroundColor:'#FFF'}}>{x.price}</span>
          </div>)})
              }
          </div>
          
         

          
      </div>
      
      <SellButton />
        <Footer />
    </>
  )
}

export default HomePage