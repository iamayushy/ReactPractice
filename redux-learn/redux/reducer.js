import { ADD_TODO, DELETE_TODO } from "./action"

const initialState = {
    todo : []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TODO:return{
            ...state,
            todo: [...state.todo, action.payload]
        }

        case DELETE_TODO:return{
            ...state,
            todo: state.todo.filter(() => {
                if(id !== state.todo){
                    return state.todo 
                }
            })
        }
        default: return state
    }
}
export {reducer}