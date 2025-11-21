import { getAllEvents } from "@/lib/events";

// PARALLEL ROUTE 1 - Statistics Card (SERVER COMPONENT)
// Direct import instead of fetch - avoids timeout issues

function getStats() {
  const events = getAllEvents();
  const totalLikes = events.reduce((sum, event) => sum + event.likes, 0);
  
  return {
    total: events.length,
    avgLikes: events.length > 0 ? Math.round(totalLikes / events.length) : 0,
  };
}

export default async function StatsSlot() {
  const stats = getStats();

  return (
    <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg shadow-lg p-6">
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <span>📈</span>
        <span>Event Statistics</span>
      </h3>
      
      <div className="space-y-4">
        <div>
          <p className="text-blue-100 text-sm">Total Events</p>
          <p className="text-4xl font-bold">{stats.total}</p>
        </div>
        
        <div>
          <p className="text-blue-100 text-sm">Average Likes</p>
          <p className="text-3xl font-bold">❤️ {stats.avgLikes}</p>
        </div>
      </div>
    </div>
  );
}

