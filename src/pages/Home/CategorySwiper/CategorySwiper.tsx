import { Swiper, SwiperSlide } from "swiper/react";
import "./style.css";
import { Pagination, Autoplay } from "swiper/modules";
import { categories } from "../../../data/data";
import { useState } from "react";

export const CategorySwiper = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-1">
      <h1 className="text-3xl font-bold py-5 lg:py-10">All Categories</h1>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        breakpoints={{
          0: { slidesPerView: 1 },
          480: { slidesPerView: 1 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {categories.map((category, index) => (
          <SwiperSlide key={index}>
            <div
              style={{
                textAlign: "center",
                position: "relative",
                cursor: "pointer",
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={category.image}
                alt={category.name}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor:
                    hoveredIndex === index
                      ? "rgba(0, 0, 0, 0.7)"
                      : "rgba(0, 0, 0, 0.5)",
                  borderRadius: "8px",
                  zIndex: 1,
                  transition: "background-color 0.3s ease",
                }}
              ></div>
              <h3
                style={{
                  position: "absolute",
                  bottom: "20px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  fontSize: "20px",
                  color: "white",
                  fontWeight: "bold",
                  zIndex: 2,
                  whiteSpace: "nowrap",
                }}
              >
                {category.name}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
