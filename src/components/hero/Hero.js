import styles from './Hero.module.css'
import HeroShoes from '../../assets/vans_hero.png'
import { TypeAnimation } from 'react-type-animation'

function hero() {
  return (
    <div className={styles.hero}>
        <div className={styles.content}>
            <div className={styles.text}>

            <h1 className={styles.title}>Stride with Style</h1>
            <div>
            <TypeAnimation
                sequence={[
                
                  'Find your Perfect Pair',
                  1500,
                  'Find your Perfect Shoes',
                  1500,
                ]}
                wrapper="span"
                speed={10}
                style={{ fontSize: '1.7rem',fontWeight: 'bold' ,display: 'inline-block', color: 'white' }}
                repeat={Infinity}
              />
            </div>
          

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