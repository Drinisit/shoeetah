import styles from './Hero.module.css'
import HeroShoes from '../../assets/vans_hero.png'

function hero() {
  return (
    <div className={styles.hero}>
        <div className={styles.content}>
            <div className={styles.text}>
                <h1 className={styles.title}>Stride with Style</h1>
                <h1 className={styles.title}>Find your Perfect Pair</h1>
                <button className={styles.btn}>Learn more</button>
            </div>
            <div >
                <img className={styles.hero_image} src={HeroShoes} alt='' />
            </div>

        </div>
    </div>
  )
}

export default hero