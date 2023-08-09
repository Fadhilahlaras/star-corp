import React, {useEffect, useState} from "react";
import {
    Button,
    Card,
    CardBody,
    CardTitle, Col,
    Form,
    FormGroup, Input, Label,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader
} from "reactstrap";
import axios from "axios";
import Select from "react-select";

const Edit = (props) => {
    // console.log("data:/image/*;base64," + props.pictureUrl)
    const [idCategory, setIdCategory] = useState(props.data.idCategory)
    const [selectOptions, setSelectOptions] = useState([]);
    const [productName, setProductName] = useState(props.data.productName);
    const [stock, setStock] = useState(props.data.stock);
    const [price, setPrice] = useState(props.data.price);
    const [pictureUrl, setPictureUrl] = useState(props.data.pictureUrl);
    const [img, setImg] = useState(
        "data:/image/*;base64," + props.pictureUrl
    )
    const [dataLama, setDataLama] = useState(props.data)

    const onSubmit = () => {
        const formData = new FormData();
        const json = JSON.stringify({
            "id": props.data.id,
            "productName": productName == null ? props.data.productName : productName,
            "idCategory": idCategory == null ? props.data.idCategory : idCategory,
            "stock": stock == null ? props.data.stock : stock,
            "price": price == null ? props.data.price : price
        });
        const blobDoc = new Blob([json], {
            type: 'application/json'
        });

        // formData.append('idCategory', this.state.idCategory)
        formData.append("pictureUrl", pictureUrl == null ? props.data.pictureUrl : pictureUrl)
        formData.append('data', blobDoc)
        const config = {
            headers: {
                'content-type': 'multipart/mixed'
            }
        }
        console.log("ini adalah "+ price)
        axios.post("http://localhost:2222/api/product/save", formData, config)
            .then(()=>{tampil()})

        props.onChangeToggle(false)
        setImg("");
    }

    const imagePreview = (e)=>{
        const url=URL.createObjectURL(e.target.files[0]);
        setImg(url);
        setPictureUrl(e.target.files[0])
    }

    const tampil = () =>{props.tampil()}

    const getOptions = () => {
        axios.get('http://localhost:2222/api/productcategory', {
            headers: {'Content-Type': 'application/json'}
        }).then(res => {
            const data = res.data;
            const options = data.map(d => ({
                "value": d.id,
                "label": d.categoryName

            }));
            setSelectOptions(options)
        })

        console.log(selectOptions)
    }



    useEffect(() => {
        getOptions();
        tampil()
    }, [])


    return (
        <span className="d-inline-block mb-2 mr-2">
                <Modal isOpen={props.modal} toggle={props.toggle} className={props.className}>
                    <ModalHeader toggle={props.toggle}>Edit Product</ModalHeader>
                    <ModalBody>
                        <Card className="main-card mb-3">
                                    <CardBody>
                                        <CardTitle>Input Product Data</CardTitle>
                                        <Form>
                                <FormGroup>
                                    <Label for="productName">Product Name </Label>
                                    <Input type="text" name="productName" id="productName"
                                           placeholder={props.data.productName}
                                        // value={productName == null ?  props.data.productName : productName}
                                           onChange={(e) => {
                                               setProductName(e.target.value)
                                           }}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="idCategory">Category Product</Label>
                                    <Select name="idCategory" id="idCategory"
                                            options={selectOptions}
                                            placeholder={props.data.categoryName}
                                        // onChange={handleChangeSelect.bind(this)}
                                            onChange={(e) => {
                                                setIdCategory(e.value)
                                            }}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="stock">Stock</Label>
                                    <Input type="number" name="stock" id="stock"
                                           placeholder={props.data.stock} onChange={(e) => {
                                        setStock(e.target.value)
                                    }}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="price">Price</Label>
                                    <Input type="text" name="price" id="price"
                                           placeholder={props.data.price} onChange={(e) => {
                                        setPrice(e.target.value)
                                    }}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label>Picture of Product</Label>
                                    <Input type="file" name="pictureUrl" id="pictureUrl"
                                           placeholder="Input Picture of Product"
                                           onChange={(e) => {
                                               imagePreview(e)
                                           }}
                                    />
                                    <div style={{display:"flex", justifyContent:"center", marginTop:"20px"}}>
                                     <img src={img} style={{width:"100%"}}/></div>
                                </FormGroup>
                                        </Form>
                                    </CardBody>
                        </Card>
                        <ModalFooter>
                            <Button color="link" onClick={() => {
                                props.onChangeToggle(false)
                            }}>Cancel</Button>
                            <Button color="primary" onClick={() => {
                                onSubmit()
                            }}>Save</Button>
                        </ModalFooter>

                    </ModalBody>
                </Modal>
            </span>
    )
}

export default Edit