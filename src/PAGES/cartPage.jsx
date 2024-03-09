import React, { useState, useEffect,useContext } from 'react';
import '../components/CartPage.css';
import { Footer } from '../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCcVisa,
  faCcMastercard,
  faCcDiscover,
  faCcPaypal,
  faApplePay,
} from '@fortawesome/free-brands-svg-icons';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';
import { useCart } from 'react-use-cart';
import { BsFillEyeSlashFill } from 'react-icons/bs';
import { PiWarningCircleFill } from 'react-icons/pi';
import axios from 'axios';
import { Cartcontext } from "../context/context";
import { useLocation, Link } from 'react-router-dom';


const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const { addItem, totalPrice } = useCart(); // Destructure addItem function from useCart
    const location = useLocation();
  const selectedProduct = location.state?.product;
  const [state, setState] = useState({
    isBag: true,
    isDelivery: false,
    isPayment: false,
    isOrderComplete: false,
    firstName: "",
    lastName: "",
    address: "",
    town: "",
    region: "",
    inputEmail: '',
    phoneNumber: "",
    userEmail: ""
  });
  const { isBag, isDelivery, isPayment, isOrderComplete, firstName, lastName, address, town, region, inputEmail, phoneNumber, userEmail } = state;

  const Globalstate = useContext(Cartcontext);
  const cartState = Globalstate.state;
  const dispatch = Globalstate.dispatch;

  const total = cartState.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  

  useEffect(() => {
    // Fetch cart items only if a product is selected
    if (selectedProduct) {
      setCartItems([selectedProduct]);
    }
  }, [selectedProduct]);


  const paymentMethods = [
    faCcVisa,
    faCcMastercard,
    faCcDiscover,
    faCcPaypal,
    faApplePay,
  ];
  const [ setIsBag] = useState(true); // Assuming you want to start with the delivery form visible
  
  
  

  const handleBagToggle = () => {
    setState({
      ...state,
      isBag: true,
      isDelivery: false,
      isPayment: false,
      isOrderComplete: false
    });
  };

  const handleDeliveryToggle = () => {
    setState({
      ...state,
      isBag: false,
      isDelivery: true,
      isPayment: false,
      isOrderComplete: false
    });
  };

  const handlePaymentToggle = () => {
    setState({
      ...state,
      isBag: false,
      isDelivery: false,
      isPayment: true,
      isOrderComplete: false
    });
  };

  const handleOrderCompleteToggle = () => {
    setState({
      ...state,
      isBag: false,
      isDelivery: false,
      isPayment: false,
      isOrderComplete: true
    });
  };

  const handleInputEmail = (e) => {
    setState({ ...state, inputEmail: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://ec2-44-197-193-3.compute-1.amazonaws.com/api/User/AddUser", {
      firstName: firstName,
      lastName: lastName,
      email: userEmail,
      phoneNumber: phoneNumber,
    })
      .then(response => {
        // Handle response if needed
      })
      .catch(error => {
        console.error('Error submitting form:', error);
      });
  };

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    town: '',
    region: '',
    email: '',
    phoneNumber: ''
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  const handleSaveForm = (e) => {
    e.preventDefault();
    setState({
      ...state,
      isBag: false,
      isDelivery: false,
      isPayment: true,
      isOrderComplete: false
    });
  };
  
  const handleEditForm = (e) => {
    e.preventDefault();
    setState({
      ...state,
      isBag: false,
      isDelivery: true,
      isPayment: false,
      isOrderComplete: false
    });
  };
  const handleCheckOutForm = (e) => {
    e.preventDefault();
    setState({
      ...state,
      isBag: false,
      isDelivery: true,
      isPayment: false,
      isOrderComplete: false
    });
  };

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get('https://ec2-44-197-193-3.compute-1.amazonaws.com/api/User/GetAllProducts');
        setCartItems(response.data);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, []);


  return (
    <>
      <Container style={{ marginTop: '60px' }}>
        <Row>
          <Col
            xs={7}
            style={{ minHeight: '1000px', display: 'flex', flexDirection: 'column' }}
          >
            <section>
              <div className="heads-label">
                <span onClick={handleBagToggle} className={`bag${isBag ? ' active' : ''}`}>
                  <span className={`circle-badge${isBag ? ' active' : ''}`}>1</span> BAG
                </span>

                <span
                  onClick={handleDeliveryToggle}
                  className={`delivery${isDelivery ? ' active' : ''}`}
                >
                  <span className={`circle-badge${isDelivery ? ' active' : ''}`}>2</span> DELIVERY
                </span>

                <span
                  onClick={handlePaymentToggle}
                  className={`payment${isPayment ? ' active' : ''}`}
                >
                  <span className={`circle-badge${isPayment ? ' active' : ''}`}>3</span> PAYMENT
                </span>

                <span
                  onClick={handleOrderCompleteToggle}
                  className={`complete${isOrderComplete ? ' active' : ''}`}
                >
                  <span className={`circle-badge${isOrderComplete ? ' active' : ''}`}>4</span>{' '}
                  ORDER COMPLETE
                </span>
              </div>

              {isBag ? (
                <section>
                <h3>
                <strong>YOUR BAG</strong>
</h3>
<h4>Total: {'[ ' + cartItems.length + ' ]'}</h4>
{console.log("Cart Items:", cartItems)}

{cartItems.length === 0 ? (
  <div>Cart is Empty</div>
) : (
  <div className="cart">
    {Array.isArray(cartItems) && cartItems.map((item, index) => (
      <div className="cartCard" key={index}>
        <img src={item.image} alt={item.title} />
        <p>{item.title}</p>
        <p>{item.quantity * item.price}</p>
        <div className="quantity">
          <button onClick={() => dispatch({ type: "INCREASE", payload: item })}>+</button>
          <p>{item.quantity}</p>
          <button
            onClick={() => {
              if (item.quantity > 1) {
                dispatch({ type: "DECREASE", payload: item });
              } else {
                dispatch({ type: "REMOVE", payload: item });
              }
            }}>
            -
          </button>
        </div>
        <h2 onClick={() => dispatch({ type: "REMOVE", payload: item })}>x</h2>
      </div>
    ))}
  </div>
)}

{cartItems.length > 0 && (
  <div className="total">
    <h2>{total}</h2>
  </div>
)}
<div style={{ display: 'flex', justifyContent: 'flex-end', marginRight: '100px' }}>
<button 
  onClick={handleCheckOutForm} 
  style={{
    border: '1px solid',
    padding: '15px',
    width: '120px',
    borderRadius: '50px',
    background: 'black',
    color: 'white',
    marginTop: '200px',
    cursor: 'pointer', // Add cursor pointer to indicate it's clickable
  }}
>
  Checkout
</button>
</div>



                </section>
              ) : isDelivery ? (
                  <section>
                    <h3>
                      <strong>DELIVERY</strong>
                    </h3>
                    <form className='formcontainer'>
                      <div className='form-ctrl'>
                        <div className='form-ctrl-firstName'>
                          <label htmlFor="firstName" style={ firstName!== "" ? {color:'#000', transform:'translate(5px,-10px)', backgroundColor:'#FFF', lineHeight:'15px', padding:'0px 5px'} : null}></label>
                          <input
  type='text'
  placeholder='first Name'
  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
  value={formData.firstName}
  required
/>                        </div>
                        <div className='form-ctrl-lastName'>
                          <label htmlFor="lastName" style={lastName !== "" ? {color:'#000', transform:'translate(5px,-10px)', backgroundColor:'#FFF', lineHeight:'15px', padding:'0px 5px'} : null}></label>
                          <input
  type='text'
  placeholder='Last Name'
  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
  value={formData.lastName}
  required
/>                                </div>
                        <label htmlFor="address" style={address !== "" ? {color:'#000', transform:'translate(5px,-10px)', backgroundColor:'#FFF', lineHeight:'15px', padding:'0px 5px'} : null}></label>
                        <input
  type='text'
  placeholder='Address'
  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
  value={formData.address}
  required
/>                                <label htmlFor="Town/city" style={town !== "" ? {color:'#000', transform:'translate(5px,-10px)', backgroundColor:'#FFF', lineHeight:'15px', padding:'0px 5px'} : null}></label>
<input
  type='text'
  placeholder='Town/city'
  onChange={(e) => setFormData({ ...formData, town: e.target.value })}
  value={formData.town}
  required
/>                                 <label htmlFor="region" style={region !== "" ? {color:'#000', transform:'translate(5px,-10px)', backgroundColor:'#FFF', lineHeight:'15px', padding:'0px 5px'} : null}></label>
<input
  type='text'
  placeholder='Region'
  onChange={(e) => setFormData({ ...formData, region: e.target.value })}
  value={formData.region}
  required
/>                                 <label htmlFor="email" style={inputEmail !== ""?{color:'#000',transform:'translate(5px,-10px )',backgroundColor:'#FFF',lineHeight:'15px', padding:'0px 5px'}:null}></label>
<input
  type='text'
  placeholder='Email'
  onChange={(e) => setFormData({ ...formData, inputEmail: e.target.value })}
  value={formData.inputEmail}
  required
/>                                 <label htmlFor="tel" style={phoneNumber !== "" ? {color:'#000', transform:'translate(5px,-10px)', backgroundColor:'#FFF', lineHeight:'15px', padding:'0px 5px'} : null}></label>
<input
  type='text'
  placeholder='Phone Number'
  onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
  value={formData.phoneNumber}
  required
/>                               </div>
                      <div className='checkboxitems'>
                        <input type='checkbox' required/>
                        <p style={{ fontSize: '0.9rem', marginLeft: '5px', marginBottom: '2px' }}>Save address and contact information for future orders</p>
                      </div>
                      <div className='checkboxitems'>
                        <input type='checkbox' required/>
                        <p style={{fontSize: '0.9rem', marginBottom: '2px',marginLeft: '5px'}}>My billing and delivery information are the same</p>
                      </div>
                      <button onClick={handleSaveForm} className="save-button"style={{
    border: '1px solid',
    padding: '15px',
    width: '120px',
    borderRadius: '50px',
    background: 'black',
    color: 'white',
    marginTop: '150px',
    marginLeft: '120px',
    cursor: 'pointer', 
  }}>proceed</button>

                    </form>
                  </section>
                
              ) : isPayment ? (
                <section>
    <div className="form-box">
    <form id="paymentForm" className='summaryform' style={{ position: 'relative' }}>
      <div style={{ margin: '0', padding: '0', paddingRight: '150px' }}>
    <p style={{ margin: '5px 0' }}>{formData.firstName}</p>
    <p style={{ margin: '5px 0' }}>{formData.lastName}</p>
    <p style={{ margin: '5px 0' }}>{formData.address}</p>
    <p style={{ margin: '5px 0' }}>{formData.town}</p>
    <p style={{ margin: '5px 0' }}>{formData.region}</p>
    <p style={{ margin: '5px 0' }}>{formData.inputEmail}</p>
    <p style={{ margin: '5px 0' }}>{formData.phoneNumber}</p>
    {/* Display other form fields as needed */}
  </div> 
  <button onClick={handleEditForm} className="edit" style={{ position: 'absolute', top: '10px', right: '15px' }}>edit</button>
        </form>
<div className='spacer'>
      <strong>PAYMENT METHOD</strong>
      </div>
      <form className='paymentForm'>
        {/* Payment method form fields will go here */}
      </form>
    </div>
  </section>
              ) : isOrderComplete ? (
                <section>
                   <h3>
                    <strong>ORDER COMPLETE</strong>
                  </h3>
                  <form id="deliveryForm" action="#">
                    {/* Render your delivery form here */}
                  </form>
                  </section>
              ) : null}
            </section>
          </Col>
          <Col xs={5} style={{ minHeight: '100px', padding: '20px' }}>
            {cartItems.length !== 0 && (
              <div className="cartinfo">
                <h3 style={{ marginTop: '10px' }}>
                  <strong>Order Summary</strong>
                </h3>
                <h4>Do you have a promo code?</h4>
                <section
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: '20px',
                    marginRight: '30px',
                  }}
                >
                  <h5>Subtotal [ ]</h5>
                  <h5>GHS {(2)}</h5>
                </section>
                <section
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: '5px',
                    marginRight: '30px',
                  }}
                >
                  <h5>Estimated Shipping/Delivery</h5>
                  <h5>FREE</h5>
                </section>
                <section
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: '5px',
                    marginRight: '30px',
                  }}
                >
                  <h5>Estimated Tax</h5>
                  <h5>-</h5>
                </section>
                <hr style={{ marginTop: '30px' }} />
                <section
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: '10px',
                    marginRight: '30px',
                  }}
                >
                  <h5>Order Total</h5>
                  <h5>GHS {(2)}</h5>
                </section>
               
                <section style={{ marginTop: '60px', display: 'flex', flexDirection: 'column' }}>
                  {/* Render additional content if needed */}
                </section>
                
              </div>
              
            )}
          </Col>
          
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default CartPage;
