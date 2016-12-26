import React, {PropTypes} from 'react';

const Todo = ({title, completed, onToggleTodo, onDeleteTodo}) => (
    <li>
        <span
            onClick={onToggleTodo}
            className={'todo-label' + (completed ? ' completed' : '')}
        >
            {title}
        </span>
        <button onClick={onDeleteTodo}>X</button>
        <button>Browse</button>
    </li>
);

Todo.propTypes = {
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    onToggleTodo: PropTypes.func.isRequired,
    onDeleteTodo: PropTypes.func.isRequired
};

export default Todo;