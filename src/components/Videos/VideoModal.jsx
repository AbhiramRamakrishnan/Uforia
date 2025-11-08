import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function VideoModal({
  videos,
  selectedIndex,
  onClose,
  onPrev,
  onNext,
}) {
  if (selectedIndex === null) return null;

  const currentVideo = videos[selectedIndex];
  const prevIndex = selectedIndex === 0 ? videos.length - 1 : selectedIndex - 1;
  const nextIndex = selectedIndex === videos.length - 1 ? 0 : selectedIndex + 1;

  return (
    <div
      className="fixed inset-0 bg-black/90 flex flex-col items-center justify-center z-50"
      onClick={onClose}
    >
      {/* Close button */}
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

      {/* Video Player */}
      <div
        className="relative w-[90vw] max-w-4xl h-[50vh] sm:h-[60vh] bg-black rounded-lg shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <iframe
          src={currentVideo.videoUrl}
          title={currentVideo.title}
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          className="w-full h-full rounded-lg"
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

      {/* Title */}
      <p className="text-white mt-4 text-center px-4 text-lg font-semibold">
        {currentVideo.title}
      </p>
    </div>
  );
}
