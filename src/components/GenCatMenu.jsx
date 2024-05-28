import React from 'react';
import { AiFillBook, AiFillCamera, AiFillCar, AiFillHome } from 'react-icons/ai';
import { useLocation, Link } from 'react-router-dom';
import home from '../images/home.jpeg';
import elec from '../images/elec.jpeg';
import automob from '../images/automobile.jpeg';
import fashion from '../images/fashion-1.jpg';

const GenCatMenu = ({ isSticky, sx }) => {
  const currLoc = useLocation();

  const categoryList = [
    {
      imgSrc: home,
      name: "Furniture",
      linkTo: "/catHome"
    },
    {
      imgSrc: automob,
      name: "Automobile",
      linkTo: "/catHome"
    },
    {
      imgSrc: elec,
      name: "Electronic",
      linkTo: "/catHome"
    },
    {
      imgSrc: fashion,
      name: "Fashion",
      linkTo: "/catHome"
    }
  ];

  return (
    <div
      className="GCMenu_Container"
      style={{
        marginTop: currLoc.pathname === '/' ? "0px" : "20px",
        ...sx
      }}
    >
      <ul>
        {categoryList.map((category, index) => (
          <li key={index}>
            <Link to={category.linkTo} state={{ selectedCategory: category.name }}>
              <img src={category.imgSrc} alt='' />
            </Link>
            <h6>{category.name}</h6>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GenCatMenu;