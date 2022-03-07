import React from 'react'
import ImageWithDetails from '../../../components/ImageWithDetails';

const index = () => {
    const arr = 
        [{id:1, title: 'Annual Tour', details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis, voluptates soluta minus cumque non eveniet dolor aut a sint. Officiis, voluptates soluta minus cumque non eveniet dolor aut a sint. ", icon: '/assets/svgs/hiring/annual_tour.svg'}, 
        {id:2, title: 'Flexible Times', details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis, voluptates soluta minus cumque non eveniet dolor aut a sint. Officiis, voluptates soluta minus cumque non eveniet dolor aut a sint. ", icon: '/assets/svgs/hiring/time_icon.svg'}, 
        {id:3, title: 'Provident Fund', details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis, voluptates soluta minus cumque non eveniet dolor aut a sint. Officiis, voluptates soluta minus cumque non eveniet dolor aut a sint. ", icon: '/assets/svgs/hiring/provident_fund.svg'},
        {id:4, title: 'Meals', details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis, voluptates soluta minus cumque non eveniet dolor aut a sint. Officiis, voluptates soluta minus cumque non eveniet dolor aut a sint. ", icon: '/assets/svgs/hiring/meal_icon.svg'},
        ];
    return (
        <div className="grid justify-center"> 
            <div className="px-10 max-w-screen-lg">
                <div className="container mx-auto">
                    <h1 className="text-xl py-6 ">Benefits we offer</h1>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                        {arr.map(item => (
                        <ImageWithDetails key={item.id} item={item} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index
