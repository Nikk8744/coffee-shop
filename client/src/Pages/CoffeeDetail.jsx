import React from 'react'
import { useParams } from 'react-router-dom'
import coffees from '../coffee.json'
import img from "../assets/img3.jpg"

const CoffeeDetail = () => {
  
  const { id } = useParams();
  
  const coffee = coffees.find((coffee) => parseInt(coffee.id) === parseInt(id))
  console.log(coffee)

  // const getImagePath = (imageName) => {
  //   return require(`../assets/${imageName}`)
  // }
  // const imagePath = getImagePath(coffee.image)
  // console.log(imagePath)


  return (
    <div className='flex flex-col justify-center items-center'>
      <h1>{coffee.title}</h1>

      <img src={coffee.image} alt={coffee.title} className='h-auto object-cover' />
      {/* <img src={imagePath} alt={coffee.title} className='h-auto object-cover' /> */}
      <h2>{coffee.image}</h2> 
      <img src={img} alt="imageeeeee" className='h-auto object-fit size-80' />
      <div className='flex flex-col items-center'>
        <h3>Category: {coffee.category}</h3>
        <h3>Price: {coffee.price}</h3>
        <p className='font:semibold'>About: {coffee.description}</p>
      </div>
    </div>
  )
}

export default CoffeeDetail