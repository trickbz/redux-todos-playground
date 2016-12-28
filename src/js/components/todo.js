import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const Todo = ({id, title, completed, onToggleTodo, onDeleteTodo}) => (
    <li>
        <span
            onClick={onToggleTodo}
            className={'todo-label' + (completed ? ' completed' : '')}
        >
            {title}
        </span>
        <button onClick={onDeleteTodo}>X</button>
        <Link to={'/app/todos/' + id}>View</Link>
    </li>
);

Todo.propTypes = {
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    onToggleTodo: PropTypes.func.isRequired,
    onDeleteTodo: PropTypes.func.isRequired
};

export default Todo;