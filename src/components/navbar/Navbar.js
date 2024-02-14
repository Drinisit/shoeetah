import React from 'react'
import styles from './Navbar.module.css'
import { CiSearch, CiShoppingCart} from "react-icons/ci";

function Navbar() {
  return (
    <>
        <header className={styles.header}>
          
            <h1 className={styles.logo}>Shoeetah</h1>

            <nav className={styles.nav}>
                <ul className={styles.menu}>
                    <li>Men</li>
                    <li>Women</li>
                    <li>Kids</li>
                    <li>Trends</li>
                    <li>New Arrival</li>
                </ul>

                <div className={styles.search}>
                  <input type="text" placeholder='Search' />
                      <CiSearch className={styles.search_icon}/>
                </div>
                    
                      <CiShoppingCart className={styles.cart_icon} />
               
            </nav>

        </header>
    </>
  )
}

export default Navbar