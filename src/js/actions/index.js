import {ActionTypes} from './../constatnts/index';

export const addTodo = (title) => ({
    type: ActionTypes.ADD_TODO,
    title
});

export const toggleTodo = (id) => ({
    type: ActionTypes.TOGGLE_TODO,
    id
});

export const deleteTodo = (id) => ({
    type: ActionTypes.DELETE_TODO,
    id
});