import { UserContext } from "../App"
import { ChannelContext } from "../App"
import { ComponentC } from "./ComponentC"
const ComponentB = () => {
    return(
        <div>
            <UserContext.Consumer>
                {user => {
                    return(
                        <ChannelContext.Consumer>
                            {
                                channel => {
                                    return(
                                        <div>
                                            <h3>My name is {user}</h3>
                                            <h3>My Channel Name is {channel}</h3>
                                        </div>
                                    )
                                }
                            }
                        </ChannelContext.Consumer>
                    )}
                }
            </UserContext.Consumer>
            <ComponentC/>
        </div>
    )
}

export {ComponentB}