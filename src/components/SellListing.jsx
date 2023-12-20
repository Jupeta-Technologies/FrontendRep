import {React, useState} from 'react';
import JupetaECnavBar from './JupetaECnavBar';
import { Chip } from '@mui/joy';
import {SellListingSpecs, SelllistPrice} from './SellLisitngSpecs';
import { IoToggleSharp, IoAddCircle } from "react-icons/io5";






const SellListing = () =>{

    const [defaultImg, setdefaultImg] = useState("");

    //Some data fields will have default values
    const [listData,setlistData] = useState({Title:'', Condition:'', Price:1299.99, Description:"", Quantity:1,Specification:{}, sellType:'' });

    let [edtext,setedText] = useState('');

    const handelDataChange = (e) =>{
        
        setlistData({...listData,[e.target.name]:e.target.value})
       
    }

    const setImg = (e) => {
        let imgsrc = URL.createObjectURL(e.target.files[0])

        setdefaultImg(imgsrc);

    }
    
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
                    <p style={{fontWeight:600, fontSize:'16px', width:'100%'}}>
                        <input type='text' value={listData.Title} name='Title' placeholder='Enter name of item' onChange={(e)=>{handelDataChange(e)}} style={{width:'100%', backgroundColor:'transparent'}} />
                    </p>

                    <div className="ConTyQty">
                        <div className="Con">
                        <h6>Condition</h6>

                        <select name="Condition" id="" onChange={(e)=>{handelDataChange(e)}}>
                            <option value="New">New</option>
                            <option value="Used">Used</option>
                            <option value="Refurbished">Refurbished</option>
                            <option value="For parts">For parts</option>
                            <option value="Open box">Open box</option>
                        </select>

                        </div>
                        <div className="Ty">
                        <h6>Listing Type</h6>
                        <Chip variant='soft' size='sm'>Buy now</Chip>
                        <input type='radio'name='sellType' value="Auction" onClick={(e)=>{handelDataChange(e)}} />


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
                    <textarea name='Description' value={listData.Description} placeholder='Please enter a good description of your item, to help it sell better' onChange={(e)=>{handelDataChange(e);console.log(e.target.value)}} />

                </div>
            </section>

            <section>
                <h5>Pricing</h5>
                <SelllistPrice price={listData.Price} />
            </section>

            <section>
                <h5>Photos</h5>
                <div className="listPhotos">
                    {/* map over number off allowed uploads - Using OL list items */}
                    <ol className="lphotogrid">
                        <li className="pmain"><img src={defaultImg} alt="main" /></li>
                        <li className="pone"></li>
                        <li className="ptwo"></li>
                        <li className="padd"><input type="file" src=""  name="addIMG" alt="" style={{opacity:0,position:'absolute', cursor:'pointer'}} onChange={(e)=>{setImg(e)}}/> <IoAddCircle  style={{fontSize:'3rem', cursor:'pointer'}}/></li>

                    </ol>

                </div>
            </section>
            </div>
        </>

    )

}

export default SellListing;