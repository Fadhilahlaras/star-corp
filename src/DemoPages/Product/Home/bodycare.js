import React, {Fragment, useEffect, useState} from "react";
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import AppHeader from "../../../Layout/AppHeader/index";
import {Row} from "reactstrap";
import ThisCard from "../Kartu";
import axios from "axios";

const BodyCare = () => {
    console.log("udah ada")
    const [dataCard, setDataCard] = useState([])
    let imageArrayPath = [];

    useEffect(() => {
        axios.get("http://localhost:2222/api/product/category/3").then(res => {
            setDataCard(res.data)

            console.log(imageArrayPath)
        })
    }, [])

    // useEffect(() => {
    //     dataCard.map((data, index) => {
    //         axios.get('http://localhost:2222/api/product/getImage/' + data.id).then(res => {
    //             imageArrayPath.push(res.data)
    //             console.log(res.data)
    //             console.log("udah ada")
    //         })
    //     })
    // })


    return (
        <Fragment>
            <CSSTransitionGroup
                component="div"
                transitionName="TabsAnimation"
                transitionAppear={true}
                transitionAppearTimeout={0}
                transitionEnter={false}
                transitionLeave={false}>

                <Row>
                    {dataCard.map((card, index) => (
                        <ThisCard key={index} id={card.id} title={card.productName} category={card.categoryName}
                                  stock={card.stock} price={card.price} />
                    ))}
                </Row>
            </CSSTransitionGroup>
        </Fragment>
    )
}


export default BodyCare;