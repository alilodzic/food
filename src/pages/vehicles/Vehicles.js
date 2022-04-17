import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { useDispatch, useSelector } from 'react-redux';
import { getcars } from "../../store/reducers/carsdata";
import './vehicles.css'
import "swiper/css";
import "swiper/css/pagination";
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Vehicles = () => {
  const {issLodings, cars} = useSelector((state) => state.cars)
  const dispatch = useDispatch();


useEffect(() => {
  dispatch(getcars())
},[dispatch])


  return (
    <>
     
<section className="vehicles" id="vehicles">

    <h1 className="heading"> popular <span>vehicles</span> </h1>
      <div className="swiper vehicles-slider">

        <div className="swiper-wrapper">

          
          
            {!issLodings ?  
            <Swiper  
           spaceBetween={20}
          centeredSlides={true}
        modules={[Pagination]}
         pagination={{
          clickable: true,
                }}
                 observer={false}

        grabCursor={true}
              loop
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
  
              {cars.length > 0 ? cars.map(el => 
                <SwiperSlide key={el.id}>
                  <div className="swiper-slide box">
                    <Image src={el.img} alt="" />
                    <div className="content">
                      <h3>{el.brand} {el.model}</h3>
                      <div className="price"> <span>price : </span> $62,000/- </div>
                      <p>
                        
                        <span className="fas fa-circle"></span> {el.year}
                        <span className="fas fa-circle"></span> {el.gearbox}
                        <span className="fas fa-circle"></span> {el.enargy}
                        <span className="fas fa-circle"></span> {el.age}mph
                      </p>
                      <Link to={'/test'}  className="btn">check out</Link>
                    </div>
                  </div>
                </SwiperSlide>
              ): null}
      
                  
 
      
  
    </Swiper> : <h2 className="m-auto">loading..</h2> 
            } 
             </div>


        </div>
        </section>

    </>
  )
}

export default Vehicles