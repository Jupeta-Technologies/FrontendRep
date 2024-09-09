import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {Footer, Recommendation, RecentlyViewed, SignUp,} from '../components';
import NewnavBar from '../components/JupetaECnavBar';
import { Box, Button } from '@mui/material';
import { AiOutlineShoppingCart, AiFillEye, AiOutlineClockCircle} from 'react-icons/ai';
import { LiaShippingFastSolid} from "react-icons/lia";
import { CiLocationOn,CiLock } from "react-icons/ci";
import { useCart } from 'react-use-cart';
import '../components/productDetails.css';
import CheckoutModal from '../Transaction/CheckoutModal';
import JupetaBidder from '../components/JupetaBid';
import MemberCard from '../UserManagment/MemberCard';
import SellersItems from '../product/SellersItems';



const ProductDetailPage = () => {
  
  const products = JSON.parse(localStorage.getItem("SearchResult"));
  console.log(products);
  const { productId } = useParams();
  console.log('ProductId:', productId);
  const navigate = useNavigate(); // Using useNavigate for navigation
    const productList = Array.isArray(products) ? products : [];
  //console.log('ProductList:', productList);
  const addcart = <AiOutlineShoppingCart className='shoppingcartIcon' />;
  const { addItem } = useCart();
  console.log(addItem); // Check the console to see if addItem is a function
  
  const [state, setState] = useState({
    isDescription: true,
    isReviews: false,
    isVendors: false,
  });

  //check if buy button is click then show checkout modal
  const [quickBuy,setQuickbuy] = useState(false);
  const [openBid,setOpenbid] = useState(false);
  
  const handleChildData = (data) =>{
      console.log("This is from child",data);
      data == 'C' && setQuickbuy(false);
      data == 'B' && setOpenbid(false);
  }
  
  

  

  // Find the product based on productId using productList
  const product = productList.find((product) => product.id.toLowerCase() === productId.toLowerCase());

  // Check if product is defined before accessing its properties
  if (!productList.length) {
        console.log('Product not found');
        return <p>Loading...</p>;
        }


        const handleBuyNow = () => {
          addItem(product);
          navigate('/cart'); // Navigate to the cart page after adding the product
        };
       
      const handBidBuy = (x) =>{
        x == "Auction"?setOpenbid(true):setQuickbuy(true);
      }
      
       
        const { isDescription, isReviews, isVendors } = state;
      
        const handleDescriptionToggle = () => {
          setState({
            ...state,
            isDescription: true,
            isReviews: false,
            isVendors: false,
          });
        };

        const handleReviewsToggle = () => {
          setState({
            ...state,
            isDescription: false,
            isReviews: true,
            isVendors: false,
          });
        };

        const handleVendorsToggle = () => {
          setState({
            ...state,
            isDescription: false,
            isReviews: false,
            isVendors: true,
          });
        };

  // Render product details
  return (
    <div>
      <NewnavBar page={"nctgm"}/>
      <div className="mainContainer" style={{marginTop:'86px'}}>
      <Box
        sx={{
          display: 'flex',
          height: '600px',
        }}
      >
        <Box
          sx={{
            flexBasis: '70%',
            backgroundSize: 'cover',
          }}
        >
<div className="app">
            <div className="details">
              <div className="big-img">
                <img src={product.imageFileUrl} alt={product.productName} />
              </div>
            </div>
          </div>
                  </Box>
        <Box
          sx={{
            flexBasis: '30%',
            backgroundSize: 'cover',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            paddingLeft: '20px',
          }}
        >
          {quickBuy && product.sellingType === "BuyNow"?<CheckoutModal prodData={product.productName} sendData={handleChildData}/>:
          <div className="box">
            <div>
              <div className="row">
                <h2>{product.productName}</h2>
                <span style={{marginTop:'16px',marginBottom:'32px',fontSize:'1.5rem'}}>¢{product.price}</span>
                {product.sellingType !== "BuyNow"&&<span style={{display:'inline-flex', lineHeight:'2.25rem', backgroundColor:'#F4F4F7', width:'320px', padding:'0px 16px', borderRadius:'24px',marginBottom:'16px'}}>10000 bids <AiOutlineClockCircle style={{fontSize:'2.25rem', margin:'0 2px'}}/> 1 day 3 Hours 5 Min</span>}
                {/* <div className="spacer"></div> never inlcude this use margin, padding or absolute position
                <div className="spacer"></div> */}
                  <p><LiaShippingFastSolid style={{float:'left',paddingRight:'4px', fontSize:'2rem'}} /> Free Shipping</p>
                  <p><CiLocationOn style={{float:'left',paddingRight:'4px', fontSize:'2rem'}} /> Accra</p>
                  <p><CiLock style={{float:'left',paddingRight:'4px', fontSize:'2rem'}} /> Secure pick-up</p>
              </div>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {/* Container for Buy Now and Shopping Cart buttons */}

                {(openBid && product.sellingType === "Auction")?<JupetaBidder sendData={handleChildData}/>:
  
                <Box sx={{ display: 'flex', gap: '16px', alignItems:'center'}}>
                  
  
  <Button
  variant="solid"
  sx={{
    backgroundColor: '#032C0A',
    color: 'white',
    borderRadius: '20px',
    padding:'4px 24px',
    '&:hover': {
      backgroundColor: '#073c10',
    },
  }}
  size="large"
  onClick={()=>{handBidBuy(product.sellingType);}} // Call handleBuyNow when the button is clicked
>
  {product.sellingType !== "BuyNow"?"BID":"BUY"}
</Button>

                  

                  {/* Shopping cart icon button */}
                  
                  {product.sellingType === "BuyNow" && <AiOutlineShoppingCart style={{background:"#F4F4F7", padding:"8px", borderRadius:"50%", fontSize:"3rem", cursor:"pointer"}}/>}
                  <AiFillEye style={{background:"#F4F4F7", padding:"6px", borderRadius:"50%", fontSize:"2rem",cursor:"pointer"}}/>
                
                  </Box>
                  
                  
          }           
              </Box>

            </div>
          </div>
}
        </Box>
      </Box>
      
      
<div className='descSpecs-box'>
  <div className="itemspecs">
    <h4>Item Specifications</h4>
    <div className="specs">

    </div>
  </div>
  <div className="itemdesc">
    <h4>Description</h4>
    <div className="desc">
    <p>{product.description}</p>
    </div>
  </div>
</div>
<MemberCard />
<SellersItems />





      {/* 
      <RecentlyViewed/>
      <SignUp /> */}
</div>
      <Footer />
    </div>
  );
};

export default ProductDetailPage;