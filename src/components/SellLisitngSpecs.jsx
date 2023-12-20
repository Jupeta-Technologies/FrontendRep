import {React,useState} from 'react';
import {lenovo} from '../images/lenovo.jpg';
import { IoToggleSharp, IoAddCircle } from "react-icons/io5";
import Specs from './ItemSpecs.json';


function SellListingSpecs(){
 const data = Specs.Electronics
 const [prodSpecs,setprodSpecs] = useState({Brand:"Apple",Model:"iPhone 15 Pro Max"});


    return (
        <>

        {
            //Create edit pop-up window/modal to change default values base on user prefs

            //data.entries(data.Electronics)
            // this is getting just the keys from a JSON object
            //Object.keys(data.Brand).map((x)=>{return console.log(x +" : "+data.Brand[x])})
            /* <select onChange={(e)=>{setBrand(e.target.value)}}>{
            data.Brands.map((x)=>{return <option value={x}>{x}</option>})
            }
            </select> */
        }
        <table>
            <tbody>
            <tr>
            <td style={{width:'200px'}}>Brand</td>
            <td>{prodSpecs.Brand}</td>
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

function SelllistPrice(props){


    return (
        <>
        <div className="listPrice">
                    <div className="setPrice">
                        <p>Recommended</p>
                        <p style={{fontSize:'40px', color:'#2E6F94'}}>Ghc {props.price}</p>

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