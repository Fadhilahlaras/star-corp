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
                                <Col lg="10" md="12"
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
