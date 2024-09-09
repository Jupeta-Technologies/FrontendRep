import React, { Component, } from 'react';
import { useNavigate } from 'react-router-dom';

const SellButton = () => {
    const nav = useNavigate();
    

    return (<p className='sellButton' onClick={()=>nav('/sell')}>SELL</p>  );

}
 
export default SellButton;