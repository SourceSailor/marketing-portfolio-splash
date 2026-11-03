import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { CldImage } from "./Media.jsx";

export default function HeroSlideshow({ slides }) {
  return (
    <div className="hero-slideshow absolute inset-0">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        className="h-full w-full"
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={slide.id} className="h-full w-full">
            <CldImage
              id={slide.id}
              alt=""
              priority={i === 0}
              sizes="100vw"
              className="h-full w-full object-cover [object-position:var(--pos-sm)] md:[object-position:var(--pos)]"
              style={{
                "--pos": slide.position ?? "center",
                "--pos-sm": slide.mobile ?? slide.position ?? "center",
              }}
            />
          </SwiperSlide>
        ))}
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </Swiper>
    </div>
  );
}
