import React from 'react';
import { Footer, CatHomeNavBar,NewArrival,ExploreBestSelling } from '../components';
import { Box,Button } from '@mui/material';
import fashionhome from '../images/fashionhero.png'; 
import men from '../images/men.jpg'; 
import women from '../images/women.jpg'; 
import accessories from '../images/accessories.jpg'; 
import unisex from '../images/unisex.jpg'; 

import './fashion.css';
import { useLocation, Link } from 'react-router-dom';
import JupetaECnavBar from './JupetaECnavBar';




const CatFashionHomepage = ({ sx })  => {
  const currLoc = useLocation();
  const categoryList = [
    {
      imgSrc: men,
      name: "Men",
      linkTo: ""
    },
    {
      imgSrc: women,
      name: "Women",
      linkTo: ""
    },
    {
      imgSrc: accessories,
      name: "Accesories",
      linkTo: ""
    },
    {
      imgSrc: unisex,
      name: "Unisex",
      linkTo: ""
    }
  ];

  return (
    <div>
      <JupetaECnavBar page={"nctgm"}/>
      <Box
        sx={{
          position: 'relative',
          backgroundImage: `url(${fashionhome})`,
          backgroundSize: 'cover',
          height: '100vh',
          width: '100vw',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          top: '0',
        }}
      >
       <div className='verticalContainer'>
  <div className='text'>
    latest trends in fashion
  </div>
  <div className='boldText'>
    Discover Your Perfect Style
  </div>
  <Button variant="contained" color="primary">
DISCOVER  </Button>
</div>
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


export default CatFashionHomepage;