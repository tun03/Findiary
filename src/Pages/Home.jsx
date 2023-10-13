import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import styles from '../Styles/home.module.css'
import {useNavigate} from 'react-router-dom'
import styles3 from '../Styles/button.module.css'

const Home = () => {
  const [data,setData]=React.useState([])
  const [loading,setLoading]=React.useState(false)
  const [err,setErr]=React.useState(false)
  const navigate = useNavigate()
  const [page,setPage]=React.useState(1)

  

  useEffect(()=>{
    const getData = async()=>{
      setLoading(true)
      const data = await axios.get(`http://localhost:8080/cxdetails?_limit=3&_page=${page}`)
      .then((res)=>{
      setLoading(false)
      setData([...res.data])
      })

      .catch(()=>{
        setLoading(false)
        setErr(true)
      })

    }
    getData()

  },[page])
  
  
  
  
  
  
  
 
  
  
  
  
  
  return (
    <>
    <p>Page no. {page}</p>
    {loading?(<><h4>Loading...</h4></>):err?(<><h4>Error...</h4></>):(
      <div className={styles.home}>
      {data.map((e)=>{
        
        return(
      
        <div key={e.id} onClick={()=>navigate(`/finance/${e.id}`)}>
          <h3>Date: {e.date}</h3>
          <h3>Transport: {e.transport}</h3>
          <h3>Food: {e.food}</h3>
          <h3>Grocery: {e.grocery}</h3>
          <h3>Utilities: {e.utilities}</h3>
          <h3>Miscellaneous: {e.miscellaneous}</h3>
       
          <h3>Note: {e.note}</h3>
          

          </div>
      )}
      )}
      </div>
   
    )}
    <div className={styles3.button}>
    <button onClick={()=>{
      if(page>1){
        setPage(page-1)
      }
    }}>Prev</button>
    <button onClick={()=>{
      if(page<100){
        setPage(page+1)
      }
    }}>Next</button>
    </div>
    </>
  )
}

export default Home