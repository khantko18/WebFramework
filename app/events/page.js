import Link from "next/link";
import SearchBar from "./SearchBar";
import { searchEvents } from "@/lib/events";

// SERVER COMPONENT - Events List Page
// Direct import instead of fetch - avoids timeout issues
function getEvents(search) {
  return searchEvents(search);
}

export default async function EventsPage({ searchParams }) {
  // Next.js 15: searchParams is now a Promise, must await it
  const params = await searchParams;
  const search = params.search || "";
  const events = getEvents(search);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          🎉 University Events
        </h1>
        <p className="text-gray-600">
          Discover what's happening at Sunmoon University
        </p>
      </div>

      {/* Search Bar - CLIENT COMPONENT */}
      <SearchBar />

      {/* Events Grid */}
      {events.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-gray-500 text-lg">No events found</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <Link
              key={event.id}
              href={`/events/${event.id}`}
              className="block bg-white rounded-lg shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              <div className="p-6">
                {/* Category Badge */}
                <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  {event.category}
                </span>

                {/* Title */}
                <h2 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                  {event.title}
                </h2>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {event.description}
                </p>

                {/* Date & Location */}
                <div className="space-y-1 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-2">
                    <span>📅</span>
                    <span>{new Date(event.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>📍</span>
                    <span className="line-clamp-1">{event.location}</span>
                  </div>
                </div>

                {/* Likes */}
                <div className="flex items-center gap-2 text-red-500">
                  <span>❤️</span>
                  <span className="font-semibold">{event.likes}</span>
                  <span className="text-gray-500 text-sm">likes</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* Results Info */}
      {search && (
        <p className="text-center text-gray-500 mt-8">
          Found {events.length} event{events.length !== 1 ? "s" : ""} for "
          {search}"
        </p>
      )}
    </div>
  );
}
