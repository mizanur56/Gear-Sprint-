import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import BannerSection from "../../shared/BannerSection";
import bgImage from "/images/image.jpg";

const ContactUs = () => {
  return (
    <div>
      <BannerSection title="Contact Us" image={bgImage} />
      <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  flex flex-col md:flex-row gap-10 py-5 my-5 border border-gray-400 shadow-md rounded-lg">
        {/* Left Side: Contact Info */}
        <div className="flex-1 space-y-6 p-6">
          <h2 className="text-2xl font-bold text-green-600">Get In Touch</h2>
          <p className="text-gray-600">
            Have something to say? We are here to help. Fill up the form or send
            email or call phone.
          </p>
          <div className="space-y-4 text-gray-700">
            <div className="flex items-center gap-2">
              <FaPhone className="text-xl" />
              <span>+8801800000000</span>
            </div>
            <div className="flex items-start gap-2">
              <MdEmail className="text-xl" />
              <div>
                <p>GerSprint@gmail.com</p>
                <p>support@GerSprint.com</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <FaLocationDot className="text-xl" />
              <div>
                <p>GerSprint Shop</p>
                <p>Chittagong,Bangladesh</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="flex-1">
          <form className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-sm font-semibold mb-1">Name</label>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-semibold mb-1">
                  Phone
                </label>
                <input
                  type="text"
                  placeholder="Phone"
                  className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">
                Subject
              </label>
              <input
                type="text"
                placeholder="Subject"
                className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Your Message"
                className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-md transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
