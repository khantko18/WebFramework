import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { getUserFromCookies, isAdmin } from "@/lib/auth";
import { getEventById } from "@/lib/events";
import Link from "next/link";
import EditEventForm from "./EditEventForm";

// Metadata
export const metadata = {
  title: "Edit Event - CampusConnect",
  description: "Edit event details for Sunmoon University",
};

// EDIT EVENT PAGE - Server Component (Protected - Admin only)
export default async function EditEventPage({ params }) {
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

  // Get event ID from params
  const resolvedParams = await params;
  const eventId = parseInt(resolvedParams.id);
  
  // Get event data
  const event = getEventById(eventId);
  
  if (!event) {
    redirect("/dashboard"); // Event not found, go back to dashboard
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Back Button */}
      <Link 
        href="/dashboard" 
        className="inline-block text-blue-600 hover:text-blue-700 mb-6 font-semibold"
      >
        ← Back to Dashboard
      </Link>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Edit Event
        </h1>
        <p className="text-gray-600">
          Update event details for "{event.title}"
        </p>
      </div>

      {/* Form Card */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        <EditEventForm event={event} />
      </div>
    </div>
  );
}

