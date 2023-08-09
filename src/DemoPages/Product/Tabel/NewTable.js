import React, {Fragment, useEffect, useState} from 'react';
import ReactTable from "react-table";
import axios from "axios";
import {
    Row, Col,
    Card, CardBody,
    UncontrolledButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle, Button, CardTitle
} from 'reactstrap';

// import {GetData} from "./DataProductTable/dataData"

// import SearchBox from "../../Layout/AppHeader/Components/SearchBox";
// import PageTitle from "../../Layout/AppMain/PageTitle";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
// import Header from "../../Layout/AppHeader";
import EditProduct from "../../Product/ModalProducts/Edit";
import AddProduct from "../../Product/ModalProducts/AddProduct";
import Delete from "../../Product/ModalProducts/Delete"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faFileExcel, faFilePdf, faTrash} from "@fortawesome/free-solid-svg-icons";


const NewTable = () => {
    const [productData, setProductData] = useState([])
    const [modalEdit, setModalEdit] = useState(false)
    const [modalAdd, setModalAdd] = useState(false)
    const [modalDelete, setModalDelete] = useState(false)
    const [del, setDel] = useState(0)
    const [dataa, setDataa] = useState({})
    const [pictureUrl, setPictureUrl] = useState("")


    useEffect(() => {
        tampil()
    }, [del])


    const tampil = () =>{
        axios.get("http://localhost:2222/api/product")
            .then(res => {
                setProductData(res.data)
            }).catch();
    }

    const toggleAdd = () => {
        setModalAdd(!modalAdd)
    }

    const toggleDelete = (id) => {
        setModalDelete(!modalDelete)
        setDel(id)
    }

    const toggleEdit = (val) => {
        setModalEdit(!modalEdit)
        console.log('toggle edit oke', val)
        axios.get('http://localhost:2222/api/product/' + val).then(res => {
            setDataa(res.data)
        })
        axios.get("http://localhost:2222/api/product/getImage/" + val).then(res => {
            setPictureUrl(res.data)
            console.log("ini itu picture"+res.data)
        }).catch()
    }

    const deleteData = (id) => {
        console.log("hai hapus ya")
        axios.delete('http://localhost:2222/api/product/' + id).then(
            tampil
        ).catch(err => console.log(err))
        setDel(id)
        onChangeToggleDelete(false)
    }

    const onChangeToggleAdd = () => {
        setModalAdd(!modalAdd)
    }
    const onChangeToggleEdit = () => {
        setModalEdit(!modalEdit)
    }

    const onChangeToggleDelete = () => {
        setModalDelete(!modalDelete)
    }

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
            link.setAttribute('download', 'Report.pdf');
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
            link.setAttribute('download', 'Report.xlsx');
            document.body.appendChild(link);
            console.log(document.body.appendChild(link))
            link.click();
        });
    };


    return (
        <Fragment>
            {/*<PageTitle*/}
            {/*    heading="Product Table"*/}
            {/*    subheading="Table for update the product"*/}
            {/*    icon="pe-7s-drawer icon-gradient bg-happy-itmeo"*/}
            {/*    breadcrumbPaths={['Home', 'Product Table']}*/}
            {/*/>*/}
            <CSSTransitionGroup
                component="div"
                transitionName="TabsAnimation"
                transitionAppear={true}
                transitionAppearTimeout={1000}
                transitionEnter={false}
                transitionLeave={false}>
                {/*<Header/>*/}

                <Card className="main-card m-5">
                    <div className="mb-3">

                        <CardBody>
                            <CardTitle style={{paddingBottom:"20px"}}><h2>Data of All Products</h2></CardTitle>
                            <Button style={{marginBottom:"20px", display:"flex", minWidth:"200px"}} color="primary" onClick={(e) => {
                                toggleAdd()
                            }}><p style={{margin:"auto", fontSize:"18px", textAlign:"center"}}>Add Product</p></Button>
                            <ReactTable
                                data={productData}
                                filterable
                                columns={[{
                                    columns: [
                                        // {
                                        //     Header: '1',
                                        //     accessor: 'gambar',
                                        //     Cell: row => (
                                        //         <div>
                                        //             <div className="widget-content p-0">
                                        //                 <div className="widget-content-wrapper">
                                        //                     <div className="widget-content-left mr-3">
                                        //                         <div className="widget-content-left">
                                        //                             <img width={52}
                                        //                                  src={"data:image/*;base64"}
                                        //                             />
                                        //                         </div>
                                        //                     </div>
                                        //                 </div>
                                        //             </div>
                                        //         </div>
                                        //     )
                                        // },
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
                                    ]
                                },
                                    {
                                        columns: [

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
                                                        <Button className="mb-2 mr-2 btn-pill" color="danger"
                                                                onClick={() =>
                                                                    // console.log("hapus dong")
                                                                {
                                                                    // deleteData(row.original.id)
                                                                    toggleDelete(row.original.id)
                                                                }}>
                                                            <FontAwesomeIcon icon={faTrash}/>
                                                        </Button>

                                                    </div>
                                                )
                                            }
                                        ]
                                    }]}
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
                        </CardBody>
                    </div>
                </Card>
                <EditProduct toggle={() => {
                    toggleEdit()
                }} tampil={()=> {
                    tampil()
                }} modal={modalEdit} data={dataa} pictureUrl={pictureUrl} onChangeToggle={onChangeToggleEdit}/>
                <AddProduct toggle={() => {
                    toggleAdd()
                }} tampil={()=> {
                    tampil()
                }} modal={modalAdd} onChangeToggle={onChangeToggleAdd}/>
                <Delete toggle={() => {
                    toggleDelete()
                }} tampil={()=> {
                    tampil()
                }} modal={modalDelete} data={del} onChangeToggle={onChangeToggleDelete} delete={deleteData}/>

            </CSSTransitionGroup>
        </Fragment>
    )

}

export default NewTable