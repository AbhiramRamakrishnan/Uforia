import EventCard from "./EventCard";

export default function EventList({ events, statusFilter, locationFilter }) {
  // Define sorting priority
  const statusPriority = {
    live: 1,
    upcoming: 2,
    past: 3,
  };

  // Sort by priority
  const sortedEvents = [...events].sort((a, b) => {
    const priorityA = statusPriority[a.status] || 99;
    const priorityB = statusPriority[b.status] || 99;
    return priorityA - priorityB;
  });

  // Apply filters
  const filteredEvents = sortedEvents.filter((event) => {
    const matchesStatus = statusFilter === "all" || event.status === statusFilter;
    const matchesLocation = locationFilter === "all" || event.location === locationFilter;
    return matchesStatus && matchesLocation;
  });

  // Render UI
  return filteredEvents.length > 0 ? (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredEvents.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  ) : (
    <p className="text-center text-gray-500">No events found for selected filters.</p>
  );
}
