const ADD_TODO = 'ADD_TODO'
const DELETE_TODO = 'DELETE_TODO'

const addTodo = (todo) => {
    return{
        type: ADD_TODO,
        payload: {
            todo
        }
    }
}

const deleteTodo = (id) => {
    return{
        type: DELETE_TODO
    }
}

export {deleteTodo, addTodo, ADD_TODO, DELETE_TODO}