import styles from "./Review.module.css"
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
                    <div className={styles.image}></div>
                </SwiperSlide>
                <SwiperSlide className={styles.card}>
                    <div className={styles.image}></div>
                </SwiperSlide>
                <SwiperSlide className={styles.card}>
                    <div className={styles.image}></div>
                </SwiperSlide>
                <SwiperSlide className={styles.card}>
                    <div className={styles.image}></div>
                </SwiperSlide>
            </Swiper>

        </div>
    </div>
  )
}

export default Review