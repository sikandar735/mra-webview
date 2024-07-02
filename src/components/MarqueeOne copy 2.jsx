import React, { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import axios from "axios";

const MarqueeOne = () => {
  const [articles, setArticles] = useState([]);

  console.log("Hello");
  dfgdfgsdfg
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          'https://newsapi.org/v2/top-headlines?country=ca&apiKey=7c49f49737984dad84b4e9255860fbfc'
        );
        setArticles(response.data.articles);
        console.log(response.data.articles); // Check the structure of articles
      } catch (error) {
        console.error("Error fetching the news articles", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="marquee-area bg-smoke">
      <div className="container-fluid p-0 overflow-hidden">
        <div className="slider__marquee">
          <div className="marquee_mode">
            <Marquee speed={50}>
              {articles.map((article, index) => (
                <a
                  href={article.url}
                  className="item" 
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-drivers-license-o ml-2"></i>
                  <span className="icon-text">{article.title}</span>
                </a>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarqueeOne;
