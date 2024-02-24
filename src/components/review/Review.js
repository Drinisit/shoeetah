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
                slidesPerView={3}
                >
                    
                <SwiperSlide className={styles.card}>
                    {
                        REVIEWS.map((reviewer) => {
                            return(
                                <div key={reviewer.id}>
                                    <div className={styles.image}>{reviewer.image}</div>
                                    <div className={styles.name}>{reviewer.name}</div>
                                    <div className={styles.text}>{reviewer.review}</div>
                                </div>
                               
                            )
                        })
                    }
                    
                </SwiperSlide>
               
            </Swiper>

        </div>
    </div>
  )
}

export default Review