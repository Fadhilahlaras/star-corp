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

import bg1 from "../../assets/utils/images/dropdown-header/abstract1.jpg";
import bg2 from "../../assets/utils/images/dropdown-header/abstract2.jpg";
import bg3 from "../../assets/utils/images/dropdown-header/abstract6.jpg";
import bg4 from "../../assets/utils/images/dropdown-header/abstract5.jpg";

import pro1 from "../../assets/utils/images/prodemy/prodemy4_1.jpg";
import pro2 from "../../assets/utils/images/prodemy/prodemy4_7.jpg";
import pro3 from "../../assets/utils/images/prodemy/prodemy4_12.jpg";


import ModalAja from "./Visi";
import ModalAja1 from "./Misi";

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
                                <Col lg="8" md="12"
                                     className="h-100 d-flex bg-white justify-content-center align-items-center">
                                    <Col lg="9" md="10" sm="12" className="mx-auto app-login-box">

                                        <h4>
                                            Welcome, to <span className="text-success">Daily You</span> company
                                        </h4>

                                        <div>

                                            <FormText style={{
                                                textAlign: 'justify',
                                                color: '#1B3D6C',
                                                paddingBottom: 20,
                                                fontSize: 18
                                            }}> Daily You is an original Indonesian halal cosmetic brand that was
                                                founded in 2012. We always provides the best quality product to
                                                support women to look beautiful at all times according to their
                                                character. With experience in several industry sectors, a broad
                                                portfolio and technology platform as well as bringing a dedicated
                                                and highly qualified team, enabling the talent we provide to provide
                                                fast and responsive services, making it the best choice for
                                                companies that want to increase the usability of their businesses
                                            </FormText>
                                        </div>

                                        <div>
                                            <Row>
                                                <Col sm="4" md="1" xl="4">

                                                        <Card className="mb-3 profile-block" onClick={this.toggle}>
                                                            <div className="dropdown-menu-header">
                                                                <img src={bg1} alt=""
                                                                     className="profile-blur opacity-10"/>
                                                                <div className="profile-inner bg-warning opacity-5"/>
                                                                <div className="menu-header-content">
                                                                    {/*<Link to="/cart" style={{textDecoration:"none"}}>Visi</Link>*/}
                                                                    <h5 className="menu-header-title">Visi</h5>
                                                                </div>
                                                            </div>
                                                        </Card>

                                                </Col>
                                                <Col sm="4" md="1" xl="4">
                                                    <Card className="mb-3 profile-block" onClick={this.toggle1}>
                                                        <div className="dropdown-menu-header">
                                                            <img src={bg2} alt="" className="profile-blur opacity-10"/>
                                                            <div className="profile-inner bg-dark opacity-6"/>
                                                            <div className="menu-header-content">
                                                                <h5 className="menu-header-title">Misi</h5>

                                                            </div>
                                                        </div>
                                                    </Card>
                                                </Col>
                                                <Col sm="4" md="1" xl="4">
                                                    <Link to="/team" style={{textDecoration: "none"}}>
                                                        <Card className="mb-3 profile-block">
                                                            <div className="dropdown-menu-header">
                                                                <img src={bg3} alt=""
                                                                     className="profile-blur opacity-10"/>
                                                                <div className="profile-inner bg-dark opacity-6"/>
                                                                <div className="menu-header-content">
                                                                    <h5 className="menu-header-title">Team</h5>
                                                                </div>
                                                            </div>
                                                        </Card>
                                                    </Link>

                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col md="1" xl="12">
                                                    <Link to="/galeri" style={{textDecoration: "none"}}>
                                                        <Card className="mb-3 profile-block">
                                                            <div className="dropdown-menu-header">
                                                                <img src={bg4} alt=""
                                                                     className="profile-blur opacity-10"/>
                                                                <div className="profile-inner bg-dark opacity-6"/>
                                                                <div className="menu-header-content">
                                                                    <h5 className="menu-header-title">Galeri</h5>
                                                                </div>
                                                            </div>
                                                        </Card>
                                                    </Link>

                                                </Col>
                                            </Row>
                                        </div>

                                    </Col>
                                </Col>
                            </Row>

                        </Row>

                        <AppFooter/>

                    </div>



                    <ModalAja toggle={this.toggle} modal={this.state.modal} />
                    <ModalAja1 toggle={this.toggle1} modal={this.state.modal1} />
                </CSSTransitionGroup>
            </Fragment>
        );
    }
}
