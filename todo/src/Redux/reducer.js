import { ADD, DELETE } from "./action"

const initialStore = {
    todos: []
}

const reducer = (store = initialStore, action) => {
    switch(action.type){
        case ADD:
            return{
                ...store,
                todos: [...store.todos, action.payload]
            }
        case DELETE:
            return {
                ...store,
                    s:store.todos.splice(action.payload, 1),
                    todos: store.todos
            }
        default:
            return store
    }
}

export {reducer}