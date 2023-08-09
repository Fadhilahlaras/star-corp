import React, {Fragment, useEffect, useState} from 'react'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import axios from "axios";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash, faEdit, faFilePdf, faFileExcel} from "@fortawesome/free-solid-svg-icons";

import AppHeader from "../../../../Layout/AppHeader";
import AppFooter from "../../../../Layout/AppFooter";

import {
    Row, Col,
    Card, CardBody, Button, CardTitle, Container
} from 'reactstrap';

import ReactTable from "react-table";
import EditMember from "./edit";
import AddMember from "./add";
import Delete from "./delete";
import bg1 from "../../../../assets/utils/images/originals/city.jpg";
import {IoIosAddCircle} from "react-icons/all";

const TableMember = (props) => {
    const [dataTable, setDataTable] = useState([])
    const [modalEdit, setModalEdit] = useState(false)
    const [modalAdd, setModalAdd] = useState(false)
    const [modalDelete, setModalDelete] = useState(false)
    const [del, setDel] = useState(0)
    const [dataa, setDataa] = useState({})
    const [pictureUrl, setPictureUrl] = useState("")
    // const [image, setImage] = useState("")

    useEffect(() => {


        // axios.get("http://localhost:2121/team/getImage/" + props.id).then(res => {
        //     setImage(res.data)
        //     //console.log(imageArrayPath[index])
        // })

        axios.get("http://localhost:2121/team")
            .then(res => {
                setDataTable(res.data)
            }).catch();
    }, [del])


    const tampil = () =>{
        axios.get("http://localhost:2121/team")
            .then(res => {
                setDataTable(res.data)
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
        console.log('Show modal edit', val)
        axios.get('http://localhost:2121/team/' + val).then(res => {
            setDataa(res.data)
        })
        axios.get("http://localhost:2121/team/getImage/" + val).then(res => {
            setPictureUrl(res.data)
        }).catch()
    }

    const deleteData = (id) => {
        console.log("hai hapus ya")
        axios.delete('http://localhost:2121/team/' + id).then(tampil).catch(err => console.log(err))
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
            url: 'http://localhost:2121/getReport',
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
            url: 'http://localhost:2121/getReportExcel',
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
                                    <Card>
                                        <CardBody>
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


                                        </CardBody>
                                    </Card>

                                </Col>

                            </Row>
                            <Row>
                                <Col md="12">
                                    <Card className="main-card mb-3">
                                        <CardBody>
                                            <Button outline className="mb-2 mr-2 btn-pill" color="primary" onClick={(e) => {
                                                toggleAdd()
                                            }}><IoIosAddCircle size={17}/>Add New Member</Button>
                                            <ReactTable
                                                data={dataTable}
                                                filterable
                                                columns=
                                                    {[{
                                                        columns: [
                                                            {
                                                                Header: "Name",
                                                                accessor: "name"
                                                            },
                                                            {
                                                                Header: "Address",
                                                                accessor: "address"
                                                            },
                                                            {
                                                                Header: "Place of Birth",
                                                                accessor: "pbirth"
                                                            },
                                                            {
                                                                Header: "Date of Birth",
                                                                accessor: "bdate"
                                                            },
                                                            {
                                                                Header: "Religion",
                                                                accessor: "religion"
                                                            },
                                                            {
                                                                Header: "Email",
                                                                accessor: "email"
                                                            },

                                                            {
                                                                Header: "Note",
                                                                accessor: "note"
                                                            },
                                                            {
                                                                Header: 'Picture',
                                                                accessor: 'pictureUrl',
                                                                // Cell: row => (
                                                                //     <img src={"data:image/*;base64," + image(row.original.id)}/>
                                                                // )
                                                            },
                                                        ]
                                                    },
                                                        {
                                                            columns: [
                                                                {
                                                                    Header: "Action",
                                                                    accessor: "action",
                                                                    filterable: false,
                                                                    Cell: row => (
                                                                        <div className="d-block w-100 text-center">
                                                                            <Button outLine
                                                                                    className="mb-2 mr-2 btn-pill"
                                                                                    color="primary"
                                                                                    onClick={(e) => {
                                                                                        toggleEdit(row.original.id)
                                                                                    }}>
                                                                                <FontAwesomeIcon icon={faEdit}/>
                                                                            </Button>
                                                                            <Button outLine
                                                                                    className="mb-2 mr-2 btn-pill"
                                                                                    color="primary"
                                                                                    onClick={(e) => {
                                                                                        toggleDelete(row.original.id)
                                                                                    }}>
                                                                                <FontAwesomeIcon icon={faTrash}/>
                                                                            </Button></div>
                                                                    )
                                                                }
                                                            ]
                                                        }
                                                    ]}
                                                defaultPageSize={10}
                                                className="-striped -highlight"
                                            />

                                            <CardTitle style={{fontSize: "18px"}}><br/>Download data of all member<br/></CardTitle>
                                            <Button type="button" className="mt-1" color="danger"
                                                    onClick={getPDF} style={{fontSize: "20px", margin: "5px"}}>
                                                <FontAwesomeIcon icon={faFilePdf}/> <span style={{fontSize: "15px"}}>PDF</span>
                                            </Button>
                                            <Button type="button" className="mt-1" color="success"
                                                    onClick={getEXCEL} style={{fontSize: "20px", margin: "5px"}}>
                                                <FontAwesomeIcon icon={faFileExcel}/> <span style={{fontSize: "15px"}}>EXCEL</span>
                                            </Button>


                                        </CardBody>
                                    </Card>

                                    <EditMember toggle={() => {
                                        toggleEdit()
                                    }} tampil={()=> {
                                        tampil()
                                    }} modal={modalEdit} data={dataa} pictureUrl={pictureUrl} onChangeToggle={onChangeToggleEdit} />
                                    <AddMember toggle={() => {
                                        toggleAdd()
                                    }} modal={modalAdd} onChangeToggle={onChangeToggleAdd} tampil = {()=>{tampil()}}/>

                                    <Delete toggle={() => {
                                        toggleDelete()
                                    }} modal={modalDelete} data={del} onChangeToggle={onChangeToggleDelete} delete={deleteData} tampil = {() => {tampil()}} />


                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <AppFooter/>
                </div>
            </CSSTransitionGroup>
        </Fragment>
    )
}

export default TableMember;