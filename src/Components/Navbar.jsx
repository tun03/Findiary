import { useContext } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import styles from '../Styles/nav.module.css'

import {AuthContext} from '../Context/AuthContext'

const Navbar = () => {
 
  const {auth,setAuth,name,setName}=useContext(AuthContext)
  const navigate = useNavigate()

  function handleClick(e){
    e.preventDefault()
    setAuth(false)
    navigate("/login")

  }

  
  
  
  return (
    <>
    
      
      
    <div className={styles.nav}>
      <div>
        <h3 onClick={()=>navigate("/form")}>Yourexpense.com</h3>
        
      </div>
    <div>
    {auth?(<>
      <h4>Hi {name}!</h4>
      </>):<></>}
      </div>
    <ul>
      
      {auth?(<>
        <Link to="/home">Home</Link>
    <Link to="/form">Form</Link>
    <button onClick={handleClick}>Logout</button>
      </>):(<>
        <Link to="/login">Login</Link>
    <Link to="/signup">SignUp</Link>
      </>

      )}
    
    
    
    </ul>
    </div>
    </>
  )
}

export default Navbar