// LOADING STATE - Shows while event is being fetched

export default function Loading() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="animate-pulse">
        {/* Back button skeleton */}
        <div className="h-6 w-32 bg-gray-200 rounded mb-6"></div>

        {/* Card skeleton */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Badge */}
          <div className="h-8 w-24 bg-gray-200 rounded-full mb-4"></div>

          {/* Title */}
          <div className="h-10 bg-gray-200 rounded mb-4"></div>

          {/* Description */}
          <div className="space-y-3 mb-8">
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            <div className="h-4 bg-gray-200 rounded w-4/6"></div>
          </div>

          {/* Details grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-8 bg-gray-50 p-6 rounded-lg">
            <div className="h-16 bg-gray-200 rounded"></div>
            <div className="h-16 bg-gray-200 rounded"></div>
          </div>

          {/* Like button */}
          <div className="h-12 w-40 bg-gray-200 rounded-lg"></div>
        </div>
      </div>

      <div className="text-center mt-8 text-gray-500">
        <p>Loading event details...</p>
      </div>
    </div>
  );
}

