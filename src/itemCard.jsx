import { useContext, useEffect, useState } from "react";
import {AiFillHeart,AiOutlineShoppingCart,AiOutlineEye} from "react-icons/ai"
import beats from './images/beats.jpg';
import ItemIMG from './components/cardcomponents/itemIMG';
import BuyBidbutton from './components/cardcomponents/buybidButton';
import { Link } from 'react-router-dom';
import { Cartcontext } from "./context/context";



const ItemCardglobal = (prodData) => {
    const {price,productName,imageFileUrl,sellingType,condition,id,summary,onAdd} = prodData;
    const date = new Date();
    const addcart = <AiOutlineShoppingCart className='shoppingcartIcon' onClick={() => onAdd(prodData)} />;
    const watchlist = <AiOutlineEye className='shoppingcartIcon' />;
    const Globalstate = useContext(Cartcontext);
    const dispatch = Globalstate.dispatch;
    //console.log(Globalstate);

    const initCart = JSON.parse(localStorage.getItem("Cart"));
    const [cartItems, setCartItems] = useState([]);
    
    const onAdd1 = (prodData) => {
        console.log(prodData);
        const exist = cartItems.find(x => x.id === prodData.id);
        if (exist) {
          setCartItems(cartItems.map(x => x.id === prodData.id ? { ...exist, qty: exist.qty + 1 } : x));
        } else {
          setCartItems([...cartItems, { ...prodData, qty: 1 }]);
        }
      };
    


    return ( 
        <div className='cardContainer' key={id}>
            <p className='itemConditionTag'>{condition}</p>
            <p className='auctionTime'>{date.toLocaleString()}</p>
            <AiFillHeart  className='favoriteIcon'/>
            <ItemIMG src={imageFileUrl}/>
            <Link to={`/product-detail/${id}`} className='itemNameLink'>
                <p className='itemName' onClick={()=>{localStorage.setItem("setQuickbuy",null)}}>{productName}</p>
            </Link>
            <div className='itemBriefDscr'>{summary}</div>
            <p className='itemPrice'>¢{price}</p>
            <BuyBidbutton tag={sellingType === 'BuyNow'?'Buy Now': 'Bid Now'} onAdd={onAdd}  productdata={prodData}/>
                {sellingType === 'BuyNow'?addcart:watchlist}

            {sellingType === 'BuyNow' ? addcart : watchlist}
        </div>
    );
}

export default ItemCardglobal;
