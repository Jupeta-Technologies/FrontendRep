import React from 'react'
import '../components/CartPage.css'
import { Navbar,Footer } from '../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcVisa } from '@fortawesome/free-brands-svg-icons';
import { faCcMastercard } from '@fortawesome/free-brands-svg-icons';
import { faCcDiscover } from '@fortawesome/free-brands-svg-icons';
import { faCcPaypal } from '@fortawesome/free-brands-svg-icons';
import { faApplePay } from '@fortawesome/free-brands-svg-icons';

const CartPage = (props) => {
  const {cartItems, onAdd, onRemove, setCartItems} = props
  const itemsPrice = cartItems.reduce((a,c) => a + c.price * c.qty, 0);
  //const taxPrice = itemsPrice * 0.17;
  //const deliveryPrice = itemsPrice > 200 ? 0 : 15;
  //const totalPrice = itemsPrice + taxPrice + deliveryPrice;
  const totalPrice = itemsPrice;

  const paymentMethods = [faCcVisa,faCcMastercard,faCcDiscover,faCcPaypal,faApplePay]


  return (
    <>
    <div className='cartpage'>
        <div className='cartcontainer'>
          {cartItems.length === 0 && <div>Cart is Empty</div>}
          {cartItems.map((item) => {
            return (<div>
              <div key={item.id} className='cartproduct'>
                <div className='cartproductimgcontainer'><img src={item.imageFileUrl} className='cartproductimg' /></div>
                <div className='cartproductnamecontainer'>
                  <div><h2><strong>{item.productName}</strong></h2></div>
                  <div className='addsubtract'>
                    <button onClick={() => onAdd(item)}>+</button>
                    <h3>{item.qty}</h3>
                    <button onClick={() => onRemove(item)}>-</button>
                  </div>
                </div> 
                <div className='cartproductpricecontainer'>
                  <h2><strong> GHS {item.price.toFixed(2)}</strong></h2>
                </div>
              </div>
              <hr style={{border: "1px solid", width:"100%"}} />
            </div>)
          })}
          <div className='cartsubmit'>
            <button style={{backgroundColor: "greenyellow", border: "2px solid", fontSize:"20px", padding: "5px"}} onClick={()=>setCartItems([])}>Clear Cart</button>
            <button style={{backgroundColor: "lightpink", border: "2px solid", fontSize:"20px", padding: "5px"}}>Place Order</button>
          </div>
        </div> 
        <div className='cartinfo'>
          {cartItems.length !==0 && (
              <>
                <hr></hr>
                <div className='ordersummary'><h1><strong>Order Summary</strong></h1></div>
                <div className='promocode'>
                  <div><strong><h2>Do you have a promo code? </h2></strong></div>
                </div>
                <div className='subtotal'>
                  <h3><strong>Subtotal</strong></h3>
                  <h3>GHC {itemsPrice.toFixed(2)}</h3>
                </div>
                <div className='subtotal'>
                  <h3><strong>Estimated Shipping/Delivery</strong></h3>
                  <h3>FREE</h3>
                </div>
                <div className='subtotal'>
                  <h3><strong>Estimated Tax</strong></h3>
                  <h3>-</h3>
                </div>
                <hr style={{border: "1px solid", width:"100%"}} />
                <div className='ordertotal'>
                  <h1><strong>Order Total:</strong></h1>
                  <div>GHC {totalPrice.toFixed(2)}</div>
                </div>
                <button style={{border: "1px solid", padding:"15px", width:"70%", borderRadius: "50px", background:"black", color:"white", marginBottom:"40px"}}>Checkout</button>
                <div className='paymentmethods'>
                  <h1>ACCEPTED PAYMENT METHODS</h1>
                  {paymentMethods.map((paymentMethod) => <FontAwesomeIcon icon={paymentMethod} size='2x'></FontAwesomeIcon>)}
                </div>
              </>
          )}
        </div>
    </div>
    <Footer />
    </>
  )
}

export default CartPage
