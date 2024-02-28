import styles from "./Search.module.css"
import { CiSearch } from "react-icons/ci"

export default function Search() {
  return (
 
       <div className={styles.search}>
                    <input className={styles.searchBar} type="text" placeholder='Search' />
                    <CiSearch className={styles.search_icon}/>
        </div> 

  )
}