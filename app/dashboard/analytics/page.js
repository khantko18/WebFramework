import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { getUserFromCookies, isAdmin } from "@/lib/auth";
import { getAllEvents } from "@/lib/events";
import Link from "next/link";

// Force dynamic rendering
export const dynamic = 'force-dynamic';

// Metadata
export const metadata = {
  title: "Analytics - CampusConnect",
  description: "View event analytics and statistics",
};

// ANALYTICS PAGE - Server Component (Protected - Admin only)
export default async function AnalyticsPage() {
  // Check authentication
  const cookieStore = await cookies();
  const authToken = cookieStore.get("auth_token");
  
  if (!authToken) {
    redirect("/login");
  }
  
  const user = getUserFromCookies(`auth_token=${authToken.value}`);
  
  // Check if user is admin
  if (!isAdmin(user)) {
    redirect("/dashboard");
  }

  // Get events data
  const events = getAllEvents();

  // Calculate analytics
  const totalEvents = events.length;
  const totalLikes = events.reduce((sum, event) => sum + event.likes, 0);
  const avgLikes = totalEvents > 0 ? (totalLikes / totalEvents).toFixed(1) : 0;
  
  // Category breakdown
  const categoryStats = events.reduce((acc, event) => {
    acc[event.category] = (acc[event.category] || 0) + 1;
    return acc;
  }, {});

  // Most liked event
  const mostLiked = events.reduce((max, event) => 
    event.likes > (max?.likes || 0) ? event : max, 
    events[0]
  );

  // Upcoming events (future dates)
  const today = new Date().toISOString().split('T')[0];
  const upcomingEvents = events.filter(e => e.date >= today).length;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Back Button */}
      <Link 
        href="/dashboard" 
        className="inline-block text-blue-600 hover:text-blue-700 mb-6 font-semibold"
      >
        ← Back to Dashboard
      </Link>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2 flex items-center gap-3">
          <span>📊</span>
          Event Analytics
        </h1>
        <p className="text-gray-600">
          Detailed statistics and insights about campus events
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Total Events */}
        <div className="bg-blue-600 text-white rounded-lg p-6 shadow-lg">
          <p className="text-blue-100 text-sm mb-2">Total Events</p>
          <p className="text-4xl font-bold">{totalEvents}</p>
        </div>

        {/* Total Likes */}
        <div className="bg-red-500 text-white rounded-lg p-6 shadow-lg">
          <p className="text-red-100 text-sm mb-2">Total Likes</p>
          <p className="text-4xl font-bold">❤️ {totalLikes}</p>
        </div>

        {/* Average Likes */}
        <div className="bg-green-600 text-white rounded-lg p-6 shadow-lg">
          <p className="text-green-100 text-sm mb-2">Average Likes</p>
          <p className="text-4xl font-bold">{avgLikes}</p>
        </div>

        {/* Upcoming Events */}
        <div className="bg-purple-600 text-white rounded-lg p-6 shadow-lg">
          <p className="text-purple-100 text-sm mb-2">Upcoming Events</p>
          <p className="text-4xl font-bold">{upcomingEvents}</p>
        </div>
      </div>

      {/* Category Breakdown */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Events by Category
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {Object.entries(categoryStats).map(([category, count]) => (
            <div key={category} className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-600 text-sm">{category}</p>
              <p className="text-2xl font-bold text-gray-900">{count}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Most Popular Event */}
      {mostLiked && (
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            🏆 Most Popular Event
          </h2>
          <div className="bg-white rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {mostLiked.title}
            </h3>
            <p className="text-gray-600 mb-4">{mostLiked.description}</p>
            <div className="flex gap-6 text-sm text-gray-600">
              <p>📅 {mostLiked.date}</p>
              <p>📍 {mostLiked.location}</p>
              <p className="font-bold text-red-600">❤️ {mostLiked.likes} likes</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

