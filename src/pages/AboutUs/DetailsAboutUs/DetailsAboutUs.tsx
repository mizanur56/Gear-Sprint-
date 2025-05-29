const DetailsAboutUs = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
      <h1 className="text-3xl text-black font-bold mb-3">
        Welcome to GearSprint Shop
      </h1>
      <p className="text-lg mb-8 text-gray-700">
        At <span className="text-gray-800 font-bold"> GearSprint</span> Shop, we
        are more than just a fitness brand—we are your partner in achieving a
        healthier, stronger you. Our mission is to provide you with the best
        home gym equipment and accessories to help you stay motivated and fit
        right from the comfort of your own home.
      </p>
      <h1 className=" text-3xl text-black font-bold mb-4">Our Story</h1>
      <p className=" text-lg mb-8 text-gray-700">
        Founded in 2020,{" "}
        <span className="text-gray-800 font-bold"> GearSprint</span> Shop was
        born out of a desire to make fitness accessible to everyone, regardless
        of their circumstances. As gyms became inaccessible, we recognized the
        need for high-quality, affordable home gym equipment that would inspire
        and support your fitness journey. What started as a simple idea to help
        ourselves and our community stay active has now grown into a brand
        dedicated to transforming spaces into Mighty Gyms.
      </p>
      <img src="/images/aboutUs.webp" alt="" />
    </div>
  );
};

export default DetailsAboutUs;
