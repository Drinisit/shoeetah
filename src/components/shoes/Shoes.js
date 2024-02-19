import styles from './Shoes.module.css'

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import SHOESLIST from './shoesList';

function Shoes() {
  return (
    <div className={styles.shoes}>
      <div className={styles.content}>

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
            SHOESLIST.map((shoesList) => {
                return(
                    <SwiperSlide key={shoesList.id} >
                        <div className={styles.card}>
                            <img className={styles.image} src={shoesList.image} alt="" />
                           
                        </div>
                        <div className={styles.text}>
                         <p>{shoesList.name}</p>
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