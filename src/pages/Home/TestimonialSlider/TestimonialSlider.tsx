import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules"; // adjust path based on your project
import { testimonials } from "../../../data/data";

export const TestimonialSlider = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-10">What Our Customers Say</h2>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          480: { slidesPerView: 1 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        loop={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white shadow-md flex flex-col items-start justify-between rounded-lg p-8">
              <p className="text-gray-700 text-left text-lg pb-4">
                "{testimonial.feedback}"
              </p>
              <h3 className="text-xl font-semibold">{testimonial.name}</h3>

              <p className="text-sm text-gray-500">
                {testimonial.position} - {testimonial.location}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
