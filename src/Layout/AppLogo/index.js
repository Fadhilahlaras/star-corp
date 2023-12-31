import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import logo from '../../assets/utils/images/star.png';

import { Slider } from 'react-burgers'

import AppMobileMenu from '../AppMobileMenu';

import {
    setEnableClosedSidebar,
    setEnableMobileMenu,
    setEnableMobileMenuSmall,
} from '../../reducers/ThemeOptions';
import {Link} from "react-router-dom";
import { Col } from 'reactstrap';

class HeaderLogo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            mobile: false,
            activeSecondaryMenuMobile: false
        };

    }

    toggleEnableClosedSidebar = () => {
        let {enableClosedSidebar, setEnableClosedSidebar} = this.props;
        setEnableClosedSidebar(!enableClosedSidebar);
    }

    state = {
        openLeft: false,
        openRight: false,
        relativeWidth: false,
        width: 280,
        noTouchOpen: false,
        noTouchClose: false,
    };

    render() {
        return (
            <Fragment>
                {/*<div className="app-header__logo">*/}
                {/*    <div className="logo-src"/>*/}
                {/*    <div className="header__pane ml-auto">*/}
                        {/*<div onClick={this.toggleEnableClosedSidebar}>*/}
                        {/*<Slider */}
                        {/* width={26}*/}
                        {/* lineHeight={2}*/}
                        {/* lineSpacing={5}*/}
                        {/* color='#6c757d'*/}
                        {/* active={this.state.active}*/}
                        {/* onClick={() => this.setState({ active: !this.state.active })}/>*/}
                        {/*</div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', alignItems: 'center', gap: '10px' }}>
                    <Link to={"/home"} style={{ display: 'flex', gridTemplateColumns: 'auto 1fr', alignItems: 'center', textDecoration: 'none' }}>
                        {/* <Col> */}
                            {/* <img style={{paddingLeft:"40px"}} src={logo} sizes={1} route="/home" alt="Logo" /> */}
                            {/* Star Surabaya Corp */}
                        {/* </Col> */}
                        {/* <Col> */}
                            <h6 style={{ marginTop: '5px', marginLeft: '20px', fontFamily: "cursive", fontStyle: "italic", fontSize: "20px" }}>Star Surabaya Corp</h6>
                        {/* </Col> */}
                    </Link>
                </div>
                <AppMobileMenu/>
            </Fragment>
        )
    }
}


const mapStateToProps = state => ({
    enableClosedSidebar: state.ThemeOptions.enableClosedSidebar,
    enableMobileMenu: state.ThemeOptions.enableMobileMenu,
    enableMobileMenuSmall: state.ThemeOptions.enableMobileMenuSmall,
});

const mapDispatchToProps = dispatch => ({

    setEnableClosedSidebar: enable => dispatch(setEnableClosedSidebar(enable)),
    setEnableMobileMenu: enable => dispatch(setEnableMobileMenu(enable)),
    setEnableMobileMenuSmall: enable => dispatch(setEnableMobileMenuSmall(enable)),

});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderLogo);