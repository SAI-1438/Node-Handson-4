import React, { useState} from 'react'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'


const Login = () => {
  const navigate = useNavigate()

  const [data,setData] = useState({
    email:'',
    passowrd:''
  })

  const handleChange = (event) =>{
    const {name,value} = event.target
    setData((prevData) =>({
      ...prevData,
      [name]:value,
    }))
  }

  const handleSubmit = async (e) =>{
    e.preventDefault()
    
    const {email,password} = data
    
    if(!email || !password){
      alert("enter email and password")
    }
    try{
      const API = "https://register-login-api-ac3n.onrender.com/user/login"
      const res = await axios.post(API,data)
      setData({
        email:'',
        password:''
      })
      if(res.data.msg === 'user logged in'){
        navigate('/success')
      }
      else{
        alert('user is not registered')
      }
    }catch(error){
      console.log(error)
    }
  }
  
  return (
    <>
    <h1>Login Page</h1>
    <form method='post'>
      <label >Email:</label>
      <input type="email" name="email" value={data.email} onChange={handleChange} placeholder='Enter Your Mail' id="email" required/>
      <br/>
      <label >Password:</label>
      <input type="password" name="password" value={data.password} onChange={handleChange} placeholder='Enter Your Password' id='password' required/>
      <br/>
    </form>
    <div className='btns'>
    <button onClick={handleSubmit}>LogIn</button><br/>If you aren't registered?<Link className='link' to='/register'>Sign-Up</Link>
    </div>
    </>
  )
}

export default Login