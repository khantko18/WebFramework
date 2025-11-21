import Link from "next/link";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { getUserFromCookies } from "@/lib/auth";
import { getAllEvents } from "@/lib/events";
import SearchBar from "./SearchBar";

// Force dynamic rendering
export const dynamic = "force-dynamic";

// Metadata for SEO
export const metadata = {
  title: "Events - CampusConnect",
  description: "Browse all events at Sunmoon University",
};

// EVENTS PAGE - Server Component
// Protected route - login required
export default async function EventsPage({ searchParams }) {
  // Check authentication
  const cookieStore = await cookies();
  const authToken = cookieStore.get("auth_token");

  if (!authToken) {
    redirect("/login"); // Not logged in, redirect to login
  }

  const user = getUserFromCookies(`auth_token=${authToken.value}`);

  if (!user) {
    redirect("/login"); // Invalid token, redirect to login
  }

  // Await searchParams (Next.js 15 requirement)
  const params = await searchParams;
  const search = params?.search || "";

  // Get all events
  const allEvents = getAllEvents();

  // Filter events based on search query
  const events = search
    ? allEvents.filter(
        (event) =>
          event.title.toLowerCase().includes(search.toLowerCase()) ||
          event.description.toLowerCase().includes(search.toLowerCase()) ||
          event.category.toLowerCase().includes(search.toLowerCase())
      )
    : allEvents;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Campus Events</h1>
        <p className="text-gray-600">
          Discover upcoming events at Sunmoon University
        </p>
      </div>

      {/* Search Bar - CLIENT COMPONENT */}
      <SearchBar initialSearch={search} />

      {/* Events Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.length === 0 ? (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-500 text-lg">
              No events found matching "{search}"
            </p>
          </div>
        ) : (
          events.map((event) => (
            <Link
              key={event.id}
              href={`/events/${event.id}`}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {event.category}
                  </span>
                  <span className="text-sm text-gray-500">
                    ❤️ {event.likes}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  {event.title}
                </h2>

                <p className="text-gray-600 mb-4 line-clamp-2">
                  {event.description}
                </p>

                <div className="space-y-1 text-sm text-gray-500">
                  <p className="flex items-center gap-2">
                    <span>📅</span>
                    {event.date}
                  </p>
                  <p className="flex items-center gap-2">
                    <span>📍</span>
                    {event.location}
                  </p>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>

      {/* Results Count */}
      <div className="mt-8 text-center text-gray-600">
        Showing {events.length} {events.length === 1 ? "event" : "events"}
        {search && ` for "${search}"`}
      </div>
    </div>
  );
}
