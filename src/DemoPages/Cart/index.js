import React, {Fragment} from 'react'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import {
    Row, Col,
    Card, CardBody, CardFooter, Button, FormGroup, Label, Input, CustomInput, Form, Modal, ModalBody, ModalFooter,
    UncontrolledButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle, CardTitle
} from 'reactstrap';
import ReactTable from "react-table";
import PageTitle from '../../Layout/AppMain/PageTitle';
import AppHeader from '../../Layout/AppHeader';
import avatar2 from '../../assets/utils/images/avatars/4.jpg';
import NumericInput from 'react-numeric-input';

import {makeData} from '../../DemoPages/Tables/DataTables/Examples/utils';
import {Link} from "react-router-dom";
import {
    faTrashAlt,
    faCheck,
    faEllipsisH,

} from '@fortawesome/free-solid-svg-icons';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default class DataTableCustomComps extends React.Component {
    constructor() {
        super();
        this.state = {
            data: makeData()
        };
    }

    render() {
        const {data} = this.state;

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
                            <Row>
                                <Col md="12">
                                    <Card className="main-card mb-3">
                                        <CardBody>
                                            <ReactTable
                                                data={data}
                                                columns={[{
                                                    columns: [
                                                        {
                                                            Header: 'Name',
                                                            accessor: 'firstName',
                                                            Cell: row => (
                                                                <div className="widget-content p-0">
                                                                    <Input type="checkbox" id="exampleCustomCheckbox12"
                                                                           label="&nbsp;"/>
                                                                    <div className="widget-content-wrapper">
                                                                        <div className="widget-content-left mr-3">
                                                                            <div className="widget-content-left">
                                                                                <img width={52}
                                                                                     className="rounded-circle"
                                                                                     src={avatar2}
                                                                                     alt=""/>
                                                                            </div>
                                                                        </div>
                                                                        <div className="widget-content-left flex2">
                                                                            <div className="widget-heading">
                                                                                {row.value}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )
                                                        },
                                                        {
                                                            Header: 'Quantity',
                                                            accessor: 'visits',
                                                            Cell: row => (
                                                                <div className="d-block w-100 text-center">
                                                                    <NumericInput className="form-control" min={0}
                                                                                  max={100} value={1}/>
                                                                </div>
                                                            )

                                                        },
                                                        {
                                                            Header: 'Unit Price',
                                                            accessor: 'lastName'
                                                        },
                                                        {
                                                            Header: 'Sub Total Price',
                                                            accessor: 'age'
                                                        },
                                                    ]
                                                },
                                                    {
                                                        columns: [

                                                            {
                                                                Header: 'Actions',
                                                                accessor: 'actions',
                                                                Cell: row => (
                                                                    <div className="d-block w-100 text-center">
                                                                        <FormGroup>
                                                                            <Input type="checkbox"
                                                                                   id="exampleCustomCheckbox"/>

                                                                            <span aria-hidden={"true"}/>
                                                                            <FontAwesomeIcon icon={faTrashAlt}/>
                                                                        </FormGroup>
                                                                    </div>
                                                                )
                                                            }
                                                        ]
                                                    }]}
                                                defaultPageSize={10}
                                                className="-striped -highlight"
                                            />
                                        </CardBody>
                                        <CardFooter className="text-right d-block">
                                            <Button outline className="mr-2 border-0 btn-transition"
                                                    color="danger">Remove</Button>
                                            <Link to="/checkout" style={{textDecoration: "none"}}>
                                                <Button outline className="border-0 btn-transition"
                                                        color="primary">Checkout</Button>
                                            </Link>
                                        </CardFooter>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </CSSTransitionGroup>
            </Fragment>
        )
    }
}