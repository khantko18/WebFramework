"use client"; // CLIENT COMPONENT - Needs form handling

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AnnouncementForm() {
  const [formData, setFormData] = useState({
    title: "",
    message: "",
    priority: "normal",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    // Simulate sending announcement (in real app, would call API)
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      alert(`Announcement "${formData.title}" sent successfully!`);
      
      // Reset form
      setFormData({
        title: "",
        message: "",
        priority: "normal",
      });

      // Optionally redirect back
      setTimeout(() => router.push("/dashboard"), 1500);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Success Message */}
      {success && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
          ✅ Announcement sent successfully!
        </div>
      )}

      {/* Title */}
      <div>
        <label htmlFor="title" className="block text-sm font-semibold text-gray-700 mb-2">
          Announcement Title *
        </label>
        <input
          id="title"
          name="title"
          type="text"
          value={formData.title}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
          placeholder="e.g., Important: Campus Event Update"
          disabled={loading}
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
          placeholder="Write your announcement message here..."
          disabled={loading}
        />
      </div>

      {/* Priority */}
      <div>
        <label htmlFor="priority" className="block text-sm font-semibold text-gray-700 mb-2">
          Priority
        </label>
        <select
          id="priority"
          name="priority"
          value={formData.priority}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
          disabled={loading}
        >
          <option value="low">Low - General Information</option>
          <option value="normal">Normal - Standard Announcement</option>
          <option value="high">High - Important Update</option>
          <option value="urgent">Urgent - Immediate Attention</option>
        </select>
      </div>

      {/* Submit Button */}
      <div className="flex gap-4">
        <button
          type="submit"
          disabled={loading}
          className="flex-1 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {loading ? "Sending..." : "📧 Send Announcement"}
        </button>
        <button
          type="button"
          onClick={() => router.push("/dashboard")}
          disabled={loading}
          className="px-6 py-3 border-2 border-gray-300 rounded-lg hover:border-gray-400 transition font-semibold disabled:opacity-50"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

