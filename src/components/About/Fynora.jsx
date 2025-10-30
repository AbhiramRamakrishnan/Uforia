import React from 'react'

const Fynora = (props) => {
  return (
    <>
      <div className='bg-gray-300 w-full min-h-[90vh] px-15 md:px-60 py-40 space-y-7'>
        <h4 className='open-sans-medium text-xl md:text-2xl text-center'>Festival Designed by</h4>
        {/* <h2 className='open-sans-medium text-3xl text-center text-[#2F2971]'>FYNORA</h2> */}
        <img src={props.FynoraLogo} alt="" className="h-auto w-[30rem] object-contain mx-auto" />
        <hr className="h-5 text-gray-500 w-1/3 mx-auto rounded-2xl mt-0" />
        <p className='poppins-regular mt-10 md:mt-18 text-base text-center'>
          At Fynora Entertainments, we believe that every event is more than just a gathering it's a story waiting to be told. Established in 2025 and based in the heart of Kerala, India, we specialize in event management, media productions, brand promotions, creative storytelling, and entertainment solutions. From intimate celebrations to large-scale corporate events, our expertise spans across diverse industries, ensuring every occasion is a masterpiece.
        </p>
        <p className='poppins-regular text-base text-center'>
          We celebrate art, music, and storytelling, weaving them into every event to create an authentic experience. Whether it's a traditional festivity or a cutting-edge corporate event, we craft moments that bring people together, strengthening bonds and fostering a sense of belonging. We are Now ready to take on the biggest project yet!
        </p>
      </div>

    </>
  )
}

export default Fynora
