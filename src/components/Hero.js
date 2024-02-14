import style from './Hero.module.css'
import HeroVans from '../assets/vans_hero.png'

function Hero() {
  return (
    <>

    <div className={style.main}>

        <div className={style.hero}>

            <div class={style.hero_text}>
                <h1>Shoeetah ka</h1>
                <p>99% Discount pag single</p>
                <button>Buy me</button>
            </div>

            <div className={style.hero_image}>
                <img className={style.vans} src={HeroVans} alt="" />
            </div>

        </div>

    </div>

    </>
  )
}

export default Hero