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



export {SellListingSpecs}; 

/* Dynamically list load the table base on the item specification */