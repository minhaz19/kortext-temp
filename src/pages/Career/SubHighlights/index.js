import React from 'react';
import ListItem from '../../../components/LevelCard/SubListItem';
import trophyIcon from '../../../assets/svgs/trophyIcon.svg';

const index = () => {
    return (
        <div className="grid justify-center"> 
        <div className="px-10 pt-10 max-w-screen-lg"> 
            <div className="font-open-sans">
                <p className="text-sm font-open-sans  text-gray-900">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis,
                voluptates soluta minus cumque non eveniet dolor aut a sint. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis,
                voluptates soluta minus cumque non eveniet dolor aut a sint. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis,
                voluptates soluta minus cumque non eveniet dolor aut a sint
                </p>
                <p className="text-sm font-open-sans text-gray-900 py-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis,
                voluptates soluta minus cumque non eveniet dolor aut a sint. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis,
                voluptates soluta minus cumque non eveniet dolor aut a sint. 
                </p>
                <h1 className="text-xl ">Highlights</h1>
                <ul className={`list-none md:list-disc text-sm  font-open-sans text-left ml-4`}>
                    <ListItem>Test with a very really</ListItem>
                    <ListItem>Assumenda, quiai ok</ListItem>
                    <ListItem>Quidem, ipsam illum</ListItem>
                    <ListItem>Lorem ipsum dolor</ListItem>
                    <ListItem>Quidem, ipsam illum</ListItem>
                </ul>
                <h1 className="text-xl pt-6 ">Why join Kortex?</h1>
                <ul className={`list-none md:list-disc text-xs  text-left ml-4`}>
                    <ListItem src={trophyIcon}>Test with a very really</ListItem>
                    <ListItem>Assumenda, quiai ok</ListItem>
                    <ListItem>Quidem, ipsam illum</ListItem>
                    <ListItem>Lorem ipsum dolor</ListItem>
                    <ListItem>Quidem, ipsam illum</ListItem>
                </ul>
            </div>
            
        </div>
        </div>
    )
}

export default index
