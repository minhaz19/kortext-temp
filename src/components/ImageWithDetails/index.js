import React from 'react'

const itemCard = ({item}) => {
    return (
        <div className="max-w-sm rounded overflow-hidden grid justify-items-center shadow-lg pt-8">
            <div className="h-16 w-16 bg-gray-300 rounded-full grid justify-items-center place-items-center">
                <img className="h-10 w-10 rounded-3xl" src={item.icon} alt=""/>
            </div>
            <div className="px-6 py-4">
                <div className="font-medium font-open-sans text-purple-500 text-md mb-2">
                {item.title}
                </div>
                <p className="text-xs font-open-sans text-gray-900 pt-5">
                {item.details}
                </p>
            </div>
            <div className="px-6 py-4">
                
            </div>
        </div>
    )
}

export default itemCard
