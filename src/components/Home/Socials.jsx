import React from 'react'
import UforiaSocials from './HomeUforiaSocials'
import FynoraSocials from './HomeFynoraSocials'
import { Globe } from 'lucide-react'

const Socials = () => {
    return (
        <>
            <div className='bg-white p-15'>
                <div className='flex flex-col md:flex md:flex-row pr-0 md:pr-10 pt-10 bg-gradient-to-b from-[#ecebf5d0] via-[#F6EEF4] to-[#f4e6ead0] rounded-2xl items-center'>
                    <div className='text-left w-full md:w-1/2'>
                        <h3 className='text-xl md:text-4xl open-sans-medium ml-5 md:ml-10'>Follow Uforia for updates</h3>
                        <p className='text-xs md:text-xl text-black opacity-60 poppins-regular ml-5 md:ml-10'>Teasers, live clips & ticket alerts.</p>
                        <div className='hidden md:block py-5 rounded-tr-4xl mt-7 w-auto ml-0 pl-10'
                            style={{
                                backgroundImage:
                                    "linear-gradient(180deg, rgba(236,235,245,0.82) 0%, rgba(246,238,244,1) 50%, rgba(244,230,234,0.82) 100%)",
                                boxShadow: "inset 0 6px 20px rgba(0,0,0,0.06)",
                            }}
                        >
                            <h3 className='text-3xl open-sans-regular'>Also Check Out Fynora Entertainments</h3>
                            <p className='text-xl text-black opacity-60 poppins-regular gap-5 mt-4 flex'>Visit Fynora:
                                <a href="http://fynoraentertainments.com/" target='_blank' rel="noopener noreferrer" className='flex text-lg items-center gap-1'>
                                    <Globe className='' />
                                    fynoraentertainments.com
                                </a>
                            </p>
                        </div>

                    </div>
                    <div className='w-full md:w-1/2 flex flex-col gap-7 sm:pt-10'>
                        <UforiaSocials />
                        {/* <FynoraSocials /> */}
                    </div>
                    <div className='block md:hidden lg:hidden py-5 rounded-4xl mt-7 w-auto ml-0 pl-5 md:pl-10'
                        style={{
                            backgroundImage:
                                "linear-gradient(180deg, rgba(236,235,245,0.82) 0%, rgba(246,238,244,1) 50%, rgba(244,230,234,0.82) 100%)",
                            boxShadow: "inset 0 6px 20px rgba(0,0,0,0.06)",
                        }}
                    >
                        <h3 className='text-xl md:text-3xl open-sans-regular'>Also Check Out Fynora Entertainments</h3>
                        <p className='text-xs md:text-xl text-black opacity-60 poppins-regular gap-5 mt-3 md:mt-4 flex flex-col md:flex'>Visit Fynora:
                            <a href="http://fynoraentertainments.com/" target='_blank' rel="noopener noreferrer" className='flex text-sm md:text-lg items-center gap-1'>
                                <Globe className='' />
                                fynoraentertainments.com
                            </a>
                        </p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Socials
