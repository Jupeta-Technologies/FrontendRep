import React from 'react'
//import { Navbar } from '../components'
import NewnavBar from '../components/NewnavBar'
import { Container, Row, Col } from 'react-bootstrap'
import '../components/Welcome.css'

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
                    <Col style={{width: '50vw', height: '600px', backgroundColor: 'red'}}>
                        <h3>Hey there</h3>
                    </Col>
                    <Col style={{width: '50vw', height: '300px'}}>
                        <h3>Hi there</h3>
                    </Col>
                </div>
            </Row>
        </Container>
    </div>
  )
}

export default WelcomePage