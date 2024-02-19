import styles from './Shoes.module.css'

import SLIDES from './shoesList'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

function Shoes() {
  return (
    <div className={styles.shoes}>
      <div className={styles.content}>
      <Swiper style={{
        "--swiper-pagination-color": "#000",
        "--swiper-pagination-bullet-inactive-color": "#9d1212",
      }}


      modules={[Pagination]}
      spaceBetween={20}
      slidesPerView={3}
      pagination={{ clickable: true }}
      breakpoints={{
        1024: {
          slidesPerView: 5,
          spaceBetween: 10,
        },
      }}

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