import styles from "./Review.module.css"
import REVIEWS from "./ReviewList"
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';


function Review() {
  return (
    <div className={styles.review}>
        <div className={styles.content}>

            <Swiper
                spaceBetween={50}
                slidesPerView={1}
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