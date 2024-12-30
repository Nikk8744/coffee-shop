import React from "react";

const Gmap = () => {
    const src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d930.2819712583871!2d72.75926626963552!3d21.147308349572782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04d8d96d2b733%3A0x1a5232e28e4094e4!2sEnactOn%20Technologies%20Private%20Limited!5e0!3m2!1sen!2sin!4v1735216966919!5m2!1sen!2sin"
  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-r from-gray-100 to-gray-500 min-h-20 py-8">
      <h1 className="text-3xl text-white font-bold italic mb-6">
        Your Location
      </h1>
      <div className="w-full max-w-[90%] sm:max-w-[600px] rounded-lg overflow-hidden shadow-lg border-4 border-white">
        <iframe
          title="Google Map"
          src={src}
          width="600"
          height="450"
          allowFullScreen=""
          loading="lazy"
          className="rounded-lg transition-shadow hover:scale-105"
        />
      </div>
    </div>
  );
};

export default Gmap;
