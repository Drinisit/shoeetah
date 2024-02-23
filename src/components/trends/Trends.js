import styles from "./Trends.module.css"
import SLIDES from "../shoes/shoesList"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

function Trends() {
  return (
    <div className={styles.trends}>
       <h1 className={styles.heading}>Trends</h1> 
      <div className={styles.content}>
      
      <Swiper style={{
        "--swiper-pagination-color": "#000",
        "--swiper-pagination-bullet-inactive-color": "#8b8b8b",
      }}


      modules={[Pagination]}
      spaceBetween={20}
      slidesPerView={3}
      pagination={{ clickable: true }}
      breakpoints={{
        768: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 10,
        },
      }}

     >

    {
        SLIDES.map((slide, index) => {
            if(index < 6){
                return(
                    <SwiperSlide key={slide.id} className={styles.slide}>
                 
                        <img className={styles.image} src={slide.image} alt="" />
                          <div className={styles.title}>
                            <p className={styles.name}>{slide.name}</p>
                            <p>{slide.price}</p>
                          </div>
                       
                    </SwiperSlide>
                )
            }else{
                return(
                    <div style={{display: "none"}}></div>
                )
                
            }
            }
            )
    }
      
      
    </Swiper>

      </div>
    </div>
  )
}

export default Trends
