import './App.css'
import React from 'react'
import {auth} from './firebase' 
import app from "./firebase"
import {Routes, Route} from "react-router-dom"
import Signup from './Components/Signup'
import Login from './Components/Login'


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/signup' element= {<Signup />} />
        <Route path='/login' element= {<Login />} />
      </Routes>
    </div>
  )
}

export default App
