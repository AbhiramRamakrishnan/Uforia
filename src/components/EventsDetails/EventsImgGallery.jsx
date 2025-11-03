import { Link } from "react-router-dom";
import { useRef } from "react";

export default function EventImgGallery({ images }) {
  const imageScrollRef = useRef(null);

  const scroll = (direction) => {
    if (imageScrollRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      imageScrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const limitedImages = images?.slice(0, 8) || [];

  if (!limitedImages.length) return null;

  return (
    <div className="mb-12 bg-gray-50 rounded-2xl p-6 shadow-sm relative">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-gray-800 montserrat-semibold">Event Gallery</h2>
      </div>

      {/* Scrollable Gallery */}
      <div className="relative">
        {/* Left Button */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 
          rounded-full w-10 h-10 flex items-center justify-center shadow-md z-10 text-xl font-bold text-gray-700"
        >
          ←
        </button>

        {/* Image Row */}
        <div
          ref={imageScrollRef}
          className="flex overflow-x-auto space-x-4 scroll-smooth scrollbar-hide"
        >
          {limitedImages.slice(0, 4).map((img, i) => (
            <div
              key={i}
              className="flex-none w-50 h-50 bg-white rounded-lg flex justify-center items-center shadow-sm"
            >
              <img
                src={img}
                alt={`Event image ${i + 1}`}
                className="max-w-full max-h-full object-contain rounded-md"
              />
            </div>
          ))}

          {/* View More Circle */}
          <Link
            to="/soon"
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
