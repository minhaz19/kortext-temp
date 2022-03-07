import React from 'react'
import "./style.css";
import {AiFillStar} from "react-icons/ai"

const TestimonialCard = () => {
    return (
      <div className="testimonialCard-card-container">
        <div className="testimonialCard-img-container w-20 h-20 rounded-full overflow-hidden absolute">
          <img
            src="/assets/images/client-profile-image.webp"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <p className="mt-6 mb-1 text-3xl font-bold text-center">John Doe</p>
        <p className="text-gray-500 text-center mb-5">CEO, Inkyy</p>
        <p className="text-gray-500 text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus
          itaque ducimus odio rerum sapiente est fugiat temporibus iusto
          exercitationem aliquam!
        </p>
        <div className="flex justify-center mt-5">
          <AiFillStar className="star-icon" />
          <AiFillStar className="star-icon" />
          <AiFillStar className="star-icon" />
          <AiFillStar className="star-icon" />
          <AiFillStar className="star-icon" />
        </div>
      </div>
    );
}

export default TestimonialCard
