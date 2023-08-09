import React, {Fragment, Component} from "react";

import classnames from 'classnames';

import {
    Col,
    Row,
    Button, TabContent, TabPane, Nav, NavItem, NavLink,
    CardHeader,
    Form,
    FormGroup,
    Label,
    Input,
    FormText, ModalHeader, Modal, ModalFooter, ModalBody,
    DropdownToggle,
    UncontrolledDropdown, CardImg, CardBody, CardTitle, CardSubtitle, Card, Container, CardFooter
} from 'reactstrap';


import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import AppHeader from "../../Layout/AppHeader";
import AppFooter from "../../Layout/AppFooter";



class Activities extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1',
            showMore: true,
            transform: true,
            showInkBar: true,
            selectedTabKey: 0,
            transformWidth: 400,
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    render() {
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
                        <div className="app-main__inner">
                        <Container fluid>
                            <Card tabs="true" className="mb-3">
                                <CardHeader>
                                    <Nav justified>
                                        <NavItem>
                                            <NavLink href="#"
                                                     className={classnames({active: this.state.activeTab === '1'})}
                                                     onClick={() => {
                                                         this.toggle('1');
                                                     }}
                                            >
                                                Education Pillars
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink href="#"
                                                     className={classnames({active: this.state.activeTab === '2'})}
                                                     onClick={() => {
                                                         this.toggle('2');
                                                     }}
                                            >
                                                Health Pillars
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink href="#"
                                                     className={classnames({active: this.state.activeTab === '3'})}
                                                     onClick={() => {
                                                         this.toggle('3');
                                                     }}
                                            >
                                                Women's Empowerment Pillars
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink href="#"
                                                     className={classnames({active: this.state.activeTab === '4'})}
                                                     onClick={() => {
                                                         this.toggle('4');
                                                     }}
                                            >
                                                Environment Pillars
                                            </NavLink>
                                        </NavItem>
                                    </Nav>
                                </CardHeader>
                                <CardBody>

                                    <TabContent activeTab={this.state.activeTab}>
                                        <TabPane tabId="1">
                                            <p>Education is the foundation of building a nation.
                                                Daily You is committed to participating in advancing
                                                education in Indonesia through programs such as
                                                teacher training, scholarships, parenting, improvements
                                                to infrastructure, to leadership development.</p>
                                        </TabPane>
                                        <TabPane tabId="2">
                                            <p>Health is an important beginning of the welfare of
                                                the people of a nation. Improving the quality of health
                                                is one of the commitments that Daily You continues to
                                                pursue with organizations in the health sector, especially
                                                those related to women and children.</p>
                                        </TabPane>
                                        <TabPane tabId="3">
                                            <p>Women are basically empowered, Daily You is committed to
                                                developing the capacity and skills of women in Indonesia
                                                to be more empowered together. In order to grow the spirit
                                                of womenpreneur who can support the improvement of quality of life.</p>
                                        </TabPane>
                                        <TabPane tabId="4">
                                            <p>In carrying out its commitment to preserving the earth,
                                                Daily You seeks to collaborate with organizations in the
                                                environmental sector and involve the general public in the
                                                provision of clean water, waste treatment and environmental
                                                preservation.</p>
                                        </TabPane>
                                    </TabContent>

                                </CardBody>
                            </Card>
                            {/*<Card>*/}
                            {/*    <Row>*/}
                            {/*        <Col md="12">*/}

                            {/*            <div*/}
                            {/*                className="p-5 bg-plum-plate">*/}
                            {/*                <div className="slide-img-bg"*/}
                            {/*                     style={{*/}
                            {/*                         fade: true,*/}
                            {/*                         backgroundImage: 'url(' + bg1 + ')',*/}
                            {/*                         color: "white", textAlign: "center"*/}
                            {/*                     }}/>*/}
                            {/*                <div className="slider-content" style={{*/}
                            {/*                    color: "white", textAlign: "center"*/}
                            {/*                }}>*/}
                            {/*                    <h3>Galeri</h3>*/}
                            {/*                </div>*/}
                            {/*            </div>*/}

                            {/*        </Col>*/}

                            {/*    </Row>*/}
                            {/*    <Row>*/}
                            {/*        <Galeri/>*/}
                            {/*    </Row>*/}
                            {/*</Card>*/}

                            {/*<Row>*/}
                            {/*    <Col lg="6">*/}
                            {/*        <Card className="main-card mb-3">*/}
                            {/*            <CardBody>*/}
                            {/*                <CardTitle>Galeri</CardTitle>*/}
                            {/*                <ColorGradients/>*/}
                            {/*            </CardBody>*/}
                            {/*        </Card>*/}
                            {/*    </Col>*/}
                            {/*</Row>*/}
                        </Container>

                        <AppFooter/>
                        </div>
                    </div>

                </CSSTransitionGroup>
            </Fragment>
        );
    }
}

export default Activities;