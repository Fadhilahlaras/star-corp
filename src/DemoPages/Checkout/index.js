import React, {Fragment} from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import {
    Col, Row, ModalHeader, Modal, ModalFooter, ModalBody,
    Button, Container, Table
} from 'reactstrap';
import AppHeader from '../../Layout/AppHeader'
import Item from './Item'
import FormDetails from './FormDatails'

class Checkout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>;
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
                                <Row>
                                    <Col md="6">
                                        <Item/>
                                    </Col>
                                    <Col md="6">
                                        <FormDetails/>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                </CSSTransitionGroup>
                <span className="d-inline-block mb-2 mr-2">
        {/*<Button color="primary" onClick={this.toggle}>Custom Close Button</Button>*/}
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle} close={closeBtn}>Thanks for Your Order</ModalHeader>
          <ModalBody>
            SELAMAT PESANAN ANDA BERHASIL
          </ModalBody>
          <ModalFooter>
            <Button color="link" onClick={this.toggle}>Close</Button>
            <Button color="primary" onClick={this.toggle}>Done</Button>{' '}
          </ModalFooter>
        </Modal>
      </span>
            </Fragment>
        );

    }
}

export default Checkout;