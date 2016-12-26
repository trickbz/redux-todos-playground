import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './js/components/app';
import configureStore from './js/store/configureStore';

const initialState = {
    entities: {
        todos: [
            {
                id: 1,
                title: 'Buy a guitar',
                completed: false
            },
            {
                id: 2,
                title: 'Find a job',
                completed: true
            }
        ]
    },
    nextIds: {
        todos: 3
    }
};

const store = configureStore(initialState);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
);