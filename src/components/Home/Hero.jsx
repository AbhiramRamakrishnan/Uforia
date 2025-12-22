import React from 'react'
import { CalendarDays } from 'lucide-react';
import { MapPin } from 'lucide-react';
import CountDown from './CountDown';

const Hero = (prop) => {
    return (
        <>
            <section
                className="relative flex items-center min-h-screen h-auto text-white sm:w-full"
                style={{
                    backgroundImage: `url(${prop.HeroImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
                aria-label="Hero section with background image"
            >

                <div
                    className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-70"
                    aria-hidden="true"
                />

                <div
                    className="absolute inset-0 bg-gradient-to-br from-transparent via-black/25 to-black/90"
                    aria-hidden="true"
                />

                <div className="relative z-10 w-full text-center flex flex-col-reverse md:flex md:flex-row px-20 md:px-40 pt-10 md:pt-14">
                    <div className='md:w-[40%] sm:w-full text-center md:text-left pt-2 md:pt-5 md:mt-20'>
                        <div className='head'>
                            <h3 className='text-sm md:text-base text-white opacity-90 open-sans-medium'>FYNORA ENTERTAINMENTS</h3>
                            <h1 className='text-5xl md:text-6xl text-white opacity-100 montserrat-bold mt-3'>UFORIA</h1>
                            <h6 className='text-lg md:text-xl text-white opacity-70 poppins-regular mt-4'>One Stage Infinite Vibe</h6>
                        </div>
                        <div className='event mt-5 md:mt-10'>
                            <h6 className='text-sm text-white open-sans-medium underline underline-offset-8 decoration-1'>Upcoming Event</h6>
                            <div className='flex flex-col md:flex md:flex-row gap-3 md:gap-10 pt-6 sm:items-center'>
                                <div className='flex gap-2'>
                                    <CalendarDays size={16} className='mt-1' />
                                    <p className='text-sm md:text-base open-sans-regular opacity-90'>Dec 20, 2025</p>
                                </div>
                                <div className='flex gap-2'>
                                    <MapPin size={16} className='mt-1' />
                                    <p className='text-xs md:text-base open-sans-regular opacity-90'>LULU MALL , Trivandrum, Kerala.</p>
                                </div>
                            </div>
                            {/* <CountDown /> */}
                        </div>
                        <div className='cta mt-10 md:mt-15'>
                            <a href="/events">
                                <button className='text-sm md:text-base montserrat-semibold py-2 px-6 bg-[#E83DDC] rounded-xl'>Join the Experience</button>
                            </a>
                        </div>
                        <div className='foot mt-8 md:mt-9'>
                            <p className='text-[11px] md:text-xs open-sans-regular opacity-60'>Follow Socials for Updates</p>
                        </div>
                    </div>
                    <div className='md:w-[70%] sm:w-full flex items-center justify-center md:pt-5 md:pl-20'>
                        <div className='md:w-[40%] hidden md:block'>
                            <div className="
                                px-8 py-10
                                rounded-4xl
                                bg-white/10
                                backdrop-blur-xs
                                shadow-[0_8px_32px_rgba(0,0,0,0.25)]
                            ">
                                <p className='text-2xl montserrat-semibold opacity-90 underline mb-3'>LINE UP</p>
                                <p className='text-2xl montserrat-semibold opacity-90'>Announce Soon</p>
                                {/* <p className='text-2xl montserrat-semibold opacity-90'>AVIYAL</p>
                                <p className='text-2xl montserrat-semibold opacity-90'>AROGYA</p>
                                <p className='text-2xl montserrat-semibold opacity-90'>JHANU</p>
                                <p className='text-2xl montserrat-semibold opacity-90'>CRISHNA</p>
                                <p className='text-2xl montserrat-semibold opacity-90'>IHAM KAVYAM</p> */}
                            </div>

                        </div>
                        <div className='w-[100%] md:w-[85%]'>
                            <img 
                            src={prop.LogoImg} 
                            alt="UFORIA LOGO" 
                            className="max-h-[150vh] w-full object-contain mx-auto sm:mx-0"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero
