"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const DEFAULT_IMAGES = Array.from({ length: 8 }, (_, i) => `/assets/quality-${i + 1}.jpg`);

export default function QualityCarousel({
  images = DEFAULT_IMAGES,
}: {
  images?: string[];
}) {
  return (
    <Swiper
      modules={[Autoplay]}
      slidesPerView={1}
      spaceBetween={12}
      loop
      autoplay={{ delay: 1800, disableOnInteraction: false }}
      speed={700}
      breakpoints={{
        640: { slidesPerView: 3, spaceBetween: 26 },
      }}
    >
      {images.map((src, i) => (
        <SwiperSlide key={i}>
          <div style={{ borderRadius: 16, overflow: "hidden", boxShadow: "0 8px 24px rgba(0,0,0,.12)", aspectRatio: "1 / 1" }}>
            <img src={src} alt="" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
