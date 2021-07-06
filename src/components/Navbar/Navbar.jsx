import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <ul className={styles.navLinks}>
      <NavLink exact to='/' activeClassName={styles.selected}> 
           home
      </NavLink>
      <NavLink to='/about' activeClassName={styles.selected}>
          about us 
      </NavLink>  
      <NavLink to='/contact' activeClassName={styles.selected}>
          contact 
      </NavLink> 
    </ul>
  )
}

export default Navbar
