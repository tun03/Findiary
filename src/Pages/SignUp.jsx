import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import styles from '../Styles/login.module.css'
import styles1 from '../Styles/headings.module.css'

const SignUp = () => {
  
  
  const [userData,setUserdata] = React.useState({})
  const navigate = useNavigate()

  function handleChange(e){
    setUserdata({...userData,[e.target.name]:e.target.value})
  }

    function handleSubmit(e){
      e.preventDefault()
      axios.post("http://localhost:8080/users",userData)
      navigate("/login")
    }
  


  
  
  
  
  
  
  
  
  
  return (
    <>
    <div className={styles1.headings}><h3>Sign Up</h3></div>
    <div className={styles.login}>
      <form onSubmit={handleSubmit}>
    <div>
    <label>Name:</label>
    <input type="text" name="name" onChange={handleChange} required/>
    </div>
    <div>
    <label>Email:</label>
    <input type="email" name="email" onChange={handleChange} required/>
    </div>
    <div>
    <label>Password:</label>
    <input type="password" name="password" onChange={handleChange} required/>
    </div>
    <input type="submit"/>
    </form>
    </div>
    </>
  )
}

export default SignUp