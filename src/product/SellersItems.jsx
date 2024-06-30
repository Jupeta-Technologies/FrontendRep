import React from 'react';
import '../product/sellersItems.css';
import { Recommendation } from '../components';


function SellersItems() {
    return ( 
            <>
                <div style={{marginTop:'24px'}}>
                <h4>Seller's other items</h4>
                <Recommendation />
                </div>
            </>
     );
}

export default SellersItems;