import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <ul className={styles.navLinks}>
      <NavLink exact to='/' activeClassName={styles.selected}> 
        <div className={styles.link}>
           home
        </div>
      </NavLink>
      <NavLink to='/about' activeClassName={styles.selected}>
        <div className={styles.link}>
          about us 
        </div>  
      </NavLink>  
      <NavLink to='/contact' activeClassName={styles.selected}>
        <div className={styles.link}>
          contact 
        </div>  
      </NavLink> 
    </ul>
  )
}

export default Navbar
