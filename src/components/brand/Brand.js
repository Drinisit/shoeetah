import styles from './Brand.module.css'
import LIST from './brandList'

function Brand() {
  return (
    <div className={styles.brand}>
            <div className={styles.content}>
               <div className={styles.shoe_Image} >
                {
                  LIST.map((brand) => {
                      return(
                        <img key={brand.id} className={styles.shoe} src={brand.image} alt="" />
                      )
                  })
                }
               
               </div>
            </div>
    </div>
  )
}

export default Brand