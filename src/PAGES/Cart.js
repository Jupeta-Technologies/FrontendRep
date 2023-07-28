import React from 'react'
import NewnavBar from '../components/NewnavBar'
import { Container, Row, Col } from 'react-bootstrap'

const Cart = () => {
  return (
    <>
        <NewnavBar />
        <Container style={{marginTop: '60px'}}>
            <Row>
                <Col xs={7} style={{backgroundColor: 'yellowgreen', minHeight: '1000px', display: 'flex', flexDirection: 'column'}}>
                    <section>
                        <h3><strong>YOUR BAG</strong></h3>
                        <h4>Total: [ Items]</h4>
                    </section>
                    <section>
                        <h3>To be continued...</h3>
                    </section>
                </Col>
                <Col xs={5} style={{backgroundColor: 'blueviolet', minHeight: '1000px'}}>
                    <h3>Order summary here</h3>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Cart