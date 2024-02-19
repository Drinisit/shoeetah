import styles from './Shoes.module.css'
import SLIDES from './shoesList'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function Shoes() {
  return (
    <div className={styles.shoes}>
      <div className={styles.content}>
      <Swiper
      spaceBetween={20}
      slidesPerView={3}
     >

    {
        SLIDES.map((slide) => {
            return(
                <SwiperSlide key={slide.id} className={styles.slide}>
                    <img className={styles.image} src={slide.image} alt="" />
                </SwiperSlide>
            )
        })
    }
      
      
    </Swiper>

      </div>
    
    </div>
  )
}

export default Shoes