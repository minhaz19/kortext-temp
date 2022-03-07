import React from 'react'

const SubMessage = () => {
    
    return (
        <div className="grid justify-items-center place-items-center">
            
            <div className=" text-center open-sans">
                <h1 className="text-xl md:text-4xl font-bold">Drop A Message</h1>
                <p className="md:text-xs text-gray-500 max-w-md my-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis,
                voluptates soluta minus cumque non eveniet dolor aut a sint
                </p>
                
            </div>
            <div className="mb-3 px-3 md:px-0 pt-0 w-full grid justify-items-center gap-4">
                <input 
                    type="text" 
                    name="name"
                    placeholder="Name"
                    className="form-control px-3 py-3 placeholder-blueGray-300 text-blueGray-600 max-w-md
                    relative bg-white rounded text-sm border-2 border-gray-400
                    outline-none focus:outline-none focus:ring w-full"
                />
                <input 
                    type="email" 
                    name="email"
                    placeholder="Email"
                    className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 max-w-md
                    relative bg-white rounded text-sm border-2 border-gray-400
                    outline-none focus:outline-none focus:ring w-full"
                />

                <textarea
                    name="description"
                    placeholder="Message"
                    className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 max-w-md h-40
                    relative bg-white rounded text-sm border-2 border-gray-400
                    outline-none focus:outline-none focus:ring w-full"
                />
                
                <button className="bg-button text-white text-xs
                px-2 py-2 mt-4 rounded hover:bg-blue-600 w-32" >SEND MESSAGE</button>
            </div>
        </div>
    )
}

export default SubMessage;
