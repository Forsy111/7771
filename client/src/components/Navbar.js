import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/Navbar.module.scss'

const Navbar = () => {
  return (
    <nav className={styles.Navbar} role="navigation" aria-label="main navigation">
      <div className={styles.NavbarMain}>
        <div className={styles.firstElement}>

          <Link to='/all-sounds' className={styles.button}>
            All songs
          </Link>

          <Link to='/all-users/profileList' className={styles.button}>
            All users
          </Link>

          <Link to='/all-sounds/new-sounds/upload' className={styles.button}>
            Create
          </Link>
        </div>

        <div className={styles.Secondelement}>
          <Link to='/' className={styles.button}>
            Log out
          </Link>
        </div>

      </div>
    </nav>
  )
}


export default Navbar

