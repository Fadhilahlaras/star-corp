import React, {Fragment} from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import axios from "axios";

import AppHeader from "../../../../Layout/AppHeader";

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
import bg1 from "../../../../assets/utils/images/originals/city.jpg";


class FormMember extends React.Component {
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
    }

    onSubmit = (e) => {
        const formData = new FormData();
        const json = JSON.stringify({
            "name": this.state.name,
            "address": this.state.address,
            "pbirth": this.state.pbirth,
            "bdate": this.state.bdate,
            "gender": this.state.gender,
            "religion": this.state.religion,
            "note" : this.state.note,
            "email": this.state.email
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
        axios.post("http://localhost:2121/team/save", formData, config)
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

                                        <div
                                            className="p-5 bg-plum-plate">
                                            <div className="slide-img-bg"
                                                 style={{
                                                     fade: true,
                                                     backgroundImage: 'url(' + bg1 + ')',
                                                     color: "white", textAlign: "center"
                                                 }}/>
                                            <div className="slider-content" style={{
                                                color: "white", textAlign: "center"
                                            }}>
                                                <h3>Form Member</h3>
                                            </div>
                                        </div>

                                    </Col>

                                </Row>
                                <Row>
                                    <Col md="12">
                                        <Card className="main-card mb-3">
                                            <CardBody>
                                                <Form>
                                                    <FormGroup>
                                                        <Label>Name</Label>
                                                        <Input type="text" name="name" id="name"
                                                               placeholder="Name" onChange={this.handleChange}/>
                                                    </FormGroup>

                                                    <FormGroup>
                                                        <Label>Address</Label>
                                                        <Input type="textarea" name="address" id="address"
                                                               placeholder="Address" onChange={this.handleChange}/>
                                                    </FormGroup>

                                                    <FormGroup>
                                                        <Label>Place of Birth</Label>
                                                        <Input type="text" name="pbirth" id="pbirth"
                                                               placeholder="Place of Birth"
                                                               onChange={this.handleChange}/>
                                                    </FormGroup>

                                                    <FormGroup>
                                                        <Label>Date of Birth</Label>
                                                        <Input type="date" name="bdate" id="bdate"
                                                               onChange={this.handleChange}/>
                                                    </FormGroup>

                                                    <FormGroup>
                                                        <Label for="religion">Religion</Label>
                                                        <Input type="select" name="religion" id="religion" onChange={this.handleChange}>
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
                                                               placeholder="Input your email" onChange={this.handleChange} />
                                                    </FormGroup>
                                                    <FormGroup>
                                                        <Label>Upload your photo</Label>
                                                        <Input type="file" name="file" id="file"
                                                               onChange={this.handleFileChange}/>
                                                    </FormGroup>

                                                    <FormGroup>
                                                        <Label>Note</Label>
                                                        <Input type="textarea" name="note" id="note" onChange={this.handleChange} />
                                                    </FormGroup>


                                                    <Link to="/team" style={{textDecoration: "none"}}>
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

export default FormMember