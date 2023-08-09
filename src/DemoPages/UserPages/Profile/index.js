import React,{Fragment, useState, useEffect} from "react";
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import AppHeader from "../../../Layout/AppHeader/";
import AppSidebar from "../../../Layout/AppSidebar/";
import AppFooter from "../../../Layout/AppFooter";

import {Row, Container, Col, Card, CardImg, CardBody, CardTitle, CardSubtitle} from "reactstrap";

import axios from "axios";
import CardNya from "../../Homepage/CardIsi";

const Profile = (props) => {

    const [image, setImage] = useState("")

    useEffect(() => {
            axios.get("http://localhost:2121/input/getImage" + props.id).then(res => {
                setImage(res.data)
                //console.log(imageArrayPath[index])
            })
        }
    )

    // const [Index, setDataCard] = useState([])
    // let imageArrayPath = [];
    //
    // // melakukan efek samping (side effects) didalam function component
    // useEffect(() => {
    //     axios.get("http://localhost:2121/input").then(res => {
    //         setDataCard(res.data)
    //     })
    // }, [])

    return(
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

                        {/*<Col md="4">*/}
                        {/*    <Card className="main-card mb-3">*/}
                        {/*        <CardImg top width="25%"*/}
                        {/*                 src={"data:image/*;base64," + image}*/}
                        {/*                 alt="Card image cap"/>*/}
                        {/*        <CardBody>*/}
                        {/*            <CardTitle>{props.firstname}</CardTitle>*/}
                        {/*            <CardSubtitle>{props.lastname}</CardSubtitle>*/}
                        {/*            <CardSubtitle>{props.date}</CardSubtitle>*/}
                        {/*        </CardBody>*/}

                        {/*    </Card>*/}
                        {/*</Col>*/}

                        <div className="app-main__inner">
                            {/*<Row>*/}
                            {/*/!*<CardSlide />*!/*/}

                            {/*</Row>*/}
                            {/*<Row>*/}
                            {/*    {Index.map((x, index) => (*/}
                            {/*        <CardNya key={index} firstname={x.firstname} lastname={x.lastname} image={x.image} date={x.date} address={x.address} id={x.id}/>*/}
                            {/*    ))}*/}
                            {/*</Row>*/}

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

                        </div>
                    </div>

                    <AppFooter/>
                </div>
            </CSSTransitionGroup>
        </Fragment>
    )
}
export default Profile;
