import React, { useState, useRef, useEffect } from 'react';
import { Navbar, Footer, Recommendation, RecentlyViewed, SignUp, ProductColor, ProductDetailsThumb, Tiles } from '../components';
import { Box, Button } from '@mui/material';
import NewnavBar from '../components/JupetaECnavBar';

const ProductDetailPage = () => {
  const [products, setProducts] = useState([
    {
      "_id": "1",
      "title": "product name",
      "src": [
        "https://picsum.photos/id/26/200",
        "https://picsum.photos/id/41/200",
        "https://picsum.photos/id/48/200",
        "https://picsum.photos/id/119/200"
      ],
      "name": "Product name",
      "description": "product description",
      "price": 1000,
      "colors": ["red", "black", "crimson", "teal"],
      "count": 1
    }
  ]);
  const [index, setIndex] = useState(0);
  const myRef = useRef(null);

  const handleTab = (index) => {
    setIndex(index);
    const images = myRef.current.children;
    for (let i = 0; i < images.length; i++) {
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };

  useEffect(() => {
    if (myRef.current.children.length > 0) {
      myRef.current.children[index].className = "active";
    }
  }, [index]);

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
            {products.map((item) => (
              <div className="details" key={item._id}>
                <div className="big-img">
                  <img src={item.src[index]} alt="" />
                  <ProductDetailsThumb images={item.src} tab={handleTab} myRef={myRef} />
                </div>
              </div>
            ))}
          </div>
        </Box>
        <Box
          sx={{
            flexBasis: '40%',
            backgroundSize: 'cover',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between', 
          }}
        >
          <div className="box" style={{paddingLeft:'20px'}}>
            {products.map((item) => (
              <div key={item._id}>
                <div className="row">
                  <h2>{item.title}</h2>
                  <span>${item.price}</span>
                </div>
                <ProductColor colors={item.colors} /> 
                <div className="spacer"></div>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <Button
                    variant="outlined"
                    sx={{ backgroundColor: 'transparent', color: 'black', borderColor: 'black', width: '200px' }}
                    size="large"
                  >
                    Sign up to Buy
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{ backgroundColor: 'transparent', color: 'black', borderColor: 'black', width: '200px' }}
                    size="large"
                  >
                    Favorite
                  </Button>
                </Box>
                <div className="row">
                <div className="spacer"></div>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Box>
      </Box>
      <Recommendation />
      <RecentlyViewed />
      <Tiles />
      <SignUp />
      <Footer />
    </div>
  );
};

export default ProductDetailPage;
