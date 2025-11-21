"use client"; // CLIENT COMPONENT - Needs state and onClick

import { useState } from "react";

export default function LikeButton({ eventId, initialLikes }) {
  const [likes, setLikes] = useState(initialLikes);
  const [hasLiked, setHasLiked] = useState(false);

  const handleLike = () => {
    if (!hasLiked) {
      setLikes(likes + 1);
      setHasLiked(true);
      // In a real app, you would call an API here to persist the like
    } else {
      setLikes(likes - 1);
      setHasLiked(false);
    }
  };

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
    </div>
  );
}

