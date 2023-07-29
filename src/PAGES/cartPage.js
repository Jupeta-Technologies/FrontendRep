import React from 'react'
import '../components/CartPage.css'
import { Navbar,Footer } from '../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcVisa } from '@fortawesome/free-brands-svg-icons';
import { faCcMastercard } from '@fortawesome/free-brands-svg-icons';
import { faCcDiscover } from '@fortawesome/free-brands-svg-icons';
import { faCcPaypal } from '@fortawesome/free-brands-svg-icons';
import { faApplePay } from '@fortawesome/free-brands-svg-icons';
import brandicons from '../images/brandicons.png'
import NewnavBar from '../components/NewnavBar';
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
                        <h4>Total: [ Items]</h4>
                    </section>
                    {cartItems.length === 0 && <div>Cart is Empty</div>}
                    {cartItems.map((item) => {
                      return(
                        <>
                          <section style={{marginTop: '40px', display: 'flex', height: '230px', alignItems: 'center', padding: '15px', gap:'10px',borderBottom: '1px solid', backgroundColor: 'red' }}>
                            <div className='cartproductimage'>
                              <img src={item.imageFileUrl} style={{width: '100%', height: '100%', objectFit: 'fill'}} />
                            </div>
                            <div className='cartproductname'>
                              <h5>{item.productName}</h5>
                              <div className='addsubtract'>
                                <button onClick={() => onRemove(item)}>-</button>
                                <h5>{item.qty}</h5>
                                <button onClick={() => onAdd(item)}>+</button>
                              </div>
                            </div>
                            <div className='cartproductprice'>
                              <h5>GHS {item.price}</h5>
                            </div>
                          </section>
                        </>
                      )
                    })}
                    
                </Col>
                <Col xs={5} style={{backgroundColor: 'blueviolet', minHeight: '1000px'}}>
                    <h3>Order summary here</h3>
                </Col>
            </Row>
        </Container>
        <Footer />
    </>
  )
}

export default CartPage
