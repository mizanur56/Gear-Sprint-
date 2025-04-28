import { features } from "../../../data/data";

const CompanyFeatures = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-1">
      <h1 className="text-3xl font-bold py-5 lg:py-10">
        Why Choose Our Products?
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {features?.map((feature, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-8 text-center"
          >
            <feature.icon className="text-4xl text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyFeatures;
