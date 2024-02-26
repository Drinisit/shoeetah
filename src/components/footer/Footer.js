import styles from './Footer.module.css'

function Footer() {
  return (
    <div className={styles.footer}>
        <div className={styles.content}>
            <div className={styles.section}>
                <div className={styles.about}>
                <h1 className={styles.logo}>Shoeetah</h1>
                
                </div>
                <p>This website is for practice only. All image are credit to the owners.</p>
            </div>
            <div className={styles.section}>
                 <div className={styles.menu}>
                        <ul>
                            <li>Men</li>
                            <li>Women</li>
                            <li>Kids</li>
                            <li>Trends</li>
                            <li>New Arrival</li>
                        </ul>
                 </div>
            </div>
            <div className={styles.section}>
                 
            </div>
            
        </div>
    </div>
  )
}

export default Footer