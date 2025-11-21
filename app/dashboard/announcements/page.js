import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { getUserFromCookies, isAdmin } from "@/lib/auth";
import Link from "next/link";
import AnnouncementForm from "./AnnouncementForm";

// Metadata
export const metadata = {
  title: "Send Announcement - CampusConnect",
  description: "Send announcements to students",
};

// SEND ANNOUNCEMENT PAGE - Server Component (Protected - Admin only)
export default async function AnnouncementPage() {
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
        <h1 className="text-4xl font-bold text-gray-900 mb-2 flex items-center gap-3">
          <span>📧</span>
          Send Announcement
        </h1>
        <p className="text-gray-600">
          Send important announcements to all students
        </p>
      </div>

      {/* Form Card */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        <AnnouncementForm />
      </div>

      {/* Info Box */}
      <div className="mt-6 bg-blue-50 p-4 rounded-lg">
        <p className="text-sm text-gray-700">
          <strong>📌 Note:</strong> Announcements will be sent to all registered students via email and displayed on their dashboard.
        </p>
      </div>
    </div>
  );
}

