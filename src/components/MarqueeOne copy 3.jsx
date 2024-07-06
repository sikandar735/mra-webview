import React, { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import axios from "axios";

const MarqueeOne = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        console.log("Fetching news articles...");
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=ca&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
        );
        console.log("News articles fetched:", response.data.articles);
        setArticles(response.data.articles);
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
                <div className="item" key={index}>
                  <i className="fa fa-drivers-license-o ml-2"></i>
                  <a 
                    href={article.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="icon-text"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    {article.title}
                  </a>
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarqueeOne;
