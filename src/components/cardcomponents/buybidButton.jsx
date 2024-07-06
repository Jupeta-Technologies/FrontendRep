import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';


function BuyBidbutton({tag,productdata}) {

    const {addToCart} = useCart();

    const handleAddtoCart = () =>{
        addToCart(productdata);

    }

    return ( 
        <div className="buybidButton" onClick={handleAddtoCart}>{tag}</div>
    );
}

export default BuyBidbutton;