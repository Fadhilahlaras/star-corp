import React, {Fragment, lazy} from 'react';

import {
    UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Popover,
    Nav, NavLink, Col, Row, NavItem, UncontrolledButtonDropdown, Button
} from 'reactstrap';

import PerfectScrollbar from 'react-perfect-scrollbar';

import bg2 from '../../../assets/utils/images/dropdown-header/abstract2.jpg';
import bg3 from '../../../assets/utils/images/dropdown-header/abstract3.jpg';

import {
    faAngleDown,

} from '@fortawesome/free-solid-svg-icons';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link} from "react-router-dom";


class MegaMenu extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false,
            popoverOpen: false,
        };
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen,
            popoverOpen: !this.state.popoverOpen

        });
    }

    state = {};

    render() {
        return (
            <Fragment>
                <Nav className="header-megamenu">
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav>
                            <i className="nav-link-icon pe-7s-gift"> </i>
                            <Link to="/about" style={{textDecoration:"none"}}>About Us</Link>
                            {/*<FontAwesomeIcon className="ml-2 opacity-5" icon={faAngleDown}/>*/}
                        </DropdownToggle>
                    </UncontrolledDropdown>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav>
                            <i className="nav-link-icon pe-7s-gift"> </i>
                            Products
                            <FontAwesomeIcon className="ml-2 opacity-5" icon={faAngleDown}/>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-rounded dropdown-menu-lg rm-pointers">
                            <div className="dropdown-menu-header">
                                <div className="dropdown-menu-header-inner bg-success">
                                    <div className="menu-header-image opacity-2"
                                         style={{
                                             backgroundImage: 'url(' + bg3 + ')'
                                         }}
                                    ></div>
                                    <div className="menu-header-content text-left">
                                        <h5 className="menu-header-title">Products Daily You</h5>

                                    </div>
                                </div>
                            </div>
                            <DropdownItem>
                                <i className="dropdown-icon pe-7s-check"> </i>
                                <Link to="/product/make-up" style={{textDecoration:"none"}}>Make Up</Link>
                            </DropdownItem>
                            <DropdownItem>
                                <i className="dropdown-icon pe-7s-check"> </i>
                                <Link to="/product/skin-care" style={{textDecoration:"none"}}>Skin Care</Link>
                            </DropdownItem>
                            <DropdownItem>
                                <i className="dropdown-icon pe-7s-check"> </i>
                                <Link to="/product/body-care" style={{textDecoration:"none"}}>Body Care</Link>
                            </DropdownItem>

                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav>
                            <i className="nav-link-icon pe-7s-gift"> </i>
                            <Link to="/activities" style={{textDecoration:"none"}}>Activities</Link>
                            {/*<FontAwesomeIcon className="ml-2 opacity-5" icon={faAngleDown}/>*/}
                        </DropdownToggle>
                    </UncontrolledDropdown>

                    {/*<NavItem>*/}
                    {/*    <NavLink href="#" onClick={this.toggle} id="PopoverMegaMenu">*/}
                    {/*        <i className="nav-link-icon pe-7s-gift"> </i>*/}
                    {/*        Activities*/}
                    {/*        <FontAwesomeIcon className="ml-2 opacity-5" icon={faAngleDown}/>*/}
                    {/*    </NavLink>*/}
                    {/*</NavItem>*/}
                    {/*<Popover className="dropdown-menu-rounded dropdown-menu-lg rm-pointers" placement="bottom-start" fade={false} trigger="legacy" isOpen={this.state.popoverOpen} target="PopoverMegaMenu"*/}
                    {/*         toggle={this.toggle}>*/}
                    {/*    <div className="dropdown-mega-menu">*/}
                    {/*        <div className="grid-menu grid-menu-col">*/}
                    {/*            <Row className="no-gutters">*/}
                    {/*                <Col>*/}
                    {/*                    <Nav vertical>*/}
                    {/*                        <NavItem className="nav-item-header">*/}
                    {/*                            Overview*/}
                    {/*                        </NavItem>*/}
                    {/*                        <NavItem>*/}
                    {/*                            <NavLink href="#">*/}
                    {/*                                <i className="nav-link-icon lnr-book"> </i>*/}
                    {/*                                <span>Education Pillars</span>*/}
                    {/*                            </NavLink>*/}
                    {/*                        </NavItem>*/}
                    {/*                        <NavItem>*/}
                    {/*                            <NavLink href="#">*/}
                    {/*                                <i className="nav-link-icon lnr-book"> </i>*/}
                    {/*                                <span>Health Pillars</span>*/}
                    {/*                            </NavLink>*/}
                    {/*                        </NavItem>*/}
                    {/*                        <NavItem>*/}
                    {/*                            <NavLink href="#">*/}
                    {/*                                <i className="nav-link-icon lnr-book"> </i>*/}
                    {/*                                <span>Women Empowerment's Pillars</span>*/}
                    {/*                            </NavLink>*/}
                    {/*                        </NavItem>*/}
                    {/*                        <NavItem>*/}
                    {/*                            <NavLink href="#">*/}
                    {/*                                <i className="nav-link-icon lnr-book"> </i>*/}
                    {/*                                <span>Environment Pillars</span>*/}
                    {/*                            </NavLink>*/}
                    {/*                        </NavItem>*/}
                    {/*                    </Nav>*/}
                    {/*                </Col>*/}
                    {/*            </Row>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</Popover>*/}
                </Nav>
            </Fragment>
        )
    }
}

export default MegaMenu;
