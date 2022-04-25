const ADD = 'ADD'
const DELETE = 'DELETE'

const add = (task) => (
    {
        type:ADD,
        payload: task
    }
)

const remove = (index) => (
    {
        type: DELETE,
        payload: index
    }
)
export {ADD, add, DELETE, remove}