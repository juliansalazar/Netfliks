import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './Carousel.css'

export default function CarouselComponent() {
  return (
    <Carousel className='customeStyles'>
        <div>
            <img src="https://i.imgur.com/WaDjt91.webp?maxwidth=520&shape=thumb&fidelity=high" />
        </div>
        <div>
            <img src="https://i.imgur.com/QMYiV7O_d.webp?maxwidth=520&shape=thumb&fidelity=high" />
        </div>
        <div>
            <img src="https://i.imgur.com/KUPtgP4_d.webp?maxwidth=520&shape=thumb&fidelity=high" />
        </div>
    </Carousel> 
  )
}
