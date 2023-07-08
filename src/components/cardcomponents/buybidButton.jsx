import React from 'react';

function BuyBidbutton({tag, onAdd, productdata}) {
    //const tag = props.tag;
    return ( 
        <div className="buybidButton" onClick={() => onAdd(productdata)}>{tag}</div>
        //<button>Add</button>
    );
}

export default BuyBidbutton;