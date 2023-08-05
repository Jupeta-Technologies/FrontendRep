import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import fben from '../images/featuredben.png'
import j from '../images/featuredbuy.png'
import beats from '../images/beats.jpg'

const Tiles = () => {
  return (
    <Container style={{width: '100vw'}}>
      <Row>
        <Col style={{ height: '400px', display: 'flex', justifyContent: 'center'}} xs={5}>
          <section style={{width: '100%', height: '100%', padding: '10px'}}>
            <img src={fben} style={{width: '100%', height: '100%', objectFit: 'fill', borderRadius: '7px'}} alt='' />
          </section>
        </Col>
        <Col style={{ height: '400px', display: 'flex', justifyContent: 'center'}} xs={2}>
          <section style={{width: '100%', height: '100%', padding: '10px'}}>
            <img src={j} style={{width: '100%', height: '100%', objectFit: 'fill', borderRadius: '7px'}} alt='' />
          </section>
        </Col>
        <Col style={{height: '400px', display: 'flex', flexDirection: 'column'}} xs={5}>
          <section style={{height: '50%', display: 'flex', gap: '5px', marginBottom: '5px'}}>
            <div style={{width: '50%', backgroundColor: 'pink'}}>
              <img src={beats} alt='' style={{width: '100%', height: '100%', objectFit: 'fill', borderRadius: '7px'}}/>
            </div>
            <div style={{width: '50%', backgroundColor: 'whitesmoke'}}>
              <img src={beats} alt='' style={{width: '100%', height: '100%', objectFit: 'fill', borderRadius: '7px'}}/>
            </div>
          </section>
          <section style={{height: '50%',backgroundColor: 'orange', display: 'flex', gap: '5px'}}>
            <div style={{width: '50%', backgroundColor: 'blue'}}>
              <img src={beats} alt='' style={{width: '100%', height: '100%', objectFit: 'fill', borderRadius: '7px'}}/>
            </div>
            <div style={{width: '50%', backgroundColor: 'brown'}}>
              <img src={beats} alt='' style={{width: '100%', height: '100%', objectFit: 'fill', borderRadius: '7px'}}/>
            </div>
          </section>
        </Col>
      </Row>
    </Container>
  )
}

export default Tiles