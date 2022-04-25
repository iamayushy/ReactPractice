import { useState } from "react"
import { useSelector } from "react-redux"
import { add, remove } from "../Redux/action"
import { store } from "../Redux/store"

const Todo = () => {

    const [chage, setChange] = useState('')
    const {todos} = useSelector(store => store)
    function handleSubmit(){
        store.dispatch(add(chage))
        console.log(todos);
    }
    function handleDelete(index){
        store.dispatch(remove(index))
    }
    return(
        <div>
        <h1>Master List</h1>

        <input placeholder="Enter Task" type="text" onChange={(e) => setChange(e.target.value)} value={chage}/>
        <button onClick={handleSubmit}>Submit</button>
        {todos.map((task, index) => (
            <div  key={index}>
                <h4>{task}</h4>
                <button onClick={() => handleDelete(index)}>x</button>
            </div>
        ))}
        </div>
    )
}
export {Todo}