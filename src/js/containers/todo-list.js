import {connect} from 'react-redux';
import TodoListComponent from './../components/todo-list';
import {toggleTodo, deleteTodo} from './../actions';

const mapStateToProps = (state, ownProps) => ({
    todos: state.entities.todos || []
});

const mapDispatchToProps = (dispatch) => ({
    onToggleTodo: (id) => {
        dispatch(toggleTodo(id))
    },
    onDeleteTodo: (id) => {
        dispatch(deleteTodo(id))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoListComponent)