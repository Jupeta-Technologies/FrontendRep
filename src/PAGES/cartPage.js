import React from 'react'
import '../components/CartPage.css'
import { Navbar,Footer } from '../components';

const CartPage = (props) => {
  const {cartItems, onAdd, onRemove, setCartItems} = props
  const itemsPrice = cartItems.reduce((a,c) => a + c.price * c.qty, 0);
  //const taxPrice = itemsPrice * 0.17;
  //const deliveryPrice = itemsPrice > 200 ? 0 : 15;
  //const totalPrice = itemsPrice + taxPrice + deliveryPrice;
  const totalPrice = itemsPrice;


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
                  <div>
                    <button onClick={() => onAdd(item)}>+</button>
                    <h3>{item.qty}</h3>
                    <button onClick={() => onRemove(item)}>-</button>
                  </div>
                </div> 
                <div className='cartproductpricecontainer'>
                  <h2><strong> GHS {item.price.toFixed(2)}</strong></h2>
                </div>
              </div>
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
              </>
          )}
        </div>
    </div>
    <Footer />
    </>
  )
}

export default CartPage
