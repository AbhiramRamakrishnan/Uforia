export default function VideoGrid({ videos, onVideoClick }) {
  return (
    <section className="max-w-7xl mx-auto px-3 pb-10 mt-1 md:mt-15 min-h-screen">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
        {videos.map((video, index) => (
          <div
            key={video.id}
            onClick={() => onVideoClick(index)}
            className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300 bg-white cursor-pointer"
          >
            {video.thumbnail ? (
            <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-40 sm:h-48 md:h-56 object-cover transform group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
            />
            ) : (
            <video
                src={video.videoUrl}
                className="w-full h-40 sm:h-48 md:h-56 object-cover transform group-hover:scale-105 transition-transform duration-500"
                muted
            />
            )}

            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 flex items-center justify-center transition-colors duration-300">
              <svg
                className="w-10 h-10 sm:w-12 sm:h-12 text-white opacity-90 group-hover:opacity-100 transition"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
