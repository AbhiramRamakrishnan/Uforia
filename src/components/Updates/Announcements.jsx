import { useState } from "react";
import { PiPushPinFill } from "react-icons/pi";

export default function Announcements({ announcements }) {
  // Sort pinned first, then newest first
  const sorted = [...announcements].sort((a, b) => {
    if (a.pinned && !b.pinned) return -1;
    if (!a.pinned && b.pinned) return 1;
    return new Date(b.date) - new Date(a.date);
  });

  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? sorted : sorted.slice(0, 3);

  return (
    <div className="mb-8">
      <h2 className="text-base text-pink-500 mb-4 montserrat-semibold">Announcements</h2>

      <div
        className={`space-y-3 relative overflow-hidden transition-all duration-500 ${
          showAll ? "max-h-none" : "max-h-[150px]"
        }`}
      >
      {visible.map((item) => (
        <div
          key={item.id}
          className={`relative rounded-b-2xl rounded-tr-2xl px-4 py-2 shadow-sm hover:shadow-md transition-all duration-200 max-w-3xl border
            ${
              item.pinned
                ? "bg-pink-50 border-pink-200"
                : "bg-gray-50 border-gray-200"
            }
          `}
        >
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-2">
              {item.pinned && (
                <PiPushPinFill className="text-pink-500 text-sm mt-0.5" />
              )}
              <h3 className="text-base text-gray-800 poppins-medium">{item.title}</h3>
            </div>
            <span className="text-xs text-gray-500 mt-1 poppins-regular">
              {new Date(item.date).toLocaleDateString()}
            </span>
          </div>

          <p className="text-gray-700 text-xs mt-2 leading-relaxed poppins-regular">
            {item.content}
          </p>
        </div>
      ))}

      {/* Gradient fade when limited */}
      {!showAll && announcements.length > 3 && (
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white via-white/70 to-transparent pointer-events-none"></div>
      )}
    </div>


      {/* Read more button */}
      {announcements.length > 1 && (
        <div className="flex justify-center mt-0 max-w-3xl">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-pink-500 hover:bg-pink-600 text-white px-5 py-2 rounded-full flex items-center gap-2 transition poppins-regular text-sm"
          >
            {showAll ? "Show Less ↑" : "Read More ↓"}
          </button>
        </div>
      )}
    </div>
  );
}
