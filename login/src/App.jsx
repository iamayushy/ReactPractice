import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from './Components/Navbar'
import { Home } from './Components/Home'
import { About } from './Components/About'
import { Users } from './Components/Users'
import { Personal } from './Components/Personal'

function App() {
  

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='users' element={<Users/>}/>
        <Route path='users/:id' element={<Personal/>}/>
      </Routes>
    </div>
  )
}

export default App
