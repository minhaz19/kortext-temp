import React from 'react'
const CardImage = ({item}) => {
    return (
        <div className="grid justify-items-center w-48">
            <div className="border-2 h-20 w-20 rounded-lg border-black grid md:justify-items-center place-items-center">
              <img src={item.icon} alt="React Logo" className="h-14 w-14 self-center"/>
            </div>
            <div className="grid justify-items-center mt-3">
              <strong className="">Step {item.step}</strong>
              <div className="grid">
                <p className="text-center text-xs px-4 mt-2">{item.details}</p>
              </div>
            </div>
        </div>
    )
}

export default CardImage;
