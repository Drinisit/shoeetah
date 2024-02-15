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

            <nav>
                <ul className={isMobile ? [styles.menu, styles.active].join(' ') : [styles.menu]}>
                    <li>Men</li>
                    <li>Women</li>
                    <li>Kids</li>
                    <li>Trends</li>
                    <li>New Arrival</li>
                </ul>
          
            </nav>
            <div onClick={() => setIsMobile(!isMobile)} className={styles.mobile_btn}>
                  
                  { isMobile ? <IoCloseOutline  /> : <IoMenuOutline />}
                  
            </div>  

                      
        </header>
    </>
  )
}

export default Navbar