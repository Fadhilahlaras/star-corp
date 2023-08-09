import React, {Fragment} from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import axios from "axios";

import AppHeader from "../../../Layout/AppHeader";

// Examples

import {
    Button,
    Card,
    CardBody,
    CardTitle,
    Col,
    Container, CustomInput,
    Form,
    FormGroup,
    FormText,
    Input,
    Label,
    Row
} from "reactstrap";
import {Link} from "react-router-dom";


class Register extends React.Component {
    constructor() {
        super();
        this.state = {
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleFileChange = (e) => {
        this.setState({[e.target.name]: e.target.files[0]})
    }

    componentDidMount() {
        // axios.get(`http://localhost:2121/input/save`)
        //     .then(res => {
        //         const inputList = res.data;
        //         this.setState({ inputList });
        //     })
    }

    onSubmit = (e) => {
        const formData = new FormData();
        const json = JSON.stringify({
            "firstname": this.state.firstname,
            "lastname": this.state.lastname,
            "date": this.state.date,
            "email": this.state.email,
            "address": this.state.address
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
        axios.post("http://localhost:2121/input/save", formData, config)
            .then(res => console.log(res.data))
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
                                <Row>
                                    <Col md="12">
                                        <Card className="main-card mb-3">
                                            <CardBody>
                                                <Form>
                                                    <Row>
                                                        <Col>
                                                            <FormGroup>
                                                                <Label>First Name</Label>
                                                                <Input type="text" name="firstname" id="firstname"
                                                                       placeholder="First Name" onChange={this.handleChange}/>
                                                            </FormGroup>
                                                        </Col>
                                                        <Col>
                                                            <FormGroup>
                                                                <Label>Last Name</Label>
                                                                <Input type="text" name="lastname" id="lastname"
                                                                       placeholder="Last Name" onChange={this.handleChange}/>
                                                            </FormGroup>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col>
                                                            <FormGroup>
                                                                <Label>Email</Label>
                                                                <Input type="email" name="email" id="email"
                                                                       placeholder="Email" onChange={this.handleChange}/>
                                                            </FormGroup>
                                                        </Col>
                                                        <Col>
                                                            <FormGroup>
                                                                <Label>Date</Label>
                                                                <Input type="date" name="date" id="date" onChange={this.handleChange}/>
                                                            </FormGroup>
                                                        </Col>
                                                    </Row>

                                                    <FormGroup>
                                                        <Label>Address</Label>
                                                        <Input type="textarea" name="address" id="address" onChange={this.handleChange}/>
                                                    </FormGroup>
                                                    <FormGroup>
                                                        <Label>Image</Label>
                                                        <Input type="file" name="file" id="file"
                                                               onChange={this.handleFileChange}/>
                                                    </FormGroup>


                                                    <Link to="/profile" style={{textDecoration: "none"}}>
                                                        <Button className="mb-2 mr-2 btn-icon" color="info" onClick={this.onSubmit}>
                                                            <i className="pe-7s-science btn-icon-wrapper"> </i>
                                                            Submit
                                                        </Button>
                                                    </Link>

                                                </Form>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                </CSSTransitionGroup>
            </Fragment>);
    }
}

export default Register