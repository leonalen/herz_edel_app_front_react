import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";

import slide1 from "../../../../../../src/assets/img/varios/machos/irko.jpg";
import slide2 from "../../../../../../src/assets/img/varios/machos/irko.jpg";
import slide3 from "../../../../../../src/assets/img/varios/machos/irko.jpg";
import slide4 from "../../../../../../src/assets/img/varios/machos/irko.jpg";



export const CarouselHomePedro = () => {
    return (
        <div className="flex items-center justify-center bg-gray-200">
          <div className="w-[900px] h-[400px]"> {/* Quité overflow-hidden */}
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={20} 
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              speed={500}
              pagination={{ clickable: true }}
              navigation={true}
              className="!w-[900px] !h-[400px]"
            >
              {[slide1, slide2, slide3, slide4].map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="flex justify-center items-center h-full">
                    <img src={slide} alt={`Slide ${index + 1}`} className="w-full h-full object-cover"/>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      );
    };
    