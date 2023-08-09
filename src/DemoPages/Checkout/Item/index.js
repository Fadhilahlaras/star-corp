import React, {Fragment} from 'react'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import {
    Row, Col,
    Card, CardBody, CardTitle,
} from 'reactstrap';

import ReactTable from "react-table";
import PageTitle from '../../../Layout/AppMain/PageTitle';

import {makeData} from "./utils";

export default class Item extends React.Component {
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
                    <Row>
                        <Col md="12">
                            <Card className="main-card mb-3">
                                <CardBody>
                                    <CardTitle>My Order List</CardTitle>
                                    <ReactTable
                                        data={data}
                                        columns={[
                                                    {
                                                        Header: "Product",
                                                        accessor: "firstName"
                                                    },
                                                    {
                                                        Header: "Quantity",
                                                        id: "lastName",
                                                        accessor: d => d.lastName
                                                    },
                                                    {
                                                        Header: "Sub Total Price",
                                                        accessor: "age"
                                                    }
                                                ]
                                            }

                                        defaultPageSize={20}
                                        style={{
                                            height: "400px" // This will force the table body to overflow and scroll, since there is not enough room
                                        }}
                                        className="-striped -highlight -fixed"
                                    />
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </CSSTransitionGroup>
            </Fragment>
        )
    }
}