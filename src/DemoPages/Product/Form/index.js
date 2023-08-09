import React, {Fragment} from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import axios from "axios";

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

import AppHeader from "../../../Layout/AppHeader/index";

import Select from "react-select";

class FormProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectOptions: [],
            idCategory: "",
            categoryName: ''
        };
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
            "productName": this.state.name,
            "idCategory": this.state.idCategory,
            "stock": this.state.stock,
            "price": this.state.price
        });
        const blobDoc = new Blob([json], {
            type: 'application/json'
        });

        // formData.append('idCategory', this.state.idCategory)
        formData.append("pictureUrl", this.state.pictureUrl)
        formData.append('data', blobDoc)
        const config = {
            headers: {
                'content-type': 'multipart/mixed'
            }
        }
        axios.post("http://localhost:2222/api/product/save", formData, config)
            .then(res => console.log(res.data))
    }

    async getOptions() {
        const res = await axios.get('http://localhost:2222/api/productcategory', {
            headers: {'Content-Type': 'application/json'}
        }).then()
        const data = res.data

        const options = data.map(d => ({
            "value": d.id,
            "label": d.categoryName

        }))

        this.setState({selectOptions: options})

    }

    handleChangeSelect(e) {
        this.setState({idCategory: e.value})
    }

    componentDidMount() {
        this.getOptions()
    }

    render() {
        console.log(this.state.selectOptions)
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
                                        <CardTitle>Input Product Data</CardTitle>
                                        <Form>
                                            <FormGroup>
                                                <Label for="name">Product Name</Label>
                                                <Input type="text" name="name" id="name"
                                                       placeholder="Input Name of Product"
                                                       onChange={this.handleChange}/>
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="category">Category Product</Label>
                                                <Select name="idCategory" id="idCategory"
                                                        options={this.state.selectOptions}
                                                        onChange={this.handleChangeSelect.bind(this)}/>
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="stock">Stock</Label>
                                                <Input type="text" name="stock" id="stock"
                                                       placeholder="Input Stock of Product"
                                                       onChange={this.handleChange}/>
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="price">Price</Label>
                                                <Input type="text" name="price" id="price"
                                                       placeholder="Input Price of Product"
                                                       onChange={this.handleChange}/>
                                            </FormGroup>
                                            <FormGroup>
                                                <Label>Picture of Product</Label>
                                                <Input type="file" name="pictureUrl" id="pictureUrl"
                                                       placeholder="Input Picture of Product"
                                                       onChange={this.handleFileChange}/>
                                            </FormGroup>
                                            <Button type="submit" className="mt-1" color="primary"
                                                    onClick={this.onSubmit}>Submit</Button>
                                        </Form>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </CSSTransitionGroup>
            </Fragment>);
    }
}

export default FormProduct;