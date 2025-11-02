import React from 'react'

const EventHero = (props) => {
  return (
    <>
        <section className="pt-22 relative w-full h-[40vh] md:h-[40vh] flex items-center justify-center">
            {/* Background Image */}
            <img
                src={props.HeroImg} // 🔹 Replace this with your actual image later
                alt="Events Background"
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-transparent"></div>
            <div
                className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-40"
                aria-hidden="true"
            />

            {/* Centered Text */}
            <h1 className="relative text-white text-5xl md:text-6xl font-extrabold uppercase tracking-wider">
                Events
            </h1>
        </section>
    </>
  )
}

export default EventHero
