import React from 'react'

const CartPage = (props) => {
  const {cartItems, onAdd, onRemove, setCartItems} = props
  const itemsPrice = cartItems.reduce((a,c) => a + c.price * c.qty, 0);
  const taxPrice = itemsPrice * 0.17;
  const deliveryPrice = itemsPrice > 200 ? 0 : 15;
  const totalPrice = itemsPrice + taxPrice + deliveryPrice;

  /*useEffect(()=>{
    alert('Thanks for buying from us')
  },[cartItems.length])*/


  return (
    <div>
        <div>
          {cartItems.length === 0 && <div>Cart is Empty</div>}
        </div>
        <div className='cartcontainer'>
          {cartItems.map((item) => {
            return <div key={item.id}>
              <div>{item.name}</div>
              <div>
                <button onClick={() => onAdd(item)}>+</button>
                <button onClick={() => onRemove(item)}>-</button>
              </div>
              <div>
                {item.qty} x {item.price.toFixed(2)}
              </div>
            </div>
          })}
          {cartItems.length !==0 && (
            <>
              <hr></hr>
              <div><h1>FEE SUMMARY</h1></div>
              <div>
                <div><strong>Meal Price</strong></div>
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
          <div>
            <button style={{backgroundColor: "greenyellow"}} onClick={()=>setCartItems([])}>Clear Cart</button>
            <button style={{backgroundColor: "lightpink"}}>Place Order</button>
          </div>
        </div> 
    </div>
  )
}

export default CartPage
