import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Auth } from "../Context/AuthContext"
import { Personal } from "./Personal";

const Users = () => {
    const nav = useNavigate();
    const {token} = useContext(Auth)
    const [use, setUse] = useState([]) 
    useEffect(() => {
        fetch('https://reqres.in/api/users?page=2')
        .then(res => res.json())
        .then(ans => setUse(ans.data))
    })

    return token !== undefined && token.length > 5 ?<div> 
        <h1>Users</h1>
        {use.map(name => {
           return( <div key={name.id} onClick={() => nav(`${name.id}`)}>
                <img src={name.avatar} alt="" />
                <h5>{name.first_name}</h5>
                <h5>{name.email}</h5>
                
            </div>)
        })}
    </div>:(
        <div>
            <h1>I have Some Unique Data But First Login</h1>
            <button onClick={() => {
                nav('/')
            }}>Login</button>
        </div>
    )
}
export {Users}