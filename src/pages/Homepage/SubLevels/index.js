import React from 'react'
import CardImage from '../../../components/CardImage';
import LevelCard from '../../../components/LevelCard';
import shuttle from '../../../assets/svgs/shuttle.svg';
import add_product from '../../../assets/svgs/add_product.svg';
import celebration from '../../../assets/svgs/celebration.svg';

const index = () => {
    const arr = 
    [{id:1, step: 1, details: "Chose a unique link for your shop", icon: shuttle, price: 0,}, 
    {id:2, step: 2, details: "Add your products, delivery & payment methods.", icon: add_product, price: 25}, 
    {id:3, step: 3, details: "Share your URL on your social media and start receiving orders.", icon: celebration, price: 40}];
    return (
        <div>
            <div className="container mx-auto max-w-lg bg-white mt-24 font-open-sans">
                <h1 className="text-4xl font-bold text-center open-sans">Start a business in minutes.
                    Not in months.</h1>
                <div className="flex flex-row mt-10">
                {arr.map(item => (
                    <CardImage key={item.id} item={item}/>
                ))}
                </div>
            </div>
            <div style={{background: 'url("/assets/svgs/Pattern-Randomized.svg")'}} className="mt-24 py-20 grid md:justify-items-center place-items-center p-4">
                <h1 className="text-4xl text-white text-center">We Offer Simple Pricing Plan</h1>
                <p className="text-white text-xs max-w-lg text-center py-8">Donec augue lorem, mollis quis dui sed, dictum vehicula turpis. Aliquam bibendum vel mi id tempor. Sed efficitur scelerisque mi. Nullam posuere nec ex in malesuada.</p>
                <div className="flex items-center px-4">
                <div className="flex flex-row flex-wrap gap-4 mx-auto justify-center place-items-center">
                    {arr.map(item => (
                        <LevelCard key={item.id} item={item}/>
                    ))}
                </div>
                </div>
            </div>
        </div>
    )
}

export default index
