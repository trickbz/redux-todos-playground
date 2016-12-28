import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, IndexRedirect, browserHistory} from 'react-router';

import MainLayout from './js/components/main-layout';
import ViewTodo from './js/containers/view-todo';
import TodoList from './js/containers/todo-list';

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
        <Router history={browserHistory}>
            <Route path="/">
                <IndexRedirect to="/app/todos" />
                <Route path="app" component={MainLayout}>
                    <IndexRedirect to="/app/todos" />
                    <Route path="todos">
                        <IndexRoute component={TodoList}/>
                        <Route path=":id" component={ViewTodo}/>
                    </Route>
                </Route>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);