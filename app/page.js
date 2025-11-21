import Link from "next/link";

// Metadata for SEO
export const metadata = {
  title: "CampusConnect - Sunmoon University",
  description: "Event management system for Sunmoon University, Cheonan Asan",
};

// HOME PAGE - Server Component (Public - No login required)
export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with Title */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="text-6xl mb-6">🎓</div>
          <h1 className="text-5xl font-bold mb-4">
            CampusConnect
          </h1>
          <p className="text-xl mb-8">
            Event Management System for Sunmoon University
          </p>
          <Link
            href="/login"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-50 transition shadow-lg"
          >
            Login to Access System
          </Link>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* About This Web Section */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span>ℹ️</span>
              About This Web Application
            </h2>
            <div className="text-gray-700 space-y-4 leading-relaxed">
              <p>
                <strong>CampusConnect</strong> is a comprehensive event management platform designed specifically 
                for Sunmoon University students and administrators.
              </p>
              <p>
                This platform allows students to:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Browse and discover upcoming campus events</li>
                <li>Search for events by category or keywords</li>
                <li>View detailed information about each event</li>
                <li>Like and save favorite events</li>
              </ul>
              <p>
                Administrators can:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Access a powerful dashboard to manage events</li>
                <li>Create, edit, and delete events</li>
                <li>View event statistics and analytics</li>
                <li>Monitor recent activities</li>
              </ul>
              <p>
                Built with modern web technologies including <strong>React</strong>, <strong>Next.js</strong>, 
                and following best practices for server-side rendering, client-side interactivity, 
                and API route management.
              </p>
            </div>
          </div>
        </section>

        {/* University Information Section */}
        <section>
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span>🏫</span>
              About Sunmoon University
            </h2>
            <div className="space-y-6">
              {/* University Name */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Sunmoon University (선문대학교)
                </h3>
                <p className="text-gray-700">
                  A comprehensive private university in South Korea, known for its diverse programs 
                  and international perspective.
                </p>
              </div>

              {/* Location */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <span>📍</span> Location
                </h3>
                <p className="text-gray-700">
                  70 Sunmoon-ro 221, Tangjeong-myeon, Asan-si, 
                  Chungcheongnam-do, South Korea
                </p>
                <p className="text-gray-600 text-sm mt-1">
                  Cheonan Campus, Asan
                </p>
              </div>

              {/* Campus Features */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <span>✨</span> Campus Life
                </h3>
                <div className="text-gray-700">
                  <p className="mb-2">
                    Sunmoon University offers a vibrant campus life with:
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Cultural festivals and celebrations</li>
                    <li>Academic workshops and seminars</li>
                    <li>Sports tournaments and competitions</li>
                    <li>Club activities and student organizations</li>
                    <li>Career fairs and networking events</li>
                    <li>International exchange programs</li>
                  </ul>
                </div>
              </div>

              {/* Contact */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <span>📞</span> Contact Information
                </h3>
                <div className="text-gray-700 space-y-1">
                  <p>Website: <a href="https://www.sunmoon.ac.kr" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.sunmoon.ac.kr</a></p>
                  <p>For event-related inquiries, please login and contact the administrators.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Login CTA */}
        <section className="mt-12 text-center">
          <div className="bg-blue-600 text-white rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-3">
              Ready to Get Started?
            </h3>
            <p className="text-lg mb-6">
              Login now to access campus events and features
            </p>
            <Link
              href="/login"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-50 transition shadow-lg"
            >
              Login Here
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
