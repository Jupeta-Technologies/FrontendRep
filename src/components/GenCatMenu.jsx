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

    return (<>
            <div className="GCMenu_Container" style={currLoc.pathname =='/'?{marginTop:"0px"}:props.sx}>
            <ul>
                <li>{isSticky ? (<span className='CatgName'>Electronic</span>):
                (<>
                <div>
                    <img src={elec} alt='' style={{objectFit: 'cover'}} /><span>Electronics</span>
                </div>
                </>)}
                    <ul>
                        <li className='text-3xl'>sub 1</li>
                        <li>sub 2</li>
                        <li>sub 3</li>
                    </ul>
                </li>
                <li>
                    {isSticky ? (<span className='CatgName'>Home</span>):
                    (<>
                    <div>
                        <img src={home} alt='' style={{objectFit: 'cover'}} /><span>Home</span>
                    </div>
                    </>)}
                </li>
                <li>{isSticky ? (<span className='CatgName'>Automobile</span>):
                (<>
                <div>
                    <img src={automob} alt='' style={{objectFit: 'cover'}} /><span>Automobile</span>
                </div>
                </>)}</li>
                <li>{isSticky ? (<span className='CatgName'>Fashion</span>):
                (<>
                <div>
                    <img src={fashion} alt='' style={{objectFit: 'cover'}} /><span>Fashion</span>
                </div>
                </>)}</li>
            </ul>
            </div>
    </>);
};
export default GenCatMenu;