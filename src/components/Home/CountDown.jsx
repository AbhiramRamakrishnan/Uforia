import React from 'react'

const CountDown = () => {
    return (
        <>
            <div className='flex gap-5 mt-6 md:mt-4 w-full justify-center px-4 sm:px-1 sm:justify-start'>
                <div className='text-center'>
                    <h5 className='text-2xl md:text-3xl open-sans-regular'>68</h5>
                    <h6 className='text-[11px] md:text-xs open-sans-regular opacity-70'>DAYS</h6>
                </div>
                <div className='text-center'>
                    <h5 className='text-2xl md:text-3xl open-sans-regular'>10</h5>
                    <h6 className='text-[11px] md:text-xs open-sans-regular opacity-70'>HOURS</h6>
                </div>
                <div className='text-center'>
                    <h5 className='text-2xl md:text-3xl open-sans-regular'>31</h5>
                    <h6 className='text-[11px] md:text-xs open-sans-regular opacity-70'>MINUTES</h6>
                </div>
                <div className='text-center'>
                    <h5 className='text-2xl md:text-3xl open-sans-regular'>58</h5>
                    <h6 className='text-[11px] md:text-xs open-sans-regular opacity-70'>SECONDS</h6>
                </div>
            </div>
        </>
    )
}

export default CountDown
