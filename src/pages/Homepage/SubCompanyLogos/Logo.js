import React from 'react'

const Logo = ({image}) => {
    return (
      <div className="lg:h-12">
        <img
          src={image}
          alt=""
          className="w-full h-full"
        />
      </div>
    );
}

export default Logo
