import './polyfills'
import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';

import { HashRouter } from 'react-router-dom';
import './assets/base.scss';
import Main from './DemoPages/Main';
import configureStore from './config/configureStore';
import { Provider } from 'react-redux';

// import Keycloak from 'keycloak-js';

const store = configureStore();
const rootElement = document.getElementById('root');

const renderApp = Component => {
    ReactDOM.render(
        <Provider store={store}>
            <HashRouter>
                <Component />
            </HashRouter>
        </Provider>,
        rootElement
    );
};

renderApp(Main);

if (module.hot) {
    module.hot.accept('./DemoPages/Main', () => {
        const NextApp = require('./DemoPages/Main').default;
        renderApp(NextApp);
    });
}
serviceWorker.unregister();


// let initOptions = {
//     url: 'https://siska.prosigmaka.com/auth', client: 'gen4-client', realm: 'gen4', onLoad: 'login-required'
// }
//
//
// let keycloak = Keycloak(initOptions);
//
// keycloak.init({ onLoad: initOptions.onLoad }).success((auth) => {
//
//     if (!auth) {
//         window.location.reload();
//     } else {
//         console.info("Authenticated");
//     }
//
//     //React Render
//     ReactDOM.render(<Main />, document.getElementById('root'));
//
//     localStorage.setItem("react-token", keycloak.token);
//     localStorage.setItem("react-refresh-token", keycloak.refreshToken);
//
//     setTimeout(() => {
//         keycloak.updateToken(70).success((refreshed) => {
//             if (refreshed) {
//                 console.debug('Token refreshed' + refreshed);
//             } else {
//                 console.warn('Token not refreshed, valid for '
//                     + Math.round(keycloak.tokenParsed.exp + keycloak.timeSkew - new Date().getTime() / 1000) + ' seconds');
//             }
//         }).error(() => {
//             console.error('Failed to refresh token');
//         });
//
//
//     }, 60000)
//
// }).error(() => {
//     console.error("Authenticated Failed");
// });
//
// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
