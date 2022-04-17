import React, { useEffect } from 'react'
import './review.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import pic1 from '../../assets/images/pic-1.png'
import pic2 from '../../assets/images/pic-2.png'
import pic3 from '../../assets/images/pic-3.png'
import pic4 from '../../assets/images/pic-4.png'
import "swiper/css";
import "swiper/css/pagination";
import { useDispatch, useSelector } from 'react-redux';
import { getreviews } from "../../store/reducers/reviewdata";
const Review = () => {
    const {issLodings, reviews} = useSelector((state) => state.reviews)
  const dispatch = useDispatch();

useEffect(() => {
  dispatch(getreviews())
},[dispatch])

  
  return (
    <section className="reviews" id="Reviews">

    <h1 className="heading"> client's <span>review</span> </h1>

    <div className="swiper review-slider">

        
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
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="mySwiper">

            {reviews ? reviews.map(el => 
            <SwiperSlide key={el.id} >
            <div className=" box">
                <img src={el.img} alt="" />
                <div className="content">
                    <p>{el.review} </p>
                    <h3>{el.client} </h3>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                    </div>
                </div>
            </div>
    </SwiperSlide>
             ) : null}

     
    
           
</Swiper>
         : <h2 className="m-auto">loading..</h2>}
   


    </div>

</section>
  )
}

export default Review