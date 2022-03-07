import Particles from 'react-particles-js'
import React from "react";
import { useHistory } from 'react-router-dom'

const params={
    "particles": {
        "number": {
            "value": 50
        },
        "size": {
            "value": 3
        }
    }
}


const HeroSection = () => {
    const history = useHistory();
        return (
            <section className={'relative'}>
                <div className="absolute w-full h-700px md:h-500px overflow-hidden" style={{zIndex: '-10'}}>
                    <div className={'overflow-hidden bg-blue-700 absolute left-1/2 md:-bottom-0 bottom-1/3 transform -translate-x-1/2 h-900px md:h-3000px w-900px md:w-3000px'} style={{borderRadius: '50%'}}>
                        <Particles className={'h-900px md:h-3000px w-900px md:w-3000px'} params={params} />
                    </div>
                </div>

                <h2 className={'text-white text-lg px-4 md:px-0 md:text-4xl text-center font-open-sans font-bold pt-40'}>Create a simple, beautiful store in minutes.</h2>
                <p className="text-white font-open-sans text-sm text-center pt-3">No code. No app required.</p>
                <div className="text-center">
                    <button onClick={() => history.push('/create')} className="bg-secondary px-5 py-2 text-white rounded-md mt-5 md:mt-10 mb-10">
                        Start my website. It's free
                    </button>
                </div>
                <div className="flex justify-center">
                    <img src="/assets/images/Laptop-mockup.png" className={'h-auto md:h-500px'} alt="mock"/>
                </div>



            </section>
        )
}

export default HeroSection
