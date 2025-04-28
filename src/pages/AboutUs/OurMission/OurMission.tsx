import BannerSection from "../../../shared/BannerSection";
import bgImage from "../../../../public/images/image.jpg";

const OurMission = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <h1 className="text-3xl text-black font-bold mb-3 text-center">
          Mission And Values
        </h1>
        <p className="text-lg mb-8 text-center text-gray-700">
          Our mission is to provide exceptional healthcare services with a focus
          on availability, reliability, and support.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-5 mb-4">
          <div className="flex flex-col gap-2 items-center text-center shadow-2xl rounded-lg p-5">
            <div className="text-4xl font-bold text-black">31+</div>
            <div className="text-gray-500 text-sm mb-2">Specialists</div>
          </div>

          <div className="flex flex-col gap-2 items-center text-center shadow-2xl rounded-lg p-5">
            <div className="text-4xl font-bold text-blue-500">15+</div>
            <div className="text-gray-500 text-sm mb-2">
              Years of Experience
            </div>
          </div>
        </div>
        <img src="../../../../public/images/mission.webp" alt="" />
        <h1 className="text-3xl text-black font-bold my-5 text-center">
          Our Vision
        </h1>
        <p className="text-lg mb-8 text-center max-w-5xl mx-auto text-gray-700">
          Founded in 2020,{" "}
          <span className="text-gray-800 font-bold"> GearSprint</span> shop was
          born out of a desire to make fitness accessible to everyone,
          regardless of their circumstances. As gyms became inaccessible, we
          recognized the need for high-quality, affordable home gym equipment
          that would inspire and support your fitness journey. What started as a
          simple idea to help ourselves and our community stay active has now
          grown into a brand dedicated to transforming spaces into Mighty Gyms
        </p>
      </div>
      <BannerSection title="Let’s stay connected!" image={bgImage} />
    </div>
  );
};

export default OurMission;
