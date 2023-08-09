import React, {Fragment, useEffect, useState} from 'react';
import ReactTable from "react-table";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import axios from "axios";
import {Button, ButtonToggle, Card, CardBody, CardFooter, CardGroup, CardSubtitle, CardTitle} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash, faEdit, faFilePdf, faFileExcel} from "@fortawesome/free-solid-svg-icons";
import ModalAja from "../Modal";



class Tabel extends React.Component {
    constructor() {
        super();
        this.state = {
            dataTabel: [],
            modal: false,
            ini: 0
        };
        this.toggle = this.toggle.bind(this);
    }

    componentDidMount() {
        axios.get(`http://localhost:2222/api/product`)
            .then(res => {
                this.setState({dataTabel: res.data})
                console.log(res)
            })
    }

    async getPDF() {
        // await axios.get('http://localhost:2222/getReport', {
        //     headers: {'Content-Type': 'application/PDF'}})
        axios({
            url: 'http://localhost:2222/getReport',
            method: 'GET',
            responseType: 'blob', // important
        }).then((response) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            console.log(url);
            console.log(link);
            link.href = url;
            link.setAttribute('download', 'file.pdf');
            document.body.appendChild(link);
            link.click();
        });
    };

    async getEXCEL() {
        // await axios.get('http://localhost:2222/getReportExcel')
        axios({
            url: 'http://localhost:2222/getReportExcel',
            method: 'GET',
            responseType: 'blob', // important
        }).then((response) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'file.xlsx');
            document.body.appendChild(link);
            console.log(document.body.appendChild(link))
            link.click();
        });
    };

    toggle(dat) {
        this.setState({
            modal: !this.state.modal,
            ini: dat.id,
        });
    }

    hapus = (id) => {
        axios.delete(`http://localhost:2222/api/product/${id}`).then((response) => {
            // this.props.push("http://localhost:2222/api/product");

        })
    }


    // editData(){
    //     // axios.get(`http://localhost:2222/api/product`)
    //     //     .then(res => {
    //     //         this.setState({dataTabel: res.data})
    //     //         console.log(res)
    //     //     })
    //
    // }

    render() {
        return (
            <Fragment>

                <CSSTransitionGroup
                    component="div"
                    transitionName="TabsAnimation"
                    transitionAppear={true}
                    transitionAppearTimeout={1000}
                    transitionEnter={false}
                    transitionLeave={false}>
                    <Card clasName="main-card m-5">
                        <div className="mb-3">
                            <CardBody>
                                <CardTitle><h2>Data of All Products</h2></CardTitle><br/>
                                <ReactTable data={this.state.dataTabel} filterable columns={[{
                                    columns: [
                                        {
                                            Header: 'Product ID',
                                            accessor: 'id',
                                        },
                                        {
                                            Header: 'Product Name',
                                            accessor: 'productName',
                                        },
                                        {
                                            Header: 'Stock',
                                            accessor: 'stock',
                                        },
                                        {
                                            Header: 'Price',
                                            accessor: 'price',
                                        },
                                        {
                                            Header: 'Picture URL',
                                            accessor: 'pictureUrl',
                                        },
                                        {
                                            Header: 'Product Category',
                                            accessor: 'categoryName',
                                        },
                                        {
                                            Header: 'Actions',
                                            accessor: 'actions',
                                            filterable: false,
                                            Cell:row =>(
                                                <div className="d-block w-100 text-center">
                                                    <Button outLine className="mb-2 mr-2 btn-pill" color="primary" onClick={()=>this.toggle(row.original)} >
                                                        <FontAwesomeIcon icon={faEdit}/>
                                                    </Button>
                                                    <Button outLine className="mb-2 mr-2 btn-pill" color="primary" onClick={()=>this.hapus(row.original.id)}>
                                                        <FontAwesomeIcon icon={faTrash}/>
                                                    </Button>

                                                </div>
                                            )
                                        }
                                    ]
                                },
                                    // {
                                    //     columns: [
                                    //         {
                                    //             Header: 'Actions',
                                    //             accessor: 'actions',
                                    //             filterable: false,
                                    //             Cell:row =>(
                                    //                 <div className="d-block w-100 text-center">
                                    //                     <Button outLine className="mb-2 mr-2 btn-pill" color="primary" onClick={this.toggle} >
                                    //                         <FontAwesomeIcon icon={faEdit}/>
                                    //                         <ModalAja toggle={this.toggle} modal={this.state.modal} id={row.original.id}/>
                                    //                     </Button>
                                    //                     <Button outLine className="mb-2 mr-2 btn-pill" color="primary" >
                                    //                         <FontAwesomeIcon icon={faTrash}/>
                                    //                     </Button>
                                    //
                                    //                 </div>
                                    // )
                                    //         }
                                    //     ]
                                    // }
                                ]}
                                            defaultPageSize={5}
                                            className="-striped -highlight"
                                />
                                <CardTitle style={{fontSize:"18px"}}><br/>Download the report of all products uploaded:<br/></CardTitle>

                                    <br/>
                                    <Button type="button" className="mt-1" color="danger"
                                            onClick={this.getPDF} style={{fontSize:"20px", margin:"5px"}}>
                                        <FontAwesomeIcon icon={faFilePdf} /> <span style={{fontSize:"15px"}}>PDF</span>
                                    </Button>
                                    <Button type="button" className="mt-1" color="success"
                                            onClick={this.getEXCEL} style={{fontSize:"20px", margin:"5px"}}>
                                        <FontAwesomeIcon icon={faFileExcel} /> <span style={{fontSize:"15px"}}>EXCEL</span>
                                    </Button>

                                {/*<CardFooter>*/}
                                {/*    /!*<div><ToggleGroup/></div>*!/*/}
                                {/*    <CardTitle>Download the report of all products uploaded:<br/></CardTitle>*/}
                                {/*    <br/>*/}
                                {/*    <ButtonGroup>*/}
                                {/*        <br/>*/}
                                {/*        <Button type="button" className="mt-1" color="primary"*/}
                                {/*                onClick={this.getPDF}>PDF</Button>*/}
                                {/*        <Button type="button" className="mt-1" color="warning"*/}
                                {/*                onClick={this.getEXCEL}>EXCEL</Button>*/}
                                {/*    </ButtonGroup></CardFooter>*/}
                            </CardBody>
                        </div>
                    </Card>
                    <ModalAja toggle={this.toggle} modal={this.state.modal} idPro={this.state.ini} />


                </CSSTransitionGroup>
            </Fragment>
        )
    }
};

export default Tabel;
