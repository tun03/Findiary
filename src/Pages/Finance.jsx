import React from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'
import styles4 from '../Styles/finance.module.css'
import {useNavigate} from 'react-router-dom'
import styles3 from '../Styles/button.module.css'


const Finance = () => {

 
 const {id} = useParams()
 const [data,setData]=React.useState({})
  const [loading,setLoading]=React.useState(false)
  const [err,setErr]=React.useState(false)
  const navigate = useNavigate()




 useEffect(()=>{
  const getData = async()=>{
    setLoading(true)
    const data = await axios.get("http://localhost:8080/cxdetails")
    .then((res)=>{
    setLoading(false)
    setData(...res.data)
    })

    .catch(()=>{
      setLoading(false)
      setErr(true)
    })

  }
  getData()

},[])

function handleClick(){
  const conf = confirm("Are youu sure you want to delete?")
  if(conf){
    axios.delete(`http://localhost:8080/cxdetails${id}`)
    alert("Deleted successfully!")
    navigate("/home")
  }
}
 
 
 
 
 
 
 
 
 
    return (
    
    <>


    {loading?(<><h4>Loading...</h4></>):err?(<><h4>Error...</h4></>):(
      <div className={styles4.finance}>
     
        <div>
          <h3>Date: {data.date}</h3>
          <h3>Transport: {data.transport}</h3>
          <h3>Food: {data.food}</h3>
          <h3>Grocery: {data.grocery}</h3>
          <h3>Utilities: {data.utilities}</h3>
          <h3>Miscellaneous: {data.miscellaneous}</h3>
          <h3>Note: {data.note}</h3>
          </div>
      
      </div>
    )}
    <div className={styles3.button}>
    <button onClick={()=>navigate(`/finance/edit/${id}`)}>Edit</button>
    <button onClick={handleClick}>Delete</button>
    </div>
    
    
    
    </>
   
  
  )
}

export default Finance