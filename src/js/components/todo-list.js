import React from 'react';
import Todo from './../components/todo';

export default class TodoList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.todos.map(todo => (
                    <Todo
                        key={todo.id}
                        {...todo}
                        onToggleTodo={() => this.props.onToggleTodo(todo.id)}
                        onDeleteTodo={() => this.props.onDeleteTodo(todo.id)}
                    />
                ))}
            </ul>
        );
    }
}