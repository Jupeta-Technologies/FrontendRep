import React from 'react'
import '../components/CartPage.css'
import { Navbar,Footer } from '../components';
import { faCcVisa } from '@fortawesome/free-brands-svg-icons';
import { faCcMastercard } from '@fortawesome/free-brands-svg-icons';
import { faCcDiscover } from '@fortawesome/free-brands-svg-icons';
import { faCcPaypal } from '@fortawesome/free-brands-svg-icons';
import { faApplePay } from '@fortawesome/free-brands-svg-icons';
import brandicons from '../images/brandicons.png'
import JupetaECnavBar from '../components/JupetaECnavBar';
import { Container, Row, Col } from 'react-bootstrap';
import { useCart } from '../context/CartContext';
import CartItemcard from '../product/CartItemCard';

const CartPage = () => {

  const paymentMethods = [faCcVisa,faCcMastercard,faCcDiscover,faCcPaypal,faApplePay];

  const {products, total} = useCart();


  return (
    <>
      <JupetaECnavBar page={"Cart"}/>
      <Container style={{marginTop: '60px'}}>
            <Row>
                <Col xs={8} style={{ minHeight: '1000px', display: 'flex', flexDirection: 'column'}}>
                    <section>
                        <h3><strong>Your Cart</strong></h3>
                        <h4>Total: {'[ '+ products.length +' ]'}</h4>
                    
                    {products.length === 0 && <div>Cart is Empty</div>}
                    {products.map((product,i) => {return <CartItemcard item={product} key={i}/>})}
                   </section> 
                </Col>
                <Col xs={4} style={{ minHeight: '1000px', padding: '50px'}}>
                    {products.length !== 0 && (
                      <div className='cartinfo'>
                        <h3 style={{marginTop: '100px'}}><strong>Order Summary</strong></h3>
                        <h4>Do you have a promo code?</h4>
                        <section style={{display: 'flex', justifyContent: 'space-between', marginTop: '20px', marginRight: '30px'}}>
                          <p>Subtotal [{products.length} ]</p>
                          <p>GHS {total.toFixed(2)}</p>
                        </section>
                        <section style={{display: 'flex', justifyContent: 'space-between', marginTop: '5px', marginRight: '30px'}}>
                          <p>Estimated Shipping/Delivery</p>
                          <p>FREE</p>
                        </section>
                        <section style={{display: 'flex', justifyContent: 'space-between', marginTop: '5px', marginRight: '30px'}}>
                          <p>Estimated Tax</p>
                          <h5>-</h5>
                        </section>
                        <hr style={{marginTop: '30px'}} />
                        <section style={{display: 'flex', justifyContent: 'space-between', marginTop: '10px', marginRight: '30px'}}>
                          <h5>Order Total</h5>
                          <h5>GHS {total.toFixed(2)}</h5>
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