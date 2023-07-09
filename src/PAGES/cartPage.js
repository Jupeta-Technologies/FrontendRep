import React from 'react'
import '../components/CartPage.css'
import { Navbar,Footer } from '../components';

const CartPage = (props) => {
  const {cartItems, onAdd, onRemove, setCartItems} = props
  const itemsPrice = cartItems.reduce((a,c) => a + c.price * c.qty, 0);
  const taxPrice = itemsPrice * 0.17;
  const deliveryPrice = itemsPrice > 200 ? 0 : 15;
  const totalPrice = itemsPrice + taxPrice + deliveryPrice;


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
                  <div>{item.productName}</div>
                  <div>
                    <button onClick={() => onAdd(item)}>+</button>
                    <h3>{item.qty}</h3>
                    <button onClick={() => onRemove(item)}>-</button>
                  </div>
                </div> 
                <div className='cartproductpricecontainer'>
                  {item.qty} x GHC {item.price.toFixed(2)}
                </div>
              </div>
            </div>)
          })}
          <div>
            <button style={{backgroundColor: "greenyellow"}} onClick={()=>setCartItems([])}>Clear Cart</button>
            <button style={{backgroundColor: "lightpink"}}>Place Order</button>
          </div>
        </div> 
        <div className='cartinfo'>
          {cartItems.length !==0 && (
              <>
                <hr></hr>
                <div><h1>ORDER SUMMARY</h1></div>
                <div>
                  <div><strong>Product Price</strong></div>
                  <div>GHC {itemsPrice.toFixed(2)}</div>
              </div>
              <div>
                  <div><strong>VAT Fee</strong></div>
                  <div>GHC {taxPrice.toFixed(2)}</div>
              </div>
              <div>
                <div><strong>Delivery Fee</strong></div>
                <div>GHC {deliveryPrice.toFixed(2)}</div>
              </div>
              <div>
                <div><strong>Sum Total to be paid:</strong></div>
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
