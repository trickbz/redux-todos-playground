import {connect} from 'react-redux';
import {addTodo}  from '../actions';
import AddTodoComponent from '../components/add-todo';

const mapDispatchToProps = (dispatch) => ({
    onAddTodo: (title) => {
        dispatch(addTodo(title));
    }
});

export default connect(null, mapDispatchToProps)(AddTodoComponent);