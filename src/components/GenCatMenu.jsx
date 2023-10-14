import React from 'react';
import {AiFillBook,AiFillCamera, AiFillCar, AiFillHome } from 'react-icons/ai';
import { useLocation } from 'react-router-dom';


const GenCatMenu = (props) =>{
    //General Categories Menu : Higher Category name and subcategories -> obj

    const currLoc = window.location;

    return (<>
            <div className="GCMenu_Container" style={currLoc.pathname =='/'?{marginTop:"0px"}:props.sx}>
            <ul>
                <li><AiFillCamera  className='CatgIcon'/><span className='CatgName'>Electronic</span>
                    <ul>
                        <li className='text-3xl'>sub 1</li>
                        <li>sub 2</li>
                        <li>sub 3</li>
                    </ul>
                </li>
                <li><AiFillHome className='CatgIcon' /><span className='CatgName'>Home</span></li>
                <li><AiFillCar className='CatgIcon' /><span className='CatgName'>Automobil</span></li>
                <li><AiFillBook className='CatgIcon' /><span className='CatgName'>Books</span></li>
            </ul>
            </div>
    </>);
};
export default GenCatMenu;