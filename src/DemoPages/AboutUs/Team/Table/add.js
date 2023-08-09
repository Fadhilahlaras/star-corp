import React, {useState} from 'react';
import axios from "axios";
import {Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

const AddMember = (props) => {
    const [name, setName] = useState(null)
    const [address, setAddress] = useState(null)
    const [pbirth, setPbirth] = useState(null)
    const [bdate, setBdate] = useState(null)
    const [religion, setReligion] = useState(null)
    const [email, setEmail] = useState(null)
    const [note, setNote] = useState(null)
    const [picture, setPicture] = useState();
    const [img, setImg] = useState()

    const onSubmit = (e) => {
        const formData = new FormData();
        const json = JSON.stringify({
            "name": name,
            "address":  address,
            "pbirth": pbirth,
            "bdate": bdate,
            "religion": religion,
            "email": email,
            "note": note,
        });
        const blobDoc = new Blob([json], {
            type: 'application/json'
        });

        formData.append('pictureUrl', picture)
        formData.append('data', blobDoc)
        const config = {
            headers: {
                'content-type': 'multipart/mixed'
            }
        }

        axios.post("http://localhost:2121/team/save", formData, config)
            .then(props.tampil).catch()

        // axios.post("http://localhost:2121/team/save", formData, config)
        //     .then(res => {
        //         this.getDataKurir().then(response => {
        //             this.setState({ dataTable:response })
        //         })
        //     })

        props.onChangeToggle(false)
        props.tampil();
        setImg("")
    }

    const imagePreview = (e)=>{
        const url=URL.createObjectURL(e.target.files[0]);
        setImg(url);
        setPicture(e.target.files[0])
    }

    return (
        <>
            <span className="d-inline-block mb-2 mr-2">
                 <Modal isOpen={props.modal} toggle={props.toggle}>
                        <ModalHeader toggle={props.toggle}>Add New Member</ModalHeader>
                        <ModalBody>
                            <Form>
                                             <FormGroup>
                                                        <Label>Name</Label>
                                                        <Input type="text" name="name" id="name"
                                                               placeholder="Name" onChange={(e) => {
                                                            setName(e.target.value)
                                                        }}/>
                                                    </FormGroup>

                                                    <FormGroup>
                                                        <Label>Address</Label>
                                                        <Input type="textarea" name="address" id="address"
                                                               placeholder="Address"  onChange={(e) => {
                                                            setAddress(e.target.value)
                                                        }}/>
                                                    </FormGroup>

                                                    <FormGroup>
                                                        <Label>Place of Birth</Label>
                                                        <Input type="text" name="pbirth" id="pbirth"
                                                               placeholder="Place of Birth" onChange={(e) => {
                                                            setPbirth(e.target.value)
                                                        }}/>
                                                    </FormGroup>

                                                    <FormGroup>
                                                        <Label>Date of Birth</Label>
                                                        <Input type="date" name="bdate" id="bdate" onChange={(e) => {
                                                            setBdate(e.target.value)
                                                        }}/>
                                                    </FormGroup>


                                                    <FormGroup>
                                                        <Label for="religion">Religion</Label>
                                                        <Input type="select" name="religion" id="religion" onChange={(e) => {
                                                            setReligion(e.target.value)
                                                        }}>
                                                            <option></option>
                                                            <option>Islam</option>
                                                            <option>Christen</option>
                                                            <option>Chatolic</option>
                                                            <option>Budha</option>
                                                            <option>Hindu</option>
                                                        </Input>
                                                    </FormGroup>
                                                    <FormGroup>
                                                        <Label for="email">Email</Label>
                                                        <Input type="email" name="email" id="email"
                                                               placeholder="Input your email" onChange={(e) => {
                                                            setEmail(e.target.value)
                                                        }}/>
                                                    </FormGroup>


                                                    <FormGroup>
                                                        <Label>Note</Label>
                                                        <Input type="textarea" name="note" id="note" onChange={(e) => {
                                                            setNote(e.target.value)
                                                        }}/>
                                                    </FormGroup>

                                                    <FormGroup>
                                                        <Label>Upload Your Photo</Label>
                                                        <Input type="file" name="picture" id="picture" accepts="image/*"
                                                               placeholder="Input Picture of Product"
                                                               onChange={(e) => {
                                                                   imagePreview(e)
                                                               }}
                                                        />
                                                        <div style={{display:"flex", justifyContent:"center", marginTop:"20px"}}>
                                                         <img src={img} style={{width:"100%"}}/></div>
                                                    </FormGroup>



                                        </Form>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="link" onClick={()=> {props.onChangeToggle(false)}}>Cancel</Button>
                            <Button color="primary" onClick={() => {onSubmit()}}>Save</Button>
                        </ModalFooter>
                    </Modal>
            </span>
        </>
    )
}

export default AddMember;