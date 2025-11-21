"use client"; // CLIENT COMPONENT - Needs state and onClick

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LikeButton({ eventId, initialLikes }) {
  const [likes, setLikes] = useState(initialLikes);
  const [hasLiked, setHasLiked] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Fetch current user
    fetch("/api/auth/me")
      .then((res) => res.json())
      .then((data) => {
        setUser(data.user);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleLike = async () => {
    // Check if user is logged in
    if (!user) {
      alert("Please login to like events!");
      router.push("/login");
      return;
    }

    const newLikeStatus = !hasLiked;
    const newLikes = newLikeStatus ? likes + 1 : likes - 1;

    // Optimistically update UI
    setLikes(newLikes);
    setHasLiked(newLikeStatus);

    try {
      // Update likes in backend
      const res = await fetch(`/api/events/${eventId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ likes: newLikes }),
      });

      if (!res.ok) {
        // Revert on error
        setLikes(likes);
        setHasLiked(hasLiked);
        alert("Failed to update like");
      } else {
        // Refresh the page data
        router.refresh();
      }
    } catch (error) {
      // Revert on error
      setLikes(likes);
      setHasLiked(hasLiked);
      alert("Error updating like");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center gap-4">
        <button
          disabled
          className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold bg-gray-100 text-gray-400 cursor-not-allowed"
        >
          <span className="text-xl">🤍</span>
          <span>Loading...</span>
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4">
      <button
        onClick={handleLike}
        className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition transform active:scale-95 ${
          hasLiked
            ? "bg-red-500 text-white hover:bg-red-600"
            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
        }`}
      >
        <span className="text-xl">{hasLiked ? "❤️" : "🤍"}</span>
        <span>{hasLiked ? "Liked" : "Like"}</span>
      </button>
      <div className="text-gray-700">
        <span className="font-bold text-2xl">{likes}</span>
        <span className="text-sm text-gray-500 ml-2">
          {likes === 1 ? "person likes" : "people like"} this
        </span>
      </div>
      {!user && (
        <p className="text-sm text-gray-500 italic">
          (Login required to like events)
        </p>
      )}
    </div>
  );
}
