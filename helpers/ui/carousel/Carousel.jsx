"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { OptimizeImage } from "@/helpers/ui";

const Carousel = ({ data = [] }) => {
  return (
    <div>
      <Swiper
        spaceBetween={24}
        slidesPerView={1.5}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        breakpoints={{
          640: {
            slidesPerView: 1.5,
            spaceBetween: 24,
          },
          768: {
            slidesPerView: 2.5,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 4.5,
            spaceBetween: 24,
          },
        }}
      >
        {data?.map((item) => (
          <SwiperSlide key={item?.id}>
            <div>
              <div className=" drop-shadow-hero-shadow mb-4">
                <OptimizeImage
                  imgURL={item?.imgPath}
                  altLabel="Hero"
                  borderRadius="12px"
                  className="!h-[350px]"
                />
              </div>
              <div className="px-2">
                <p className="text-white text-base font-medium tracking-tighter mb-3">
                  Army Green Active Short Sleeve
                </p>
                <p className="text-white/80 font-medium text-xl leading-120% inline-flex gap-3 items-center ">
                  $ 34.95
                  <span className="line-through">$ 34.95</span>
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
