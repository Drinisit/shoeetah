import React, { useState } from 'react'
import styles from './Navbar.module.css'
import { CiSearch} from "react-icons/ci";
import { RiUserFill } from "react-icons/ri";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";

function Navbar() {

  const [isMobile, setIsMobile] = useState(false);

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

                <div className={styles.users_access}>
                  <div className={styles.search}>
                    <input className={styles.searchBar} type="text" placeholder='Search' />
                        <CiSearch className={styles.search_icon}/>
                  </div>

                  <PiShoppingCartSimpleFill className={styles.cart_icon} />
                  <RiUserFill className={styles.user_icon} />

                  <div onClick={() => setIsMobile(!isMobile)}>
           
                        {
                          isMobile ? [<IoCloseOutline className={styles.mobile_closebtn} />] : [<IoMenuOutline className={styles.mobile_btn} />]
                        }
                      
                  </div>

                </div>
                
                    
                      
                      
            </nav>
            

                      
        </header>
    </>
  )
}

export default Navbar