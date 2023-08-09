import React, {Fragment, Component} from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import {
    Button, Form,
    FormGroup, Label,
    Input, FormText,
    Row, Col,
    Card, CardBody,
    CardTitle, Container,
} from 'reactstrap';

class Biodata extends Component {
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
                    <Container fluid>
                        <Row>
                            <Col md="12">
                                <Card className="main-card mb-3">
                                    <CardBody>
                                        <CardTitle>Form Biodata</CardTitle>
                                        <Form>
                                            <FormGroup>
                                                <Label for="name">Name</Label>
                                                <Input type="text" name="name" id="name"
                                                       placeholder="Input your name"/>
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="address">Address</Label>
                                                <Input type="text" name="address" id="address"
                                                       placeholder="Input your address"/>
                                            </FormGroup>

                                            <FormGroup>
                                                <Label for="bdate">Birthdate</Label>
                                                <Input type="date" name="bdate" id="bdate"/>
                                            </FormGroup>

                                            <FormGroup>
                                                <label for="gender">Gender</label>
                                                <FormGroup check>
                                                    <Label check>
                                                        <Input type="radio" name="radio1"/>{' '}
                                                        Male
                                                    </Label>
                                                </FormGroup>
                                                <FormGroup check>
                                                    <Label check>
                                                        <Input type="radio" name="radio1"/>{' '}
                                                        Female
                                                    </Label>
                                                </FormGroup>
                                            </FormGroup>

                                            <FormGroup>
                                                <Label for="religion">Religion</Label>
                                                <Input type="select" name="religion" id="religion">
                                                    <option></option>
                                                    <option>Islam</option>
                                                    <option>Christen</option>
                                                    <option>Chatolic</option>
                                                    <option>Budha</option>
                                                    <option>Hindu</option>
                                                </Input>
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="email">Email</Label>
                                                <Input type="email" name="email" id="email"
                                                       placeholder="Input your email"/>
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="examplePassword">Password</Label>
                                                <Input type="password" name="password" id="examplePassword"
                                                       placeholder="Type your password"/>
                                            </FormGroup>

                                            <FormGroup>
                                                <Label for="exampleFile">File</Label>
                                                <Input type="file" name="file" id="exampleFile"/>
                                                <FormText color="muted">
                                                    This is some placeholder block-level help text for the above input.
                                                    It's a bit lighter and easily wraps to a new line.
                                                </FormText>
                                            </FormGroup>
                                            <Button color="primary" className="mt-1">Submit</Button>
                                        </Form>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>

                    </Container>
                </CSSTransitionGroup>
            </Fragment>
        );
    }
}

export default Biodata
