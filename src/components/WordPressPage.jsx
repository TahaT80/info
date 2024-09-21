import React, { useState, useEffect } from 'react';

const WordPressPage = () => {
  const [content, setContent] = useState(null);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchPage = async () => {
      try {
        const response = await fetch('http://ahtt.kesug.com/wp-json/wp/v2/pages?slug=about');
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data = await response.json();
        if (data.length > 0) {
          setContent(data[0]);
        } else {
          setContent({ title: { rendered: 'Page Not Found' }, content: { rendered: 'No content found' } });
        }
      } catch (err) {
        console.error('Error fetching data:', err.message);
        setError(err.message);
      }
    };

    fetchPage();
  }, []);

  

  return (
    <div className='h-screen flex items-center justify-center'>
      {content ? (
        <div>
          <h1 dangerouslySetInnerHTML={{ __html: content.title.rendered }} />
          <div dangerouslySetInnerHTML={{ __html: content.content.rendered }} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default WordPressPage;
