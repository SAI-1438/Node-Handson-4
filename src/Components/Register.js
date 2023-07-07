import React, { useState } from 'react'
import { Link,useNavigate} from 'react-router-dom'
import axios from 'axios'

const Register = () => {
  const navigate = useNavigate()

  const[data,setData] = useState({
    name:'',
    email:'',
    password:'',
    contact:''
  })
 
  const handleSubmit = async (e) =>{
    e.preventDefault()

    try{
      const API ="https://register-login-api-ac3n.onrender.com/user/register"
      const res = await axios.post(API,data)

      setData({
        name:'',
        email:'',
        password:'',
        contact:''
      })
      if(res.data.msg === 'user registered successfully with token'){
        navigate('/success')
      }
      else{
        alert('user already registered')
      }
    }catch(error){
      console.error(error)
    }
  }

  const handleChange = (event) =>{
    const {name,value} = event.target;
    setData({...data,[name]:value})
  }
  return (
    <>
    <h1>Registration Page</h1>
    <form className='form' method='post'>
      <label >Name:</label>
      <input type="text" name="name" value={data.name} onChange={handleChange} placeholder='Enter Your Name' id="Name" required/>
      <br/>
      <label>Contact:</label>
      <input type="number" name="contact" value={data.contact} onChange={handleChange} placeholder='Enter Your Number' id="contact" required/>
      <br/>
      <label>Email:</label>
      <input type="email" name="email"  value={data.email} onChange={handleChange} placeholder='Enter Your Mail' id="email" required/>
      <br/>
      <label >Password:</label>
      <input type="password" name="password" value={data.password} onChange={handleChange}  placeholder='Enter Your Password' id='password' required/>
      <br/>
      <div className='btns'>
        <button onClick={handleSubmit}>Sign-Up</button><br/>Already Registered?-You can Sign-In<Link className="link" to="/">Go to Login</Link>
      </div>
    </form>
    </>
  )
}

export default Register