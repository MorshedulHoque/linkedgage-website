// src/components/Blog.js
import React, { useEffect, useState } from 'react';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
const Blog = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const context = require.context('../content/blog', false, /\.md$/);
            const posts = context.keys().map((key) => {
                const post = context(key);
                const { data, content } = matter(post.default);
                return { ...data, content };
            });
            setPosts(posts);
        };

        fetchPosts();
    }, []);

    return (
        <div>
            <h1>Blog</h1>
            {posts.map((post, index) => (
                <div key={index}>
                    <h2>{post.title}</h2>
                    <p>{new Date(post.date).toDateString()}</p>
                    <ReactMarkdown>{post.content}</ReactMarkdown>
                </div>
            ))}
        </div>
    );
};

export default Blog;
