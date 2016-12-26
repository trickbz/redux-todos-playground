import {ActionTypes} from './../constatnts';

export default (state, action) => {
    switch (action.type) {
        case ActionTypes.ADD_TODO:
            return Object.assign({}, state, {
                entities: {
                    todos: [...state.entities.todos, {
                        id: state.nextIds.todos,
                        title: action.title,
                        completed: false
                    }]
                },
                nextIds: {
                    todos: ++state.nextIds.todos
                }
            });
        case ActionTypes.TOGGLE_TODO:
            return Object.assign({}, state, {
                entities: {
                    todos: state.entities.todos.map(todo => {
                        if (todo.id !== action.id) {
                            return todo;
                        }
                        return Object.assign({}, todo, {
                            completed: !todo.completed
                        });
                    })
                }
            });
        case ActionTypes.DELETE_TODO:
            return Object.assign({}, state, {
                entities: {
                    todos: state.entities.todos.filter(todo => {
                        if (todo.id !== action.id) {
                            return todo;
                        }
                    })
                }
            });
        default:
            return state;
    }
}