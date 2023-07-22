import React from 'react'
//import { Navbar } from '../components'
import NewnavBar from '../components/NewnavBar'
import { Container, Row, Col } from 'react-bootstrap'
import '../components/Welcome.css'
import featuredbuy from '../images/featuredbuy.png'
import featuredsell from '../images/featuredsell.png'
import featuredben from '../images/featuredben.png'

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
        </Container>
    </div>
  )
}

export default WelcomePage