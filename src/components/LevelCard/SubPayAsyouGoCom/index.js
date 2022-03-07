import React from 'react'
import ListItem from '../SubListItem'

const LevelCard = props => {
    return (
        <div className="bg-white max-w-xs rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4 grid md:justify-items-center place-items-center text-center">
                <div className="grid justify-center">
                    <div className="flex flex-row items-center justify-center">
                        <h1 className="text-md mb-2">{props.item.title}</h1>
                        <img src="/assets/svgs/circle_icon.svg" className=" mx-2 h-4" alt=""/>
                    </div>
                    <ul className={`list-none md:list-disc text-xs  text-left ml-4 text-black`}>
                        <ListItem>Test with a very really quiai ok</ListItem>
                        <ListItem>Assumenda, quiai ok</ListItem>
                        <ListItem>Quidem, ipsam illum</ListItem>
                        <ListItem>Lorem ipsum dolor</ListItem>
                        <ListItem>Quidem, ipsam illum</ListItem>
                        <ListItem>Test with a very really</ListItem>
                        <ListItem>Assumenda, quiai ok</ListItem>
                        <ListItem>Quidem, ipsam illum</ListItem>
                        <ListItem>Lorem ipsum dolor</ListItem>
                        <ListItem>Quidem, ipsam illum</ListItem>
                    </ul>
                    <div className="flex flex-row items-center justify-center pt-3">
                        <h2 className="py-2 text-2xl">${props.item.price}</h2>
                        <h2 className="pt-2 text-xs">/month</h2>
                    </div>
                </div>
                <button className="bg-blue-600 text-white text-xs
                px-2 py-2 mt-5 rounded hover:bg-blue-800 w-28" >Upgrade</button>
            </div>
        </div>
    )
}

export default LevelCard
