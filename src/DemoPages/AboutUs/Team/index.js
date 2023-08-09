import React, {Fragment, useState, useEffect} from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import axios from "axios";

import AppHeader from "../../../Layout/AppHeader";
import AppFooter from "../../../Layout/AppFooter";

import CardTeam from "./CardData";

// Examples

import {
    Card, CardBody,
    Col,
    Container,
    Row
} from "reactstrap";
import bg1 from "../../../assets/utils/images/originals/city.jpg";

const Team = () => {
    const [dataCard, setDataCard] = useState([])
    let imageArrayPath = [];

    useEffect(() => {
        axios.get("http://localhost:2121/team").then(res => {
            setDataCard(res.data)
        })
    }, [])

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
                                                        <h3>Team Member</h3>
                                                    </div>
                                                </div>

                                    </Col>

                                </Row>
                                <Row style={{paddingTop: 20}}>
                                    {dataCard.map((x, index) => (
                                        <CardTeam key={index} name={x.name} address={x.address} pbirth={x.pbirth}
                                                 bdate={x.bdate} religion={x.religion} gender={x.gender} email={x.email} note={x.note} id={x.id}/>
                                    ))}
                                </Row>


                            </Container>

                        </div>
                        <AppFooter/>
                    </div>

                </CSSTransitionGroup>
            </Fragment>);
}

export default Team;