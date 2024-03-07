import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";
import { ServiceData } from "../constants/index.js";

const ActiveSlider = () => {
  return (
    <div className="flex items-center justify-center flex-col h-[700px]">
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="max-w-[90%] lg:max-w-[80%]"
      >
        {ServiceData.map((item:any) => (
          <SwiperSlide key={item.title}>
            <div className="mobile:hidden lg:flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 lg:h-[554px] lg:w-[310px] mobile:h-[800px] mobile:w-[400px] mobile:ml-auto mobile:mr-auto  overflow-hidden cursor-pointer">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.backgroundImage})` }}
              >
                
              </div>
              <div className="absolute inset-0 bg-black lg:opacity-50 group-hover:opacity-10 mobile:opacity-0" />
              
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ActiveSlider;
