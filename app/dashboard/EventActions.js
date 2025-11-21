"use client"; // CLIENT COMPONENT - Needs onClick handlers

export default function EventActions({ eventId, eventTitle }) {
  const handleEdit = () => {
    alert(`✏️ Edit Event\n\nEditing: ${eventTitle}\nID: ${eventId}\n\n(Feature coming soon!)`);
  };

  const handleDelete = () => {
    const confirmed = confirm(`🗑️ Delete Event\n\nAre you sure you want to delete "${eventTitle}"?\n\nThis action cannot be undone.`);
    
    if (confirmed) {
      alert(`✅ Event Deleted!\n\n"${eventTitle}" has been removed.\n\n(In a real app, this would call DELETE /api/events/${eventId})`);
    }
  };

  return (
    <div className="flex gap-2">
      <button 
        onClick={handleEdit}
        className="text-blue-600 hover:text-blue-800 text-sm font-medium hover:underline"
      >
        Edit
      </button>
      <button 
        onClick={handleDelete}
        className="text-red-600 hover:text-red-800 text-sm font-medium hover:underline"
      >
        Delete
      </button>
    </div>
  );
}

