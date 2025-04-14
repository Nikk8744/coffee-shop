import Carousel1 from "../components/Carousel1";
import Cards from "../components/Cards";
import FAQ from "../components/FAQ";
import Gmap from "../components/Gmap";

const Home = () => {
  return (
    <>
      {/* Welcome Section with Gradient Background */}
      <div className="bg-gradient-to-r from-[#6b8e23] to-[#46644633] text-center m-4 p-6 rounded-lg shadow-xl">
        <h1 className="text-4xl sm:text-5xl font-bold italic text-white tracking-wide mb-4 hover:shadow-lg hover:text-[#ffe600] transition-all duration-300">
          Welcome to our Coffee Shop
        </h1>
        <p className="text-white font-semibold text-lg sm:text-xl px-4 leading-relaxed">
          Sleepy Owl is a homegrown Indian coffee brand. We spend inordinately long making coffee that is as good as it can be in every single cup.
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
