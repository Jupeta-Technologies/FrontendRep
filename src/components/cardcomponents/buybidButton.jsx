import React from 'react';
import { Link, useNavigate } from 'react-router-dom';


function BuyBidbutton({tag,onAdd,productdata}) {
    //const tag = props.tag;
    return ( 
        <div className="buybidButton" onClick={() => onAdd(productdata)}>{tag}</div>
    );
}

export default BuyBidbutton;