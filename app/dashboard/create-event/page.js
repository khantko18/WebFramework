import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { getUserFromCookies, isAdmin } from "@/lib/auth";
import Link from "next/link";
import CreateEventForm from "./CreateEventForm";

// Metadata
export const metadata = {
  title: "Create Event - CampusConnect",
  description: "Create a new event for Sunmoon University",
};

// CREATE EVENT PAGE - Server Component (Protected - Admin only)
export default async function CreateEventPage() {
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
          Create New Event
        </h1>
        <p className="text-gray-600">
          Add a new event for Sunmoon University students
        </p>
      </div>

      {/* Form Card */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        <CreateEventForm />
      </div>
    </div>
  );
}

