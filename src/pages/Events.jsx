import { useState } from "react";
import { events } from "../data/eventsData";
import Navbar from "../components/Global/navbar";
import EventList from "../components/Events/EventList";
import EventHero from "../components/Events/EventHero";
import Footer from '../components/Global/footer';

import NavLogo from "../assets/navbar-logo.png";
import HeroImg from "../assets/Hero-bg.jpg";

export default function Events() {
  const [statusFilter, setStatusFilter] = useState("all");
  const [locationFilter, setLocationFilter] = useState("all");

  const statuses = ["all", "upcoming", "live", "past"];
  const locations = ["all", "Trivandrum"];

  return (
    <>
      <div className="relative">
        {/* Navbar and Hero */}
        <div className="absolute top-0 left-0 w-full h-30 z-0"></div>
        <div className="relative z-10">
          <Navbar NavLogo={NavLogo} />
        </div>
        <EventHero HeroImg={HeroImg} />
      </div>

      <section className="py-1 px-6 bg-gray-50 min-h-screen">
        {/* FILTER BAR */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-5 bg-white border border-gray-200 shadow-sm px-2 py-1 rounded-2xl max-w-xs mx-auto">
          {/* Label */}
          <span className="text-gray-600 text-xs poppins-regular">Filter by:</span>

          {/* Status Filter */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="border border-gray-300 rounded-full px-1 py-1 bg-white text-xs text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all cursor-pointer"
          >
            {statuses.map((status) => (
              <option key={status} value={status}>
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </option>
            ))}
          </select>

          {/* Location Filter */}
          <select
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
            className="border border-gray-300 rounded-full px-1 py-1 bg-white text-xs text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all cursor-pointer"
          >
            {locations.map((loc) => (
              <option key={loc} value={loc}>
                {loc.charAt(0).toUpperCase() + loc.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {/* EVENT LIST */}
        <EventList
          events={events}
          statusFilter={statusFilter}
          locationFilter={locationFilter}
        />
      </section>

      <Footer />
    </>
  );
}
