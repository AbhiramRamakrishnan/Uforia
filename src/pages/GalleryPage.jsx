import { useState } from "react";
import Navbar from "../components/Global/navbar";
import NavLogo from "../assets/navbar-logo.png";
import { galleryData } from "../data/galleryData";
import GalleryGrid from "../components/Gallery/galleryGrid";
import LightboxModal from "../components/Gallery/lightBoxModal";
import Footer from '../components/Global/footer';


export default function GalleryPage() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const sortedImages = [...galleryData].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  const openModal = (index) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);
  const prevImage = () =>
    setSelectedIndex((prev) =>
      prev === 0 ? sortedImages.length - 1 : prev - 1
    );
  const nextImage = () =>
    setSelectedIndex((prev) =>
      prev === sortedImages.length - 1 ? 0 : prev + 1
    );

  return (
    <>
      {/* Banner & Navbar */}
      <div className="relative">
        <div
          className="absolute inset-0 h-[25vh] md:h-[30vh] bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-100 z-0 pointer-events-none"
          aria-hidden="true"
        />
        <div className="relative z-20">
          <Navbar NavLogo={NavLogo} />
        </div>
        <section className="relative z-10 flex flex-col justify-center pt-10 md:pt-30 h-[30vh] text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 poppins-semibold">
            Gallery
          </h1>
        </section>
      </div>

      {/* Image Grid */}
      <GalleryGrid images={sortedImages} onImageClick={openModal} />

      {/* Lightbox */}
      <LightboxModal
        images={sortedImages}
        selectedIndex={selectedIndex}
        onClose={closeModal}
        onPrev={prevImage}
        onNext={nextImage}
      />
      
      <Footer />
    </>
  );
}
