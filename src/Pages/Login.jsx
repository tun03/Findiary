import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'
import styles from '../Styles/login.module.css'
import styles1 from '../Styles/headings.module.css'



const Login = () => {


const [userData,setUserdata] = React.useState({})

const [users,setUsers] = React.useState([])

const navigate = useNavigate()

const {auth,setAuth,name,setName}=useContext(AuthContext)



  function handleChange(e){
    setUserdata({...userData,[e.target.name]:e.target.value})
  }


useEffect(()=>{
  const getData = async() => {
    const data = await axios.get("http://localhost:8080/users")
    setUsers([...data.data])
  }
  getData()
},[])

function handleSubmit(e){
  e.preventDefault()
  let ok=false;
 for (let i in users){
      if (userData.email==users[i].email&&userData.password==users[i].password){
        ok=true;
        setName(users[i].name)

        break;
  }
  else{
    ok=false;
  }
}

if(ok){
  navigate("/home")
        alert("Login successful!")
        setAuth(true)
      }
      else{
        alert("Invalid credentials")
      }
}


  







  return (
    <>
    <div className={styles1.headings}><h3>Login</h3></div>
       
    <div className={styles.login}>
   
      <form onSubmit={handleSubmit} >
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

export default Login