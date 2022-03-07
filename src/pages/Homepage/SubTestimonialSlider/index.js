import React from 'react'
import Slider from 'react-slick'
import TestimonialCard from '../../../components/TestimonialCard';

const SubTestimonialSlider = () => {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      dots:true,
      responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
    };
    return (
      <div className="px-5 sm:px-20 lg:px-44 font-open-sans">
          <p className="text-3xl md:text-6.5xl text-center mb-10 mt-3">Testimonials</p>
        <Slider {...settings} >
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </Slider>
      </div>
    );
}

export default SubTestimonialSlider
