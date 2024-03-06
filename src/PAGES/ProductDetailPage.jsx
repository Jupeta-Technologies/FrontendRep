import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {Footer, Recommendation, RecentlyViewed, SignUp,} from '../components';
import NewnavBar from '../components/JupetaECnavBar';
import { Box, Button } from '@mui/material';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useCart } from 'react-use-cart';
import '../components/productDetails.css';



const ProductDetailPage = ({ products }) => {
  console.log(products);
  const { productId } = useParams();
  console.log('ProductId:', productId);
  const navigate = useNavigate(); // Using useNavigate for navigation
    const productList = Array.isArray(products.responseData) ? products.responseData : [];
  console.log('ProductList:', productList);
  const addcart = <AiOutlineShoppingCart className='shoppingcartIcon' />;
  const { addItem } = useCart();
  console.log(addItem); // Check the console to see if addItem is a function
  
  const [state, setState] = useState({
    isDescription: true,
    isReviews: false,
    isVendors: false,
  });

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
              <div className="spacer"></div>
                <h2>{product.productName}</h2>
                <div className="spacer"></div>
                <span>${product.price}</span>
                <div className="spacer"></div>
                <div className="spacer"></div>

              </div>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {/* Container for Buy Now and Shopping Cart buttons */}
                <Box sx={{ display: 'flex', gap: '16px' }}>
                <Link
  to={{
    pathname: "/cart",
    state: {
      product: {
        id: product.id,
        productName: product.productName,
        price: product.price,
        // Add other properties as needed
      },
    },
  }}
  onClick={()=>addItem(product)}>
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
      backgroundColor: 'darkred',
      borderColor: 'darkred',
    },
  }}
  size="large"
  onClick={handleBuyNow} // Call handleBuyNow when the button is clicked
>
  Buy Now
</Button>

</Link>

                  {/* Shopping cart icon button */}
                  <Button
                  
                    variant="outlined"
                    sx={{
                      backgroundColor: 'whitesmoke',
                      color: 'black',
                      borderColor: 'black',
                      borderRadius: '70px',
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
            </div>
          </div>
        </Box>
      </Box>
      
      <div className="container-details">
  <div className="deschead-label">
    <span onClick={handleDescriptionToggle} className={`description${isDescription ? ' active' : ''}`}>
      Description
    </span>

    <span className="toggle-space"></span> 

<span onClick={handleReviewsToggle} className={`reviews${isReviews ? ' active' : ''}`}>
  Reviews
</span>


<span className="toggle-space"></span> 

<span onClick={handleVendorsToggle} className={`vendors${isVendors ? ' active' : ''}`}>
  Vendor info
</span>         
  </div>

  {isDescription && (
    <section>
      {              
      <div className="desc-rev-ven-pad">
      <h2>{product.productName}</h2>
      <p>{product.description}</p>
      </div>
}
    </section>
  )}

  {isReviews && (
    <section>
      {      <div className="desc-rev-ven-pad">
      </div>
}
    </section>
  )}

  {isVendors && (
    <section>
      {      <div className="desc-rev-ven-pad">
      </div>}
    </section>
  )}
</div>




      <Recommendation />
      <RecentlyViewed/>
      <SignUp />
      <Footer />
    </div>
  );
};

export default ProductDetailPage;