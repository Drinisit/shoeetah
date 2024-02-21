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
                                <h1>{model.text}</h1>
                            </div>  
                        )
                    })
                }
            
              
        </div>
    </div>
  )
}

export default Model