import React from 'react'

const index = ({item}) => {
    return (
        <div className="max-w-sm rounded py-4 px-3 overflow-hidden flex flex-row shadow-lg">
            <div className="h-12 w-12 bg-gray-300 rounded-full grid justify-items-center place-items-center">
                <img className="h-8 w-8 rounded-3xl" src={item.icon} alt=""/>
            </div>
            <div className="font-medium text-purple-500 text-md mx-4 grid place-items-center text-center">
                {item.title}
            </div>
        </div>
    )
}

export default index;
