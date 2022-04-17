import React, { useEffect } from 'react'
import './features.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import " /css/pagination";
import { useSelector } from 'react-redux';

const Features = () => {
   const {issLodings, cars} = useSelector((state) => state.cars)
  
  return (
   <section className="featured" id="features">

    <h1 className="heading"> <span>featured</span> cars </h1>

    <div className="swiper featured-slider">

       <div className="swiper-wrapper">

          
          {!issLodings ? 
          <Swiper  
           spaceBetween={20}
          centeredSlides={true}
        modules={[Pagination]}
         pagination={{
          clickable: true,
        }}
        grabCursor={true}
              loop={true}
               breakpoints={{
          640: {
            slidesPerView: 1,
          },
          968: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="mySwiper">          
              {cars.length > 0 ? cars.map(el =>  
         <SwiperSlide key={el.id}>

            <div className=" box">
                <img src={el.img} alt="" />
                <div className="content">
                    <h3>{el.brand} {el.model}</h3>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                    </div>
                    <div className="price">$55,000/-</div>
                    <button href="#" className="btn">check out</button>
                </div>
            </div>
        </SwiperSlide>
        ) : null}
          
</Swiper> : <h2 className="m-auto">loading..</h2> 
           }

       </div>


    </div>

   
 
      
 
     

</section>
  )
}

export default Features