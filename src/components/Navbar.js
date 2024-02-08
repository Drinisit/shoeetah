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

                            
                        </nav>

                      
                       <div className={style.access}>
                          <div className={style.search}>
                            <input type='text'></input>
                            <CiSearch />
                          </div>
                          <CiShoppingCart />
                          <CiUser />
                       </div>
               
            </header>
           

        
    </>
  )
}

export default Navbar