import React, { useState } from 'react';
import '../Transaction/checkout-Modal.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import BuyBidbutton from '../components/cardcomponents/buybidButton';


const CheckoutModal = (props) => {

    let [Price,Shipping,Tax]=[1599.99,9.50,3.46];
    let Total = (Price + Shipping + Tax).toFixed(2);

    return (
            <>
            <div className="checkoutModal">
                <AiOutlineCloseCircle style={{alignSelf:'flex-end',cursor:'pointer',fontSize:'1.5rem'}} onClick={()=>{localStorage.setItem("setQuickbuy","false")}}/>
                    <h4 style={{alignSelf:'center'}}>Checkout</h4>
                    <h6>Payment</h6>
                    <label className='paymnt'>Jupeta Cash
                    <input type="checkbox" name="payment" id="" />
                    <span className='checkmark'></span>
                    </label>
                    <div style={{width:'80%',padding:'8px'}}><span style={{display:'block',width:'100px',height:'60px',borderRadius:'8px',backgroundColor:'#FFF',marginLeft:'24px'}}>1000.00</span></div>
                    <label className='paymnt'>Card
                    <input type="checkbox" name="payment" id="" />
                    <span className='checkmark'></span>
                    </label>
                    <div style={{width:'80%',padding:'8px', display:'none'}}><span style={{display:'block',width:'100px',height:'60px',borderRadius:'8px',backgroundColor:'#FFF',marginLeft:'24px'}}>..7890</span></div>
                    <h6>Shipping</h6>
                        <div className="checkoutSummary">
                            <div className="chkutItemlist">
                                <span className='itemCount'>1</span>{props.data}<span></span>
                            </div>
                            <div className="subTotal">
                            <p><span>Items</span><span>{Price}</span></p>
                            <p><span>Shipping</span><span>{Shipping}</span></p>
                            <p><span>Tax</span><span>{Tax}</span></p>
                            </div>
                            <div className="chkutTotal"><span>Order Total</span><span>{Total}</span></div>
                        </div>
                       <div className="checkoutbtn"><span>Submit</span></div> 

            </div>
    
            </>  
    );
}
 
export default CheckoutModal;