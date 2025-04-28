import React from "react";

const HeroBanner: React.FC = () => {
  return (
    <section className="relative w-full bg-[url('/images/banner.jpg')] bg-cover bg-center py-10 px-5 lg:px-8">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 bg-opacity-60 z-0"></div>

      {/* Content */}
      <div className="relative mx-auto flex flex-col items-center lg:flex-row gap-10 py-20 max-w-[1440px]">
        <div className="w-full lg:w-[660px] flex flex-col justify-center items-start gap-8">
          <div className="flex flex-col justify-start items-start gap-5  text-left">
            <h1 className="text-cyan-500 backdrop-brightness-90 drop-shadow-blue-950 shadow-2xl font-bold text-3xl sm:text-4xl md:text-5xl leading-tight">
              Personalized Gym Products for Your Fitness Goals.
            </h1>
            <p className="text-white text-lg sm:text-xl font-normal font-['Roboto']">
              Experience unparalleled comfort and innovative design with our
              state-of-the-art, futuristic sports shoes. Built for champions,
              designed for you.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-5">
            <div className="flex items-center gap-2.5">
              <p className="text-white text-sm font-normal font-['Roboto']">
                Step into the Future
              </p>
              <div className="relative">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.7806 12.5306L14.0306 19.2806C13.8899 19.4213 13.699 19.5004 13.5 19.5004C13.301 19.5004 13.1101 19.4213 12.9694 19.2806C12.8286 19.1399 12.7496 18.949 12.7496 18.75C12.7496 18.551 12.8286 18.3601 12.9694 18.2194L18.4397 12.75H3.75C3.55109 12.75 3.36032 12.671 3.21967 12.5303C3.07902 12.3897 3 12.1989 3 12C3 11.8011 3.07902 11.6103 3.21967 11.4697C3.36032 11.329 3.55109 11.25 3.75 11.25H18.4397L12.9694 5.78061C12.8286 5.63988 12.7496 5.44901 12.7496 5.24999C12.7496 5.05097 12.8286 4.8601 12.9694 4.71936C13.1101 4.57863 13.301 4.49957 13.5 4.49957C13.699 4.49957 13.8899 4.57863 14.0306 4.71936L20.7806 11.4694C20.8504 11.539 20.9057 11.6217 20.9434 11.7128C20.9812 11.8038 21.0006 11.9014 21.0006 12C21.0006 12.0986 20.9812 12.1961 20.9434 12.2872C20.9057 12.3782 20.8504 12.461 20.7806 12.5306Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>

            <button className="px-8 py-2.5 bg-[#3e9d26] rounded-[10px] flex items-center gap-2.5 text-white text-sm font-semibold font-['Roboto']">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
