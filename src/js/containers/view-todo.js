import {connect} from 'react-redux';
import ViewTodo from './../components/view-todo';

const mapStateToProps = (state, ownProps) => {
    const id = +ownProps.params.id;
    const todo = state.entities.todos.find(todo => id === todo.id);
    return {
        ...todo
    }
};

export default connect(mapStateToProps)(ViewTodo);