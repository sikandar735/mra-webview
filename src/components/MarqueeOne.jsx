import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import axios from "axios";

const MarqueeOne = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          "https://mra-backend-api.vercel.app/api/news"
        );
        // Assuming the response.data is an array of news objects
        setNewsData(response.data);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []); // Empty dependency array ensures useEffect runs only once

  return (
    <div className="marquee-area bg-smoke">
      <div className="container-fluid p-0 overflow-hidden">
        <div className="slider__marquee">
          <div className="marquee_mode">
            <Marquee speed={50}>
              {newsData.map((news) => (
                <div key={news._id} className="item">
                  <a href={news.url} target="_blank" rel="noopener noreferrer">
                    {/* You can customize the icon or style here */}
                    <i className="fa fa-drivers-license-o ml-2"></i>
                    <span className="icon-text">{news.title}</span>
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
