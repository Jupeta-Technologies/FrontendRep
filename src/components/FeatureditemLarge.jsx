import React,{Component} from 'react';
import '../compTester.css';
import {AiFillHeart,AiOutlineShoppingCart,AiOutlineEye} from "react-icons/ai"
//import beats from './images/beats.jpg';
//import ItemIMG from '../components/cardcomponents/itemIMG';
import FtitemIMGL from './cardcomponents/FtLargeIMG';
//import BuyBidbutton from './components/cardcomponents/buybidButton';


const FeatureditemLarge = (data) => {
    const {price,productName,imageFileUrl,sellingType,condition} = data;
    const date = new Date();
    const addcart = <AiOutlineShoppingCart className='shoppingcartIcon' />;
    const watchlist = <AiOutlineEye className='shoppingcartIcon' />;
    return ( 

            <div className='cC-fLarge gShadow' key={data.id}>
                <p className='itemConditionTag'>{condition}</p>
                <AiFillHeart  className='favoriteIcon'/>
                <FtitemIMGL src={imageFileUrl}/>
                <p className='itemName'>{productName}</p>
                <p className='itemPrice'>GHC {price}</p>
                {sellingType === 'BuyNow'?addcart:watchlist}
                


            </div>
     );
}

export default FeatureditemLarge;