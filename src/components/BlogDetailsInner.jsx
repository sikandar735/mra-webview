import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import blogData from '../data/data.json'; // Import blog data from JSON file

const BlogDetailsInner = () => {
  const { id } = useParams();
  console.log('Current id:', id); // Check if id is correctly received

  const [blogDetails, setBlogDetails] = useState(null);
  const [error, setError] = useState(null); // Add state for error handling

  useEffect(() => {
    const findBlogDetails = () => {
      console.log('Blog data:', blogData); // Check the structure of blogData
      const blog = blogData.blogs.find(blog => blog.id === parseInt(id));
      console.log('Found blog:', blog); // Check if blog is found
      if (blog) {
        setBlogDetails(blog);
      } else {
        setError('Blog not found'); // Handle non-existent blog ID
      }
    };

    findBlogDetails();
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>; // Display error message
  }

  if (!blogDetails) {
    return <div>Loading...</div>;
  }

  const { title, content, image } = blogDetails;

  return (
    <section className="blog-area mt-4 mb-4">
      <div className="container">
        <div className="blog-details-card">
          <h2 className="blog-title">{title}</h2>
          <div className="blog-thumb">
            <img src={image} alt={title} />
          </div>
          <div className="blog-content">
            {id === '1' && (
              <a href={content} target="_blank" rel="noopener noreferrer">
                Visit the Community Events Calendar
              </a>
            )}
            {id === '2' && (
              <p dangerouslySetInnerHTML={{ __html: content }} />
            )}
            {id === '3' && (
              <ul>
                {content.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailsInner;
