import React from 'react'
import { HeroImage } from '../../assets'
import Button from '../ui/Button'

const Hero = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-10 lg:flex-row flex-col items-center gap-3">
                <div className="lg:flex-grow lg:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h2 className="title-font  sm:text-6xl text-3xl mb-4 font-semibold text-gray-100">
                        <span className='text-shadow'>Dive</span>   into the Depth <br />of  <span className='text-shadow'>virtual reality</span>
                    </h2>
                    <p className="mb-8 leading-relaxed text-white sm:max-w-[80%]">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime nesciunt, accusamus reiciendis expedita quaerat atque eveniet praesentium nihil consequuntur doloribus mollitia officiis, quibusdam incidunt a earum odio tenetur magni nostrum.
                    </p>
                    <div className="flex justify-center items-center gap-10">
                        <Button variant='filled' className={'px-8 rounded-2xl'}>Build your own Work</Button>

                        <svg width="46" height="38" viewBox="0 0 46 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M43.8334 19L2.16675 19M43.8334 19L27.1667 35.6667M43.8334 19L27.1667 2.33333" stroke="#C0B7E8" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>
                <div className="lg:max-w-lg xl:w-full lg:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center w-full rounded"
                        alt="hero"
                        src={HeroImage}
                    />
                </div>
            </div>
        </section>

    )
}

export default Hero
