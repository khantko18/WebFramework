import "./globals.css";

export const metadata = {
  title: "CampusConnect - Sunmoon University",
  description: "Discover and join events at Sunmoon University, Cheonan Asan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        {/* Global Navigation Bar */}
        <nav className="bg-blue-600 text-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold">🎓</span>
              <h1 className="text-xl font-bold">CampusConnect</h1>
            </div>
            <div className="flex gap-6">
              <a href="/" className="hover:text-blue-200 transition">Home</a>
              <a href="/events" className="hover:text-blue-200 transition">Events</a>
              <a href="/dashboard" className="hover:text-blue-200 transition">Dashboard</a>
            </div>
          </div>
        </nav>

        {/* Page Content */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* Global Footer */}
        <footer className="bg-gray-800 text-white py-6 mt-12">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-sm">
              © 2025 CampusConnect - Sunmoon University
            </p>
            <p className="text-xs text-gray-400 mt-1">
              📍 Cheonan Asan, South Korea
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
