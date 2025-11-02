import { useParams, Link } from "react-router-dom";
import { events } from "../data/eventsData";
import HeroImg from '../assets/Hero-bg.jpg'
import NavLogo from '../assets/navbar-logo.png'
import EventDetail from "../components/EventsDetails/EventDetails";
import Navbar from "../components/Global/navbar";

export default function EventDetailPage() {
  const { id } = useParams();
  const event = events.find((e) => e.id === parseInt(id));

  return (
    <>
      <div>
        <Navbar NavLogo={NavLogo} />
      </div>
      
      <EventDetail event={event}  HeroImg={HeroImg} />

      <div className="text-center mt-6">
        <Link
          to="/events"
          className="bg-black text-white px-4 py-2 rounded-xl hover:bg-gray-800 transition"
        >
          ← Back to Events
        </Link>
      </div>
    </>
  );
}
