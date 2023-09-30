import React from 'react'
import '../components/CartPage.css'
import { Navbar,Footer } from '../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcVisa } from '@fortawesome/free-brands-svg-icons';
import { faCcMastercard } from '@fortawesome/free-brands-svg-icons';
import { faCcDiscover } from '@fortawesome/free-brands-svg-icons';
import { faCcPaypal } from '@fortawesome/free-brands-svg-icons';
import { faApplePay } from '@fortawesome/free-brands-svg-icons';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import brandicons from '../images/brandicons.png'
import NewnavBar from '../components/JupetaECnavBar';
import { Container, Row, Col } from 'react-bootstrap'

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
      <NewnavBar />
      <Container style={{marginTop: '60px'}}>
            <Row>
                <Col xs={7} style={{ minHeight: '1000px', display: 'flex', flexDirection: 'column'}}>
                    <section>
                        <h3><strong>YOUR BAG</strong></h3>
                        <h4>Total: {'[ '+ cartItems.length +' ]'}</h4>
                    </section>
                    {cartItems.length === 0 && <div>Cart is Empty</div>}
                    {cartItems.map((item) => {
                      return(
                        <>
                          <section style={{marginTop: '40px', display: 'flex', height: '230px', alignItems: 'center', padding: '15px', gap:'10px',borderRadius: '15px', backgroundColor: 'whitesmoke' }}>
                            <div className='cartproductimage'>
                              <img src={item.imageFileUrl} style={{width: '100%', height: '100%', objectFit: 'fill', mixBlendMode: 'multiply'}} alt={item.productName}/>
                            </div>
                            <div className='cartproductname'>
                              <h6>Item number: 31450</h6>
                              <h5>{item.productName}</h5>
                              <h6>Color: Red</h6>
                              <h6 style={{marginTop: '15px'}}><strong>GHS {item.price}</strong></h6>
                            </div>
                            <div className='cartproductprice'>
                              <div style={{display:'flex', width: '100%', justifyContent: 'right'}}>
                                <section style={{backgroundColor: 'lightpink',width: '30px',height:'30px',display: 'flex', justifyContent: 'center',alignItems:'center',borderRadius: '50%'}}>
                                  <FontAwesomeIcon icon={faTrashCan} color='red'></FontAwesomeIcon>
                                </section>
                              </div>
                              <div className='addsubtract'>
                                <button onClick={() => onRemove(item)}>-</button>
                                <h5>{item.qty}</h5>
                                <button onClick={() => onAdd(item)}>+</button>
                              </div>
                              <button>Save to wishlist</button>
                              <button>Save for later</button>
                            </div>
                          </section>
                        </>
                      )
                    })}
                    
                </Col>
                <Col xs={5} style={{ minHeight: '1000px', padding: '50px'}}>
                    {cartItems.length !== 0 && (
                      <div className='cartinfo'>
                        <h3 style={{marginTop: '100px'}}><strong>Order Summary</strong></h3>
                        <h4>Do you have a promo code?</h4>
                        <section style={{display: 'flex', justifyContent: 'space-between', marginTop: '20px', marginRight: '30px'}}>
                          <h5>Subtotal [ ]</h5>
                          <h5>GHS {itemsPrice.toFixed(2)}</h5>
                        </section>
                        <section style={{display: 'flex', justifyContent: 'space-between', marginTop: '5px', marginRight: '30px'}}>
                          <h5>Estimated Shipping/Delivery</h5>
                          <h5>FREE</h5>
                        </section>
                        <section style={{display: 'flex', justifyContent: 'space-between', marginTop: '5px', marginRight: '30px'}}>
                          <h5>Estimated Tax</h5>
                          <h5>-</h5>
                        </section>
                        <hr style={{marginTop: '30px'}} />
                        <section style={{display: 'flex', justifyContent: 'space-between', marginTop: '10px', marginRight: '30px'}}>
                          <h5>Order Total</h5>
                          <h5>GHS {totalPrice.toFixed(2)}</h5>
                        </section>
                        <button style={{border: "1px solid", padding:"15px", width:"100%", borderRadius: "50px", background:"black", color:"white", marginTop:"20px"}}>Checkout</button>
                        <section style={{marginTop: '60px', display: 'flex', flexDirection: 'column'}}>
                          <h4>ACCEPTED PAYMENT METHODS</h4>
                          <img src={brandicons} alt='brand icons' />
                        </section>
                      </div>
                    )}
                </Col>
            </Row>
        </Container>
        <Footer />
    </>
  )
}

export default CartPage
