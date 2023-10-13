import React, { useContext } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import styles from '../Styles/form.module.css'
import styles2 from '../Styles/formHeading.module.css'
import { AuthContext } from '../Context/AuthContext'


const Form = () => {
 
 const [cxdata,setCxData]=React.useState({})
  const navigate = useNavigate()

 

 function handleChange(e){
  setCxData({...cxdata,[e.target.name]:e.target.value})
 }

 const Popdescription = ()=>{
    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit itaque optio tempore repellendus magni eaque amet. Veritatis commodi tenetur necessitatibus!</h2>
 }

 function handleSubmit(e){
  e.preventDefault()
  axios.post("http://localhost:8080/cxdetails",cxdata)
  alert("Your expenses saved successfully!")
  navigate("/home")
 }
 
 
 

 
 
 
 
 
 
 
  return (
    <>
    <h3 className={styles2.formHeading}>Enter your expenses:</h3>
    <div className={styles.form1}>
      <form onSubmit={handleSubmit}>
        <div>
        <label>Date:</label>
        <input type="date" name="date" onChange={handleChange} required/>
        </div>
        <div>
        <label>Transport:</label>
        <span> 
          <select>
            <option>₹</option>
            <option>$</option>
            <option>£</option>
          </select>
        </span>
        <input type="number" name="transport" onChange={handleChange}/>
        </div>
        <div>
        <label>Food:</label>
        <span> 
          <select>
            <option>₹</option>
            <option>$</option>
            <option>£</option>
          </select>
        </span>
        <input type="number" name="food" onChange={handleChange}/>
        </div>
        <div>
        <label>Grocery:</label>
        <span> 
          <select>
            <option>₹</option>
            <option>$</option>
            <option>£</option>
          </select>
        </span>
        <input type="number" name="grocery" onChange={handleChange}/>
        </div>
        <div>
        <label>Utilities:</label>
        <span> 
          <select>
            <option>₹</option>
            <option>$</option>
            <option>£</option>
          </select>
        </span>
        <input type="number" name="utilities" onChange={handleChange}/>
        </div>
        <div>
        <label>Miscellaneous:</label>
        <span> 
          <select>
            <option>₹</option>
            <option>$</option>
            <option>£</option>
          </select>
        </span>
        <input type="number" name="miscellaneous" onChange={handleChange}/>
        </div>
        <div>
        <label>Note:</label>
        <input type="text" name="note" onChange={handleChange}/>
        </div>
        <div>
        
        </div>
        <input type="submit"/>
       </form>
    </div>
    </>
  )
}

export default Form