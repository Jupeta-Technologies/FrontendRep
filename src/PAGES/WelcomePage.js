import React from 'react'
//import { Navbar } from '../components'
import NewnavBar from '../components/JupetaECnavBar'
import { Container, Row, Col } from 'react-bootstrap'
import '../components/Welcome.css'
import featuredbuy from '../images/featuredbuy.png'
import featuredsell from '../images/featuredsell.png'
import featuredben from '../images/featuredben.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faApple } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faYahoo } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

const WelcomePage = () => {
    const accountbrandicons = [faApple, faFacebook, faGoogle, faYahoo]
  return (
    <div className='welpage'>
        <NewnavBar />
        <Container className='welcomepage'>
            <Row className='introsect'>
                <section>
                    <h1><strong>BECOME A</strong></h1>
                    <h1><strong>MEMBER</strong></h1>
                </section>
                <section className='signuptext'>
                    <p>Sign up for free. Join the safest community to shop, sell and bid</p>
                </section>
                <section className='buttonsection'>
                    <button>Shop now</button>
                    <button>Bid</button>
                </section>
            </Row>
            <Row className='midsect'>
                <h1 style={{fontSize:'2rem', textAlign: 'center'}}><strong>Featured Benefits</strong></h1>
                <div className='imagesection'>
                    <Col style={{width: '50vw', height: '600px', display: 'flex', flexDirection: 'column', gap: '20px', padding: '10px'}}>
                        <div>
                            <img src={featuredbuy} alt='' style={{width: '70%', height:'270px', objectFit: 'fill', float: 'right'}} />
                        </div>
                        <div>
                            <img src={featuredsell} style={{width: '70%', height:'270px', objectFit: 'fill', float: 'right'}} />
                        </div>
                    </Col>
                    <Col style={{width: '50vw', height: '600px'}}>
                        <div>
                            <img src={featuredben} style={{width: '40%', height:'560px', objectFit: 'fill', marginTop: '10px', marginLeft: '30px'}} />
                        </div>
                    </Col>
                </div>
            </Row>
            <Row style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', width: '70%', marginTop: '20px', padding: '5px'}}>
                <h1 style={{fontSize: '1.5rem'}}><strong>JOIN jUPETA. GET A 30% DISCOUNT</strong></h1>
                <section className='discounttext'>
                    <h5 style={{margin: '0',fontSize: '1rem'}}>As a jUPETA member, you get rewarded with what you love. Sign up today and receive</h5>
                    <h5 style={{margin: '0',fontSize: '1rem'}}>immediate access to these level 1 benefits: </h5>
                </section>
                <section style={{marginTop:'10px'}}>
                    <h5 style={{fontSize: '1rem'}}><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon> Free shipping on your first 5 purchases</h5>
                    <h5 style={{fontSize: '1rem'}}><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon> A 30% off voucher for your first purchase</h5>
                    <h5 style={{fontSize: '1rem'}}><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon> Access to members-only products and sales</h5>
                    <h5 style={{fontSize: '1rem'}}><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon> Special offers and promotions</h5>
                </section>
                <section style={{marginTop:'10px'}}>
                    <h5 style={{fontSize: '1rem'}}>Join now to start earning points, reach new levels and unlock rewards and benefits from jUPETA</h5>
                </section>
            </Row>
            <Row style={{display: 'flex', flexDirection: 'column', justifyContent: 'left', width: '70%', height: '450px', marginTop: '20px', padding: '0', gap: '0'}}>
                <h1 style={{fontSize: '1.5rem'}}><strong>YOUR jUPETA BENEFITS AWAIT</strong></h1>
                <section>
                    <p>Get free shipping, discount vouchers and members-only products with jUPETA</p>
                </section>
                <section style={{marginTop: '15px'}}>
                    <h6><strong>Log in or sign up (it's free)</strong></h6>
                </section>
                <section style={{marginTop: '15px', display: 'flex', gap: '10px',marginBottom:'20px'}}>
                    {
                        accountbrandicons.map((accountbrandicon) => {
                            return <div style={{width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid'}}>
                            <FontAwesomeIcon icon={accountbrandicon}></FontAwesomeIcon>
                        </div>
                        } )
                    }
                </section>
                <section className='featuredemail'>
                    <input type='email' placeholder='Email' />
                </section>
                <section style={{marginTop: '15px'}}>
                    <h5>By continuing, I agree to jUPETA's <Link>Privacy Policy</Link> and <Link>Terms of Use</Link></h5>
                </section>
                <section style={{marginTop: '15px'}}>
                    <label style={{fontSize: '1.2rem'}}>
                        <input type='checkbox' /> Keep me logged in.
                    </label>
                </section>
                <button style={{border: '1px solid black', backgroundColor: 'black', color: 'white',width: '15%', height: '40px', padding: '5px', borderRadius: '20px', marginLeft: '500px', marginTop: '25px'}}>Continue</button>
            </Row>
        </Container>
    </div>
  )
}

export default WelcomePage