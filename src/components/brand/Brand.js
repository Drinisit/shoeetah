import styles from './Brand.module.css'
import LIST from './brandList'

function Brand() {
  return (
    <div className={styles.brand}>
            <div className={styles.content}>
               <div className={styles.shoeImg} >
                {
                  LIST.map((brand) => {
                      return(
                        <img className={styles.shoe} src={brand.image} alt="" />
                      )
                  })
                }
               
               </div>
            </div>
    </div>
  )
}

export default Brand