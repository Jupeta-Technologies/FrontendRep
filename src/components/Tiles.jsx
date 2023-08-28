import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import fben from '../images/featuredben.png'
import j from '../images/featuredbuy.png'
import beats from '../images/beats.jpg'
import '../components/TileStyles.css'

const Tiles = () => {
  return (
    <div className='tilecontainer'>
      <div className='innertilecontainer'>
        <section className='firstsection'>
          <img src={fben} style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '7px'}} alt='' />
        </section>
        <section style={{width: '20%', height: '100%'}}>
          <img src={j} style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '7px'}} alt='' />
        </section>
        <section style={{width: '40%', height: '100%', display: 'flex', flexDirection: 'column'}}>
          <section style={{width: '100%', height: '50%', padding: '2px', gap: '5px', display: 'flex'}}>
            <div style={{width: '50%'}}>
              <img src={j} alt='' style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '7px'}}/>
            </div>
            <div style={{width: '50%'}}>
              <img src={j} alt='' style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '7px'}}/>
            </div>
          </section>
          <section style={{width: '100%', height: '50%', padding: '2px', gap: '5px', display: 'flex'}}>
            <div style={{width: '50%'}}>
              <img src={j} alt='' style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '7px'}}/>
            </div>
            <div style={{width: '50%'}}>
              <img src={j} alt='' style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '7px'}}/>
            </div>
          </section>
        </section>
      </div>
    </div>
  )
}

export default Tiles