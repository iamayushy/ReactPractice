import { createContext} from 'react'
import logo from './logo.svg'
import './App.css'
import { ComponentA } from './Components/ComponentA'


export const UserContext = createContext() 
export const ChannelContext = createContext()
function App() {


  return (
    <div className="App">
      <UserContext.Provider value={'Ayush'}>
        <ChannelContext.Provider value={'Developer Ayush'}>
        <ComponentA/>
        </ChannelContext.Provider>
     </UserContext.Provider>
    </div>
  )
}

export default App
