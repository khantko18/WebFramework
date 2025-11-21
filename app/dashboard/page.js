import Link from "next/link";
import { getAllEvents } from "@/lib/events";
import QuickActions from "./QuickActions";
import EventActions from "./EventActions";

// DASHBOARD MAIN PAGE - Server Component
// Direct import instead of fetch - avoids timeout issues

export default async function DashboardPage() {
  const events = getAllEvents();

  return (
    <div>
      {/* Quick Actions - CLIENT COMPONENT */}
      <QuickActions />

      {/* All Events Table */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">All Events</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                  Event
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                  Date
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                  Category
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                  Likes
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {events.map((event) => (
                <tr key={event.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <Link 
                      href={`/events/${event.id}`}
                      className="text-blue-600 hover:underline font-medium"
                    >
                      {event.title}
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-gray-600 text-sm">
                    {new Date(event.date).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3">
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      {event.category}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    ❤️ {event.likes}
                  </td>
                  <td className="px-4 py-3">
                    <EventActions 
                      eventId={event.id} 
                      eventTitle={event.title}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

