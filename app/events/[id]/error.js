"use client"; // ERROR BOUNDARIES must be Client Components

import Link from "next/link";

export default function Error({ error, reset }) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-red-50 border border-red-200 rounded-lg p-8 text-center">
        <div className="text-6xl mb-4">⚠️</div>
        <h2 className="text-2xl font-bold text-red-800 mb-2">
          Oops! Something went wrong
        </h2>
        <p className="text-red-600 mb-6">
          {error.message || "Failed to load event details"}
        </p>
        
        <div className="flex gap-4 justify-center">
          <button
            onClick={reset}
            className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition font-semibold"
          >
            Try Again
          </button>
          <Link
            href="/events"
            className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition font-semibold"
          >
            Back to Events
          </Link>
        </div>
      </div>
    </div>
  );
}

