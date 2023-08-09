import React, {useEffect, useState} from "react";
import {
    Button,
    Card,
    CardBody,
    CardTitle, Col,
    Form,
    FormGroup, FormText, Input, Label,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader, Row
} from "reactstrap";

import bg4 from "../../../assets/utils/images/dropdown-header/abstract4.jpg";


const ModalAja = (props) => {

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
                        backgroundImage: 'url(' + bg4 + ')'
                    }}>
                    <h5 className="menu-header-title" style={{color: "black"}}>Visi Daily You</h5>
                </ModalHeader>
                <ModalBody>
                    To become a company that benefits the community and continues to grow in various fields by making today better than yesterday. And fulfilling the need for halal cosmetics                </ModalBody>
                <ModalFooter>
                    <Button color="link" onClick={props.toggle}>Close</Button>
                </ModalFooter>
                </Modal>
        </span>
    )

}

export default ModalAja;