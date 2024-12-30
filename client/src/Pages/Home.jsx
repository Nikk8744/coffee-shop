import React, { useState } from "react";
import Carousel1 from "../components/Carousel1";
import Cards from "../components/Cards";
import FAQ from "../components/FAQ";
import Gmap from "../components/Gmap";

const Home = () => {
  return (
    <>
      <div className="bg-[#46644633] text-center m-4">
        <h1 className="text-center text-3xl font-bold italic text-white pt-3 px-3 hover:shadow-2xl hover:shadow-black">
          Welcome to our Coffee Shop
        </h1>
        <p className="text-preety text-white font-semibold text-xl">
          Sleepy Owl is a homegrown Indian coffee brand. We spend inordinately
          long making coffee that is as good as it can be in every single cup.
        </p>
      </div>
      <Carousel1 />
      <Cards />
      <FAQ />
      <Gmap />

    </>
  );
};

export default Home;
