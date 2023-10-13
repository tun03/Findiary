import React from 'react'
import {Link} from 'react-router-dom'
import styles from '../Styles/footer.module.css'
import image from '../Images/facebook.png'
import image2 from '../Images/x.png'
import image3 from '../Images/linkedin.png'
import image4 from '../Images/insta.png'
import styles1 from '../Styles/sociallogo.module.css'

const Footer = () => {
  return (
    <>
    <div className={styles.footer}>
    <div >
        <h3>PRODUCTS</h3>
        <Link to="/form">Expense diary</Link>
        </div>
        <div>
        <h3>COMPANY</h3>
        <p>About</p>
        <p>Legal</p>
        <p>WE are hiring!</p>
        <p>Privacy Policy</p>
        <p>Contact Us</p>
        </div>
        <div >
            <div className={styles1.sociallogo}>
            <Link to="https://www.facebook.com" target="_blank"><img src={image} height="60px" width="60px"/></Link>
            <Link to="https://twitter.com" target="_blank"><img src={image2} height="60px" width="60px"/></Link>
            <Link to="https://www.linkedin.com" target="_blank"><img src={image3} height="60px" width="60px"/></Link>
            <Link to="https://www.instagram.com" target="_blank"><img src={image4} height="60px" width="60px"/></Link>
           
            </div>
            
        </div>
        </div>
    </>
  )
}

export default Footer