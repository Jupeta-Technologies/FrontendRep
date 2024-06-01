import React from 'react';
import { Footer, CatHomeNavBar,NewArrival,ExploreBestSelling } from '../components';
import { Box } from '@mui/material';
import home from '../images/homedec.png'; 
import chairs from '../images/chairs.jpg' 
import office from '../images/office.jpg'
import Bed from '../images/bed.jpg'
import shelving from '../images/shelving.jpg'
import './furniture.css';
import { useLocation, Link } from 'react-router-dom';


const CatFurnitureHomepage = ({ sx }) => {
  const currLoc = useLocation();
  const categoryList = [
    {
      imgSrc: chairs,
      name: "chair",
      linkTo: ""
    },
    {
      imgSrc: Bed,
      name: "bed",
      linkTo: ""
    },
    {
      imgSrc: shelving,
      name: "shelving",
      linkTo: ""
    },
    {
      imgSrc: office,
      name: "office",
      linkTo: ""
    }
  ];

  return (
    <div>
      <CatHomeNavBar />
      <Box
        sx={{
          position: 'relative',
          backgroundImage: `url(${home})`,
          backgroundSize: 'cover',
          height: '100vh',
                    width: 'auto', 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          top: '0',
        }}
      >
      </Box>

      <div className="section">
  <h2>Home</h2>
  <h2>Category</h2>
  <h2>New Arrival</h2>
  <h2>Best Selling</h2>
  <h2>Sales Offer</h2>
  <h2>Auction</h2>
</div>

<div className="GCMenu_Container"
style={{
        marginTop: currLoc.pathname === '/' ? "0px" : "20px",
        ...sx
      }}
    >
      <ul>
        {categoryList.map((category, index) => (
          <li key={index}>
            <Link to={category.linkTo} state={{}}>
              <img src={category.imgSrc} alt='' />
            </Link>
            <h6>{category.name}</h6>
          </li>
        ))}
      </ul>

</div>
<div className="NewArrivals">
  <h1>New arrivals</h1>
  <NewArrival />
</div>
<div className="Bestselling">
<h1>Best selling</h1>
<ExploreBestSelling />
</div>
<div className="Salesoffer">
<h1>sales offer</h1>
<ExploreBestSelling />
</div>
<div className="Auction">
<h1>Auction</h1>
<ExploreBestSelling />
</div>

      <Footer />
    </div>
  );
};

export default CatFurnitureHomepage;