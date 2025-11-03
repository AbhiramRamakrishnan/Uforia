
import { Link } from "react-router-dom";
import { useRef } from "react";
import EventImageGallery from "../EventsDetails/EventsImgGallery";
import EventVideoGallery from "../EventsDetails/EventsVidGallery";


export default function EventDetails({ event }) {
  if (!event) {
    return <p className="text-center mt-20 text-gray-600 poppins-semibold">Event not found</p>;
  }

  const imageScrollRef = useRef(null);
  const videoScrollRef = useRef(null);

  const scroll = (ref, direction) => {
    if (ref.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      ref.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const limitedImages = event.galleryImages?.slice(0, 8) || [];
  const limitedVideos = event.galleryVideos?.slice(0, 8) || [];

  return (
    <section className="py-8 px-6 max-w-6xl mx-auto">
      {/* Header Section */}
      <div className="relative mb-10">
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-transparent"></div>
        <img
          src={event.image}
          alt={event.name}
          className="w-full h-110 object-cover rounded-2xl shadow-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-2xl" />
        <div className="absolute bottom-6 left-6 text-white">
          <span
            className={`inline-block px-3 py-1 rounded-lg text-sm font-semibold mb-2 poppins-regular ${
              event.status === "live"
                ? "bg-red-500"
                : event.status === "upcoming"
                ? "bg-yellow-500"
                : "bg-gray-600"
            }`}
          >
            {event.status.toUpperCase()}
          </span>
          <h1 className="text-4xl font-bold montserrat-bold">{event.name}</h1>
          <p className="text-sm text-gray-200 mt-1 open-sans-regular">
             {event.venue} |  {event.date}
          </p>
        </div>
      </div>

      {/* Booking and Details */}
      <div className="flex flex-col items-start mb-8 px-5 gap-8">
        {event.bookingLink && (
          <a
            href={event.bookingLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-4 md:mb-0 bg-orange-500 hover:bg-orange-600 text-white poppins-semibold px-6 py-3 rounded-xl transition-all order-first md:order-none"
          >
            Book Tickets
          </a>
        )}
        <p className="text-base text-gray-700 w-auto poppins-regular">
          {event.longDescription}
        </p>
      </div>

      {/* Lineup Section */}
      {event.lineup && event.lineup.length > 0 && (
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-3 text-gray-800 montserrat-semibold">
            Artist/Band Lineup
          </h2>
          <ul className="flex flex-wrap gap-3">
            {event.lineup.map((artist, i) => (
              <li
                key={i}
                className="px-4 py-2 bg-gray-100 rounded-full text-gray-700 font-medium poppins-medium"
              >
                {artist}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Regulations Section */}
      {event.regulations && (
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-3 text-gray-800 montserrat-semibold">
            Event Regulations
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 poppins-regular">
            {event.regulations.map((rule, i) => (
              <li key={i}>{rule}</li>
            ))}
          </ul>
        </div>
      )}

      <EventImageGallery images={event.galleryImages} />
      <EventVideoGallery videos={event.galleryVideos} />

    </section>
  );
}
