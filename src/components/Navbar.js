import style from './Navbar.module.css'
import { CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";

function Navbar() {
  return (
    <>
            <header className={style.header}>
                <h1 className={style.h1}>Shoeeta</h1>
                 
                        <nav className={style.nav}>
                            <ul className={style.ul}>
                                <li>Men</li>
                                <li>Women</li>
                                <li>Kids</li>
                                <li>Trends</li>
                                <li>New Arrival</li>
                               
                            </ul>

                            <div className={style.access}>
                                <div className={style.search_input}>
                                  <input type='text' placeholder='Search...'></input>
                                  <CiSearch className={style.search_icon} />
                                </div>
                              
                                  <CiShoppingCart className={style.cart_icon} />
                            
                                  <CiUser className={style.user_icon} />
                            </div>
                            
                        </nav>

                      
                       
               
            </header>
           

        
    </>
  )
}

export default Navbar