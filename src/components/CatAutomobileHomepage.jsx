import React from 'react';
import { Footer, CatHomeNavBar,NewArrival,ExploreBestSelling } from '../components';
import { Box } from '@mui/material';
import automob from '../images/auto.webp';
import car from '../images/car care.jpg';
import exterior from '../images/exterior.jpg';
import interior from '../images/interior.jpg';
import parts from '../images/parts.jpg';
import tyres from '../images/tyres .jpg';
import tools from '../images/tools .jpg';
import { useLocation, Link } from 'react-router-dom';
import './auto.css';


const CatAutomobileHomepage = ({sx}) => {
  const currLoc = useLocation();
  const categoryList = [
    {
      imgSrc: car,
      name: "Car care",
      linkTo: ""
    },
    {
      imgSrc: exterior,
      name: "Exterior accessories",
      linkTo: ""
    },
    {
      imgSrc: interior,
      name: "Interior eccessories",
      linkTo: ""
    },
    {
      imgSrc: parts,
      name: "Replacement parts",
      linkTo: ""
    },
    {
      imgSrc: tyres,
      name: "Tyres and wheels",
      linkTo: ""
    },
    {
      imgSrc: tools,
      name: "Tools and equipments",
      linkTo: ""
    }
  ];

  return (
    <div>
      <CatHomeNavBar />
      <Box
        sx={{
          position: 'relative',
          backgroundImage: `url(${automob})`,
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

export default CatAutomobileHomepage;