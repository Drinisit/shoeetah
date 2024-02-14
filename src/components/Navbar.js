import React, {useState} from 'react';
import styles from './Navbar.module.css'
import { CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";
import { IoMenu, IoClose } from "react-icons/io5";

function Navbar() {
  const [nav, setNav] = useState(false);

  const [search, setSearch] = useState(true);

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

                            <ul className={styles.sideBar}>
                                <li>Men</li>
                                <li>Women</li>
                                <li>Kids</li>
                                <li>Trends</li>
                                <li>New Arrival</li> 
                            </ul>
                      

                            <div className={styles.access}>

                                <div className={styles.searchBar}>
                                  <input type='text' placeholder='Search...'></input>
                                  <CiSearch className={styles.searchBar_iconSearch}/>
                                </div>
                                  

                                 <CiSearch onClick={() => setSearch(!search)} className={styles.search_icon}/>
                                 <CiShoppingCart className={styles.cart_icon} />
                                 <CiUser className={styles.user_icon} />

                                  

                            </div>

                            <div onClick={() => setNav(!nav)} className={styles.mobile_btn}>

                                {nav ? <IoClose className={styles.close_icon} size={20}/>: <IoMenu className={styles.menu_icon} size={20} />}

                            </div>
                            
                           
                            
                        </nav>   

                       
                         
               
            </header>

            <div className={search ? [styles.mobile_Tab] : null}>
                <div className={styles.searchBar_window}>
                        <div className={styles.mobile_searchTab}>
                            <div className={styles.mobile_search}> 
                              <input className={styles.mobile_searchBar} type="text" placeholder="Search..."/>
                              <CiSearch className={styles.mobile_searchIcon}/>
                            </div>

                          
                              <IoClose onClick={() => setSearch(!search)} className={styles.mobile_btnClose}/>                     
                        
                            
                        </div>          
                </div>
            </div>
            
            
    </>
  )
}

export default Navbar