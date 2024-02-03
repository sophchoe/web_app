// client/src/components/HomePage/HomePage.js

import React from 'react';
import FeaturedPosts from './FeaturedPosts/FeaturedPosts';
import RecentPosts from './RecentPosts/RecentPosts';

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Welcome to Your App</h1>

      <section className="featured-section">
        <h2>Featured Posts</h2>
        <FeaturedPosts />
      </section>

      <section className="recent-section">
        <h2>Recent Posts</h2>
        <RecentPosts />
      </section>
    </div>
  );
};

export default HomePage;
