"use client"; // CLIENT COMPONENT - Needs onClick handlers

import { useRouter } from "next/navigation";

export default function EventActions({ eventId, eventTitle }) {
  const router = useRouter();

  const handleEdit = () => {
    // Navigate to edit page
    router.push(`/dashboard/edit-event/${eventId}`);
  };

  const handleDelete = async () => {
    if (confirm(`Are you sure you want to delete "${eventTitle}"?`)) {
      try {
        const res = await fetch(`/api/events/${eventId}`, {
          method: "DELETE",
        });

        if (res.ok) {
          alert(`"${eventTitle}" deleted successfully!`);
          router.refresh(); // Refresh to update the list
        } else {
          alert("Failed to delete event");
        }
      } catch (error) {
        alert("Error deleting event");
      }
    }
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={handleEdit}
        className="text-blue-600 hover:text-blue-800 text-sm font-medium"
      >
        Edit
      </button>
      <button
        onClick={handleDelete}
        className="text-red-600 hover:text-red-800 text-sm font-medium"
      >
        Delete
      </button>
    </div>
  );
}
