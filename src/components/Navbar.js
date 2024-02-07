import style from './Navbar.module.css'

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

                            <button>Login</button>
                        </nav>

                    
               
            </header>
           

        
    </>
  )
}

export default Navbar