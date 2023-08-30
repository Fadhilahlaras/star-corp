import React, {Fragment, Component} from "react";

import Slider from "react-slick";


import {
    Col,
    Row,
    FormText,  Card
} from 'reactstrap';
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import AppHeader from "../../Layout/AppHeader";
import AppFooter from "../../Layout/AppFooter";
import {Link} from "react-router-dom";

import pro1 from "../../assets/utils/images/product/kaos/meteora1.jpeg";
import pro2 from "../../assets/utils/images/product/kaos/pokemon1.jpeg";
import pro3 from "../../assets/utils/images/product/kaos/pokemon6.jpeg";


export default class AboutUs extends Component {

    constructor() {
        super();
        this.state = {
            modal: false,
            modal1: false,
            ini: []
        };
        this.toggle = this.toggle.bind(this);
        this.toggle1 = this.toggle1.bind(this);
    }

    toggle(dat) {
        this.setState({
            modal: !this.state.modal,
            // ini: dat.id,
        });
    }

    toggle1(dat) {
        this.setState({
            modal1: !this.state.modal1,
            ini: dat.id,
        });
    }

    render() {


        let settings = {
            dots: true,
            infinite: true,
            speed: 500,
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            initialSlide: 0,
            autoplay: true,
            adaptiveHeight: true

        };


        return (


            <Fragment>
                <CSSTransitionGroup
                    component="div"
                    transitionName="TabsAnimation"
                    transitionAppear={true}
                    transitionAppearTimeout={0}
                    transitionEnter={false}
                    transitionLeave={false}>
                    <AppHeader/>

                    <div className="app-main">
                        <Row className="h-100">
                            <Row className="h-100 no-gutters">
                                <Col lg="6" md="12"
                                     className="h-100 d-flex bg-white justify-content-center align-items-center">
                                    <Col lg="9" md="10" sm="12" className="mx-auto app-login-box">

                                        <h4>
                                            Welcome, to <span className="text-success" style={{ fontSize: 23}}>Star Surabaya Corp</span> 
                                        </h4>

                                        <div>

                                            <FormText style={{
                                                textAlign: 'justify',
                                                color: '#1B3D6C',
                                                paddingBottom: 20,
                                                fontSize: 18
                                            }}> • Star Comp : menyediakan jasa instalasi Windows beserta isinya (bisa request)
                                            </FormText>

                                            <FormText style={{
                                                textAlign: 'justify',
                                                color: '#1B3D6C',
                                                paddingBottom: 20,
                                                fontSize: 18
                                            }}> • Star Design : melayani jasa editing foto/video, desain undangan, kartu nama, dll.
                                            </FormText>

                                            <FormText style={{
                                                textAlign: 'justify',
                                                color: '#1B3D6C',
                                                paddingBottom: 20,
                                                fontSize: 18
                                            }}> • Star Printing : kostum kaos DTF satuan, topi, gantungan kunci, cetak undangan, souvenir, kartu nama, id card, dll.
                                            </FormText>

                                            <FormText style={{
                                                textAlign: 'justify',
                                                color: '#1B3D6C',
                                                paddingBottom: 20,
                                                fontSize: 18
                                            }}> #Partner store Linkin Park Surockboyo & LPFI.#
                                            </FormText>
                                            
                                        </div>

                                    </Col>
                                </Col>
                                <Col lg="4" className="d-none d-lg-block">
                                    <div className="slider-light">
                                        <Slider  {...settings}>
                                            {/*<div*/}
                                            {/*    className="h-100 d-flex justify-content-center align-items-center bg-premium-dark">*/}
                                            {/*    <div className="slide-img-bg"*/}
                                            {/*         style={{*/}
                                            {/*             backgroundImage: 'url(' + bg3 + ')'*/}
                                            {/*         }}/>*/}
                                            {/*    <div className="slider-content">*/}
                                            {/*        <h3>Scalable, Modular, Consistent</h3>*/}
                                            {/*        <p>*/}
                                            {/*            Easily exclude the components you don't require. Lightweight,*/}
                                            {/*            consistent*/}
                                            {/*            Bootstrap based styles across all elements and components*/}
                                            {/*        </p>*/}
                                            {/*    </div>*/}
                                            {/*</div>*/}
                                            <div className="h-100 d-flex justify-content-center align-items-center bg-plum-plate">
                                                <div className="slide-img-bg"
                                                     style={{
                                                         backgroundImage: 'url(' + pro1 + ')'
                                                     }}/>
                                                <div className="slider-content">
                                                    <h3>Perfect Bright</h3>
                                                    <p>
                                                        Daily You is like a dream. This product can help you to brighten your face and clean your face optimally from dust, dirt, and remaining makeup.
                                                    </p>
                                                </div>
                                            </div>

                                            <div
                                                className="h-100 d-flex justify-content-center align-items-center bg-premium-dark">
                                                <div className="slide-img-bg"
                                                     style={{
                                                         backgroundImage: 'url(' + pro2 + ')'
                                                     }}/>
                                                <div className="slider-content">
                                                    <h3>Nature Daily</h3>
                                                    <p>
                                                        Contains natural Aloe vera which provides extra moisture with a soothing effect and cools dry and reddened skin due to the sun.
                                                    </p>
                                                </div>
                                            </div>
                                            <div
                                                className="h-100 d-flex justify-content-center align-items-center bg-sunny-morning">
                                                <div className="slide-img-bg opacity-6"
                                                     style={{
                                                         backgroundImage: 'url(' + pro3 + ')'
                                                     }}/>
                                                <div className="slider-content">
                                                    <h3>C Defense</h3>
                                                    <p>
                                                        Free radicals can damage the skin. Starting from making it dry, dull, accelerate aging to acne. For that you need anti-oxidant skincare that can win free radicals so that your skin is healthy and glowing.
                                                    </p>
                                                </div>
                                            </div>
                                        </Slider>
                                    </div>

                                </Col>
                            </Row>

                        </Row>

                        <AppFooter/>

                    </div>

                </CSSTransitionGroup>
            </Fragment>
        );
    }
}
