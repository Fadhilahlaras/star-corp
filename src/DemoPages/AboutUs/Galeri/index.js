import React, {Component} from 'react';
import {
    Button,
    Card, CardBody, CardFooter, CardHeader, Col, CardTitle,
    Collapse, Fade, Row, Container
} from 'reactstrap';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import prodemy2 from "../../../assets/utils/images/prodemy/prodemy4_2.jpg";
import prodemy3 from "../../../assets/utils/images/prodemy/prodemy4_12.jpg"
import AppHeader from "../../../Layout/AppHeader";

class Galeri extends Component {

    constructor(props) {
        super(props);
        this.onEntering = this.onEntering.bind(this);
        this.onEntered = this.onEntered.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
        this.toggle = this.toggle.bind(this);

        this.state = {
            collapse: false,
            accordion: [true, false, false],
            custom: [true, false],
            status: 'Closed',
            fadeIn: true,
            timeout: 300,
        };
    }

    onEntering() {
        this.setState({status: 'Opening...'});
    }

    onEntered() {
        this.setState({status: 'Opened'});
    }

    onExiting() {
        this.setState({status: 'Closing...'});
    }

    onExited() {
        this.setState({status: 'Closed'});
    }

    toggle() {
        this.setState({collapse: !this.state.collapse});
    }


    render() {
        return (
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
                            <Row>
                                <Col sm="12" md="6" xl="4">
                                <Card className="main-card mb-3">
                                    <CardHeader>
                                        <Button color="primary" onClick={this.toggle}> Image {this.state.status} </Button>
                                    </CardHeader>
                                    <CardBody>
                                        <Collapse isOpen={this.state.collapse} onEntering={this.onEntering}
                                              onEntered={this.onEntered} onExiting={this.onExiting}
                                            onExited={this.onExited}>

                                            <img src={prodemy2} style={{width:350, height:"500", alignContent:"center"}}/>

                                        </Collapse>
                                            {/*<h6 className="text-center">Current state: {this.state.status}</h6>*/}
                                    </CardBody>
                                </Card>
                                </Col>
                                <Col sm="12" md="6" xl="4">
                                    <Card className="card-shadow-primary card-border text-white mb-3" color="focus">
                                        <img src={prodemy2}/>
                                        <CardFooter className="text-center d-block">
                                            <h6 color="dark">Send Message</h6>
                                        </CardFooter>
                                    </Card>
                                </Col>
                                <Col sm="12" md="6" xl="4">
                                    <Card className="card-shadow-primary card-border text-white mb-3" color="dark">
                                            <img src={prodemy3} style={{width:405, height:"500", alignContent:"center"}}/>
                                        <CardFooter className="text-center d-block">
                                            <h6 color="dark">Send Message</h6>
                                        </CardFooter>
                                    </Card>
                                </Col>
                </Row>
                        </Container>
                    </div>
                </div>
            </CSSTransitionGroup>
        );
    }
}

export default Galeri;
