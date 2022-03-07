import React from 'react'
import ProfileImage from '../../../components/ProfileImage';

const index = () => {
    const arr = 
        [{id:1, name: 'Zunayed Mahfuz', details: "Co-Founder", icon: 'https://picsum.photos/200/200?random'}, 
        {id:2, name: 'Imran Hossain', details: "Frontend Developer", icon: 'https://picsum.photos/200/200?random'}, 
        {id:3, name: 'Adnan Hasan', details: "Ux Designer", icon: 'https://picsum.photos/200/200?random'},
        {id:4, name: 'Salman Khan', details: "Backend Developer", icon: 'https://picsum.photos/200/200?random'},
        ];
    return (
        <div className="grid justify-center"> 
            <div className="px-10 max-w-screen-lg">
                <h1 className="text-xl pt-6 ">Our team</h1>
                <p className="text-sm font-open-sans text-gray-900 py-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis,
                voluptates soluta minus cumque non eveniet dolor aut a sint. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis,
                voluptates soluta minus cumque non eveniet dolor aut a sint. 
                </p>
                <div className="container mx-auto text-center">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-center">
                        {arr.map(item => (
                            <ProfileImage key={item.id} item={item}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index;
