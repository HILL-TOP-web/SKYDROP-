import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <Link to="/feed">Feed</Link>
      <Link to="/wallet">Wallet</Link>
      <Link to="/mining">Mining</Link>
      <Link to="/ai">SUF AI</Link>
    </aside>
  );
}
