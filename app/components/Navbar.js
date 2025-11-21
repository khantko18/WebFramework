"use client"; // CLIENT COMPONENT - Needs state and interactivity

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import BackButton from "./BackButton";

export default function Navbar() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Fetch current user - re-fetch when pathname changes
    fetch("/api/auth/me")
      .then((res) => res.json())
      .then((data) => {
        setUser(data.user);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [pathname]); // Re-fetch when route changes

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    setUser(null);
    router.push("/");
    router.refresh();
  };

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition">
            <span className="text-2xl font-bold">🎓</span>
            <h1 className="text-xl font-bold">CampusConnect</h1>
          </Link>
          
          {/* Back Button - Show on all pages except home and login */}
          {pathname !== "/" && pathname !== "/login" && (
            <BackButton />
          )}
        </div>
        
        <div className="flex items-center gap-6">
          {/* Show navigation links only if logged in */}
          {user && (
            <>
              {/* Admin can see both Dashboard and Events */}
              {user.role === "admin" && (
                <>
                  <Link href="/dashboard" className="hover:text-blue-200 transition">
                    Dashboard
                  </Link>
                  <Link href="/events" className="hover:text-blue-200 transition">
                    Events
                  </Link>
                </>
              )}
              
              {/* Regular users can only see Events */}
              {user.role === "user" && (
                <Link href="/events" className="hover:text-blue-200 transition">
                  Events
                </Link>
              )}
            </>
          )}
          
          {loading ? (
            <span className="text-blue-200">...</span>
          ) : user ? (
            // Logged in - show user info and logout
            <div className="flex items-center gap-4">
              <span className="text-sm">
                👤 {user.name} {user.role === "admin" && "(Admin)"}
              </span>
              <button
                onClick={handleLogout}
                className="bg-white text-blue-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-50 transition"
              >
                Logout
              </button>
            </div>
          ) : (
            // Not logged in - show Login button
            <Link
              href="/login"
              className="bg-white text-blue-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-50 transition"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
