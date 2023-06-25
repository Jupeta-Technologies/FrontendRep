import React, { useState, useRef, useEffect } from 'react';
import { Navbar, Footer, Recommendation, RecentlyViewed, SignUp, ProductColor, ProductDetailsThumb } from '../components';
import { Box, Button } from '@mui/material';

const ProductDetailPage = () => {
  const [products, setProducts] = useState([
    {
      "_id": "1",
      "title": "product name",
      "src": [
        "https://www.upsieutoc.com/images/2020/06/27/img1.jpg",
        "https://www.upsieutoc.com/images/2020/06/27/img2.jpg",
        "https://www.upsieutoc.com/images/2020/06/27/img3.jpg",
        "https://www.upsieutoc.com/images/2020/06/27/img4.jpg"
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
      <Navbar />

      <Box
        sx={{
          display: 'flex',
          height: '800px',
        }}
      >
        <Box
          sx={{
            flexBasis: '50%',
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
            flexBasis: '50%',
            backgroundSize: 'cover',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between', 
          }}
        >
          <div className="box">
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
      <SignUp />
      <Footer />
    </div>
  );
};

export default ProductDetailPage;
