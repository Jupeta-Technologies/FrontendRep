import {React, useEffect, useState } from "react";
import './JupetaBid.css';
import { Button } from "@mui/joy";


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
                <div className="j-bidContainer">
                {
                !BidNow ? <Button onClick={()=>{setBidNow(!BidNow)}} variant="soft">Bid Now</Button>:
                
                <>
                <input type="text" name="userID" id="" value={customer_ID} onChange={(e)=>{customer_ID = e.target.value;}} />
                <input type="text" name="bidamount" id="" value={bidamount} required onChange={(e)=>{bidamount = e.target.value;}}/>
                <Button onClick={()=>{placeBid(bidamount,customer_ID)}}>Place bid</Button>
                </>
                
                }
                </div>

                <p>
                   Bid ID: {Bids.bidID}
                </p>
                <p>Highest bid: {Bids.highest_Bid}</p>
                <p>{JSON.stringify(Bidders)}</p>
                
            </>
        
            );
}

export default JupetaBidder;