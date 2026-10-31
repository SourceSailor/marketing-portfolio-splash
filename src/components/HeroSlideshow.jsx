import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { CldImage } from "./Media.jsx";

/**
 * Ported from the main site's app/components/HeroSlideshow.jsx.
 * Same Swiper modules and settings. Changes: slides come from content.js,
 * each slide has a key, the debug console.logs are gone, and each image
 * uses a responsive srcset with an on-brand fallback if it fails to load.
 */
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
        {slides.map((id, i) => (
          <SwiperSlide key={id} className="h-full w-full">
            <CldImage id={id} alt="" priority={i === 0} sizes="100vw" className="h-full w-full object-cover" />
          </SwiperSlide>
        ))}
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </Swiper>
    </div>
  );
}
