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
                {/* <li>
                    {isSticky ? (<span className='CatgName'>Home</span>):
                    (<>
                    <div>
                        <img src={home} alt='' style={{objectFit: 'cover'}} /><span>Home</span>
                    </div>
                    </>)}
                </li>
                <li>
                    {isSticky ? (<span className='CatgName'>Automobile</span>):
                    (<>
                    <div>
                        <img src={automob} alt='' style={{objectFit: 'cover'}} /><span>Automobile</span>
                    </div>
                    </>)}
                </li>
                <li>
                    {isSticky ? (<span className='CatgName'>Electronics</span>):
                    (<>
                    <div>
                        <img src={elec} alt='' style={{objectFit: 'cover'}} /><span>Electronics</span>
                    </div>
                    </>)}
                    <ul style={{backgroundColor: 'red', width: '400px', height: '200px'}}>
                        <li className='text-3xl'>sub 1</li>
                        <li>sub 2</li>
                        <li>sub 3</li>
                    </ul>
                </li>
                <li>
                    {isSticky ? (<span className='CatgName'>Fashion</span>):
                    (<>
                    <div>
                        <img src={fashion} alt='' style={{objectFit: 'cover'}} /><span>Fashion</span>
                    </div>
                    </>)}
                </li> */}
                {categoryList.map((category) => (
                    <li style={{width: '10%',height: '150px', marginLeft: '20px', marginTop: '80px'}}>
                        {isSticky ? (<span className='CatgName'>{category.name}</span>):
                        (<>
                        <div style={{display: 'flex', flexDirection: 'column', width: '100%', height: '100%'}}>
                            <img src={category.imgSrc} alt='' style={{objectFit: 'cover', height: '80%', borderTopLeftRadius: '10px', borderTopRightRadius: '10px'}} />
                            <span>{category.name}</span>
                        </div>
                        </>)}
                    </li>
                ))}
            </ul>
            </div>
    </>);
};
export default GenCatMenu;