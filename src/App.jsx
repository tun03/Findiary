import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Route,Routes} from 'react-router-dom'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import Home from './Pages/Home'
import Form from './Pages/Form'

import Navbar from './Components/Navbar'
import ProtectedRoute from './Components/ProtectedRoute'
import Error from './Pages/Error'
import Finance from './Pages/Finance'
import Footer from './Components/Footer'
import Edit from './Pages/Edit'


function App() {
  

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/login" element={<Login/>}  />
        <Route path="/signup" element={<SignUp/>}  />
        <Route path="/home" element={<ProtectedRoute Component={Home}/>}  />
        <Route path="/form" element={<ProtectedRoute Component={Form}/>}  />
        <Route path="/finance/:id" element={<Finance/>}/>
        <Route path="/finance/edit/:id" element={<Edit/>}/>
        <Route path="*" element={<Error/>}/>
        
      </Routes>
      <Footer/>
    </>
  )
}

export default App
