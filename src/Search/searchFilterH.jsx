import React, { useState, useEffect } from 'react';
import './searchFilterH.css';


function SearchFilter() {
    return ( 
            <>
            <div className="srchFltr-Con">
            <div className="searchfilter-box">
                <div className="fltr-col">
                    <h6>Condition</h6>
                    <span>New</span>
                    <span>Used</span>
                    <span>Refurbished</span>
                </div>
                <div className="fltr-col">
                    <h6>Price</h6>
                    <span>Under 49.99</span>
                    <span>49.99 to 99.99</span>
                    <span>Over 99.99</span>
                    <span><span style={{width:'40px',padding:'4px 16px',boxShadow:'var(--primaryShadow)',backgroundColor:'#FFF',borderRadius:'16px'}}>20</span>to<span style={{width:'40px',padding:'4px 16px',boxShadow:'var(--primaryShadow)',backgroundColor:'#FFF',borderRadius:'16px'}}>40</span></span>

                </div>
                <div className="fltr-col">
                    <h6>List Type</h6>
                    <span>Buy Now</span>
                    <span>Auction</span>
                    
                    
                </div>
                <div className="fltr-col">
                    <h6>Brand</h6>
                    <span>Nike</span>
                    <span>Adidas</span>
                    <span>Puma</span>
                    
                </div>
            </div>
            </div>
            </> 
    );
}

export default SearchFilter;
