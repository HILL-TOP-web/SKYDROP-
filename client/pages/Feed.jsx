import React from 'react';
import MainLayout from '../layouts/MainLayout';
import PostCard from '../components/PostCard';

export default function Feed() {
  return (
    <MainLayout>
      <h1>Feed</h1>

      <PostCard />
    </MainLayout>
  );
}
