// src/components/Gallery/GalleryGrid.jsx
export default function GalleryGrid({ images, onImageClick }) {
  return (
    <section className="max-w-7xl mx-auto px-3 pb-20 mt-1 md:mt-15">
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 sm:gap-3 md:gap-4">
        {images.map((item, index) => (
          <div
            key={item.id}
            onClick={() => onImageClick(index)}
            className="relative overflow-hidden rounded-md shadow-sm hover:shadow-md transition-all duration-300 bg-white cursor-pointer"
          >
            <img
              src={item.imgUrl}
              alt={`Gallery ${item.id}`}
              className="w-full h-40 sm:h-48 md:h-56 object-cover transition-transform duration-500 hover:scale-[1.05]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
