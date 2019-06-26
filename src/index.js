import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Reducers from './Reducers';

import App from './containers/App';

const createStoreWithMiddleware = applyMiddleware()(createStore)
ReactDOM.render(
    // connect react-redux with Provider. use store
    <Provider store={createStoreWithMiddleware(Reducers)}>
        <App/>
    </Provider>, document.getElementById('root'));

    // Action creators return type and payload froom the server 
    // Reducers matchc the type and updates the redux state
    // View is updated
    // CSWM has all the reducers in the application
