import React, {useState, useEffect} from "react";
import {
    Button,
    Form,
    FormGroup,
    Input,
    Label,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader
} from "reactstrap";
import axios from "axios";


const EditMember = (props) => {
    const [name, setName] = useState(props.data.name)
    const [address, setAddress] = useState(props.data.address)
    const [pbirth, setPbirth] = useState(props.data.pbirth)
    const [bdate, setBdate] = useState(props.data.bdate)
    const [religion, setReligion] = useState(props.data.religion)
    const [email, setEmail] = useState(props.data.email)
    const [note, setNote] = useState(props.data.note)
    const [pictureUrl, setPictureUrl] = useState(props.data.pictureUrl)
    const [img, setImg] = useState("data:/image/*'base64," + props.pictureUrl)


    const onSubmit = (e) => {
        const formData = new FormData();
        const json = JSON.stringify({
            "id": props.data.id,
            "name": name == null ? props.data.name : name,
            "address": address == null ? props.data.address : address,
            "pbirth": pbirth == null ? props.data.pbirth : pbirth,
            "bdate": bdate == null ? props.data.bdate : bdate,
            "religion": religion == null ? props.data.religion : religion,
            "email": email == null ? props.data.email : email,
            "note": note == null ? props.data.note : note
        });
        const blobDoc = new Blob([json], {
            type: 'application/json'
        });

        formData.append("pictureUrl", pictureUrl == null ? props.data.pictureUrl : pictureUrl)
        formData.append('data', blobDoc)
        const config = {
            headers: {
                'content-type': 'multipart/mixed'
            }
        }

        axios.post("http://localhost:2121/team/save", formData, config)
            .then(()=>{tampil()})

        // axios.post("http://localhost:2121/team/save", formData, config)
        //     .then(res => {
        //         this.getDataKurir().then(response => {
        //             this.setState({ dataTable:response })
        //         })
        //     })

        props.onChangeToggle(false)
        setImg("");
        console.log(' SAVE  DATA >>')

    }

    const imagePreview = (e)=>{
        const url=URL.createObjectURL(e.target.files[0]);
        setImg(url);
        setPictureUrl(e.target.files[0])
    }

    const tampil = () =>{props.tampil()}

    useEffect(() => {
        tampil()
    }, [])

    return (
        <>
            <span className="d-inline-block mb-2 mr-2">
                 <Modal isOpen={props.modal} toggle={props.toggle} className={props.className}>
                        <ModalHeader toggle={props.toggle}>Edit Admin</ModalHeader>
                        <ModalBody>
                            <Form>
                                             <FormGroup>
                                                        <Label>Name</Label>
                                                        <Input type="text" name="name" id="name"
                                                               placeholder={props.data.name} onChange={(e) => {
                                                                   setName(e.target.value)
                                                        }}/>
                                                    </FormGroup>

                                                    <FormGroup>
                                                        <Label>Address</Label>
                                                        <Input type="textarea" name="address" id="address"
                                                               placeholder={props.data.address}  onChange={(e) => {
                                                            setAddress(e.target.value)
                                                        }}/>
                                                    </FormGroup>

                                                    <FormGroup>
                                                        <Label>Place of Birth</Label>
                                                        <Input type="text" name="pbirth" id="pbirth"
                                                               placeholder={props.data.pbirth} onChange={(e) => {
                                                            setPbirth(e.target.value)
                                                        }}/>
                                                    </FormGroup>

                                                    <FormGroup>
                                                        <Label>Date of Birth</Label>
                                                        <Input type="date" name="bdate" id="bdate" placeholder={props.data.bdate} onChange={(e) => {
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
                                                               placeholder={props.data.email} onChange={(e) => {
                                                            setEmail(e.target.value)
                                                        }}/>
                                                    </FormGroup>


                                                    <FormGroup>
                                                        <Label>Note</Label>
                                                        <Input type="textarea" name="note" id="note" placeholder={props.data.note} onChange={(e) => {
                                                            setNote(e.target.value)
                                                        }}/>
                                                    </FormGroup>
                                
                                                    <FormGroup>
                                                        <Label>Upload Your Photo</Label>
                                                        <Input type="file" name="pictureUrl" id="pictureUrl" onChange={(e) => {
                                                            imagePreview(e)
                                                        }}/>
                                                            <div style={{display:"flex", justifyContent:"center", marginTop:"20px"}}>
                                                            <img src={img} style={{width:"100%"}}/></div>
                                                    </FormGroup>
                                        </Form>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="warning" onClick={props.toggle}>Cancel</Button>
                            <Button color="primary" onClick={() => {
                                onSubmit()}}>Save</Button>
                        </ModalFooter>
                    </Modal>
            </span>
        </>
    )
}

export default EditMember;