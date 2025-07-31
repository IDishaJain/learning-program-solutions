import React from 'react';

function BlogDetails(props) {
  return (
    <div style={{ flex: 1, padding: '10px' }}>
      <h2>Blog Details</h2>
      {props.blogs.map(blog => (
        <div key={blog.id}>
          <h3>{blog.title}</h3>
          <strong>{blog.author}</strong>
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
  );
}

export default BlogDetails;
