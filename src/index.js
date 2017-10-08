import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

import reduxThunk from 'redux-thunk';

import App from './containers/app';
import Display from './containers/display';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
    <Provider store={store}>
        <div>
            <App/>
            <Display/>
        </div>
    </Provider>
    , document.querySelector('.container'));
