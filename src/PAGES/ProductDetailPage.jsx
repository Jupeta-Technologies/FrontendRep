import React from 'react';
import { useParams } from 'react-router-dom';
import {Footer, Recommendation, RecentlyViewed, SignUp,} from '../components';
import NewnavBar from '../components/JupetaECnavBar';
import { Box, Button } from '@mui/material';
import { AiOutlineShoppingCart } from 'react-icons/ai';



const ProductDetailPage = (products) => {
  console.log(products);
  const { productId } = useParams();

  //const productList = Array.isArray(products.responseData) ? products.responseData : [];
  const addcart = <AiOutlineShoppingCart className='shoppingcartIcon' />;

  
  // Find the product based on productId using productList
  //const product = productList.find((product) => product.id === productId);
  const product = products;



  // Check if product is defined before accessing its properties
 /*  if (!product) {
    return <p>Product not found</p>;
  } */

  // Render product details
  return (
    <div>
      <NewnavBar />
      <Box
        sx={{
          display: 'flex',
          height: '800px',
        }}
      >
        <Box
          sx={{
            flexBasis: '60%',
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
            flexBasis: '40%',
            backgroundSize: 'cover',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            paddingLeft: '20px',
          }}
        >
          <div className="box">
            <div>
              <div className="row">
                <h2>{product.productName}</h2>
                <span>${product.price}</span>
              </div>
              <div className="spacer"></div>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {/* Container for Buy Now and Shopping Cart buttons */}
                <Box sx={{ display: 'flex', gap: '16px' }}>
                  <Button
                    variant="outlined"
                    sx={{
                      backgroundColor: 'black',
                      color: 'white',
                      borderColor: 'black',
                      width: '200px',
                      textTransform: 'lowercase',
                      borderRadius: '20px',
                      '&:hover': {
                        backgroundColor: 'darkred', // Change the background color on hover
                        borderColor: 'darkred', // Change the border color on hover
                      },
                    }}
                    size="large"
                  >
                    buy now
                  </Button>
                  {/* Shopping cart icon button */}
                  <Button
                  
                    variant="outlined"
                    sx={{
                      backgroundColor: 'whitesmoke',
                      color: 'black',
                      borderColor: 'black',
                      borderRadius: '50%',
                      width: '40px',
                      height: '40px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '50px',
                    }}
                    size="large"
                  >
          <AiOutlineShoppingCart/>
                  </Button>
                </Box>
                
                <Button
                  variant="outlined"
                  sx={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', color: 'black', borderColor: 'black', width: '200px', textTransform: 'lowercase',borderRadius: '20px', }}
                  size="large"
                >
                  Favorite
                </Button>
              </Box>
              <div className="row">
                <div className="spacer"></div>
                <p>{product.description}</p>
              </div>
            </div>
          </div>
        </Box>
      </Box>
      <Recommendation />
      <RecentlyViewed/>
      <SignUp />
      <Footer />
    </div>
  );
};

export default ProductDetailPage;