import React, {Fragment} from "react";
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import AppHeader from "../../../Layout/AppHeader/index";

import AddProduct from "../Form";
import NewTable from "../Tabel/NewTable";

import MakeUp from "../Home/makeup"
import SkinCare from "../Home/skincare";
import BodyCare from "../Home/bodycare";
import HomePage from "../Home";
import {Route} from "react-router-dom";

const Home = ({match}) => {
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

                        {/*Form Product*/}
                        <Route path={`${match.url}/add-product`} component={AddProduct}/>

                        {/*Table Product*/}
                        <Route path={`${match.url}/table`} component={NewTable}/>

                        {/*Home Product*/}
                        <Route path={`${match.url}/home`} component={HomePage}/>

                        {/*Make Up Product*/}
                        <Route path={`${match.url}/make-up`} component={MakeUp}/>

                        {/*Skin Care Product*/}
                        <Route path={`${match.url}/skin-care`} component={SkinCare}/>

                        {/*Body Care Product*/}
                        <Route path={`${match.url}/body-care`} component={BodyCare}/>
                    </div>
                </div>
            </CSSTransitionGroup>
        </Fragment>
    )
}


export default Home;