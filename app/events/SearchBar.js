"use client"; // CLIENT COMPONENT - Needs interactivity

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    
    if (search.trim()) {
      router.push(`/events?search=${search}`);
    } else {
      router.push("/events");
    }
  };

  return (
    <form onSubmit={handleSearch} className="mb-8">
      <div className="flex gap-2 max-w-xl">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search events... (e.g., Coding, Music, Festival)"
          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold"
        >
          🔍 Search
        </button>
      </div>
    </form>
  );
}

