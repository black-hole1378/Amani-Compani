"use client";
import React, { Suspense } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../../style/sliderStyle.css";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import urls from "../../../url/global.json";
import useFetch from "../../../useFetch/useFetch";
import { Box } from "@mui/material";
import Loading from "@/app/loading";
import "../../../style/sliderStyle.css";
export default function Slider() {
  const { data, isLoading } = useFetch(urls.url.slider);
  let images;
  if (!isLoading) images = data.data.attributes.img.data;
  if (!isLoading)
    return (
      <Box className="swiper-container">
        <Swiper
          spaceBetween={30}
          centeredSlides
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className={"swiper"}
        >
          {images.length &&
            images.map((image) => (
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                key={image.id}
              >
                <Suspense fallback={<Loading />}>
                  <SwiperSlide className={"swiper_slide"}>
                    <img
                      className={"img"}
                      alt="not supported"
                      src={`${urls.url.slider_image}${image.attributes.url}`}
                    />
                  </SwiperSlide>
                </Suspense>
              </Box>
            ))}
        </Swiper>
      </Box>
    );
}
