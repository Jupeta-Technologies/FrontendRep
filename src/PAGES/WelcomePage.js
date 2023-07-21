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
                <Col>
                    <h3>Hello world!</h3>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default WelcomePage