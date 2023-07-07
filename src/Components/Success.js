import React from 'react'
import {useNavigate} from 'react-router-dom'


const Success = () => {
    const navigate = useNavigate()

    const logoutHandler = () =>{
      navigate('/')
    }
  return (
    <>
    <h1>Welcome - Your are Successfully Logged-In/Registered</h1>
    <br/>
    <button onClick={logoutHandler}>Log-Out</button>
    </>
  )
}

export default Success