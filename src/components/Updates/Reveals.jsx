import { useState } from "react";

export default function Reveals({ reveals }) {
  // Sort by date (newest first)
  const sorted = [...reveals].sort((a, b) => new Date(b.date) - new Date(a.date));

  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? sorted : sorted.slice(0, 4);

  return (
    <div>
      <h2 className="text-base text-pink-400 mb-6 montserrat-semibold">Reveals</h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 relative">
        {visible.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 bg-white border border-gray-100 w-full max-w-[260px] sm:max-w-none mx-auto"
          >
            {/* Image container */}
            <div className="flex justify-center items-center bg-gray-100 w-full">
              <img
                src={item.image}
                alt={item.title}
                className="w-full sm:w-[260px] max-h-[319px] object-contain rounded-t-2xl"
                loading="lazy"
              />
            </div>

            {/* Text content below image */}
            <div className="py-3 px-4">
              <h3 className="text-gray-800 text-base font-semibold montserrat-semibold">
                {item.title}
              </h3>
              <p className="text-gray-600 text-xs mt-1 leading-relaxed poppins-regular">
                {item.description}
              </p>
              <span className="text-[11px] text-gray-400 mt-2 block poppins-regular">
                {new Date(item.date).toLocaleDateString()}
              </span>
            </div>
          </div>

        ))}

        {!showAll && reveals.length > 4 && (
          <div className="absolute left-0 bottom-[-35px] w-full h-24 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none"></div>
        )}
      </div>

      {reveals.length > 4 && (
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-pink-500 hover:bg-pink-600 text-white px-5 py-2 rounded-full flex items-center gap-2 transition poppins-regular text-sm"
          >
            {showAll ? "Show Less ↑" : "Show More ↓"}
          </button>
        </div>
      )}
    </div>
  );
}
