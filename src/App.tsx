import React from 'react';
import { CreatePost } from './components/CreatePost';
import { PostList } from './components/PostList';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Zustand Async State Management</h1>
        <CreatePost />
        <PostList />
      </div>
    </div>
  );
}

export default App;