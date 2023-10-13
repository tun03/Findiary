import { useContext} from 'react'
import {AuthContext} from '../Context/AuthContext'
import {useNavigate} from 'react-router-dom'
import { useEffect } from 'react'

const ProtectedRoute = ({Component}) => {
  
  
  
  const {auth} = useContext(AuthContext)

  const navigate = useNavigate()
  
  
  
  useEffect(()=>{
    if(!auth){
        navigate("/login")
    }
  },[])
  
  
  
  
  
  
  
    return (
    
 <div><Component/></div>
  )
}

export default ProtectedRoute