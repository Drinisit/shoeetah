import styles from './Model.module.css'
import MODEL from "./modelImage"

function Model() {
  return (
    <div className={styles.model}>
        <div className={styles.content}>

                {
                    MODEL.map((model) => {
                        return(
                            <div key={model.id} className={styles.card}>
                                <img className={styles.image} src={model.image} alt="" />
                                <p className={styles.title}>{model.text}</p>
                                <button className={styles.button}>Shop now</button>
                            </div>  
                        )
                    })
                }
            
              
        </div>
    </div>
  )
}

export default Model