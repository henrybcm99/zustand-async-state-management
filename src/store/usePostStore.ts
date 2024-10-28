import { create } from 'zustand';
import { Post, PostState } from '../types/post';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export const usePostStore = create<PostState>((set) => ({
  posts: [],
  loading: false,
  error: null,

  fetchPosts: async () => {
    try {
      set({ loading: true, error: null });
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error('Failed to fetch posts');
      const posts = await response.json();
      set({ posts, loading: false });
    } catch (error) {
      set({ error: (error as Error).message, loading: false });
    }
  },

  createPost: async (newPost) => {
    try {
      set({ loading: true, error: null });
      const response = await fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(newPost),
        headers: {
          'Content-type': 'application/json',
        },
      });
      
      if (!response.ok) throw new Error('Failed to create post');
      const post = await response.json();
      
      set((state) => ({
        posts: [...state.posts, post],
        loading: false,
      }));
    } catch (error) {
      set({ error: (error as Error).message, loading: false });
    }
  },
}));