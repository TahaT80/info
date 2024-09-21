import React, { useState, useEffect } from "react";
import axios from "axios";

const WordPressPage = ({ slug }) => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    const fetchPage = async () => {
      try {
        const response = await axios.get(
          `http://ahtt.kesug.com/wp-json/wp/v2/pages?slug=about`
        );
        console.log("🚀 ~ fetchPage ~ response:", response);
        setContent(response.data[0]);
      } catch (error) {
        console.error("Error fetching data:", error.message);
        if (error.response) {
          console.error("Error response:", error.response);
        } else if (error.request) {
          console.error("Error request:", error.request);
        } else {
          console.error("General error:", error.message);
        }
      }
    };
    fetchPage();
  }, [slug]);

  return (
    <div>
      {content ? (
        <div>
          <h1>{content.title.rendered}</h1>
          <div dangerouslySetInnerHTML={{ __html: content.content.rendered }} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default WordPressPage;
