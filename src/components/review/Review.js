import styles from "./Review.module.css"
import REVIEWS from "./ReviewList"

import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


function Review() {
  return (
    <div className={styles.review}>
        <div className={styles.content}>

            <Swiper
                modules={[Pagination, Navigation]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                breakpoints={{
                 
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                  },
                }}
                >
                  {
                        REVIEWS.map((reviewer) => {
                            return(    
                         <SwiperSlide key={reviewer.id} className={styles.card}>
                                    
                                    <img className={styles.image} src={reviewer.image} alt="" />
                                    <div className={styles.name}>{reviewer.name}</div>
                                    <div className={styles.text}>{reviewer.review}</div>
                              
                               
                    
                      </SwiperSlide>

)
})
}

               
            </Swiper>

        </div>
    </div>
  )
}

export default Review