// src/components/blog/BlogPost.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import matter from "gray-matter";

const BlogPost = () => {
  const { slug } = useParams();
  const [content, setContent] = useState("");
  const [metadata, setMetadata] = useState({});

  useEffect(() => {
    const fetchPost = async () => {
      const postFile = await import(`../../posts/${slug}.md`);
      const { data, content } = matter(postFile.default);
      setMetadata(data);
      setContent(content);
    };

    fetchPost();
  }, [slug]);

  return (
    <div>
      <h1>{metadata.title}</h1>
      <p>By {metadata.author} on {new Date(metadata.date).toLocaleDateString()}</p>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default BlogPost;
