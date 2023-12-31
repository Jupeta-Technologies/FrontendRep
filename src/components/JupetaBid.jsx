import {React, useState } from "react";
import './JupetaBid.css';

const JupetaBidder = () =>{

    const [Bids,setBids] = useState({bidID:"00001",Bidders:[]});

    let customer_ID,bidamount;
    
    const placeBid = (amount,customer_ID) =>{
        console.log(customer_ID,amount)
        setBids({...Bids,[Bids.Bidders]:Bids.Bidders.push({cust_ID:customer_ID,cust_Amt:amount})});
    }

    return (

            <>
                <div className="j-bidContainer">
                
                <input type="text" name="userID" id="" value={customer_ID} onChange={(e)=>{customer_ID = e.target.value; console.log(customer_ID)}} />
                <input type="text" name="bidamount" id="" value={bidamount} required onChange={(e)=>{bidamount = e.target.value;}}/>
                <button onClick={()=>{placeBid(bidamount,customer_ID)}}>Bid</button>
            
                </div>

                <p>
                    {JSON.stringify(Bids.Bidders)}
                </p>
                
            </>
        
            );
}

export default JupetaBidder;