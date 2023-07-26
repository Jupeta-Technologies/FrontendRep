import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import jupater from '../images/jupater.png'
import '../components/Overview.css'
import readyauction from '../images/readyauction.png'

const Overview = () => {
  return (
    <div className='overviewbody'>
        <Container style={{width: '100vw', minHeight: '100vh', padding: '0', margin: '0'}}>
        <Row style={{width: '100%', height: '350px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div style={{width: '40%', height: '330px'}}>
                <img src={jupater} alt='' style={{width: '100%', height: '100%', objectFit: 'fill'}}/>
            </div>
        </Row>
        <Row style={{width: '100%', padding: '0'}}>
            <Col xs={12} style={{height:'70px'}}>
                <section className='text-center'>
                    <h3><strong>How It Works</strong></h3>
                    <p>Follow these 3 steps to list, sell and auction your item</p>
                </section>
            </Col>
            <Col style={{height: '350px', display: 'flex', justifyContent: 'center', alignItems:'center'}}>
                <div className='signupin'>
                    <h1>1</h1>
                    <h1>Sign Up/Sign In</h1>
                    <p style={{opacity: '0.5'}}>Simply sign up or sign in if you already have an account with us.</p>
                </div>
            </Col>
            <Col style={{height: '350px', display: 'flex', justifyContent: 'center', alignItems:'center'}}>
                <div className='signupin'>
                    <h1>2</h1>
                    <h1>Take Photos</h1>
                    <p style={{opacity: '0.5'}}>Snap some photos and write a catchy description.</p>
                </div>
            </Col>
        </Row>
        <Row>
            <Col style={{width: '700px', height: '350px', display: 'flex', justifyContent: 'center', alignItems:'center'}}>
                <div className='signupout'>
                    <h1>3</h1>
                    <h1>Set the price</h1>
                </div>
            </Col>
        </Row>
        <Row style={{marginTop: '20px'}}>
            <Col style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
                <section>
                    <img src={readyauction} alt='' />
                </section>
                <section>
                    <h3><strong>Ready, Set, Auction !</strong></h3>
                </section>
                <section style={{display: 'flex', flexDirection: 'column', padding: '0', gap: '0'}}>
                    <p style={{margin: '0', opacity: '0.6'}}>Welcome to AuctionFrenzy, where you can</p>
                    <p style={{margin: '0', opacity: '0.6'}}>sell and auction your items for fabulous</p>
                    <p style={{margin: '0', opacity: '0.6'}}>profits! Unleash your inner auctioneer and</p>
                    <p style={{margin: '0', opacity: '0.6'}}>discover the thrill of outbidding others. You</p>
                    <p style={{margin: '0', opacity: '0.6'}}>ain't seen a marketplace this exciting!</p>
                </section>
                <section style={{marginTop: '15px'}}>
                    <button style={{width: '150px', backgroundColor: 'black', color: 'white', padding: '10px', borderRadius: '7px'}}>Start selling</button>
                </section>
            </Col>
        </Row>
        <Row style={{marginTop: '70px'}}>
            <Col style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
                <section style={{marginBottom: '30px'}}><h1><strong>Simple, Transparent, Secure</strong></h1></section>
                <section style={{display: 'flex', marginBottom: '20px'}}>
                    <img />
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <h5><strong>GHS 2.00 Listing Fee</strong></h5>
                        <h6>Listings are active for four months, or until they sell.</h6>
                    </div>
                </section>
                <section style={{display: 'flex', marginBottom: '20px'}}>
                    <img />
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <h5><strong>6.5% Transaction fee, MOMO Fee</strong></h5>
                        <h6>Once purchased, there is a small commission fee and a</h6>
                        <h6>standard MOMO payment processing fee.</h6>
                    </div>
                </section>
                <section style={{display: 'flex'}}>
                    <img />
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <h5><strong>15% Offsite Ads Fee*</strong></h5>
                        <h6>Jupeta pays to advertise your items across the web</h6>
                        <h6>through Offsite Ads. You only pay a fee when you make a</h6>
                        <h6>sale from one of those ads.</h6>
                    </div>
                </section>
            </Col>
        </Row>
    </Container>
    </div>
  )
}

export default Overview