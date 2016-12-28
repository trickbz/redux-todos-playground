var _ = require('lodash');

var todos = [
    {
        id: 1,
        title: 'Buy a guitar',
        completed: true
    },
    {

        id: 3,
        title: 'Make a plan',
        completed: false
    }
];

var nextTodoId = 3;

function getAll() {
    return todos;
}

function getById(id) {
    return _.find(todos, {id: id});
}

function create(todo) {
    todo.id = nextTodoId++;
    todos.push();
    return todo;
}

function remove(id) {
    return _.remove(todos, {id: id});
}

module.exports = {
    getAll: getAll,
    getById: getById,
    create: create,
    remove: remove
};