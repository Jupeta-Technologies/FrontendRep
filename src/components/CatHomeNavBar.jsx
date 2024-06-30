import React, { Component, Text, View, useEffect, useState,useRef} from 'react';
import { AiOutlineShoppingCart,AiOutlineSearch,AiOutlineUser, AiOutlineHeart,AiOutlineEye, AiOutlineLogout,AiOutlineLogin } from 'react-icons/ai';
import {MdOutlineSell,MdOutlineManageAccounts} from 'react-icons/md';
import {CiLocationOff,CiReceipt,CiCircleChevDown} from 'react-icons/ci';
import {Typography,Avatar,Input,Button,Option,IconButton } from '@mui/joy';
import { Badge } from '@mui/material';
import CartListitem from './CartListitem';
import {jupetaSE}  from '../APIs/SearchEngineApi';
import { Link } from 'react-router-dom';
import { Refresh, Translate } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import './scrollgencat.css';
import CatHomePage from '../PAGES/CatHomePage';


const  CatHomeNavbar = () => {

      const [loggedin,setLoggedin] = useState(false);
      const [searchKey,setSearchKey] = useState('');
      const [searchCatg,setSearchCatg] = useState('0');
      const [searchActive,setSearchActive] = useState(false);
      const [srching,setsrching] = useState(false);
      const [isAuth,setisAuth] = useState(false);
      const [cart,setCart] = useState([]);
      const [srchUpdt,setSrchUpdt] = useState(false);
      const [isSticky, setIsSticky] = useState(false);
     

      
      
    
    
    const nav = useNavigate();

    const srchRef = useRef();

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
        //setsrching(true);
    }
    const handelSEO = () => {
        searchKey == ''?window.location.reload():
        jupetaSE({
            keyword:searchKey
            //PageNumber:1,
            //PageSize:10,
            //isDescending:true

        }).then((responds) => {
        
            responds.status === 200 && nav('/srchResult',{ state: responds.data.responseData});
            
            localStorage.setItem("SearchResult",JSON.stringify(responds.data.responseData));
            
        }).then(()=>{}).catch(err => {console.error(err); console.log("Item not found");});
        
    }

    //Handling of search suggestion div
    useEffect(()=>{
        let handler = (e) =>{
            if(srchRef.current.contains(e.target)){
                setsrching(true);
            }else(setsrching(false));
        

        };

        document.addEventListener("mousedown",handler,true);

        return()=>{
            document.removeEventListener("mousedown",handler,true);
        }
      })
      
    //Handling of search suggestion div
    useEffect(() => {
        let handler = (e) => {
          if (srchRef.current && srchRef.current.contains(e.target)) {
            setsrching(true);
          } else {
            setsrching(false);
          }
        };
      
        document.addEventListener("mousedown", handler);
      
        return () => {
          document.removeEventListener("mousedown", handler, true);
        };
      }, [srchRef]);
      

    useEffect(()=>{
        console.log('re-rendered');
        localStorage.setItem("srchUpdt",JSON.stringify(srchUpdt));
    },[]);
    
    useEffect(()=>{
        setLoggedin(true);
        setisAuth(JSON.parse(localStorage.getItem("AuthStatus")));
    },[loggedin]);

    //Navbar cart update/refresh work around --- optimization needed
    const updateNavCart = () =>{
        setCart(JSON.parse(localStorage.getItem("Cart")));
    };
    
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 550){
                setIsSticky(true);
            }
            else{
                setIsSticky(false);
            }
        }
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    },[])

    

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
                        <div className="sBarcenter"><input type="text" name="search" ref={srchRef} placeholder='Search for product..' onChange={handleSearchInput} /></div>
                        <div className="sBarright"><Button onClick={()=>{handelSEO(); setSrchUpdt(!srchUpdt);setsrching(false) }}>Search</Button></div>
                    </div>
                    
                    <div className={srching?"searchResult showDiv":"searchResult"}>
                        <ul>
                            {SearchKeyIndexes.map((keyword,index)=>{return  keyword.toLowerCase().includes(searchKey.toLowerCase()) &&<li key={index}>{keyword}</li>})}
                        </ul>
                    </div>
                    
                </div>
                <div className="right">
                    <ul>
                        <li style={{cursor:'pointer'}}><AiOutlineSearch onClick={handleSearchicon} id='navSicon'/></li>
                        <li onMouseOver={updateNavCart} ><AiOutlineShoppingCart id='navicon'/>
                            <ul className={"cartQview"}>
                            {
                                cart !== null && cart.length> 0 ? cart.map((cartData,id) =>{ 
                                    return (
                                    <CartListitem  {...cartData} key={id}/>);
                                }):null
                            }
                            {cart.length === 0?<p style={{width:"100%", textAlign:"center"}}>Cart is empty</p>:<Button onClick={()=>{nav('/cart')}}>Got to cart</Button>}
                            </ul>
                        </li>
                        <li className='fav'><AiOutlineHeart id='navicon'/>
                        <ul className={"favQview"}>
                            
                        </ul>
                        </li>
                        <li>{isAuth?<Avatar id='userIcon'>E</Avatar>:<AiOutlineUser id='navicon'/>}
                        <ul className={"userMenu showMenu"}>
                            <li><MdOutlineSell id='uMicon'/> <span>Sell</span></li>
                            <li><AiOutlineEye id='uMicon'/> <span>Watch List</span></li>
                            <li><CiReceipt id='uMicon'/> <span>Orders</span></li>
                            <li><MdOutlineManageAccounts id='uMicon'/> <span>My account</span></li>
                            {isAuth?<li onClick={()=>{localStorage.setItem("AuthStatus",false)}}><Link to={'/login'}><AiOutlineLogout id="uMicon"/><span>Sign out </span></Link></li>:<li><Link to={'/login'}><AiOutlineLogin id="uMicon"/><span>Sign in </span></Link></li>}
                        </ul>
                        </li>
                    </ul>    
                </div>
            </div>
            
            </>
        );
    }

 
export default CatHomeNavbar;