import React, { useState, useEffect } from 'react';
import './searchFilterH.css';


function SearchFilter() {

    const search_filterMenu = [{title:'Condition',condKey:['New','Used','Refurbished']},
                               {title:'Price',condKey:['Under 49.99','49.99 to 99.99','Over 99.99']},
                               {title:'List Type',condKey:['Buy Now','Auction']},
                               {title:'Brand',condKey:['Apple','Samsung','Google','Sony','LG','Nike','Adidas','Puma']}
                              
                              ]

    return ( 
            <>
            <div className="srchFltr-Con">
            <div className="searchfilter-box">
                {search_filterMenu.map((flt)=>{return <div className='fltr-col'><h6>{flt.title}</h6><div className='fltr_items'>{flt.condKey.map((k)=>{return <span>{k}</span>})}</div>
                {flt.title === "Price"?<span><input type='number' style={{width:'60px',padding:'4px 16px',boxShadow:'var(--primaryShadow)',backgroundColor:'#FFF',borderRadius:'16px'}}></input>to<input type='number' style={{width:'60px',padding:'4px 16px',boxShadow:'var(--primaryShadow)',backgroundColor:'#FFF',borderRadius:'16px'}}></input></span>:''}</div>})}
                
            </div>
            </div>
            </> 
    );
}

export default SearchFilter;
