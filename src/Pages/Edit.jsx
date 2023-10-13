import React, { useEffect } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import styles from '../Styles/form.module.css'
import { useParams } from 'react-router-dom'


const Edit = () => {

    const {id} = useParams()
 
    const [data,setData]=React.useState([])
    const navigate = useNavigate()
  
   function handleChange(e){
    setData({...data,[e.target.name]:e.target.value})
   }
  
   function handleSubmit(e){
    e.preventDefault()
    axios.patch(`http://localhost:8080/cxdetails/${id}`,data)
    alert("Your expenses updated successfully!")
    navigate("/home")
   }

   useEffect(()=>{
    const getData = async()=>{
    
      const data = await axios.get(`http://localhost:8080/cxdetails/${id}`)
      .then((res)=>{
     
      setData(res.data)
      })


    }
    getData()

},[])
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    return (
    <>
    <div className={styles.form1}>
      <form onSubmit={handleSubmit}>
        <div>
        <label>Date:</label>
        <input type="date" name="date" value={data.date} onChange={handleChange}/>
        </div>
        <div>
        <label>Transport:</label>
        <input type="number" name="transport"  value={data.transport} onChange={handleChange}/>
        </div>
        <div>
        <label>Food</label>
        <input type="number" name="food"  value={data.food} onChange={handleChange}/>
        </div>
        <div>
        <label>Grocery</label>
        <input type="number" name="grocery"  value={data.grocery} onChange={handleChange}/>
        </div>
        <div>
        <label>Utilities</label>
        <input type="number" name="utilities" value={data.utilities} onChange={handleChange}/>
        </div>
        <div>
        <label>Miscellaneous</label>
        <input type="number" name="miscellaneous"  value={data.miscellaneous} onChange={handleChange}/>
        </div>
        <div>
        <label>Note:</label>
        <input type="text" name="note"  value={data.note} onChange={handleChange}/>
        </div>
        <input type="submit"/>
       </form>
    </div>
    </>
  )
}

export default Edit