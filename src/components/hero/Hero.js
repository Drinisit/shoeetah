import styles from './Hero.module.css'
import HeroShoes from '../../assets/vans_hero.png'
import { TypeAnimation } from 'react-type-animation'

function hero() {
  return (
    <div className={styles.hero}>
        <div className={styles.content}>
            <div className={styles.text}>

            <h1 className={styles.title}>Stride with Style</h1>
            <div className={styles.typing}>
              <h1 className={styles.title}>Find your Perfect</h1>
            
            <TypeAnimation
                sequence={[
                
                  'Pair',
                  1500,
                  'Shoes',
                  1500,
                ]}
                wrapper="span"
                speed={10}
                style={{ fontSize: '1.7rem',fontWeight: 'bold' ,display: 'inline-block', color: 'white', marginLeft: '0.5rem' }}
                repeat={Infinity}
              />
            </div>
          

                <button className={styles.btn}>Learn more</button>
            </div>
            <div className={styles.hero_image} >
                <img className={styles.image}  src={HeroShoes} alt='' />
            </div>

        </div>
    </div>
  )
}

export default hero