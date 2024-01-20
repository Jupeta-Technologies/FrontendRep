import React,{Component, useState, useEffect} from 'react';
import {AiFillHeart,AiOutlineShoppingCart,AiOutlineEye} from "react-icons/ai"
import beats from './images/beats.jpg';
import ItemIMG from './components/cardcomponents/itemIMG';
import BuyBidbutton from './components/cardcomponents/buybidButton';
import { Link } from 'react-router-dom';



const ItemCardglobal = (prodData) => {
    const {price,productName,imageFileUrl,sellingType,condition, onAdd, productdata,id,summary} = prodData;
    const date = new Date();
    const addcart = <AiOutlineShoppingCart className='shoppingcartIcon'  onAdd={onAdd} productdata={prodData}/>;
    const watchlist = <AiOutlineEye className='shoppingcartIcon' />;
    return ( 
            
            <div className='cardContainer' key={id}>
                <p className='itemConditionTag'>{condition}</p>
                <p className='auctionTime'>{date.toLocaleString()}</p>
                <AiFillHeart  className='favoriteIcon'/>
                <ItemIMG src={imageFileUrl}/>
                <p className='itemName'>{productName}</p>
                <p className='itemBriefDscr'>{summary}</p>
                <p className='itemPrice'>¢{price}</p>
                
                <Link to={`/product-detail/${id}`}>
        <BuyBidbutton tag={sellingType === 'BuyNow' ? 'Buy Now' : 'Bid Now'} onAdd={onAddToCart} />
      </Link>

      {sellingType === 'BuyNow' ? addcart : watchlist}

            </div>
     );
}

export default ItemCardglobal;

