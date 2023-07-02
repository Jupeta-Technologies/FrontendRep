import React,{Component} from 'react';
import './compTester.css';
import {AiFillHeart,AiOutlineShoppingCart,AiOutlineEye} from "react-icons/ai"
import beats from './images/beats.jpg';
import ItemIMG from './components/cardcomponents/itemIMG';
import BuyBidbutton from './components/cardcomponents/buybidButton';


const ItemCardglobal = (data) => {
    const {price,productName,imageFileUrl,sellingType,condition} = data;
    const item =[{itemTag:['USED','BID NOW']}]
    const date = new Date();
    const addcart = <AiOutlineShoppingCart className='shoppingcartIcon' />;
    const watchlist = <AiOutlineEye className='shoppingcartIcon' />;
    return ( 

            <div className='cardContainer gShadow' key={data.id}>
                <p className='itemConditionTag'>{condition}</p>
                <p className='auctionTime'>{date.toLocaleString()}</p>
                <AiFillHeart  className='favoriteIcon'/>
                <ItemIMG src={imageFileUrl}/>
                <p className='itemName'>{productName}</p>
                <p className='itemBriefDscr'>True Wireless Noise Cancelling Earbuds</p>
                <p className='itemPrice'>GHC {price}</p>
                
                <BuyBidbutton tag={sellingType === 'BuyNow'?'Buy Now': 'Bid Now'}/>
                {sellingType === 'BuyNow'?addcart:watchlist}
                


            </div>
     );
}

export default ItemCardglobal;