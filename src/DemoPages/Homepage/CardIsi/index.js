import React, {Fragment, useState, useEffect} from "react";
import {
    Card,
    CardBody,
    CardImg,
    CardSubtitle,
    CardTitle,
    Col,
    CardFooter
} from "reactstrap";
import axios from "axios";

const CardNya = (props) => {

    const [image, setImage] = useState("")

    useEffect(() => {
            axios.get("http://localhost:2121/input/getImage/" + props.id).then(res => {
                setImage(res.data)
                //console.log(imageArrayPath[index])
            })
        }
    )

    return (
        <Fragment>
            <Col md="4">
                <Card className="main-card mb-3">
                    <CardImg top width="25%"
                             src={"data:image/*;base64," + image}
                             alt="Card image cap"/>
                    <CardBody>
                        <CardTitle>{props.firstname}</CardTitle>
                        <CardSubtitle>{props.lastname}</CardSubtitle>
                        <CardSubtitle>{props.date}</CardSubtitle>
                    </CardBody>

                </Card>
            </Col>
        </Fragment>
    )
}

export default CardNya;