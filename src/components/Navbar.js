import React, {useState} from 'react';
import styles from './Navbar.module.css'
import { CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";
import { IoMenu, IoClose } from "react-icons/io5";

function Navbar() {
  const [nav, setNav] = useState(false);

  return (
    <>
            <header className={styles.navbar}>  
                <h1 className={styles.logo}>Shoeeta</h1>

                        <nav className={styles.menu} >
                            <ul className={nav ? [styles.list, styles.active].join(' ') : [styles.list]}>
                                <li>Men</li>
                                <li>Women</li>
                                <li>Kids</li>
                                <li>Trends</li>
                                <li>New Arrival</li> 
                            </ul>

                            <div className={styles.access}>

                                <div className={styles.searchbar}>
                                  <input className={styles.nav_search} type='text' placeholder='Search...'></input>
                                  <CiSearch className={styles.search_icon}/>
                                </div>
                                  
                                  <CiSearch className={styles.search_iconMob}/>
                                  <CiShoppingCart className={styles.cart_icon} />
                                  <CiUser className={styles.user_icon} />

                            </div>

                            <div onClick={() => setNav(!nav)} className={styles.mobile_btn}>

                                {nav ? <IoClose size={20}/>: <IoMenu size={20} />}

                              
                                
                            </div>
                            
                        </nav>        
               
            </header>
        


    </>
  )
}

export default Navbar