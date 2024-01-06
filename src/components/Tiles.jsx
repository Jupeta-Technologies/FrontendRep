import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { AiOutlineShoppingCart, AiOutlineEye } from 'react-icons/ai';
import BuyBidbutton from './cardcomponents/buybidButton';


const Tiles = () => {
  const product = {
    price: 100,
    productName: 'Example Product',
    imageFileUrl: 'example.jpg',
    sellingType: 'BuyNow',
  };

  const { price,sellingType } = product;
  const addCart = <AiOutlineShoppingCart className="shoppingcartIcon" />;
  const watchList = <AiOutlineEye className="shoppingcartIcon" />;

  const renderCard = (imageSrc) => (
    <Col xs={12} sm={6} md={4} lg={3} key={imageSrc}>
<Card sx={{ maxWidth: '345', height: '100%',boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',transition: 'transform 0.3s', flexGrow: 1,'&:hover': { transform: 'scale(1.02)'},padding: '10px' }}> 
       <CardMedia
          sx={{ height: '200px', backgroundSize: 'cover' }}
          image={require(`../images/${imageSrc}`)}
          title=""
        />
        <CardContent>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <BuyBidbutton tag={sellingType === 'BuyNow' ? 'Buy Now' : 'Bid Now'} />
            </div>
            <div className="price-tag">${price}</div>
          </div>
          {sellingType === 'BuyNow' ? addCart : watchList}
        </CardContent>
      </Card>
    </Col>
  );

  const images = ['bb.jpg', 'bh.jpg', 'bv.jpg', 'cd.jpg', 'ff.jpg', 'ti.jpg', 'con.jpg', 'kids.jpg'];

  return (
    <Container style={{ width: '100vw', backgroundColor: 'whitesmoke' }}>
 <Row className="mb-3">{images.slice(0, 4).map(renderCard)}</Row>
      <Row>{images.slice(4, 8).map(renderCard)}</Row>
          </Container>
  );
};


export default Tiles