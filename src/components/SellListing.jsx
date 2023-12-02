import {React} from 'react';
import JupetaECnavBar from './JupetaECnavBar';
import { Chip } from '@mui/joy';
import {SellListingSpecs, SelllistPrice} from './SellLisitngSpecs';
import { IoToggleSharp, IoAddCircle } from "react-icons/io5";




const SellListing = () =>{

    return (
        <>
            <JupetaECnavBar />
            <div className="mainContainer">
            <h1>List. Sell. Cash</h1>
            <input type='search'  style={{width:'60%', border:'1px solid #D9D9F9', height:'40px', borderRadius:'20px', padding:'5px 20px'}}/> <button>Search</button>

            <section>
                <h5>Listing Details</h5>
                <div className="listDetail">
                    <h6>Title</h6>
                    <p style={{fontWeight:600, fontSize:'16px'}}>
                        Lenovo Legion 5 Gen 715.6" (2TB SSD AMD Ryzen 7 6800H 3.2GHz 16GB RAM) Gaming Laptop - Gray (82RD0010US)
                    </p>

                    <div className="ConTyQty">
                        <div className="Con">
                        <h6>Condition</h6>
                        <Chip style={{backgroundColor:'#FFF', color:'#000'}} >New</Chip>
                        <Chip style={{backgroundColor:'#FFF', color:'#000'}} >Used</Chip>
                        <Chip style={{backgroundColor:'#FFF', color:'#000'}} >Refurbish</Chip>
                        <Chip style={{backgroundColor:'#FFF', color:'#000'}} >For Parts</Chip>
                        <Chip style={{backgroundColor:'#FFF', color:'#000'}} >Open box</Chip>

                        </div>
                        <div className="Ty">
                        <h6>Listing Type</h6>
                        <Chip variant='soft' size='sm'>Buy now</Chip>
                        <Chip variant='soft' size='sm'  onClick={()=>{}}>Auction</Chip>


                        </div>
                        <div className="Qty">
                        <h6>Quantity</h6>
                        <p>1</p>
                        </div>
                    </div>

                </div>
            </section>
            <section>
                <h5>Specifications</h5>
                <div className="listSpecs">
                    <SellListingSpecs />
    
                </div>
            </section>
            <section>
                <h5>Description</h5>
                <div className="listDesc">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, voluptatum accusantium! Consequuntur, aperiam pariatur? Aliquid neque ratione labore reiciendis inventore, officia itaque nostrum at quisquam atque quis dignissimos recusandae non!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque perferendis sint tempora veritatis quibusdam reprehenderit qui ut officiis rem illum, minus laboriosam doloribus, quia, iste ea similique quam quidem exercitationem.
                    </p>

                </div>
            </section>

            <section>
                <h5>Pricing</h5>
                <SelllistPrice />
            </section>

            <section>
                <h5>Photos</h5>
                <div className="listPhotos">
                    {/* map over number off allowed uploads - Using OL list items */}
                    <ol className="lphotogrid">
                        <li className="pmain"></li>
                        <li className="pone"></li>
                        <li className="ptwo"></li>
                        <li className="padd"><input type="file" src="" alt="" style={{opacity:0,position:'absolute', cursor:'pointer'}}/> <IoAddCircle  style={{fontSize:'3rem', cursor:'pointer'}}/></li>

                    </ol>

                </div>
            </section>
            </div>
        </>

    )

}

export default SellListing;