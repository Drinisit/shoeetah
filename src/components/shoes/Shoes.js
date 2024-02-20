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
        "--swiper-pagination-color": "#fff",
        "--swiper-pagination-bullet-inactive-color": "#f4f4f4",
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
                    <div className={styles.title}>
                      <p>{slide.name}</p>
                      <p>{slide.price}</p>
                    </div>
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