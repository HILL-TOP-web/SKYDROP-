import React from 'react';

export default function PostCard() {
  return (
    <div className="post-card">
      <h3>@david</h3>

      <img
        src="https://placehold.co/600x300"
        alt="post"
      />

      <p>Welcome to SKYDROP</p>

      <button>Like</button>
      <button>Comment</button>
      <button>Download</button>
    </div>
  );
}
