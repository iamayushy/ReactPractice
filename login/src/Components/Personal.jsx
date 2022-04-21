import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const Personal = () => {
    let {id} = useParams()
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://reqres.in/api/users/${id}`)
        .then(res => res.json())
        .then(ans => {
            setData(ans.data)
        })
    })
    return(
        <div>
            <img src={data.avatar} alt="user" />
            <h3>{data.first_name}</h3>
            <h3>{data.email}</h3>

        </div>
    )
}

export {Personal}