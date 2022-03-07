import React from 'react'
import ListItem from '../../../components/LevelCard/SubListItem';
import RolesCard from '../../../components/RolesCard';

const index = () => {
    const arr = 
        [{id:1, title: 'Programming', icon: '/assets/svgs/hiring/coding.svg'}, 
        {id:2, title: 'Designing', icon: '/assets/svgs/hiring/designing.svg'}, 
        {id:3, title: 'Engineering', icon: '/assets/svgs/hiring/engineering.svg'},
        {id:4, title: 'Customer Support', icon: '/assets/svgs/hiring/marketing.svg'},
        ];
    return (
        <div className="grid justify-center"> 
        <div className="p-10 max-w-screen-lg">
            <div className="">
                <h1 className="text-xl pt-6 pb-4">Who we are actually looking for</h1>
                <ul className={`list-none md:list-disc text-xs font-open-sans text-left ml-4`}>
                    <ListItem>Test with a very really</ListItem>
                    <ListItem>Assumenda, quiai ok</ListItem>
                    <ListItem>Quidem, ipsam illum</ListItem>
                    <ListItem>Lorem ipsum dolor</ListItem>
                    <ListItem>Quidem, ipsam illum</ListItem>
                </ul>
            </div>
            <div className="container mx-auto">
                <h1 className="text-xl pt-6 pb-4 ">Opened roles</h1>
                <p className="text-xs text-gray-900 pb-3 font-open-sans">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis,
                voluptates soluta minus cumque non eveniet dolor aut a sint. Officiis,
                voluptates soluta minus cumque non eveniet dolor aut a sint. 
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                    {arr.map(item => (
                    <RolesCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </div>
        </div>
    )
}

export default index
