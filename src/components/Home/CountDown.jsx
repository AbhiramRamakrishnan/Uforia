import React, { useEffect, useState } from 'react';

const targetDate = new Date();
targetDate.setMonth(11); // December (0-indexed)
targetDate.setDate(20);
targetDate.setHours(16, 0, 0, 0); // 4:00 PM, 0 minutes, 0 seconds, 0 ms

// If today is after Dec 20, set next year's Dec 20
if (targetDate < new Date()) {
    targetDate.setFullYear(targetDate.getFullYear() + 1);
}

const getTimeRemaining = (endTime) => {
    const total = endTime - new Date();
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    return {
        total,
        days,
        hours,
        minutes,
        seconds,
    };
};

const CountDown = () => {
    const [timeLeft, setTimeLeft] = useState(getTimeRemaining(targetDate));
    const [finished, setFinished] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            const remaining = getTimeRemaining(targetDate);
            setTimeLeft(remaining);
            if (remaining.total <= 0) {
                setFinished(true);
                clearInterval(timer);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    if (finished) {
        return (
            <div className='flex gap-5 mt-6 md:mt-4 w-full justify-center px-4 sm:px-1 sm:justify-start'>
                <div className='text-center w-full'>
                    <h5 className='text-2xl md:text-3xl open-sans-regular'>Countdown Finished!</h5>
                </div>
            </div>
        );
    }

    return (
        <div className='flex gap-5 mt-6 md:mt-4 w-full justify-center px-4 sm:px-1 sm:justify-start'>
            <div className='text-center'>
                <h5 className='text-2xl md:text-3xl open-sans-regular'>{timeLeft.days}</h5>
                <h6 className='text-[11px] md:text-xs open-sans-regular opacity-70'>DAYS</h6>
            </div>
            <div className='text-center'>
                <h5 className='text-2xl md:text-3xl open-sans-regular'>{timeLeft.hours}</h5>
                <h6 className='text-[11px] md:text-xs open-sans-regular opacity-70'>HOURS</h6>
            </div>
            <div className='text-center'>
                <h5 className='text-2xl md:text-3xl open-sans-regular'>{timeLeft.minutes}</h5>
                <h6 className='text-[11px] md:text-xs open-sans-regular opacity-70'>MINUTES</h6>
            </div>
            <div className='text-center'>
                <h5 className='text-2xl md:text-3xl open-sans-regular'>{timeLeft.seconds}</h5>
                <h6 className='text-[11px] md:text-xs open-sans-regular opacity-70'>SECONDS</h6>
            </div>
        </div>
    );
};

export default CountDown;