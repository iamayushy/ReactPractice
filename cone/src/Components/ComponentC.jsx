import { useContext } from "react"
import { ChannelContext, UserContext } from "../App"


const ComponentC = () => {
    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)
    return(
        <div>
            <h3>😊 {user}</h3>
            <h3>📹{channel}</h3>
        </div>
    )
}

export {ComponentC}