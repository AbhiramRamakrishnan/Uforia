import { Link } from "react-router-dom";
import { useRef } from "react";

export default function EventVidGallery({ videos }) {
  const videoScrollRef = useRef(null);

  const scroll = (direction) => {
    if (videoScrollRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      videoScrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const limitedVideos = videos?.slice(0, 8) || [];

  if (!limitedVideos.length) return null;

  return (
    <div className="mb-12 bg-gray-100 rounded-2xl p-6 shadow-sm relative">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-gray-800 montserrat-semibold">Highlight Videos</h2>
        <a href="/videos" className="text-sm font-semibold text-orange-500 montserrat-semibold underline">view more</a>
      </div>

      <div className="relative">
        {/* Left Button */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 
          rounded-full w-10 h-10 flex items-center justify-center shadow-md z-10 text-xl font-bold text-gray-700"
        >
          ←
        </button>

        {/* Video Row */}
        <div
          ref={videoScrollRef}
          className="flex overflow-x-auto space-x-4 scroll-smooth scrollbar-hide"
        >
          {limitedVideos.slice(0, 6).map((vid, i) => (
            <div
              key={i}
              className="flex-none w-50 h-50 bg-white rounded-lg flex justify-center items-center shadow-sm"
            >
              <video
                src={vid}
                controls
                className="max-w-full max-h-full object-contain rounded-md"
              />
            </div>
          ))}

          {/* View More Circle */}
          <Link
            to="/videos"
            className="flex-none w-40 h-40 bg-gray-200 hover:bg-gray-300 rounded-full flex justify-center items-center text-gray-700 poppins-regular"
          >
            View More →
          </Link>
        </div>

        {/* Right Button */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 
          rounded-full w-10 h-10 flex items-center justify-center shadow-md z-10 text-xl font-bold text-gray-700"
        >
          →
        </button>
      </div>
    </div>
  );
}
