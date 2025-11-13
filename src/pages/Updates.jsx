// src/pages/UpdatesPage.jsx
import AnnouncementsSection from "../components/Updates/Announcements";
import RevealsSection from "../components/Updates/Reveals";
import Navbar from "../components/Global/navbar";
import Footer from '../components/Global/footer';

import NavLogo from "../assets/navbar-logo.png";
import { updates } from "../data/updatesData";

export default function Updates() {
  const announcements = updates.filter(u => u.type === "announcement");
  const reveals = updates.filter(u => u.type === "reveal");

  return (
    <>
      {/* 🔹 Navbar */}
      <Navbar NavLogo={NavLogo} />

      {/* 🔹 Page Header Section */}
        <div className="relative h-[200px] w-full bg-gradient-to-b from-black/90 via-purple-700 to-fuchsia-700/70 flex items-center justify-center text-center overflow-hidden">
        {/* Optional Background Image */}
        {/* <img
          src="/images/updates-header.jpg"
          alt="Uforia Updates"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        /> */}

        {/* Overlay for visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-black/10 to-transparent" />

        <div className="relative z-10 max-w-3xl px-6 pt-30">
          <h1 className="text-3xl font-bold text-white mb-1 montserrat-bold">UPDATES</h1>
          <p className="text-gray-300 text-sm poppins-regular">
            Stay tuned with official announcements and exclusive reveals.
          </p>
        </div>
      </div>

      {/* 🔹 Main Content */}
      <section className="max-w-6xl mx-auto px-6 pt-5 pb-10 text-white">
        <AnnouncementsSection announcements={announcements} />
        <RevealsSection reveals={reveals} />
      </section>

      <Footer />
    </>
  );
}
