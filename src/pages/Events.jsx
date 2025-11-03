import { useState } from "react";
import { events } from "../data/eventsData";
import Navbar from "../components/Global/navbar";
import EventList from "../components/Events/EventList";
import EventHero from "../components/Events/EventHero";
import NavLogo from '../assets/navbar-logo.png'
import HeroImg from '../assets/Hero-bg.jpg'


export default function Events() {
  const [statusFilter, setStatusFilter] = useState("all");
  const [locationFilter, setLocationFilter] = useState("all");

  const statuses = ["all", "upcoming", "live", "past"];
  const locations = ["all", "Trivandrum", "Kochi", "Kollam"];

  return (
    <>
        <div className="relative">
            {/* Orange background only behind navbar */}
            <div className="absolute top-0 left-0 w-full h-30 z-0"></div>

            {/* Navbar */}
            <div className="relative z-10">
            <Navbar NavLogo={NavLogo} />
            </div>

            {/* Hero Section */}
            <EventHero HeroImg={HeroImg} />
        </div> 

        <section className="py-3 px-6 bg-gray-50 min-h-screen">
            {/* FILTER BAR */}
            <div className="flex justify-center gap-2 mb-3">
                {/* Status Filter */}
                <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="border border-gray-300 rounded-xl px-1 py-1 bg-white text-xs shadow-md poppins-regular"
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
                className="border border-gray-300 rounded-xl px-1 py-1 bg-white text-xs shadow-md poppins-regular"
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
    </>
    
  );
}
