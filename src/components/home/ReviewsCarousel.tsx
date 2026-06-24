"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ReviewsCarousel({ images }: { images: string[] }) {
  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination]}
      slidesPerView={2}
      spaceBetween={11}
      loop
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
      speed={500}
      breakpoints={{
        640: { slidesPerView: 4, spaceBetween: 11 },
      }}
    >
      {images.map((src, i) => (
        <SwiperSlide key={i}>
          <div style={{ borderRadius: 12, overflow: "hidden", boxShadow: "0 8px 24px rgba(0,0,0,.12)", aspectRatio: "3 / 4" }}>
            <img src={src} alt="" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
