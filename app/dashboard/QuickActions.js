"use client"; // CLIENT COMPONENT - Needs onClick handlers

export default function QuickActions() {
  const handleCreateEvent = () => {
    alert(
      "📝 Create Event Form\n\nThis would open a form to create a new event.\n\n(Feature coming soon!)"
    );
  };

  const handleSendAnnouncement = () => {
    alert(
      "📧 Send Announcement\n\nThis would send an email to all students.\n\n(Feature coming soon!)"
    );
  };

  const handleViewAnalytics = () => {
    alert(
      "📊 Analytics Dashboard\n\nThis would show:\n• Total views\n• Registration numbers\n• Popular events\n\n(Feature coming soon!)"
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
      <div className="grid md:grid-cols-3 gap-4">
        <button
          onClick={handleCreateEvent}
          className="bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition font-semibold active:scale-95"
        >
          ➕ Create New Event
        </button>
        <button
          onClick={handleSendAnnouncement}
          className="bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 transition font-semibold active:scale-95"
        >
          📧 Send Announcement
        </button>
        <button
          onClick={handleViewAnalytics}
          className="bg-purple-600 text-white px-4 py-3 rounded-lg hover:bg-purple-700 transition font-semibold active:scale-95"
        >
          📊 View Analytics
        </button>
      </div>
    </div>
  );
}
