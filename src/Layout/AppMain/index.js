import { Route, Redirect} from 'react-router-dom';
import React, {Suspense, lazy, Fragment} from 'react';
import Loader from 'react-loaders'

import {
    ToastContainer,
} from 'react-toastify';

const Home = lazy(()=> import('../../DemoPages/Homepage'));

const About = lazy(()=> import('../../DemoPages/AboutUs'));
const Activities = lazy(()=> import('../../DemoPages/Activities'));
const Team = lazy(()=> import('../../DemoPages/AboutUs/Team'));

const TableMember = lazy(()=> import('../../DemoPages/AboutUs/Team/Table'));
const Galeri = lazy(()=> import('../../DemoPages/AboutUs/Galeri'));
const Login = lazy(()=> import('../../DemoPages/UserPages/Login'));
const Register = lazy(()=> import('../../DemoPages/UserPages/Register'));
const Profile = lazy(()=> import('../../DemoPages/UserPages/Profile'));
const Tabel = lazy(()=> import('../../DemoPages/TableData'));

const Product = lazy(() => import('../../DemoPages/Product/Redirect'));


const Cart = lazy(()=> import('../../DemoPages/Cart'));
const Checkout = lazy(()=> import('../../DemoPages/Checkout'));

const AppMain = () => {

    return (
        <Fragment>

            {/* Homepage */}

            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <div className="text-center">
                            <Loader type="ball-spin-fade-loader"/>
                        </div>
                        <h6 className="mt-5">
                            Please wait while we load all the Components examples
                            <small>Because this is a demonstration we load at once all the Components examples. This wouldn't happen in a real live app!</small>
                        </h6>
                    </div>
                </div>
            }>
                <Route path="/home" component={Home}/>
            </Suspense>

            {/* About Us */}

            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <div className="text-center">
                            <Loader type="ball-spin-fade-loader"/>
                        </div>
                        <h6 className="mt-5">
                            Please wait while we load all the Components examples
                            <small>Because this is a demonstration we load at once all the Components examples. This wouldn't happen in a real live app!</small>
                        </h6>
                    </div>
                </div>
            }>
                <Route path="/about" component={About}/>
            </Suspense>

            {/* Activities */}

            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <div className="text-center">
                            <Loader type="ball-spin-fade-loader"/>
                        </div>
                        <h6 className="mt-5">
                            Please wait while we load all the Components examples
                            <small>Because this is a demonstration we load at once all the Components examples. This wouldn't happen in a real live app!</small>
                        </h6>
                    </div>
                </div>
            }>
                <Route path="/activities" component={Activities}/>
            </Suspense>

            {/* Team Member */}

            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <div className="text-center">
                            <Loader type="ball-spin-fade-loader"/>
                        </div>
                        <h6 className="mt-5">
                            Please wait while we load all the Components examples
                            <small>Because this is a demonstration we load at once all the Components examples. This wouldn't happen in a real live app!</small>
                        </h6>
                    </div>
                </div>
            }>
                <Route path="/team" component={Team}/>
            </Suspense>

            {/* Table Member */}

            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <div className="text-center">
                            <Loader type="ball-spin-fade-loader"/>
                        </div>
                        <h6 className="mt-5">
                            Please wait while we load all the Components examples
                            <small>Because this is a demonstration we load at once all the Components examples. This wouldn't happen in a real live app!</small>
                        </h6>
                    </div>
                </div>
            }>
                <Route path="/tableMember" component={TableMember}/>
            </Suspense>

            {/* Galeri */}

            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <div className="text-center">
                            <Loader type="ball-spin-fade-loader"/>
                        </div>
                        <h6 className="mt-5">
                            Please wait while we load all the Components examples
                            <small>Because this is a demonstration we load at once all the Components examples. This wouldn't happen in a real live app!</small>
                        </h6>
                    </div>
                </div>
            }>
                <Route path="/galeri" component={Galeri}/>
            </Suspense>


            {/* Login */}

            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <div className="text-center">
                            <Loader type="ball-spin-fade-loader"/>
                        </div>
                        <h6 className="mt-5">
                            Please wait while we load all the Components examples
                            <small>Because this is a demonstration we load at once all the Components examples. This wouldn't happen in a real live app!</small>
                        </h6>
                    </div>
                </div>
            }>
                <Route path="/login" component={Login}/>
            </Suspense>

            {/* Register */}

            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <div className="text-center">
                            <Loader type="ball-spin-fade-loader"/>
                        </div>
                        <h6 className="mt-5">
                            Please wait while we load all the Components examples
                            <small>Because this is a demonstration we load at once all the Components examples. This wouldn't happen in a real live app!</small>
                        </h6>
                    </div>
                </div>
            }>
                <Route path="/register" component={Register}/>
            </Suspense>




            {/* Tabel */}

            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <div className="text-center">
                            <Loader type="ball-spin-fade-loader"/>
                        </div>
                        <h6 className="mt-5">
                            Please wait while we load all the Components examples
                            <small>Because this is a demonstration we load at once all the Components examples. This wouldn't happen in a real live app!</small>
                        </h6>
                    </div>
                </div>
            }>
                <Route path="/tabel" component={Tabel}/>
            </Suspense>

            {/* Cart */}

            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <div className="text-center">
                            <Loader type="ball-spin-fade-loader"/>
                        </div>
                        <h6 className="mt-5">
                            Please wait while we load all the Components examples
                            <small>Because this is a demonstration we load at once all the Components examples. This wouldn't happen in a real live app!</small>
                        </h6>
                    </div>
                </div>
            }>
                <Route path="/cart" component={Cart}/>
            </Suspense>

            {/* Checkout */}

            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <div className="text-center">
                            <Loader type="ball-spin-fade-loader"/>
                        </div>
                        <h6 className="mt-5">
                            Please wait while we load all the Components examples
                            <small>Because this is a demonstration we load at once all the Components examples. This wouldn't happen in a real live app!</small>
                        </h6>
                    </div>
                </div>
            }>
                <Route path="/checkout" component={Checkout}/>
            </Suspense>


            {/*Products*/}
            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <div className="text-center">
                            <Loader type="ball-grid-cy"/>
                        </div>
                        <h6 className="mt-3">
                            You are redirecting to Products
                            <small>Happy Shopping!</small>
                        </h6>
                    </div>
                </div>
            }>
                <Route path="/product" component={Product}/>
            </Suspense>





            {/*Untuk redirect langsung saat diklik localhost:3000 pertama kali*/}

            <Route exact path="/" render={() => (
                <Redirect to="/home"/>
            )}/>
            <ToastContainer/>
        </Fragment>
    )
};

export default AppMain;