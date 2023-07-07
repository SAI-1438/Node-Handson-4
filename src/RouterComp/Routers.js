import React from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Register from '../Components/Register'
import Login from '../Components/Login'
import Success from '../Components/Success'

const Routers = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register/>}/>
        <Route path="/" element={<Login/>}/>
        <Route path="/success" element={<Success/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default Routers