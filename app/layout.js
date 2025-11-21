import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "CampusConnect - Sunmoon University",
  description: "Discover and join events at Sunmoon University, Cheonan Asan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        {/* Global Navigation Bar - CLIENT COMPONENT */}
        <Navbar />

        {/* Page Content */}
        <main className="min-h-screen">{children}</main>

        {/* Global Footer */}
        <footer className="bg-gray-800 text-white py-6 mt-12">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-sm">© 2025 CampusConnect - Sunmoon University</p>
            <p className="text-xs text-gray-400 mt-1">
              📍 Cheonan Asan, South Korea
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
