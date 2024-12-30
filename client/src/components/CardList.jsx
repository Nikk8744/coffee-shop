import React from 'react'
import { Card, Badge, Button } from '@rewind-ui/core';
import { Link } from 'react-router-dom';
import img3 from "../assets/img3.jpg"

const CardList = ({coffee}) => {

  return (
    <Card className="max-w-[450px] relative m-3 border-4 border-black rounded-xl max-h-[394] flex flex-col shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-105">
            <Card.Image mode="dark" src={img3} className="h-[200px] object-cover rounded-2xl" />
            <Card.Body className="flex flex-col flex-grow p-4">
            <div className="flex flex-col space-y-2">
                <div className="flex justify-between items-center">
                <span className="text-xl text-gray-800 font-semibold">{coffee.title}</span>
                <Badge size="sm" color="green" tone="outline">{coffee.price}</Badge>
                </div>
                <span className="text-gray-600">{coffee.description}</span>
            </div>
            </Card.Body>
            <Card.Footer className='justify-center p-4'>
              <Link to={`/coffee/${coffee.id}`}>
              <Button className="w-40 p-3 rounded-full" color="black">Know More</Button>
              </Link>
            </Card.Footer>
    </Card>
  )
}

export default CardList