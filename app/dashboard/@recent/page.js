import { getAllEvents } from "@/lib/events";

// PARALLEL ROUTE 2 - Recent Activity (SERVER COMPONENT)
// Direct import instead of fetch - avoids timeout issues

function getRecentEvent() {
  const events = getAllEvents();
  // Get the most recently added event (last in array)
  return events.length > 0 ? events[events.length - 1] : null;
}

export default async function RecentSlot() {
  const recentEvent = getRecentEvent();

  return (
    <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-lg shadow-lg p-6">
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <span>🕒</span>
        <span>Recent Activity</span>
      </h3>
      
      {recentEvent ? (
        <div>
          <p className="text-green-100 text-sm mb-2">Last Added Event:</p>
          <p className="text-2xl font-bold mb-2">{recentEvent.title}</p>
          <p className="text-green-100 text-sm mb-1">
            📅 {new Date(recentEvent.date).toLocaleDateString()}
          </p>
          <p className="text-green-100 text-sm">
            📍 {recentEvent.location}
          </p>
        </div>
      ) : (
        <p className="text-green-100">No events yet</p>
      )}
    </div>
  );
}

