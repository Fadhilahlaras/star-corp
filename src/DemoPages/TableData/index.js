import React, {Fragment, useState} from 'react';
import ReactTable from "react-table";
import {
    Row, Col,
    Card, CardBody,
    UncontrolledButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle, Table
} from 'reactstrap';
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import Header from "../../Layout/AppHeader";
import axios from "axios";

// const CreateRow = (props) => {
//     return (
//         <tr>
//             <td>{props.title}</td>
//             <td>{props.location}</td>
//
//         </tr>
//     )
// }

class TableData extends React.Component {
    constructor() {
        super();
        this.state = {
            dataTable: [],
        };
    }

    componentDidMount() {
        axios.get(`http://localhost:2121/input`)
            .then(res => {
                this.setState({dataTable: res.data})
                console.log(res)
            })
    }


    render() {
        const {dataTable} = this.state;
        return (
            <Fragment>

                <CSSTransitionGroup
                    component="div"
                    transitionName="TabsAnimation"
                    transitionAppear={true}
                    transitionAppearTimeout={1000}
                    transitionEnter={false}
                    transitionLeave={false}>
                    <Header/>
                    <div className="app-main">
                        <div className="app-main__inner">
                            <Card className="main-card m-5">
                                <div className="mb-3">
                                    <CardBody>
                                        {/*<Table size="lg">*/}
                                        {/*    <thead>*/}
                                        {/*    <th>Title</th>*/}
                                        {/*    <th>Location</th>*/}
                                        {/*    </thead>*/}
                                        {/*    <tbody>*/}
                                        {/*    {dataTable.map((data) => (*/}
                                        {/*        <CreateRow key={data.index} title={data.firstname}*/}
                                        {/*                   location={data.location}/>*/}
                                        {/*    ))}*/}
                                        {/*    </tbody>*/}
                                        {/*</Table>*/}
                                        <ReactTable
                                            data={dataTable}
                                            filterable
                                            columns={[{
                                                columns: [
                                                    {
                                                        Header: 'First Name',
                                                        accessor: 'firstname'
                                                    },
                                                    {
                                                        Header: 'Last Name',
                                                        accessor: 'lastname'
                                                    },
                                                    {
                                                        Header: 'Date',
                                                        accessor: 'date'
                                                    },
                                                    {
                                                        Header: 'Email',
                                                        accessor: 'email'
                                                    },
                                                    {
                                                        Header: 'Note',
                                                        accessor: 'note'
                                                    }
                                                ]
                                            }]}
                                            defaultPageSize={5}
                                            className="-striped -highlight"
                                        />
                                    </CardBody>
                                </div>
                            </Card>
                        </div>
                    </div>
                </CSSTransitionGroup>
            </Fragment>
        )
    }
}

export default TableData;