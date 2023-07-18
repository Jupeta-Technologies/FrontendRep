import React, { Component, Text, View, useEffect} from 'react';
import { AiOutlineShoppingCart,AiOutlineSearch,AiOutlineUser, AiOutlineHeart,AiOutlineEye, AiOutlineLogout,AiOutlineLogin } from 'react-icons/ai';
import {MdOutlineSell,MdOutlineManageAccounts} from 'react-icons/md';
import {CiLocationOff,CiReceipt,CiCircleChevDown} from 'react-icons/ci';
import { Badge, Typography,Avatar,Input,Button,Option,IconButton } from '@mui/joy';
import CartListitem from './CartListitem';
import beats from '../images/beats.jpg';
import nikeVapor from '../images/nikeVapor.png';
import { jupetaSEO } from './SEOApi';
import { Link } from 'react-router-dom';



class NewnavBar extends Component {
    state = {
        active: false,
        loggedin:false,
        searchFocused:false,
        cartevent:false,
        favIconevet:false,
        searchActive:false,
        searchKey:'',
        searchCatg:'0',
        unicart:[{}]
      };

      componentDidMount(){
        console.log("useeffect mounted: "+ this.state.searchCatg +"@"+Date());
        window.localStorage.setItem("CART_ITEMS",JSON.stringify({searchTAG:this.state.searchKey}));
      }
      componentDidUpdate(){
        console.log("useeffect updated: "+this.state.searchCatg +"@"+Date());
        window.localStorage.setItem("CART_ITEMS",JSON.stringify({searchTAG:this.state.searchCatg}));
      }

    handMenuIconClick = (x)=>{
       !this.state.active?this.setState({active:true}):this.setState({active:false});
        console.log(this.state.active);
      }
    handleSigninClick = () => {
        !this.state.loggedin?this.setState({loggedin:true}):this.setState({loggedin:false});
    }
    handleSearch = () =>{
        this.setState({searchFocused:true});
    }
    handleSearchicon = () =>{
        !this.state.searchActive?this.setState({searchActive:true}):this.setState({searchActive:false});
    }
    handleCartclick = () =>{
        !this.state.cartevent?this.setState({cartevent:true}):this.setState({cartevent:false});
    }
    handleFavclick = () =>{
        !this.state.favIconevet?this.setState({favIconevet:true}):this.setState({favIconevet:false});
    }

    handleSearchCat = (event) =>{
        this.setState({searchCatg:(event.target.value)});
        console.log(this.state.searchCatg);
    }
    handleSearchInput = (e) =>{
        this.setState({searchKey:e.target.value});
        console.log(this.state.searchKey);
    }
    handelSEO = () => {
        jupetaSEO({
            keyword:this.state.searchKey,
            PageNumber:1,
            PageSize:10,
            isDescending:true

        }).then((responds) => {
            if(responds.status === 200){
                console.log(responds.data);
            }else{console.log("User not found");}
        }).catch(err => {console.error(err); console.log("User not found");});
    }

    SearchKeyIndexes =['Apple', 'Samsung', 'Macbook', 'Laptop'];

    render() { 
        return (
            <>
            <div className={this.state.searchActive?'navBarv0 sBarColor':'navBarv0'} >
                <div className="left">
                    
                    <Typography fontSize={'xl'} color='#000'>jUPETA</Typography>
                    <CiLocationOff />
                </div>
                <div className="center">
                    <div className={this.state.searchActive?"navSearchBar showOpacity":"navSearchBar"}>
                        <div className="sBarleft">
                        <select placeholder="Select a Category"  value={this.state.searchCatg} onChange={this.handleSearchCat}>
                            <option value="0">Select a Category</option>
                            <option value='1'>All Categories</option>
                            <option value='2'>Consumer Electronic</option>
                        </select>
                        </div>
                        <div className="sBarcenter"><input type="text" name="search"  placeholder='Search for product..' onClick={this.handleSearch} onChange={this.handleSearchInput}/></div>
                        <div className="sBarright"><Button onClick={this.handelSEO}>Search</Button></div>
                    </div>
                    
                    {this.state.searchKey !== '' && <div className="searchResult showDiv">
                        <ul>
                            {this.SearchKeyIndexes.map((keyword,index)=>{return this.state.searchKey === keyword &&<li key={index}>{keyword}</li>})}
                        </ul>
                    </div>}
                    
                </div>
                <div className="right">
                    <ul>
                        <li><IconButton variant='plain' color='neutral'><AiOutlineSearch className='navicon' onClick={this.handleSearchicon}/></IconButton></li>
                        <li> <IconButton variant='plain' color='neutral' onClick={this.handleCartclick}><Badge badgeContent={'11'} color='danger' size='sm' variant='plain' badgeInset="5%" max={'9'} ><Typography fontSize="1.5rem"><AiOutlineShoppingCart className='navicon' /></Typography></Badge></IconButton>
                            <ul className={this.state.cartevent?"cartQview showDiv":"cartQview"}>
                            <CartListitem imgsrc={beats} itemName="Beats by dre Studio pods" />
                            <CartListitem imgsrc={nikeVapor} itemName="Nike Air VaporMax 2023 Flyknit"/>
                            <Button>Got to cart</Button>
                            </ul>
                        </li>
                        <li><IconButton variant='plain' color='neutral'><AiOutlineHeart className='navicon fav' onClick={this.handleFavclick}/></IconButton>
                        <ul className={this.state.favIconevet?"favQview showDiv":"favQview"}>
                            <li>Favorite item 1</li>
                            <li>Favorite item 2</li>
                            <li>Favorite item 3</li>
                        </ul>
                        </li>
                        <li>{this.state.loggedin?<Avatar onClick={this.handMenuIconClick} className='userIcon'>{'J'}</Avatar>:<IconButton variant='plain' color='neutral'><AiOutlineUser className='navicon userIcon' onClick={this.handMenuIconClick}/></IconButton>}
                        <ul className={!this.state.active?"userMenu":"userMenu showMenu"}>
                            <li><MdOutlineSell id='uMicon'/> <span>Sell</span></li>
                            <li><AiOutlineEye id='uMicon'/> <span>Watch List</span></li>
                            <li><CiReceipt id='uMicon'/> <span>Orders</span></li>
                            <li><MdOutlineManageAccounts id='uMicon'/> <span>My account</span></li>
                            {this.state.loggedin?<li><Link to={'/login'}><AiOutlineLogout id="uMicon"/><span>Sign out </span></Link></li>:<li onClick={this.handleSigninClick}><Link to={'/login'}><AiOutlineLogin id="uMicon"/><span>Sign in </span></Link></li>}
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
}
 
export default NewnavBar;