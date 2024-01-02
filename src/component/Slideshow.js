import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom'
import '../css/slideshow.css';
import slidebarimagedata from '../Data/slidebarimagedata';
import { GrNext } from "react-icons/gr";
import { MdArrowBackIos } from "react-icons/md";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


function Slideshow() {
  const [value, setValue] = useState('slidebarimagedata');
  return (

    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper">

        {slidebarimagedata.map((data, index) => (
          <SwiperSlide key={index}>
            <div className="slideImage">
              <div className="slideImage-image">
                <img src={data.img} alt={`slide-${index}`} />
              </div>
              <div className="slidebar-offer ">
                {/* <div className="slidebar-image-offer-image"> */}
                {/* <img src={data.image} className="slidebar-image-offer-image"/>   */}
                {/* </div>             */}
                <h3 className="slideImage-title">{data.title}</h3>
                <h3 className="slideImage-shopname">{data.shopname}</h3>
                
                <h3 className="slideImage-subtitle">{data.subtitle}</h3>
                <div className="slideshow-button">
                  <Link to={`/shops/${data.id}`}>
                    <button type="button">View Shop</button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}


      </Swiper>
    </>
  )
}

export default Slideshow;