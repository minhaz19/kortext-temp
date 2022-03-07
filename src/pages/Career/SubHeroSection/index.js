import Particles from 'react-particles-js'
import React from "react";

const params={
    "particles": {
        "number": {
            "value": 30
        },
        "size": {
            "value": 3
        }
    }
}


const HeroSection = () => {
        return (
            <section className={'relative'}>
                <div className="w-full h-full bg-blue-700 overflow-hidden absolute -left-0 -top-0" style={{zIndex: '-10'}}>
                        <Particles className={'h-screen'} params={params} />
                </div>

                <h2 className={'text-white text-lg px-4 md:px-0 md:text-4xl text-center font-open-sans font-bold pt-40'}>Kortex is hiring.</h2>
                <p className="text-white font-open-sans text-sm text-center pt-3">Join our highly qualified team</p>
                <p className="text-gray-300 mx-4 md:mx-60 font-open-sans text-xs text-center py-7">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>


            </section>
        )
}

export default HeroSection
