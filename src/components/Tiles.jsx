import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import fben from '../images/featuredben.png'
import j from '../images/featuredbuy.png'
import beats from '../images/beats.jpg'

const Tiles = () => {
  return (
    <div style={{width: '100vw', height: '400px', padding: '20px'}}>
      <div style={{width: '100%', height: '100%', backgroundColor: '#cacaca', display: 'flex', gap: '10px'}}>
        <section style={{width: '40%', height: '100%', backgroundColor: 'yellow'}}>
          <img src={fben} style={{width: '100%', height: '100%', objectFit: 'fill', borderRadius: '7px'}} alt='' />
        </section>
        <section style={{width: '20%', height: '100%', backgroundColor: 'lightblue'}}>
          <img src={j} style={{width: '100%', height: '100%', objectFit: 'fill', borderRadius: '7px'}} alt='' />
        </section>
        <section style={{width: '40%', height: '100%', backgroundColor: 'green', display: 'flex', flexDirection: 'column'}}>
          <section style={{width: '100%', height: '50%', backgroundColor: 'burlywood', padding: '2px', gap: '5px', display: 'flex'}}>
            <h4>Jon</h4>
          </section>
          <section style={{width: '100%', height: '50%', backgroundColor: 'brown', padding: '2px', gap: '5px', display: 'flex'}}>
            <h4>Apuu</h4>
          </section>
        </section>
      </div>
    </div>
  )
}

export default Tiles