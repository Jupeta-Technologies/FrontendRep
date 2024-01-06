import React,{Component, useState, useEffect} from 'react';
import {AiFillHeart,AiOutlineShoppingCart,AiOutlineEye} from "react-icons/ai"
import beats from './images/beats.jpg';
import ItemIMG from './components/cardcomponents/itemIMG';
import BuyBidbutton from './components/cardcomponents/buybidButton';
import { Link } from 'react-router-dom';



const ItemCardglobal = ({ id, price, productName, imageFileUrl, sellingType, condition }) => {
  const date = new Date();
  const addcart = <AiOutlineShoppingCart className='shoppingcartIcon' />;
  const watchlist = <AiOutlineEye className='shoppingcartIcon' />;

  const [cartItems, setCartItems] = useState([]);

  const onAddToCart = () => {
    const itemToAdd = { id, productName, price, imageFileUrl, sellingType, condition, qty: 1 };
    const updatedCart = [...cartItems, itemToAdd];
    setCartItems(updatedCart);
    localStorage.setItem('Cart', JSON.stringify(updatedCart));
  };

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('Cart')) || [];
    setCartItems(storedCart);
  }, []);


    return ( 
            
            <div className='cardContainer' key={id}>
                <p className='itemConditionTag'>{condition}</p>
                <p className='auctionTime'>{date.toLocaleString()}</p>
                <AiFillHeart  className='favoriteIcon'/>
                <ItemIMG src={imageFileUrl}/>
                <p className='itemName'>{productName}</p>
                <p className='itemBriefDscr'>True Wireless Noise Cancelling Earbuds</p>
                <p className='itemPrice'>¢{price}</p>
                
                <Link to={`/product-detail/${id}`}>
        <BuyBidbutton tag={sellingType === 'BuyNow' ? 'Buy Now' : 'Bid Now'} onAdd={onAddToCart} />
      </Link>

      {sellingType === 'BuyNow' ? addcart : watchlist}

            </div>
     );
}

export default ItemCardglobal;

