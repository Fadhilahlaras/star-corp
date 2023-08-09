import React, {Fragment, useEffect, useState} from "react";
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import AppHeader from "../../../Layout/AppHeader/index";
import {Row} from "reactstrap";
import ThisCard from "../Kartu";
import axios from "axios";
import Image from "../../Components/GuidedTours/Examples/Image";

const SkinCare = () => {
    console.log("udah ada")
    const [dataCard, setDataCard] = useState([])
    // const [images, setimages] = useState([])
    // let imageArrayPath = [];

    useEffect(() => {
        axios.get("http://localhost:2222/api/product/category/2").then(res => {
            setDataCard(res.data)

        })
    }, [])

    // useEffect(() => {
    //     dataCard.map((data, index) => {
    //         axios.get('http://localhost:2222/api/product/getImage/' + data.id).then(res => {
    //             setimages(res.data)
    //             // console.log(res.data)
    //             console.log("udah ada")
    //         })
    //     })
    // })

    // function showImage() {
    //     return images.map((img, index) => (
    //         <Image
    //             image={img.urls.regular}
    //             index={index}
    //             key={index}/>
    //     ))
    // };

    {/*async function getGambar() {*/}
    {/*    dataCard.map((data, index) => {*/}
    {/*        axios({*/}
    {/*            url: 'http://localhost:2222/api/product/getImage/' + data.id,*/}
    {/*            method: 'GET',*/}
    {/*            responseType: 'blob', // important*/}
    //         }).then((response) => {
    //             const url = window.URL.createObjectURL(new Blob([response.data]));
    //             const link = document.createElement('img');
    //             console.log(url);
    //             console.log("ini link" + link);
    //             link.src = url;
    //             // link.setAttribute('download', 'file.pdf');
    //             return link.src
    //         });
    //     })
    // }


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
                                  stock={card.stock} price={card.price}/>
                    ))}
                </Row>
            </CSSTransitionGroup>
        </Fragment>
    )
}


export default SkinCare;