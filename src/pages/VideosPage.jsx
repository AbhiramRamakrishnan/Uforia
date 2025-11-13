import { useState } from "react";
import Navbar from "../components/Global/navbar";
import NavLogo from "../assets/navbar-logo.png";
import { videoData } from "../data/videoData";
import VideoGrid from "../components/Videos/VideoGrid";
import VideoModal from "../components/Videos/VideoModal";
import Footer from '../components/Global/footer';


export default function VideosPage() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const sortedVideos = [...videoData].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  const openModal = (index) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);
  const prevVideo = () =>
    setSelectedIndex((prev) =>
      prev === 0 ? sortedVideos.length - 1 : prev - 1
    );
  const nextVideo = () =>
    setSelectedIndex((prev) =>
      prev === sortedVideos.length - 1 ? 0 : prev + 1
    );

  return (
    <>
      {/* Banner & Navbar */}
      <div className="relative">
        <div
          className="absolute inset-0 h-[25vh] md:h-[30vh] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-100 z-0 pointer-events-none"
          aria-hidden="true"
        />
        <div className="relative z-20">
          <Navbar NavLogo={NavLogo} />
        </div>
        <section className="relative z-10 flex flex-col justify-center pt-10 md:pt-30 h-[30vh] text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 poppins-semibold">
            Videos
          </h1>
        </section>
      </div>

      {/* Video Grid */}
      <VideoGrid videos={sortedVideos} onVideoClick={openModal} />

      {/* Video Modal */}
      <VideoModal
        videos={sortedVideos}
        selectedIndex={selectedIndex}
        onClose={closeModal}
        onPrev={prevVideo}
        onNext={nextVideo}
      />
      
      <Footer />
    </>
  );
}
