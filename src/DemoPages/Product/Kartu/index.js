import React, {Component, Fragment, useEffect, useState} from 'react';
import {Card, CardBody, CardImg, CardSubtitle, CardTitle, Col, CardFooter, Button, CardText} from "reactstrap";
import axios from "axios";

// import AddToCard from "../ModalProducts/AddToCart"


//
// var Id = props.id;


const ThisCard = ({props}) => {
    const [img, setImg] = useState("")
    const [addToCartModal, setAddToCartModal] = useState("")

    // const { id, title, category, stock, price, image } = props;
    // console.log(this.props.id);



    useEffect(() => {
            console.log("call axios");
            axios.get('http://localhost:2222/api/product/getImage/' + 1).then(res => {
                setImg(res.data)
                console.log(res.data)
            })
        }, []
    )

    // const images = [
    //     pokemon1, 
    //     pokemon2,



    // ]

    const toggleAddToCart = () => {
        setAddToCartModal(!addToCartModal)
        // onSubmit();
    }

    const onChangeToggleAddToCart = () => {
        setAddToCartModal(!addToCartModal)
    }


    // const onSubmit = () => {
    //     const formData = new FormData();

    //     const json = JSON.stringify({
    //         "idProduct": props.id, //perlu diganti
    //         "quantity": 1
    //     });
    //     console.log(json)
    //     const blobDoc = new Blob([json], {
    //         type: 'application/json'
    //     });

    //     formData.append('data', blobDoc)

    //     const config = {
    //         headers: {
    //             'content-type': 'multipart/mixed'
    //         }
    //     }
    //     console.log(formData)
    //     axios.post("http://localhost:2222/api/cart", formData, config)
    //         .then(res => console.log(res.data))

    // }
    return (
        <Fragment>
            <Col sm="3">
                <Card className="main-card mb-3">
                    {/* {images.map((image, index) => (
                        <CardImg top width="100%"
                                key={index}
                                src={image}
                                alt={`Image ${index}`} 
                                style={{backgroundSize: "cover", height: "300px", display: 'flex'}} 
                                className="mt-3"
                        />
                    ))} */}

                    
                    <CardImg top width="100%"
                             src={"data:image/*;base64," + img}
                            //  alt={id} 
                             style={{backgroundSize: "cover", height: "300px"}} className="mt-3"/>

              

                    {/* <CardBody>
                        <CardTitle>{props.title}</CardTitle>
                        <CardSubtitle>{props.category}
                            <br/> Stock: {props.stock}
                        </CardSubtitle>
                        <CardText>
                            <strong>Rp.{props.price}</strong>
                        </CardText>
                    </CardBody> */}
                    <CardFooter>
                        <Button style={{margin:"auto"}}color="warning" type="button" onClick={()=>toggleAddToCart()}>Add to Cart</Button>
                    </CardFooter>
                </Card>
            </Col>


            

        </Fragment>
    )
}

export default ThisCard