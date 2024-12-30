import React from 'react';
import { Carousel } from 'antd';
import img1 from "../assets/img1.jpg"
import img2 from "../assets/img2.jpg"
import img3 from "../assets/img3.jpg"
// import img4 from "../assets/img4.jpg"
// import img5 from "../assets/img5.png"
// import img7 from "../assets/img7.jpg"

const Carousel1 = () => (
  <div className='w-full h-full'>
    <Carousel arrows infinite={false}>
      <div className='flex items-center justify-center w-full h-full text-white'>
        <img src={img1} alt="Slide 1" className='w-full h-full object-fill' />
      </div>
      <div className='flex items-center justify-center w-full h-full text-white'>
        <img src={img2} alt="Slide2"  className='w-full h-full object-contain'/>
      </div>
      <div className='flex items-center justify-center w-full h-full text-white'>
        <img src={img3} alt="Slide3"  className='w-full h-full object-cover' />
      </div>
    </Carousel>
  </div>
);
export default Carousel1;
