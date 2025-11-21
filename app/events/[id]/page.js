import Link from "next/link";
import LikeButton from "./LikeButton";
import { getEventById } from "@/lib/events";

// SERVER COMPONENT - Single Event Detail Page
// Direct import instead of fetch - avoids timeout issues
function getEvent(id) {
  const event = getEventById(parseInt(id));
  if (!event) {
    throw new Error("Event not found");
  }
  return event;
}

// Dynamic Metadata - SEO Optimization
export async function generateMetadata({ params }) {
  // Next.js 15: params is now a Promise, must await it
  const resolvedParams = await params;
  const event = getEvent(resolvedParams.id);
  
  return {
    title: `${event.title} | CampusConnect`,
    description: event.description,
  };
}

export default async function EventDetailPage({ params }) {
  // Next.js 15: params is now a Promise, must await it
  const resolvedParams = await params;
  const event = getEvent(resolvedParams.id);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Back Button */}
      <Link 
        href="/events" 
        className="inline-block text-blue-600 hover:text-blue-700 mb-6 font-semibold"
      >
        ← Back to Events
      </Link>

      {/* Event Card */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        {/* Category Badge */}
        <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-2 rounded-full mb-4">
          {event.category}
        </span>

        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {event.title}
        </h1>

        {/* Description */}
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          {event.description}
        </p>

        {/* Details Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8 bg-gray-50 p-6 rounded-lg">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">📅</span>
              <div>
                <p className="text-sm text-gray-500">Date</p>
                <p className="font-semibold text-gray-900">
                  {new Date(event.date).toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">📍</span>
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="font-semibold text-gray-900">{event.location}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Like Button - CLIENT COMPONENT */}
        <div className="border-t pt-6">
          <LikeButton eventId={event.id} initialLikes={event.likes} />
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex gap-4">
          <button className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-semibold">
            Register for Event
          </button>
          <button className="px-6 py-3 border-2 border-gray-300 rounded-lg hover:border-gray-400 transition font-semibold">
            Share
          </button>
        </div>
      </div>

      {/* Info Box */}
      <div className="mt-8 bg-blue-50 p-6 rounded-lg">
        <h3 className="font-semibold text-gray-900 mb-2">
          📍 Sunmoon University, Cheonan Asan
        </h3>
        <p className="text-gray-600 text-sm">
          Questions about this event? Contact the organizers through the student portal.
        </p>
      </div>
    </div>
  );
}

