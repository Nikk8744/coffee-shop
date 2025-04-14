
import aboutImage from '../assets/img6.jpg'; // Make sure to replace with your own image

const About = () => {
  return (
    <div className="bg-gradient-to-b from-[#D4B98B] to-[#5B7F56] min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-8 text-center text-white">
        {/* Heading Section */}
        <h1 className="text-4xl font-bold mb-6 tracking-wide">About Us</h1>

        {/* Image Section */}
        <div className="mb-8">
          <img
            src={aboutImage}
            alt="Coffee Shop"
            className="w-full h-64 sm:h-96 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-200">
            Welcome to Sleepy Owl Coffee
          </h2>
          <p className="text-lg font-light">
            Sleepy Owl is a homegrown Indian coffee brand that takes pride in
            bringing the best coffee experience to your cup. We spend countless
            hours crafting the finest beans and offering unique blends for coffee
            lovers.
          </p>
          <p className="text-lg font-light">
            Our goal is to create a space where everyone can enjoy high-quality
            coffee, indulge in delightful conversations, and relax. Whether youre
            a coffee aficionado or someone who just wants to unwind, we promise
            an experience like no other.
          </p>

          {/* Call to Action */}
          <div className="mt-8">
            <p className="text-lg font-semibold">
              Join us and taste the difference at Sleepy Owl Coffee.
            </p>
            <button className="mt-4 px-6 py-3 bg-[#FFE600] text-[#466446] rounded-lg font-semibold shadow-md hover:bg-[#FFDC00] transition-all">
              Visit Our Store
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
