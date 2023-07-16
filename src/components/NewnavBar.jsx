import React, { Component, Text, View} from 'react';
import { AiOutlineShoppingCart,AiOutlineSearch,AiOutlineUser, AiOutlineHeart,AiOutlineEye, AiOutlineLogout,AiOutlineLogin } from 'react-icons/ai';
import {MdOutlineSell,MdOutlineManageAccounts} from 'react-icons/md';
import {CiLocationOff,CiReceipt,CiCircleChevDown} from 'react-icons/ci';
import { Badge, Typography,Avatar,Input,Button,Select,Option,selectClasses,IconButton } from '@mui/joy';
import CartListitem from './CartListitem';


class NewnavBar extends Component {
    state = {
        active: false,
        loggedin:false,
        searchFocused:false,
        cartevent:false,
        favIconevet:false,
        searchActive:false
      };
    handMenuIconClick = (x)=>{
       !this.state.active?this.setState({active:true}):this.setState({active:false});
        //console.log(this.state.active);
        

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
                        <Select placeholder="Select a Category" indicator={<CiCircleChevDown />} sx={{
                                width:160,
                                fontSize:'xs',
                                [`& .${selectClasses.indicator}`]: {
                                transition: '0.2s',
                                [`&.${selectClasses.expanded}`]: {
                                    transform: 'rotate(-180deg)',
                                },
                                },
                            }}>
                            <Option value='0'>All Categories</Option>
                            <Option value='1'>Consumer Electronic</Option>
                        </Select>
                        </div>
                        <div className="sBarcenter"><input type="text" name="search"  placeholder='Search for product..' onClick={this.handleSearch}/></div>
                        <div className="sBarright"><Button>Search</Button></div>
                    </div>
                    
                    <div className={this.state.searchFocused?"searchResult showDiv":"searchResult"}>
                        <ul>
                            <li>Result 1</li>
                            <li>Result 2</li>
                            <li>Result 3</li>
                        </ul>
                    </div>
                </div>
                <div className="right">
                    <ul>
                        <li><IconButton variant='plain' color='neutral'><AiOutlineSearch className='navicon' onClick={this.handleSearchicon}/></IconButton></li>
                        <li> <IconButton variant='plain' color='neutral' onClick={this.handleCartclick}><Badge badgeContent={'11'} color='danger' size='sm' variant='plain' badgeInset="5%" max={'9'} ><Typography fontSize="1.5rem"><AiOutlineShoppingCart className='navicon' /></Typography></Badge></IconButton>
                            <ul className={this.state.cartevent?"cartQview showDiv":"cartQview"}>
                            <CartListitem />
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
                            {this.state.loggedin?<li><AiOutlineLogout id="uMicon"/><span>Sign out </span></li>:<li onClick={this.handleSigninClick}><AiOutlineLogin id="uMicon"/><span>Sign in </span></li>}
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