import React from 'react';

function BuyBidbutton(props) {
    const tag = props.tag;
    return ( 
        <div className="buybidButton">{tag}</div>
    );
}

export default BuyBidbutton;