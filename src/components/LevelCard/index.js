import React from 'react'
import ListItem from './SubListItem'

const LevelCard = props => {
    return (
        <div className={`${props.item.id === 2 ? 'bg-background_card_item text-white' : 'bg-white'} max-w-xs rounded overflow-hidden shadow-lg`}>
            <div className="px-6 py-4 grid md:justify-items-center place-items-center text-center">
                <div className="grid justify-center">
                    <h1 className="text-xl mb-2">Level {props.item.step}</h1>
                    <h1 className="text-5xl py-2"> ${props.item.price}</h1>
                    <h2 className="py-2">per month / per user</h2>
                    <p className="text-xs py-4">For administrators or others requiring full access to all functionality</p>
                    <ul className={`list-none md:list-disc text-xs  text-left ml-4 ${props.item.id === 2 ? 'text-white' :"text-textColor"}`}>
                        <ListItem>Test with a very really</ListItem>
                        <ListItem>Assumenda, quiai ok</ListItem>
                        <ListItem>Quidem, ipsam illum</ListItem>
                        <ListItem>Lorem ipsum dolor</ListItem>
                        <ListItem>Quidem, ipsam illum</ListItem>
                    </ul>
                </div>
                <button className="bg-button text-white text-xs
                px-2 py-2 mt-12 rounded hover:bg-blue-600 w-28" >START NOW</button>
            </div>
        </div>
    )
}

export default LevelCard
