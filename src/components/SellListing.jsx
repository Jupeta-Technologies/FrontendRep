import {React} from 'react';
import JupetaECnavBar from './JupetaECnavBar';




const SellListing = () =>{

    return (
        <>
            <JupetaECnavBar />
            <h1>List. Sell. Cash</h1>
            <input type='search'  style={{width:'60%', border:'1px solid #D9D9F9', height:'40px', borderRadius:'20px', padding:'5px 20px'}}/> <button>Search</button>
        
        </>

    )

}

export default SellListing;