import styles from './Gallery.module.css'
import GALLERY from './galleryList'


function Gallery() {
  return (
    <div className={styles.gallery}>
        <div className={styles.content}>
                <div className={styles.image_gallery}>

                    {
                        GALLERY.map((gallery)=> {
                            return(
                              
                                   <div className={styles.image_display}>
                                     <img className={styles.images} src={gallery.image}  alt="" />
                                    </div>  
                              
                            )
                        })
                    }
                   
                    
                   
                </div>
        </div>
    </div>
  )
}

export default Gallery