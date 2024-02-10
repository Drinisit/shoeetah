import style from './Hero.module.css'
import HeroVans from '../assets/vans_hero.png'

function Hero() {
  return (
    <>
  
    <div className={style.hero}>
        <div class={style.hero_text}>
            <h1>I am John Doe</h1>
            <p>And I'm a Photographer</p>
            <button>Hire me</button>
        </div>
        <div className={style.hero_image}>
            <img src={HeroVans} alt="" />
        </div>
    </div>
   
    
    </>
  )
}

export default Hero