import React from 'react';
import './compTester.css';
import {AiFillHeart,AiOutlineShoppingCart,AiOutlineEye} from "react-icons/ai"
import beats from './images/beats.jpg';
import ItemIMG from './components/cardcomponents/itemIMG';
import BuyBidbutton from './components/cardcomponents/buybidButton';
const ItemCardglobal= () => {
    const item =[{id:'001', itemName:'Beats Studio Buds', itemTag:['USED','BUY NOW'], price:100.99}]
    const date = new Date();
    const addcart = <AiOutlineShoppingCart className='shoppingcartIcon' />;
    const watchlist = <AiOutlineEye className='shoppingcartIcon' />;
    console.log(item[0]);
    return ( 
   
            <div className='cardContainer gShadow'>
                <p className='itemConditionTag'>{item[0].itemTag[0]}</p>
                <p className='auctionTime'>{date.toLocaleString()}</p>
                <AiFillHeart  className='favoriteIcon'/>
                <ItemIMG src={beats}/>
                <p className='itemName'>{item[0].itemName}</p>
                <p className='itemBriefDscr'>True Wireless Noise Cancelling Earbuds</p>
                <p className='itemPrice'>GHC {item[0].price}</p>
                
                <BuyBidbutton tag={item[0].itemTag[1]}/>
                {item[0].itemTag[1] === 'BUY NOW'?addcart:watchlist}
                


            </div>
     );
}

export default ItemCardglobal;