import React from 'react'
import { BsQuestionSquare } from "react-icons/bs";

const index = () => {
    const arr = 
    [
        {id:1, 
            title: "How much does it cost?", 
            details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis, voluptates soluta minus cumque non eveniet dolor aut a sint illum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat temporibus suscipit molestiae pariatur ratione minus impedit et, officiis consectetur labore."}, 
    {id:2, title: "What fees are there?", details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis, voluptates soluta minus cumque non eveniet dolor aut a sint illum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat temporibus suscipit molestiae pariatur ratione minus impedit et, officiis consectetur labore."}, 
    {id:3, title: "Chose a unique link for ?", details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis, voluptates soluta minus cumque non eveniet dolor aut a sint illum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat temporibus suscipit molestiae pariatur ratione minus impedit et, officiis consectetur labore."},
    {id:4, title: "Chose a unp?", details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis, voluptates soluta minus cumque non eveniet dolor aut a sint illum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat temporibus suscipit molestiae pariatur ratione minus impedit et, officiis consectetur labore."}, 
    {id:5, title:"Chose a unique link for your shop", details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis, voluptates soluta minus cumque non eveniet dolor aut a sint illum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat temporibus suscipit molestiae pariatur ratione minus impedit et, officiis consectetur labore."}, 
    {id:6, title: "Chose a unique link for your shop", details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis, voluptates soluta minus cumque non eveniet dolor aut a sint illum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat temporibus suscipit molestiae pariatur ratione minus impedit et, officiis consectetur labore."}];
    return (
        <div className="grid gap-10 my-20 font-open-sans px-5 md:px-20 justify-items-center place-items-center">
            <p className="text-2xl md:text-4xl lg:mt-10 font-bold mb-5 text-center">
                Frequently Asked Questions
            </p>
            <p className="md:text-xs text-black text-center max-w-2xl">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis,
                voluptates soluta minus cumque non eveniet dolor aut a sint illum.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                temporibus suscipit molestiae pariatur ratione minus impedit et,
                officiis consectetur labore.
            </p>
            <div className="grid lg:grid-cols-2 gap-6 mt-10">
            {arr.map(item => (
                <div key={item.id} className="flex flex-row">
                    <div className="px-5">
                        <BsQuestionSquare className="star-icon h-10 w-10" />
                    </div>
                    <div className="">
                        <p className="text-md font-bold flex flex-auto">
                        {item.title}
                        </p>
                        <p className="md:text-xs text-gray-400 py-3">
                            {item.details}
                        </p>
                    </div>
                </div>
            ))}
            </div>
        </div>
    )
}

export default index
