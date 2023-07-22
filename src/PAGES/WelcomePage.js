import React from 'react'
//import { Navbar } from '../components'
import NewnavBar from '../components/NewnavBar'
import { Container, Row, Col } from 'react-bootstrap'
import '../components/Welcome.css'
import featuredbuy from '../images/featuredbuy.png'
import featuredsell from '../images/featuredsell.png'
import featuredben from '../images/featuredben.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const WelcomePage = () => {
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
                <h1 style={{fontSize:'2rem', textAlign: 'center'}}>Featured Benefits</h1>
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
            <Row style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', width: '70%', height: '450px', marginTop: '20px', padding: '0'}}>
                <h1 style={{fontSize: '1.5rem'}}><strong>JOIN jUPETA. GET A 30% DISCOUNT</strong></h1>
                <section style={{padding: '0', gap: '0', margin: '0' }}>
                    <p>As a jUPETA member, you get rewarded with what you love. Sign up today and receive</p>
                    <p>immediate access to these level 1 benefits: </p>
                </section>
                <section style={{marginTop:'10px'}}>
                    <h3><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon> Free shipping on your first 5 purchases</h3>
                    <h3><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon> A 30% off voucher for your first purchase</h3>
                    <h3><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon> Access to members-only products and sales</h3>
                    <h3><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon> Special offers and promotions</h3>
                </section>
                <section style={{marginTop:'10px'}}>
                    <h3>Join now to start earning points, reach new levels and unlock rewards and benefits from jUPETA</h3>
                </section>
            </Row>
        </Container>
    </div>
  )
}

export default WelcomePage