import Link from "next/link";

// SERVER COMPONENT - Landing Page
export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Welcome to CampusConnect
        </h1>
        <p className="text-xl text-gray-600 mb-2">
          🏫 Sunmoon University Events Platform
        </p>
        <p className="text-lg text-gray-500">
          📍 Cheonan Asan, South Korea
        </p>
      </div>

      {/* Features Grid - Now Clickable! */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <Link 
          href="/events"
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition transform hover:-translate-y-2 cursor-pointer"
        >
          <div className="text-4xl mb-4">🎉</div>
          <h3 className="text-xl font-semibold mb-2">Discover Events</h3>
          <p className="text-gray-600">
            Browse all upcoming events happening at Sunmoon University
          </p>
          <p className="text-blue-600 font-semibold mt-4">
            View Events →
          </p>
        </Link>

        <Link 
          href="/events"
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition transform hover:-translate-y-2 cursor-pointer"
        >
          <div className="text-4xl mb-4">⭐</div>
          <h3 className="text-xl font-semibold mb-2">Save Favorites</h3>
          <p className="text-gray-600">
            Like events you're interested in and never miss out
          </p>
          <p className="text-blue-600 font-semibold mt-4">
            Browse & Like →
          </p>
        </Link>

        <Link 
          href="/dashboard"
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition transform hover:-translate-y-2 cursor-pointer"
        >
          <div className="text-4xl mb-4">📊</div>
          <h3 className="text-xl font-semibold mb-2">Admin Dashboard</h3>
          <p className="text-gray-600">
            Organizers can manage and create events easily
          </p>
          <p className="text-blue-600 font-semibold mt-4">
            Go to Dashboard →
          </p>
        </Link>
      </div>

      {/* CTA Button */}
      <div className="text-center">
        <Link 
          href="/events" 
          className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition shadow-lg"
        >
          Browse All Events →
        </Link>
      </div>

      {/* Info Section */}
      <div className="mt-16 bg-blue-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          About Sunmoon University
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Located in Cheonan Asan, Sunmoon University hosts numerous events throughout the year 
          including cultural festivals, academic seminars, sports competitions, club activities, 
          and networking opportunities. CampusConnect helps students stay informed and engaged 
          with campus life.
        </p>
      </div>
    </div>
  );
}
