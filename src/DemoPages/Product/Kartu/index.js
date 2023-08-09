import React, {Component, Fragment, useEffect, useState} from 'react';
import {Card, CardBody, CardImg, CardSubtitle, CardTitle, Col, CardFooter, Button, CardText} from "reactstrap";
import axios from "axios";

import AddToCard from "../ModalProducts/AddToCart"



//
// var Id = props.id;


const ThisCard = (props) => {
    const [img, setImg] = useState("")
    const [addToCartModal, setAddToCartModal] = useState("")


    useEffect(() => {
            axios.get('http://localhost:2222/api/product/getImage/' + props.id).then(res => {
                setImg(res.data)
            })
        }, []
    )

    const toggleAddToCart = () => {
        setAddToCartModal(!addToCartModal)
        onSubmit();
    }

    const onChangeToggleAddToCart = () => {
        setAddToCartModal(!addToCartModal)
    }


    const onSubmit = () => {
        const formData = new FormData();

        const json = JSON.stringify({
            "idProduct": props.id, //perlu diganti
            "quantity": 1
        });
        console.log(json)
        const blobDoc = new Blob([json], {
            type: 'application/json'
        });

        formData.append('data', blobDoc)

        const config = {
            headers: {
                'content-type': 'multipart/mixed'
            }
        }
        console.log(formData)
        axios.post("http://localhost:2222/api/cart", formData, config)
            .then(res => console.log(res.data))

    }
    return (
        <Fragment>
            <Col sm="3">
                <Card className="main-card mb-3">
                    <CardImg top width="100%"
                             src={"data:image/*;base64," + img}
                             alt={props.title} style={{backgroundSize: "cover", height: "300px"}} className="mt-3"/>
                    <CardBody>
                        <CardTitle>{props.title}</CardTitle>
                        <CardSubtitle>{props.category}
                            <br/> Stock: {props.stock}
                        </CardSubtitle>
                        <CardText>
                            <strong>Rp.{props.price}</strong>
                        </CardText>
                    </CardBody>
                    <CardFooter>
                        <Button style={{margin:"auto"}}color="warning" type="button" onClick={()=>toggleAddToCart()}>Add to Cart</Button>
                    </CardFooter>
                    <AddToCard toggle={() => {
                        toggleAddToCart()
                    }} modal={addToCartModal} onChangeToggle={onChangeToggleAddToCart}/>
                </Card>
            </Col>

        </Fragment>
    )
}

export default ThisCard