import React from 'react'

const index = () => {
    const facebook = () => {
        console.log('facebook clicked');
      } 
      const twitter = () => {
        console.log('twitter clicked');
      }
      const linkedin = () => {
        console.log('linkedin clicked');
      }
    return (
        <div className="grid justify-center"> 
            <div className="px-10 pt-40 w-screen-2xl"> 
                <div className="grid justify-items-center max-w-screen-md
                        place-items-center">
                    <div className="h-36 w-36 bg-white rounded-full mb-5
                        shadow-lg transition-colors grid justify-items-center 
                        place-items-center">
                        <img className="h-20 w-20 rounded-3xl" src='/assets/svgs/createshop/shop.svg' alt=""/>
                    </div>
                    <h1 className="text-md font-bold text-gray-900 py-5 text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis,
                        voluptates soluta minus cumque non eveniet dolor</h1>
                    <div className="h-10
                    bottom-2 px-4 flex flex-row gap-4 justify-between items-center rounded-lg">
                        <div onClick={facebook}>
                          <img className="h-8 w-8" src="/assets/svgs/hiring/facebook.svg" alt=""/>
                        </div>
                        <div onClick={twitter}>
                          <img className="h-8 w-8" src="/assets/svgs/hiring/twitter.svg" alt=""/>
                        </div>
                        <div onClick={linkedin}>
                          <img className="h-8 w-8" src="/assets/svgs/hiring/linkedin.svg" alt=""/>
                        </div>
                    </div>
                    <p className="text-xs text-gray-900 py-5 text-center">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis,
                        voluptates soluta minus cumque non eveniet dolor aut a sint. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis,
                        voluptates soluta minus cumque non eveniet dolor aut a sint. 
                    </p>
                    <p className="text-xs text-gray-900 py-5 text-center">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis,
                        voluptates soluta minus cumque non eveniet dolor aut a sint. </p>
                    <button 
                        className="bg-button text-white text-xs
                        py-2 rounded hover:bg-blue-600 w-24" 
                    >Visit</button>
                </div>
                
            </div>

        </div>
    )
}

export default index
