import React from 'react'
import ListItem from '../../../../components/LevelCard/SubListItem';

const AddOns = () => {
    return (
        <div className="ml-10">
            <h1 className="text-3xl py-10">Add-ons</h1>
            <div className="bg-white max-w-3xl sm:w-auto w-72 rounded overflow-hidden shadow-lg">
                <div className="px-6 py-4 grid md:justify-items-center place-items-center text-center">
                    <div className="grid justify-center">
                        <div className="grid justify-center py-5">
                            <img src="/assets/svgs/circle_icon.svg" className=" mx-2 h-16" alt=""/>
                        </div>
                        <div className="flex flex-row items-center justify-center">
                            <h1 className="text-md mb-2">Buy a custom domain</h1>
                            
                        </div>
                        <ul className={`list-none md:list-disc text-xs  text-left ml-4 text-black`}>
                            <ListItem>Test with a very really quiai ok</ListItem>
                            <ListItem>Assumenda, quiai ok</ListItem>
                            <ListItem>Quidem, ipsam illum</ListItem>
                            <ListItem>Lorem ipsum dolor</ListItem>
                            <ListItem>Quidem, ipsam illum</ListItem>
                            <ListItem>Test with a very really</ListItem>
                        </ul>
                    </div>
                    <button className="bg-blue-600 text-white text-xs
                    px-5 py-2 mt-5 rounded-full hover:bg-blue-800" >Upgrade for $1,100/year</button>
                    <p className="text-xs text-gray-600 py-3">Requires a premium plan</p>
                </div>
            </div>
        </div>
    )
}

export default AddOns
