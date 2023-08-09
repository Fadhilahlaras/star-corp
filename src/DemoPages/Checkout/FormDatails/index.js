import React from 'react';
import {Button, Card, CardBody, CardTitle, Col, Form, FormGroup, Input, Label, Row, Table} from 'reactstrap';

export default class TableHover extends React.Component {
    render() {
        return (
            <Card className="main-card mb-3">
                <CardBody>
                    <CardTitle>Checkout</CardTitle>
                    <Form>
                        <Row form>
                            <Col>
                                <FormGroup>
                                    <Label for="name">Recipient's Name</Label>
                                    <Input type="text" name="name" id="name"
                                           placeholder="name"/>
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label for="payment">Payment Method</Label>
                                    <Input type="text" name="payment" id="payment"
                                           placeholder="payment"/>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row form>
                            <Col>
                                <FormGroup>
                                    <Label for="address">Delivery Addres</Label>
                                    <Input type="text" name="address" id="address"
                                           placeholder="address"/>
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label for="totalPayment">Total Payment</Label>
                                    <Input type="text" name="totalPayment" id="totalPayment"
                                           placeholder="total"/>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row form>
                            <Col>
                                <FormGroup>
                                    <Label for="deliveryOptions">Delivery Options</Label>
                                    <Input type="text" name="deliveryOptions"
                                           id="deliveryOptions"
                                           placeholder="options"/>
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label for="note">Note</Label>
                                    <Input type="text" name="note" id="note"
                                           placeholder="note"/>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Button color="primary" onClick={this.toggle}
                                className="mt-2">Checkout</Button>
                    </Form>
                </CardBody>
            </Card>
        );
    }
}
