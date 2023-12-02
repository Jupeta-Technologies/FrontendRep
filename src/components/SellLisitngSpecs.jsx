import {React} from 'react';
import {lenovo} from '../images/lenovo.jpg';
import { IoToggleSharp, IoAddCircle } from "react-icons/io5";


function SellListingSpecs(){

    

    return (
        <>
        <table>
            <tbody>
            <tr>
            <td style={{width:'200px'}}>Brand</td>
            <td>Lenovo</td>
            </tr>
            <tr>
            <td>Screen size</td>
            <td>15 inch</td>
            </tr>
            </tbody>
        </table>
        
        </>
    );
}

function SelllistPrice(){

    return (
        <>
        <div className="listPrice">
                    <div className="setPrice">
                        <p>Recommended</p>
                        <p style={{fontSize:'40px', color:'#2E6F94'}}>Ghc 1299.99</p>

                        <p>Accepting Offer</p>

                    </div>
                    <div className='setSmartPrice'>
                        <p>Smart Pricing <span><IoToggleSharp  style={{color:'green', fontSize:'2.5rem'}}/></span></p>
                        <p style={{width:'300px'}}>Smart Pricing automatically drops the price of your listing by 10% at the best time every week until it hits your floor price.</p>
                        <p>Floor Price <span style={{color:'green', fontSize:'1.5rem'}}>GHc 999.99</span></p>
                    </div>
    
                </div>
        </>
    );
}

export {SellListingSpecs, SelllistPrice}; 

/* Dynamically list load the table base on the item specification */