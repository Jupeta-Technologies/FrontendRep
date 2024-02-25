import { useContext, useEffect, useState } from "react";
import {AiFillHeart,AiOutlineShoppingCart,AiOutlineEye} from "react-icons/ai"
import beats from './images/beats.jpg';
import ItemIMG from './components/cardcomponents/itemIMG';
import BuyBidbutton from './components/cardcomponents/buybidButton';
import { Link } from 'react-router-dom';
import { Cartcontext } from "./context/context";



const ItemCardglobal = (prodData) => {
<<<<<<< HEAD
  
    const {price,productName,imageFileUrl,sellingType,condition, onAdd, productdata,id,summary} = prodData;
    const date = new Date();
    const addcart = <AiOutlineShoppingCart className='shoppingcartIcon' onAdd={onAdd} productdata={prodData}/>;
    const watchlist = <AiOutlineEye className='shoppingcartIcon' />;

    
=======
    const {price,productName,imageFileUrl,sellingType,condition,id,summary} = prodData;
    const date = new Date();
    const addcart = <AiOutlineShoppingCart className='shoppingcartIcon'  />;
    const watchlist = <AiOutlineEye className='shoppingcartIcon' />;
    const Globalstate = useContext(Cartcontext);
    const dispatch = Globalstate.dispatch;
    console.log(Globalstate);


>>>>>>> 482fba1087bf106804b867cb23aedaa6dea58f7a
    return ( 
        <div className='cardContainer' key={id}>
            <p className='itemConditionTag'>{condition}</p>
            <p className='auctionTime'>{date.toLocaleString()}</p>
            <AiFillHeart  className='favoriteIcon'/>
            <ItemIMG src={imageFileUrl}/>
            <Link to={`/product-detail/${id}`} className='itemNameLink'>
                <p className='itemName'>{productName}</p>
<<<<<<< HEAD
                <p className='itemBriefDscr'>{summary}</p>
                <p className='itemPrice'>¢{price}</p>
                
                
        <BuyBidbutton tag={sellingType === 'BuyNow' ? 'Buy Now' : 'Bid Now'} productdata={prodData}/>
      
=======
            </Link>
            <div className='itemBriefDscr'>{summary}</div>
            <p className='itemPrice'>¢{price}</p>
>>>>>>> 482fba1087bf106804b867cb23aedaa6dea58f7a

            {sellingType === 'BuyNow' ? addcart : watchlist}
        </div>
    );
}

export default ItemCardglobal;
