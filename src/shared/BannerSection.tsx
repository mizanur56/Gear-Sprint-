type TInfo = {
  image: string;
  title: string;
};
const BannerSection = ({ image, title }: TInfo) => {
  return (
    <div
      className="w-full h-64 bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute h-[72%] inset-0 bg-black/50 bg-opacity-60 z-0"></div>
      <h1 className="text-4xl text-white font-bold z-10">{title}</h1>
    </div>
  );
};

export default BannerSection;
