import React from 'react';
import {AiFillBook,AiFillCamera, AiFillCar, AiFillHome } from 'react-icons/ai';
import { useLocation } from 'react-router-dom';
import home from '../images/home.jpeg'
import elec from '../images/elec.jpeg'
import automob from '../images/automobile.jpeg'
import fashion from '../images/fashion-1.jpg'


const GenCatMenu = (props) =>{
    //General Categories Menu : Higher Category name and subcategories -> obj

    const currLoc = window.location;
    const {isSticky} = props;

    const categoryList = [
        {
            imgSrc : home,
            name: "Home"
        },
        {
            imgSrc: automob,
            name: "Automobile"
        },
        {
            imgSrc: elec,
            name: "Electronics"
        },
        {
            imgSrc: fashion, 
            name: "Fashion"
        }
    ]

    return (<>
            <div className="GCMenu_Container" style={currLoc.pathname ==='/'?{marginTop:"0px"}:props.sx}>
            <ul>
                {categoryList.map((category) => (
                    <li>
                        {isSticky ? (<>
                            <img src={category.imgSrc} alt=''/>
                            <h6>{category.name}</h6>
                        </>):
                        (<>
                            <img src={category.imgSrc} alt=''/>
                            <h6>{category.name}</h6>
                        </>)}
                    </li>
                ))}
            </ul>
            </div>
    </>);
};
export default GenCatMenu;