import React, { Component, Text, View, useEffect, useState} from 'react';
import { AiOutlineShoppingCart,AiOutlineSearch,AiOutlineUser, AiOutlineHeart,AiOutlineEye, AiOutlineLogout,AiOutlineLogin } from 'react-icons/ai';
import {MdOutlineSell,MdOutlineManageAccounts} from 'react-icons/md';
import {CiLocationOff,CiReceipt,CiCircleChevDown} from 'react-icons/ci';
import {Typography,Avatar,Input,Button,Option,IconButton } from '@mui/joy';
import { Badge } from '@mui/material';
import CartListitem from './CartListitem';
import beats from '../images/beats.jpg';
import nikeVapor from '../images/nikeVapor.png';
import { jupetaSEO } from './SEOApi';
import { Link } from 'react-router-dom';



const  NewnavBar = () => {
    /* state = {
        active: false,
        loggedin:false,
        searchFocused:false,
        cartevent:false,
        favIconevet:false,
        searchActive:false,
        searchKey:'',
        searchCatg:'0',
        unicart:[{}]
      }; */
      const [loggedin,setLoggedin] = useState(false);
      const [searchKey,setSearchKey] = useState('');
      const [searchCatg,setSearchCatg] = useState('0');
      const [searchActive,setSearchActive] = useState(false);



    const handMenuIconClick = (x)=>{
       !this.state.active?this.setState({active:true}):this.setState({active:false});
        console.log(this.state.active);
      }
    const handleSigninClick = () => {
        !loggedin?setLoggedin(true):setLoggedin(false);
    }
    const handleSearchicon = () =>{
        !searchActive?setSearchActive(true):setSearchActive(false);
    }

    const handleSearchCat = (event) =>{
        setSearchCatg(event.target.value);
        console.log(searchCatg);
    }
    const handleSearchInput = (e) =>{
        setSearchKey(e.target.value);
        console.log(searchKey);
    }
    const handelSEO = () => {
        jupetaSEO({
            keyword:searchKey,
            PageNumber:1,
            PageSize:10,
            isDescending:true

        }).then((responds) => {
            if(responds.status === 200){
                console.log(responds.data);
            }else{console.log("Item not found");}
        }).catch(err => {console.error(err); console.log("Item not found");});
    }

    const SearchKeyIndexes =['Apple', 'Samsung', 'Macbook', 'Laptop'];

        return (
            <>
            <div className={searchActive?'navBarv0 sBarColor':'navBarv0'} >
                <div className="left">
                    
                    <Link to={'/'} style={{textDecoration:'none', color:'#000'}}><Typography fontSize={'xl'} color='#000'>jUPETA</Typography></Link>
                    <CiLocationOff />
                </div>
                <div className="center">
                    <div className={searchActive?"navSearchBar showOpacity":"navSearchBar"}>
                        <div className="sBarleft">
                        <select placeholder="Select a Category"  value={searchCatg} onChange={handleSearchCat}>
                            <option value="0">Select a Category</option>
                            <option value='1'>All Categories</option>
                            <option value='2'>Consumer Electronic</option>
                        </select>
                        </div>
                        <div className="sBarcenter"><input type="text" name="search"  placeholder='Search for product..' onChange={handleSearchInput}/></div>
                        <div className="sBarright"><Button onClick={handelSEO}>Search</Button></div>
                    </div>
                    
                    {searchKey !== '' && <div className="searchResult showDiv">
                        <ul>
                            {SearchKeyIndexes.map((keyword,index)=>{return  keyword.toLowerCase().includes(searchKey.toLowerCase()) &&<li key={index}>{keyword}</li>})}
                        </ul>
                    </div>}
                    
                </div>
                <div className="right">
                    <ul>
                        <li><IconButton variant='plain' color='neutral'><AiOutlineSearch className='navicon' onClick={handleSearchicon}/></IconButton></li>
                        <li> <IconButton variant='plain' color='neutral' ><Badge badgeContent={'11'}  color='primary' size='sm' variant='plain' badgeInset="8%" max={'9'} ><AiOutlineShoppingCart className='navicon' /></Badge></IconButton>
                            <ul className={"cartQview"}>
                            <CartListitem imgsrc={beats} itemName="Beats by dre Studio pods" />
                            <CartListitem imgsrc={nikeVapor} itemName="Nike Air VaporMax 2023 Flyknit"/>
                            <Button>Got to cart</Button>
                            </ul>
                        </li>
                        <li><IconButton variant='plain' color='neutral'><AiOutlineHeart className='navicon fav'/></IconButton>
                        <ul className={"favQview"}>
                            <li>Favorite item 1</li>
                            <li>Favorite item 2</li>
                            <li>Favorite item 3</li>
                        </ul>
                        </li>
                        <li>{loggedin?<Avatar onClick={handMenuIconClick} className='userIcon'>{'J'}</Avatar>:<IconButton variant='plain' color='neutral'><AiOutlineUser className='navicon userIcon' onClick={handMenuIconClick}/></IconButton>}
                        <ul className={"userMenu showMenu"}>
                            <li><MdOutlineSell id='uMicon'/> <span>Sell</span></li>
                            <li><AiOutlineEye id='uMicon'/> <span>Watch List</span></li>
                            <li><CiReceipt id='uMicon'/> <span>Orders</span></li>
                            <li><MdOutlineManageAccounts id='uMicon'/> <span>My account</span></li>
                            {loggedin?<li><Link to={'/login'}><AiOutlineLogout id="uMicon"/><span>Sign out </span></Link></li>:<li onClick={handleSigninClick}><Link to={'/login'}><AiOutlineLogin id="uMicon"/><span>Sign in </span></Link></li>}
                        </ul>
                        </li>
                    </ul>
                    
                   
                    
                    
                </div>
            </div>
            <div >
                
            </div>
            </>
        );
    }

 
export default NewnavBar;