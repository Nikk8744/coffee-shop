// import { useParams } from 'react-router-dom'
// import coffees from '../coffee.json'
// import img from "../assets/img3.jpg"

// const CoffeeDetail = () => {
  
//   const { id } = useParams();
  
//   const coffee = coffees.find((coffee) => parseInt(coffee.id) === parseInt(id))
//   console.log(coffee)

//   // const getImagePath = (imageName) => {
//   //   return require(`../assets/${imageName}`)
//   // }
//   // const imagePath = getImagePath(coffee.image)
//   // console.log(imagePath)


//   return (
//     <div className='flex flex-col justify-center items-center'>
//       <h1>{coffee.title}</h1>

//       <img src={coffee.image} alt={coffee.title} className='h-auto object-cover' />
//       {/* <img src={imagePath} alt={coffee.title} className='h-auto object-cover' /> */}
//       <h2>{coffee.image}</h2> 
//       <img src={img} alt="imageeeeee" className='h-auto object-fit size-80' />
//       <div className='flex flex-col items-center'>
//         <h3>Category: {coffee.category}</h3>
//         <h3>Price: {coffee.price}</h3>
//         <p className='font:semibold'>About: {coffee.description}</p>
//       </div>
//     </div>
//   )
// }

// export default CoffeeDetail

import { useParams } from 'react-router-dom';
import coffees from '../coffee.json';
import img from "../assets/img3.jpg";

const CoffeeDetail = () => {
  const { id } = useParams();
  const coffee = coffees.find((coffee) => parseInt(coffee.id) === parseInt(id));

  if (!coffee) {
    return (
      <div className="flex flex-col items-center justify-center py-16">
        <h2 className="text-2xl text-center text-gray-700">Sorry, we couldnt find that coffee.</h2>
      </div>
    );
  }

  return (
    <div className="max-w-screen-lg mx-auto p-10 bg-gradient-to-r from-[#6b8e23] to-[#466446] rounded-lg shadow-lg mt-10">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
        <div className="w-full lg:w-1/2">
          <img
            src={ img}
            alt={coffee.title}
            className="w-full h-auto rounded-lg object-cover shadow-lg"
          />
        </div>

        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
          <h1 className="text-3xl text-white font-semibold mb-3 text-center lg:text-left">{coffee.title}</h1>

          <h3 className="text-xl text-white font-semibold mb-2">Category: {coffee.category}</h3>
          <h3 className="text-xl text-white font-semibold mb-4">Price: {coffee.price}</h3>

          <p className="text-lg text-white font-light text-center lg:text-left mb-6">{coffee.description}</p>

          <div className="flex flex-col items-center lg:items-start space-y-2">
            <button className="bg-[#FFE600] text-[#466446] px-6 py-2 rounded-lg font-semibold shadow-md hover:bg-[#FFDC00] transition-all">
              Add to Cart
            </button>
            <button className="bg-transparent border-2 border-white text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#5b725b] hover:border-[#5b725b] transition-all">
              View More Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetail;
