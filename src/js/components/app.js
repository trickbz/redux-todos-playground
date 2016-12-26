import React from 'react';
import '../../styles/styles.scss';
import AddTodo from '../containers/add-todo';
import TodoList from '../containers/todo-list';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <AddTodo />
                <TodoList />
            </div>
        );
    }
}