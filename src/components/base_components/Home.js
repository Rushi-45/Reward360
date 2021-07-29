import React, { Component } from 'react'
import { Container, Row, Col, Button, Carousel, Card } from 'react-bootstrap';
import One from '../../images/1.jpg';
import Two from '../../images/2.jpg';
import Three from '../../images/3.jpg';
import Rec1 from '../../images/r1.png';
import Rec2 from '../../images/r2.png';
import vector1 from '../../images/vec1.png';
import vector2 from '../../images/vec2.png';
import vector3 from '../../images/vec3.png';
import cardImg1 from '../../images/cardImg1.png';
import cardImg2 from '../../images/cardImg2.png';
import Footer from './Footer';
import './Home.css';

class Home extends Component {
    render() {        
        const centered = {
            textAlign: 'center',
            fontFamily: 'Poppins',
            justifyContent: 'center'

        };
        const ColoredLine = ({ color }) => (
            <hr
                style={{
                    color: color,
                    backgroundColor: color,
                    height: 1
                }}
            />
        );
        const carousel = {
            marginTop: 30,
            marginBottom: 30,
        };
        return (
            <div>
                <Container>
                    <Row style={carousel} className='carousel'>
                        <Col className='col-md-12'>
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"                                        
                                        src={One}
                                        alt="First slide"
                                        // height="650" width="650"
                                    />
                                    <Carousel.Caption>
                                        <h3>First slide label</h3>
                                        <p>Random Description Typed</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={Two}
                                        alt="Second slide"
                                        // height="650" width="650"
                                    />

                                    <Carousel.Caption className='carouseleffect'>
                                        <h3>Second slide label</h3>
                                        <p>Description Random Typed</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={Three}
                                        alt="Third slide"
                                        // height="650" width="650"
                                    />

                                    <Carousel.Caption>
                                        <h3>Third slide label</h3>
                                        <p>Typed Random Description</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                        <br />
                    </Row>
                    <Row style={centered}>
                        <b><h4 className='font-weight-bold'>Essential Mobile App Landing for Workspaces</h4></b>
                        <p className="greyColour">A mobile app landing page is important and essential for right amount of information about your product. Start increasing your user base upon the launch of your product</p>
                        <button className="button button1">Explore Demos<i className="arrow right"></i></button>
                    </Row>
                    <ColoredLine color="grey" />
                    <Row style={centered}>
                        <b><h5 className='font-weight-bold'>Explore our demos</h5></b>
                        <p className="greyColour">A mobile app landing page is important and essential for right amount of information about your product. Start increasing your user base upon the launch of your product</p>
                        <img src={Rec2} alt="Rec2" className="rectangleImg" />
                        <img src={Rec1} alt="Rec1" className="rectangleImg" />
                    </Row>
                    <ColoredLine color="grey" />
                    <Row style={centered}>
                        <h5 className='font-weight-bold'>Start your business journey with Soprano</h5>
                    </Row>
                    <Row style={centered}>
                        <p className="greyColour">Try Shopify for free, and explore all the tools and services you need to start, run, and grow your business.</p>
                    </Row>
                    <br />
                    <br />
                    <Row style={centered}>
                        <Col className="col-md-4 col-sm-12 mx-auto">
                            <img src={vector1} />
                            <br />
                            <br />
                            <b><h5>Move Your Business Online</h5></b>
                            <p className="greyColour">Create a business, whether you’ve got a fresh idea or are looking for a new way to make money.</p>
                        </Col>
                        <Col className="col-md-4 col-sm-12 mx-auto">
                            <img src={vector2} />
                            <br />
                            <br />
                            <b><h5>Switch to Soprano</h5></b>
                            <p className="greyColour">Bring your business to Soprano, no matter which ecommerce platform you’re currently using.</p>
                        </Col>
                        <Col className="col-md-3 col-sm-12 mx-auto">
                            <img src={vector3} />
                            <br />
                            <br />
                            <b><h5>Enjoy ur benefits</h5></b>
                            <p className="greyColour">Get set up with the help of a trusted freelancer or agency from the Shopify Experts Marketplace.</p>
                        </Col>
                        <br />
                        <br />
                        <button className="button button2 col-md-2 col-sm-12">Start Free Trail</button>
                    </Row>
                    <ColoredLine color="grey" />
                    <br />
                    <Row style={centered}>
                        <b><h4 className='font-weight-bold'>What Clients say about our product</h4></b>
                        <br />
                    </Row>
                    <br />
                    <Row style={centered}>
                        <div className="card card-width col-md-5 col-sm-12 mr-5 cardPadding text-left">
                            <div classNme="card-body">
                                <img className="cardImg" src={cardImg1} alt='cardImg1' />

                                <h4 className="card-title text-center font-weight-bold">Allen Jones</h4>
                                <br />
                                <br />
                                <br />
                                <br />
                                <p className="card-text card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore features that Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                        </div>
                        <div className="card card-width col-md-5 col-sm-12 ml-5 cardPadding text-left">
                            <div classNme="card-body">
                                <img className="cardImg" src={cardImg2} alt='cardImg2' />

                                <h4 className="card-title text-center font-weight-bold">Allen Jones</h4>
                                <br />
                                <br />
                                <br />
                                <br />
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore features that Lorem ipsum dolor sit amet consectetur.</p>
                            </div>

                        </div>
                    </Row>
                    <Row >
                        <div className="newsletter-subscribe mt-5 container">
                            <div className="container">
                                <div className='row'>
                                    <div className="intro col-md-5 col-sm-12 mr-5">
                                        <h3 className="text-center newsletter">Subscribe to our Newsletter</h3>
                                        <br />
                                        <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore</p>
                                    </div>
                                    <form className="form-inline col-md-5 col-sm-12 ml-5" method="post">
                                        <div className="form-group"><input className="form-control email-style" type="email" name="email" placeholder="Email Address" /></div>
                                        <div className="form-group"><button className="btn button3" type="button">Get Access</button></div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </Row>
                    <ColoredLine color="grey" />

                    {/* <br /> */}
                </Container>

                <Footer />
            </div >
        )
    }
}

export default Home;