import React, { useState } from 'react'
import styles from './Navbar.module.css'
import { CiSearch} from "react-icons/ci";
import { RiUserFill } from "react-icons/ri";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { IoMenuOutline, IoCloseOutline, IoSearch } from "react-icons/io5";

function Navbar() {

  const [isMobile, setIsMobile] = useState(false);

  const [isSearch, setIsSearch] = useState(false);

  return (
    <>
        <header className={styles.header}>
          
            <h1 className={styles.logo}>Shoeetah</h1>

            <nav className={styles.nav}>
                <ul className={isMobile ? [styles.menu, styles.active].join(' ') : [styles.menu]}>
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
                  <IoSearch onClick={() => setIsSearch(!isSearch)} className={styles.search_icon_mobile}/>
                  <PiShoppingCartSimpleFill className={styles.cart_icon} />
                  <RiUserFill className={styles.user_icon} />

                </div>
          
            </nav>
            <div onClick={() => setIsMobile(!isMobile)} className={styles.mobile_btn}>
                  
                  { isMobile ? <IoCloseOutline  /> : <IoMenuOutline />}
                  
            </div>  

                      
        </header>


            <div className={isSearch ? null : styles.search_window}>
              
                  <div className={styles.searchTab_mobile}>
                          
                          <div className={styles.searchInput_mobile}>
                            <input className={styles.searchBar_mobile} type='text' placeholder='Search'/>
                            <IoSearch className={styles.mobile_searchBtn} />

                          </div>
                          <div>
                          <IoCloseOutline className={styles.mobile_closeBtn} />
                          </div>
                        

                  </div>
            </div>

                            
      
           
              

        
    </>
  )
}

export default Navbar