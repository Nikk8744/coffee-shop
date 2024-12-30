import React from 'react'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css"
import img1 from "../assets/img1.jpg"
import img2 from "../assets/img2.jpg"
import img3 from "../assets/img3.jpg"
import img4 from "../assets/img4.jpg"
import img5 from "../assets/img5.png"
import img7 from "../assets/img7.jpg"

const Gallery = () => {
    const galleryWrapper = {
        padding: "20px"
    }
    const galleryContainer ={
        marginTop: "20px"
    }
    const images = [
        {
          original: `${img1}`,
          thumbnail: `${img1}`,
        },
        {
          original: `${img2}`,
          thumbnail: `${img2}`,
        },
        {
          original: `${img3}`,
          thumbnail: `${img3}`,
        },
        {
            original: `${img4}`,
            thumbnail: `${img4}`,
        },
        {
            original: `${img5}`,
            thumbnail: `${img5}`,
        },

      ];

  return (
    <div style={galleryWrapper} className='flex flex-col items-center justify-center'>
        <h1 className='text-4xl italic font-bold hover:scale-110'>Gallery</h1>
        <div style={galleryContainer}>
        <ImageGallery items={images} className="" />
        </div>
    </div>
  )
}

export default Gallery