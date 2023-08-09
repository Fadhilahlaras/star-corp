import React, {Fragment} from 'react';
import "../../assets/layout/footer/footer.scss"
import MegaMenuFooter from './Components/FooterMegaMenu';
import FooterDots from './Components/FooterDots';
import {Link} from "react-router-dom";
import {Container} from "reactstrap";
import {IoIosAirplane, IoIosNotificationsOutline} from "react-icons/io";

class AppFooter extends React.Component {
    render() {


        return (
            <Fragment>
                <div className="app-footer">
                {/*    <div className="app-footer__inner">*/}

                        {/*<div className="app-footer-left">*/}
                        {/*    <h6>Products</h6>*/}
                        {/*    /!*<FooterDots/>*!/*/}
                        {/*</div>*/}
                        {/*<div className="app-footer-right">*/}
                        {/*    <Container>*/}
                        {/*    <h6>Follows Us</h6>*/}

                        {/*        <div className="footer-dots">*/}

                        {/*            <Link to="/about" style={{textDecoration:"none"}}>About</Link>*/}
                        {/*            <Link to="/about" style={{textDecoration:"none"}}>Us</Link>*/}
                        {/*        </div>*/}


                        {/*    </Container>*/}

                        {/*</div>*/}

                        {/*<div className="row">*/}
                        {/*    <p className="col-sm" style={{color: "black"}}>*/}
                        {/*        &copy;{new Date().getFullYear()} Daily You All rights reserved*/}
                        {/*    </p>*/}
                        {/*</div>*/}


                    {/*</div>*/}
                </div>
            </Fragment>
        )}
}

export default AppFooter;