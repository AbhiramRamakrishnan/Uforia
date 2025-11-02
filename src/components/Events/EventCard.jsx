import { Link } from "react-router-dom";

export default function EventCard({ event }) {
  const getStatusColor = (status) => {
    switch (status) {
      case "live":
        return "bg-green-500";
      case "upcoming":
        return "bg-blue-500";
      case "past":
        return "bg-gray-500";
      default:
        return "bg-gray-400";
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-[1.02] transition-all duration-300">
      <img src={event.image} alt={event.name} className="w-full h-56 object-cover" />
      <div className="p-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold montserrat-bold">{event.name}</h2>
          <span className={`text-white px-3 py-1 rounded-full text-xs poppins-regular ${getStatusColor(event.status)}`}>
            {event.status.toUpperCase()}
          </span>
        </div>
        <p className="text-gray-600 mt-2 poppins-regular">{event.shortDescription}</p>
        <div className="flex gap-5">
          <p className="text-sm text-gray-400 mt-1">{event.date}</p>
          <p className="text-sm text-gray-400 mt-1">{event.venue}</p>
        </div>
        
        <Link
          to={`/events/${event.id}`}
          className="mt-4 inline-block bg-black text-white px-4 py-2 rounded-xl hover:bg-gray-800 transition"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}
