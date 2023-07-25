import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import jupater from '../images/jupater.png'
import '../components/Overview.css'

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
    </Container>
    </div>
  )
}

export default Overview