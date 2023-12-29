import React from 'react';
import {AiFillBook,AiFillCamera, AiFillCar, AiFillHome } from 'react-icons/ai';
import { useLocation } from 'react-router-dom';
import home from '../images/home.jpeg'
import elec from '../images/elec.jpeg'
import automob from '../images/automobile.jpeg'
import fashion from '../images/fashion.jpeg'


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
            <div className="GCMenu_Container" style={currLoc.pathname =='/'?{marginTop:"0px"}:props.sx}>
            <ul>
                {categoryList.map((category) => (
                    <li style={{width: '20%',height: '190px', marginLeft: '20px', marginTop: '120px'}}>
                        {isSticky ? (<span className='CatgName'><b>{category.name}</b></span>):
                        (<>
                        <div style={{display: 'flex', flexDirection: 'column', width: '100%', height: '100%'}}>
                            <img src={category.imgSrc} alt='' style={{objectFit: 'cover', height: '80%', borderTopLeftRadius: '10px', borderTopRightRadius: '10px'}} />
                            <span><b>{category.name}</b></span>
                        </div>
                        </>)}
                    </li>
                ))}
            </ul>
            </div>
    </>);
};
export default GenCatMenu;