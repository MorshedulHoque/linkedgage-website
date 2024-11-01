// src/components/blog/Blog.js
import React from "react";
import { Link } from "react-router-dom";
import matter from "gray-matter";

const Blog = () => {
  const context = require.context("../../posts", true, /\.md$/);
  const posts = context.keys().map((key) => {
    const content = context(key);
    const { data } = matter(content.default);
    return { ...data, slug: key.replace('./', '').replace('.md', '') };
  });

  return (
    <div>
      <h1>Blog Posts</h1>
      {posts.map((post) => (
        <div key={post.slug}>
          <h2>
            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
          </h2>
          <p>By {post.author} on {new Date(post.date).toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  );
};

export default Blog;
