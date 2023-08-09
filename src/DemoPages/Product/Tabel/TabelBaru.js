import React, {Fragment, useEffect, useState} from 'react';
import ReactTable from "react-table";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import axios from "axios";
import {Button, ButtonToggle, Card, CardBody, CardFooter, CardGroup, CardSubtitle, CardTitle} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash, faEdit, faFilePdf, faFileExcel} from "@fortawesome/free-solid-svg-icons";
import ModalAja from "../Modal";
import Add from "../Modal/Add"
import AddProduct from "../Modal/AddProduct";
import index from "styled-components/dist/styled-components-macro.esm";
import Example from "../Modal/Example"

const TabelBaru = () => {
    const [dataTabel, setDataTabel] = useState([]);
    const [editModal, setEditModal] = useState(false);
    const [addModal, setAddModal] = useState(false);
    const [example, setExample] = useState(false);

    const [singleData, setSingleData] = useState({});
    const [idCategory, setIdCategory] = useState("");
    const [selectOptions, setSelectOptions] = useState([]);
    const [categoryName, setCategoryName] = useState("");
    const [picture, setPicture] = useState("");
    const [hapus, setHapus] = useState("");
    const [image, setImage] = useState("");
    const [imageId, setImageId] = useState([]);


    useEffect(() => {
        getAllData();
        // getAllImage();
    }, [hapus])


    const getAllData = () => {
        axios.get(`http://localhost:2222/api/product`)
            .then(res => {
                setDataTabel(res.data)
                console.log(res)
            })
    }

    const getAllImage = (id) => {
        axios.get(`http://localhost:2222/api/product/getImage/${id}`)
            .then(res => {
                setImage(res.data)
                console.log("IMAGE " + res.data)
            })

        return "data:image/*;base64," + image
        console.log(image)
    }


    const getOptions = async () => {
        await axios.get('http://localhost:2222/api/productcategory', {
            headers: {'Content-Type': 'application/json'}
        }).then(res => {
            const data = res.data;
            const options = data.map(d => ({
                "value": d.id,
                "label": d.categoryName

            }));
            setSelectOptions(options)
        })
    }

    const toggleAdd = () => {
        setAddModal(!addModal)
    }

    const toggleEdit = (id) => {
        setEditModal(!editModal)
        axios.get('http://localhost:2222/api/product/' + id).then(res => {
            setSingleData(res.data)
        })
        axios.get("http://localhost:2222/api/product/getImage/" + id).then(res => {
            setPicture(res.data)
        }).catch()
    }


    const delData = (id) => {
        axios.delete('http://localhost:2222/api/product/' + id).then().catch(err => console.log(err))
        setHapus(id)
    }

    const onChangeToggleAdd = () => {
        setAddModal(!addModal)
    }
    const onChangeToggleEdit = () => {
        setEditModal(!editModal)
    }

    // const handleChangeSelect=()=> {
    //     setIdCategory(options.value)
    // }

    const getPDF = async () => {

        await axios({
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

    const getEXCEL = async () => {
        await axios({
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


    return (
        <Fragment>
            <CSSTransitionGroup
                component="div"
                transitionName="TabsAnimation"
                transitionAppear={true}
                transitionAppearTimeout={1000}
                transitionEnter={false}
                transitionLeave={false}>
                <Card className="main-card m-5">
                    <div className="mb-3">
                        <CardBody>
                            <CardTitle><h2>Data of All Products</h2></CardTitle>
                            <br/>
                            <div>
                                <Button onClick={() => {
                                    toggleAdd.bind(this)
                                }}>Add New Product</Button>
                            </div>
                            <ReactTable data={dataTabel} filterable columns={[{
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
                                        Header: 'Picture',
                                        accessor: 'pictureUrl',
                                        // Cell: row => (
                                        //     <img src={getAllImage(row.original.id)}/>
                                        // )
                                    },
                                    {
                                        Header: 'Product Category',
                                        accessor: 'categoryName',
                                    },
                                    {
                                        Header: 'Actions',
                                        accessor: 'actions',
                                        filterable: false,
                                        Cell: row => (
                                            <div className="d-block w-100 text-center">
                                                <Button className="mb-2 mr-2 btn-pill" color="primary"
                                                        onClick={() => {
                                                            toggleEdit(row.original.id)
                                                            // console.log("apa kah ini")
                                                        }}>
                                                    <FontAwesomeIcon icon={faEdit}/>
                                                </Button>
                                                <Button className="mb-2 mr-2 btn-pill" color="primary"
                                                        onClick={() => delData(row.original.id)}>
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
                                        defaultPageSize={10}
                                        className="-striped -highlight"
                            />
                            <CardTitle style={{fontSize: "18px"}}><br/>Download the report of all products
                                uploaded:<br/></CardTitle>

                            <br/>
                            <Button type="button" className="mt-1" color="danger"
                                    onClick={getPDF} style={{fontSize: "20px", margin: "5px"}}>
                                <FontAwesomeIcon icon={faFilePdf}/> <span style={{fontSize: "15px"}}>PDF</span>
                            </Button>
                            <Button type="button" className="mt-1" color="success"
                                    onClick={getEXCEL} style={{fontSize: "20px", margin: "5px"}}>
                                <FontAwesomeIcon icon={faFileExcel}/> <span style={{fontSize: "15px"}}>EXCEL</span>
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
                {/*<ModalAja toggle={this.toggle} modal={this.state.modal} idPro={this.state.ini} />*/}
                {/*<AddModal toggle={() => {toggleAdd()}} modal={addModal} onChangeToggle={onChangeToggleAdd()} />*/}
                <AddProduct toggle={() => {
                    toggleAdd()
                }} modal={addModal} onChangeToggle={onChangeToggleAdd}/>
                {/*<Example toggle={() => {toggleAdd.bind(this)}} modal={example}/>*/}
            </CSSTransitionGroup>
        </Fragment>
    )
}

export default TabelBaru;