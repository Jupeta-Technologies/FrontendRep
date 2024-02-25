import React from 'react';
import { Link, useNavigate } from 'react-router-dom';


function BuyBidbutton({tag, productdata}) {
    //const tag = props.tag;
    const nav = useNavigate();
    const handleDetailClick = (prodData) =>{
        console.log(productdata);

        nav('/product-detail/',{state:productdata});
    }
    return ( 
        <div className="buybidButton" onClick={()=>{handleDetailClick()}}>{tag}</div>
    );
}

export default BuyBidbutton;