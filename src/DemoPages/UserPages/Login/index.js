import React, {Fragment, Component} from "react";

import axios from "axios";

import Slider from "react-slick";

import bg1 from '../../../assets/utils/images/originals/city.jpg';
import bg2 from '../../../assets/utils/images/originals/citydark.jpg';
import bg3 from '../../../assets/utils/images/originals/citynights.jpg';

import {Col, Row, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {Link} from "react-router-dom";
import AppHeader from "../../../Layout/AppHeader";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import pro1 from "../../../assets/utils/images/prodemy/prodemy4_1.jpg";
import pro2 from "../../../assets/utils/images/prodemy/prodemy4_7.jpg";
import pro3 from "../../../assets/utils/images/prodemy/prodemy4_12.jpg";

class Login extends Component {
    constructor() {
        super();
        this.state = {}
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleFileChange = (e) => {
        this.setState({[e.target.name]: e.target.files[0]})
    }

    onSubmit = (e) => {
        const formData = new FormData();
        const json = JSON.stringify({
            "firstname": this.state.firstname,
            "lastname": this.state.lastname,
            "date": this.state.date,
            "email": this.state.email,
            "note": this.state.note
        });
        const blobDoc = new Blob([json], {
            type: 'application/json'
        });

        formData.append('file', this.state.file)
        formData.append('data', blobDoc)

        const config = {
            headers: {
                'content-type': 'multipart/mixed'
            }
        }
        axios.post("http://localhost:1234/input", formData, config)
            .then(res => console.log(res.data))


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
                <div className="h-100">
                    <Row className="h-100 no-gutters">

                        <Col lg="8" md="12" className="h-100 d-flex bg-white justify-content-center align-items-center">
                            <Col lg="9" md="10" sm="12" className="mx-auto app-login-box">
                                {/*<div className="app-logo"/>*/}
                                <h4 className="mb-0">
                                    <div>Welcome back,</div>
                                    <span>Please sign in to your account.</span>
                                </h4>

                                <Row className="divider"/>
                                <div>
                                    <Form>
                                        <Row form>
                                            <Col md={6}>

                                                <FormGroup>
                                                    <Label for="name">Username</Label>
                                                    <Input type="text" name="name" id="name"
                                                           placeholder="Username here..."/>
                                                </FormGroup>

                                                <FormGroup>
                                                    <Label for="examplePassword">Password</Label>
                                                    <Input type="password" name="password" id="examplePassword"
                                                           placeholder="Password here..."/>
                                                </FormGroup>


                                            </Col>
                                        </Row>
                                        <FormGroup check>
                                            <Input type="checkbox" name="check" id="exampleCheck"/>
                                            <Label for="exampleCheck" check>Keep me logged in</Label>
                                        </FormGroup>

                                        <Row className="divider"/>
                                        <h6 className="mt-3">
                                            No account?{' '}

                                            {/*<a href="/login" onClick={(e)=>e.preventDefault()} className="text-primary">Sign up now</a>*/}
                                            {/*<Link to={"/login"} />*/}

                                            <Link to="/register" style={{textDecoration:"none"}}>Sign Up Here</Link>

                                        </h6>
                                        <div className="d-flex align-items-center">
                                            <div className="ml-auto">
                                                {/*<a href="https://colorlib.com/" onClick={(e)=>e.preventDefault()} className="btn-lg btn btn-link">Recover*/}
                                                {/*    Password</a>{' '}{' '}*/}
                                                {/*<Button color="primary" size="lg">Login</Button>*/}

                                                <Link to="/home" style={{textDecoration: "none"}}>
                                                    <Button className="mb-2 mr-2 btn-icon btn-pill" color="primary" size="lg">Login</Button>
                                                </Link>
                                            </div>
                                        </div>
                                    </Form>
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
                </div>
                </CSSTransitionGroup>
            </Fragment>
        );
    }
}

export default Login;
