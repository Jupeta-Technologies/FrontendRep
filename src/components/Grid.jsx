import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import BuyBidbutton from './cardcomponents/buybidButton';
import {AiFillHeart,AiOutlineShoppingCart,AiOutlineEye} from "react-icons/ai"



const Grid = () => {
  const product = {
    price: 100, 
    productName: 'Example Product', 
    imageFileUrl: 'example.jpg', 
    sellingType: 'BuyNow', 
  };
  
  const { price, sellingType } = product;
  const date = new Date();
  const addcart = <AiOutlineShoppingCart className='shoppingcartIcon' />;
  const watchlist = <AiOutlineEye className='shoppingcartIcon' />;

  return (
    <Container style={{ width: '100vw',height:'425px',}}>
      <Row>
        <Col style={{ height: '430px', display: 'flex', justifyContent: 'center' }} xs={4}>
          <section style={{ width: '100%', height: '100%', padding: '10px' }}>
            <Card sx={{ maxWidth: 445, height: '100%',boxShadow: '0 10px 6px rgba(0, 0, 0, 0.1)',transition: 'transform 0.3s', flexGrow: 1,'&:hover': { transform: 'scale(1.02)'} }}>
              <CardMedia
                sx={{ height: '350px',    backgroundSize: 'cover',  }}
                image={require('../images/bb.jpg')} 
                title=""
              />
<CardContent style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
  <div>
    <BuyBidbutton tag={sellingType === 'BuyNow' ? 'Buy Now' : 'Bid Now'} />
  </div>
  <div>
    {sellingType === 'BuyNow' ? addcart : watchlist}
  </div>
  <p className='itemPrice' style={{ marginLeft: 'auto' }}>¢{price}</p>
</CardContent>


            </Card>
          </section>
        </Col>
        <Col style={{ height: '430px', display: 'flex', justifyContent: 'center' }} xs={2}>
          <section style={{ width: '100%', height: '100%', padding: '10px' }}>
            <Card sx={{ maxWidth: 345, height: '100%',transition: 'transform 0.3s', flexGrow: 1,'&:hover': { transform: 'scale(1.02)'} }}>
              <CardMedia
                sx={{ height: '350px',    backgroundSize: 'cover',  }}
                image={require('../images/bh.jpg')} 
                title=""
              />
             <CardContent style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
  <div>
    <BuyBidbutton tag={sellingType === 'BuyNow' ? 'Buy Now' : 'Bid Now'} />
  </div>
  <div>
    {sellingType === 'BuyNow' ? addcart : watchlist}
  </div>
  <p className='itemPrice' style={{ marginLeft: 'auto' }}>¢{price}</p>
</CardContent>

            </Card>
          </section>
        </Col>
        <Col style={{ height: '400px', display: 'flex', flexDirection: 'column' }} xs={4}>
          <section style={{ height: '50%', display: 'flex', gap: '20px', marginBottom: '10px', marginTop: '10px' }}>
            <div style={{ width: '50%'}}>
              <Card sx={{ maxWidth: 345, height: '100%',transition: 'transform 0.3s', flexGrow: 1,'&:hover': { transform: 'scale(1.02)'} }}>
                <CardMedia
                sx={{ height: '150px',    backgroundSize: 'cover',  }}
                image={require('../images/bv.jpg')} 
                  title=""
                />
                <CardContent style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
  <div>
    <BuyBidbutton tag={sellingType === 'BuyNow' ? 'Buy Now' : 'Bid Now'} />
  </div>
  <div>
    {sellingType === 'BuyNow' ? addcart : watchlist}
  </div>
  <p className='itemPrice' style={{ marginLeft: 'auto' }}>¢{price}</p>
</CardContent>
                
              </Card>
            </div>
            <div style={{ width: '50%' }}>
              <Card sx={{ maxWidth: 345, height: '100%',transition: 'transform 0.3s', flexGrow: 1,'&:hover': { transform: 'scale(1.02)'} }}>
                <CardMedia
                sx={{ height: '150px',    backgroundSize: 'cover',  }}
                image={require('../images/cd.jpg')} 
                  title=""
                />
                <CardContent style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
  <div>
    <BuyBidbutton tag={sellingType === 'BuyNow' ? 'Buy Now' : 'Bid Now'} />
  </div>
  <div>
    {sellingType === 'BuyNow' ? addcart : watchlist}
  </div>
  <p className='itemPrice' style={{ marginLeft: 'auto' }}>¢{price}</p>
</CardContent>
              </Card>
            </div>
          </section>
          <section style={{ height: '50%', display: 'flex', gap: '20px' }}>
            <div style={{ width: '50%'}}>
              <Card sx={{ maxWidth: 345, height: '100%',transition: 'transform 0.3s', flexGrow: 1,'&:hover': { transform: 'scale(1.02)'} }}>
                <CardMedia
                sx={{ height: '150px',    backgroundSize: 'cover',  }}
                image={require('../images/ff.jpg')} 
                  title=""
                />
                 <CardContent style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
  <div>
    <BuyBidbutton tag={sellingType === 'BuyNow' ? 'Buy Now' : 'Bid Now'} />
  </div>
  <div>
    {sellingType === 'BuyNow' ? addcart : watchlist}
  </div>
  <p className='itemPrice' style={{ marginLeft: 'auto' }}>¢{price}</p>
</CardContent>
               
              </Card>
            </div>
            <div style={{ width: '50%' }}>
              <Card sx={{ maxWidth: 345, height: '100%',transition: 'transform 0.3s', flexGrow: 1,'&:hover': { transform: 'scale(1.02)'} }}>
                <CardMedia
                sx={{ height: '150px',    backgroundSize: 'cover',  }}
                image={require('../images/ti.jpg')} 
                  title=""
                />
                <CardContent style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
  <div>
    <BuyBidbutton tag={sellingType === 'BuyNow' ? 'Buy Now' : 'Bid Now'} />
  </div>
  <div>
    {sellingType === 'BuyNow' ? addcart : watchlist}
  </div>
  <p className='itemPrice' style={{ marginLeft: 'auto' }}>¢{price}</p>
</CardContent>
              </Card>
            </div>
          </section>
        </Col>
      </Row>
    </Container>
  );
};

export default Grid;
