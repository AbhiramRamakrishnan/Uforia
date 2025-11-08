// src/components/Gallery/LightboxModal.jsx
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export default function LightboxModal({
  images,
  selectedIndex,
  onClose,
  onPrev,
  onNext,
}) {
  if (selectedIndex === null) return null;

  const prevIndex = selectedIndex === 0 ? images.length - 1 : selectedIndex - 1;
  const nextIndex = selectedIndex === images.length - 1 ? 0 : selectedIndex + 1;

  return (
    <div
      className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 overflow-hidden"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute top-6 right-6 text-white hover:text-gray-300 transition"
      >
        <X size={32} />
      </button>

      {/* Navigation Buttons */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-4 sm:left-8 text-white hover:text-gray-300 transition"
      >
        <ChevronLeft size={36} />
      </button>

      <div className="relative flex items-center justify-center gap-6 select-none">
        {/* Previous image preview */}
        <img
          src={images[prevIndex].imgUrl}
          alt="Previous preview"
          className="max-h-[60vh] max-w-[30vw] object-contain opacity-40 scale-90 blur-[1px] brightness-75 transition-all duration-300"
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
        />

        {/* Current main image */}
        <img
          src={images[selectedIndex].imgUrl}
          alt="Expanded view"
          className="max-h-[80vh] max-w-[60vw] object-contain rounded-lg shadow-lg transition-transform duration-300"
          onClick={(e) => e.stopPropagation()}
        />

        {/* Next image preview */}
        <img
          src={images[nextIndex].imgUrl}
          alt="Next preview"
          className="max-h-[60vh] max-w-[30vw] object-contain opacity-40 scale-90 blur-[1px] brightness-75 transition-all duration-300"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
        />
      </div>

      {/* Right Nav Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 sm:right-8 text-white hover:text-gray-300 transition"
      >
        <ChevronRight size={36} />
      </button>
    </div>
  );
}
