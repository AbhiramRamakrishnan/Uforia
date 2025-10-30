import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const ComingSoon = () => {
  return (
    <div className="bg-gradient-to-b from-[#FDF3FF] to-[#E3EAFD] min-h-screen w-full flex flex-col gap-8 items-center justify-center">
      <h1 className="text-5xl montserrat-semibold text-gray-700 text-center">
        Stay Tuned
      </h1>
      <a href="/" className='bg-indigo-600 p-2 px-6 rounded-3xl text-gray-100 poppins-regular'>Back Home</a>
    </div>
  );
};

export default ComingSoon;