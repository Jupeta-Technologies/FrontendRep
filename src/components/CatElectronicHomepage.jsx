import React from 'react';
import { Footer, CatHomeNavBar,NewArrival,ExploreBestSelling } from '../components';
import { Box } from '@mui/material';
import techhome from '../images/tech.jpg';
import phones from '../images/phones.jpg'; 
import laptops from '../images/laptop.jpg'; 
import homeapp from '../images/homeapp.jpg'; 
import accessories from '../images/techass.jpg'; 

import './elec.css';
import { useLocation, Link } from 'react-router-dom';
import JupetaECnavBar from './JupetaECnavBar';


const CatElectronicHomepage = ({ sx }) => {
  const currLoc = useLocation();
  const categoryList = [
    {
      imgSrc: phones,
      name: "Phones",
      linkTo: ""
    },
    {
      imgSrc: laptops,
      name: "Laptops",
      linkTo: ""
    },
    {
      imgSrc: homeapp,
      name: "Home appliances",
      linkTo: ""
    },
    {
      imgSrc: accessories,
      name: "Tech accessories",
      linkTo: ""
    }
  ];

  return (
    <div>
      <JupetaECnavBar page={"nctgm"}/>
      <Box
        sx={{
          position: 'relative',
          backgroundImage: `url(${techhome})`,
          backgroundSize: 'cover',
          height: '100vh',
          width: '100vw',
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


export default CatElectronicHomepage;