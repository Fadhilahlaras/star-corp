import React, {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrashAlt, faCheck, faEllipsisH} from "@fortawesome/free-solid-svg-icons";
import {
    Button,
    Card,
    CardBody,
    CardTitle,
    Col,
    Form,
    FormGroup,
    FormText,
    Input,
    Label,
    ListGroup,
    ListGroupItem,
    CustomInput,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Row
} from "reactstrap";
import bg2 from "../../../assets/utils/images/dropdown-header/abstract2.jpg";


const ModalAja1 = (props) => {

    // useEffect(() => {
    //     getOptions()
    // })

    return (
        <span className="d-inline-block mb-2 mr-2">
            <Modal isOpen={props.modal} toggle={props.toggle} className={props.className}>
                <ModalHeader
                    toggle={props.toggle}
                    className="menu-header-image "
                    style={{
                        backgroundImage: 'url(' + bg2 + ')'
                    }}>
                    <h5 className="menu-header-title" style={{color: "white"}}>Misi Daily You</h5>
                </ModalHeader>
                <ModalBody>
                    <ListGroup className="todo-list-wrapper" flush>
                        <ListGroupItem>
                            <div className="todo-indicator bg-warning"/>
                            <div className="widget-content p-0">
                                <div className="widget-content-wrapper">
                                    <div className="widget-content-left">
                                        <div className="widget-heading">
                                            Develop competent employees with create a good work environment to support achieving customer satisfaction.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ListGroupItem>
                        <ListGroupItem>
                            <div className="todo-indicator bg-focus"/>
                            <div className="widget-content p-0">
                                <div className="widget-content-wrapper">
                                    <div className="widget-content-left">
                                        <div className="widget-heading">
                                            Continuously provide products and services that high quality and meet customer needs through good marketing program.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ListGroupItem>
                        <ListGroupItem>
                            <div className="todo-indicator bg-primary"/>
                            <div className="widget-content p-0">
                                <div className="widget-content-wrapper">
                                    <div className="widget-content-left flex2">
                                        <div className="widget-heading">
                                            Continue to innovate, master science, apply new technology, and innovate for customer satisfaction.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ListGroupItem>
                        <ListGroupItem>
                            <div className="todo-indicator bg-info"/>
                            <div className="widget-content p-0">
                                <div className="widget-content-wrapper">
                                    <div className="widget-content-left">
                                        <div className="widget-heading">
                                            Develop healthy company operations in all respects aspect.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ListGroupItem>
                        <ListGroupItem>
                            <div className="todo-indicator bg-success"/>
                            <div className="widget-content p-0">
                                <div className="widget-content-wrapper">
                                    <div className="widget-content-left flex2">
                                        <div className="widget-heading">
                                            Develop various business units laterally.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ListGroupItem>
                    </ListGroup>
                </ModalBody>

                <ModalFooter>
                    <Button color="link" onClick={props.toggle}>Close</Button>
                </ModalFooter>
                </Modal>
        </span>
    )

}

export default ModalAja1;