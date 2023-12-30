import {React, useState} from 'react';
import JupetaECnavBar from './JupetaECnavBar';
import { Chip } from '@mui/joy';
import {SellListingSpecs} from './SellLisitngSpecs';
import { IoToggleSharp, IoAddCircle } from "react-icons/io5";
import { Button } from '@mui/material';
import { PublishItems } from '../APIs/PublishItemsAPI';






const SellListing = () =>{

    
    const [defaultImg, setdefaultImg] = useState("");
    const [imgF,setimgF] = useState('');
    

    //Some data fields will have default values
    const [listData,setlistData] = useState({Title:'', Condition:'',Summary:'This is a short test', Price:1299.99, Description:"", Quantity:1,Specification:{}, sellType:'',prevImg:[] });

    const handelDataChange = (e) =>{
        
        setlistData({...listData,[e.target.name]:e.target.value});
       
    }

    const setImg = (e) => {
        let imgsrc = URL.createObjectURL(e.target.files[0]);
        setimgF(e.target.files[0]);
        setlistData({...listData,[listData.prevImg]:listData.prevImg.push(imgsrc)});
        setdefaultImg(listData.prevImg[0]);
        
        console.log(imgsrc);

    }

    const handlePublish = () =>{
         const data = {
                        ProductName:listData.Title,
                        Description:listData.Description,
                        Summary:listData.Summary,
                        Price:listData.Price,
                        IsAvailable:true,
                        Quantity:listData.Quantity,
                        Category:3,
                        SellingType:1,
                        Condition:1,
                    }
        console.log(imgF.name);
        const fd = new FormData();
        //Attempt iteratation and map data for FormData appending
        const fdmap = Object.entries(data);
        
        for (const key in fdmap) {

            if (fdmap.hasOwnProperty.call(fdmap, key)) {
                const element = fdmap[key];
                console.log(element[0],element[1] );
                fd.append(element[0],element[1]);

                
            }
        }

        
        imgF.name !== undefined && fd.append("ImageFile",imgF,imgF.name);
        /* fd.append("ProductName",listData.Title);
        fd.append("Description",listData.Description);
        fd.append("Summary",listData.Summary);
        fd.append("Price",listData.Price);
        fd.append("IsAvailable",true);
        fd.append("Quantity",listData.Quantity);
        fd.append("Category",3);
        fd.append("SellingType",1);
        fd.append("Condition",1); */

        PublishItems(fd);
        
    }
    
    return (
        <>
            <JupetaECnavBar />
            <div className="mainContainer">
            <h1 style={{textAlign:'center', marginBottom:'48px'}}>List. Sell. Cash</h1>
            <section>

                <h5>Listing Details</h5>
                <div className="listDetail">
                    <h6>Title</h6>
                    <p style={{fontWeight:400, fontSize:'16px', width:'100%'}}>
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
                        <input type="radio" name="sellType" value="Buy now" onClick={e =>{handelDataChange(e)}}/> <span>Buy now </span>
                        <input type='radio'name='sellType' value="Auction" onClick={(e)=>{handelDataChange(e)}} /> <span>Auction </span>


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
                    <textarea name='Description' value={listData.Description} placeholder='Please enter a good description of your item, to help it sell better' onChange={(e)=>{handelDataChange(e);}} />

                </div>
            </section>

            <section>
                <h5>Pricing</h5>
                {/* When the edit button is clicked, change to input field*/}
                <div className="listPrice">
                    <div className="setPrice">
                        <p>Recommended</p>
                        <p style={{fontSize:'40px', color:'#2E6F94'}}>Ghc {listData.Price}</p>

                        <p>Accepting Offer</p>

                    </div>
                    <div className='setSmartPrice'>
                        <p>Smart Pricing <span><IoToggleSharp  style={{color:'green', fontSize:'2.5rem'}}/></span></p>
                        <p style={{width:'300px'}}>Smart Pricing automatically drops the price of your listing by 10% at the best time every week until it hits your floor price.</p>
                        <p>Floor Price <span style={{color:'green', fontSize:'1.5rem'}}>GHc 999.99</span></p>
                    </div>
    
                </div>

            </section>

            <section>
                <h5>Photos</h5>
                <div className="listPhotos">
                    {/* map over number off allowed uploads - Using OL list items */}
                    <ol className="lphotogrid">
                        <li className="pmain"><img src={defaultImg} alt="main" /></li>
                        {listData.prevImg.map((src,index)=>{return (<li key={index}><img src={src} alt="" /></li>) })}
                        <li className="pone"></li>
                        <li className="ptwo"></li>
                        <li className="padd"><input type="file" src="" accept='image/*'  name="addIMG" alt="" style={{opacity:0,position:'absolute', cursor:'pointer'}} onChange={(e)=>{setImg(e)}}/> <IoAddCircle  style={{fontSize:'3rem', cursor:'pointer'}}/></li>

                    </ol>

                </div>
            </section>

            <Button onClick={()=>{handlePublish()}}>Publish</Button>
            </div>
        </>

    )

}

export default SellListing;