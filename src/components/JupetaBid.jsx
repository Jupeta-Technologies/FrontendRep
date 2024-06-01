import {React, useEffect, useState } from "react";
import './JupetaBid.css';
import { Button } from "@mui/joy";
import { AiOutlineCloseCircle, AiOutlineEye } from "react-icons/ai";
import { PiWarningCircleLight } from "react-icons/pi";


const JupetaBidder = () =>{

    const [Bids,setBids] = useState({bidID:"00001",highest_Bid:0.0, Bidder:{id:"",amt:"0.00"}});
    const curr_Bidder =[];
    const [Bidders,setBidders] = useState([]);
    const [BidNow,setBidNow] = useState(false);

    let customer_ID,bidamount;
    
    const placeBid = (amount,customer_ID) =>{
        (amount>Bids.highest_Bid)&& console.log("You are the highest bidder :",amount);
        setBids({...Bids,highest_Bid:amount,Bidder:{id:customer_ID,amt:amount}});
        curr_Bidder.push({id:customer_ID,amt:amount}); //not efficeint
        setBidders([...Bidders,{id:customer_ID,amt:amount}]);
        console.log(curr_Bidder);
    }

    return (

            <>
            
                
                {
                !BidNow ? <Button onClick={()=>{setBidNow(!BidNow)}} variant="soft">Bid Now</Button>:
                <div className="j-bidContainer">
                <div className="bidrecomm"><span>Ghc 40</span><span>Ghc 50</span></div>    
                <AiOutlineCloseCircle style={{fontSize:"24px", cursor:"pointer", position:"absolute", top:"10px", right:"10px"}} onClick={()=>{setBidNow(false)}}/>
                <div className="bidinput">
                <input type="text" name="bidamount" id="" value={bidamount} required onChange={(e)=>{bidamount = e.target.value;}}/>
                <Button onClick={()=>{placeBid(bidamount,customer_ID)}} className="placebid">Bid</Button>
                <AiOutlineEye style={{backgroundColor:"#FFF", padding:"8px", borderRadius:"50%", fontSize:"2rem"}}/>

                </div>
                <p><PiWarningCircleLight style={{color:"#F10E0E", fontSize:"24px"}}/>By selecting Bid, you are committing to buy this item if you are the winning bidder.</p>
                
                </div>
                }
                

                <p>
                   Bid ID: {Bids.bidID}
                </p>
                <p>Highest bid: {Bids.highest_Bid}</p>
                <p>{JSON.stringify(Bidders)}</p>
                
            </>
        
            );
}

export default JupetaBidder;