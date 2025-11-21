"use client"; // CLIENT COMPONENT - Needs onClick handlers

import { useRouter } from "next/navigation";

export default function QuickActions() {
  const router = useRouter();

  const handleCreateEvent = () => {
    router.push("/dashboard/create-event");
  };

  const handleSendAnnouncement = () => {
    router.push("/dashboard/announcements");
  };

  const handleViewAnalytics = () => {
    router.push("/dashboard/analytics");
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
      <div className="grid md:grid-cols-3 gap-4">
        <button
          onClick={handleCreateEvent}
          className="bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
        >
          ➕ Create New Event
        </button>
        <button
          onClick={handleSendAnnouncement}
          className="bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 transition font-semibold"
        >
          📧 Send Announcement
        </button>
        <button
          onClick={handleViewAnalytics}
          className="bg-purple-600 text-white px-4 py-3 rounded-lg hover:bg-purple-700 transition font-semibold"
        >
          📊 View Analytics
        </button>
      </div>
    </div>
  );
}
