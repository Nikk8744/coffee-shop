import React from 'react';
import CardList from './CardList';
import coffees from "../coffee.json"

const Cards = () => {

    const limitedCoffee = coffees.slice(0,4) 
  return (
    <>
    <h1 className='bg-[#5b725b33] text-center text-3xl font-bold italic text-white py-6 tracking-wide'>Top Coffees</h1>
    <div className='flex justify-center'>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 p-4'>
          { limitedCoffee.map((coffee) => (
              // idhar number of coffee ke hisab se cards dalenge  
          <CardList key={coffee.id} coffee={coffee}/>
          )) 
          }
      </div>
    </div>
    
    </>
  )
}

export default Cards