import logo from './logo.svg'
import './App.css'
import { Dashboard } from './Components/Dashboard'
import { useContext } from 'react'
import { theme, ThemeContext } from './Context/ThemeContext'

const style = {
  backgroundColor: 'black',
  color:'white'
}
const style2 = {
  backgroundColor: 'white',
  color:'black'
}
function App() {
 
  const {dark} = useContext(theme)
  return (
    <div className="App" style={dark?style:style2}>
      <Dashboard/>
    </div>
  )
}

export default App
