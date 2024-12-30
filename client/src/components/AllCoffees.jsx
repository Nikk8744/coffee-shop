import React from 'react';
import CardList from '../components/CardList';
import coffees from "../coffee.json";
import { MdEmojiFoodBeverage } from "react-icons/md";


const AllCoffees = () => {
  // Limiting to only the first 4 items from the coffees array.
  // const limitedCoffees = coffees.slice(0, 4);
  const allCoffee = coffees.filter(item => item.category === "Coffee")
  const allDeserts = coffees.filter(item => item.category === "Dessert")

  return (
    <div className="min-h-screen flex flex-col items-center py-8">
      {/* Title Section */}
      <h1 className="text-4xl font-bold text-center text-gray-800 italic mb-8 tracking-wide">
        Our Coffee Shop Menu
      </h1>

      {/* Card Grid Container */}
      <section className='w-full sm:px-8 mb-12'>
        <div className='flex justify-center'>
          <h1 className='text-center text-3xl italic font-semibold text-gray-600 mb-6 tracking-wide'>All Coffee</h1>
          <MdEmojiFoodBeverage  className='text-4xl pt-2 text-gray-600 hover:scale-125'/>
        </div>
        <div className="flex justify-center w-full px-4 sm:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 max-w-7xl w-full">
            {allCoffee.map((coffee) => (
                <CardList key={coffee.id} coffee={coffee} />
            ))}
            </div>
        </div>
      </section>

      <section className='w-full sm:px-8 mb-12'>

        <h1 className='text-center text-3xl italic font-semibold text-gray-600 mb-6 tracking-wide'>All Desserts</h1>

        <div className="flex justify-center w-full px-4 sm:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 max-w-7xl w-full">
            {allDeserts.map((coffee) => (
                <CardList key={coffee.id} coffee={coffee} />
            ))}
            </div>
        </div>
      </section>
    </div>
  );
};

export default AllCoffees;
