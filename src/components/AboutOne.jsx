import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const AboutOne = () => {
  // Get the current location
  const location = useLocation();

  // Check if the current pathname is '/about'
  const isAboutPage = location.pathname === '/about'; 
  const isHomePage = location.pathname === '/'; 
  return (
    <div className="about-area-1 position-relative space-top">
      <div className="about1-shape-img1">
        <img
          className="about1-shape-img-1"
          src="assets/img/normal/about-2.jpg"
          alt="img"
        />
      </div>
      <div className="about1-shape-img2">
        <img
          className="about1-shape-img-2"
          src="assets/img/normal/about_shape1-2.png"
          alt="img"
        />
      </div>
      <div className="container">
        <div className="row gx-60 align-items-center">
          <div className="col-xl-6">
            <div className="about-content-wrap">
              <div className="title-area me-xl-5 mb-20">
                <span className="sub-title">
                  <img src="assets/img/icon/title_left.svg" alt="shape" />
                  About Us
                </span>
                <h2 className="sec-title">Connecting and Empowering Milton Residents</h2>
                <p className="sec-text mb-35">
                Discover the essence of our vibrant community, its rich history, and the values that drive us forward. Learn about our mission, vision, and the dedicated team behind the Milton Residents Association.
                </p>
              </div>
              <div className="achive-about">
                <div className="achive-about_content">
                  <div className="achive-about_icon">
                    <i className="fas fa-check" />
                  </div>
                  <div className="media-body">
                    <h3 className="box-title">A Place of Possibility: Milton, Canada</h3>
                    <p className="achive-about_text">
                    Milton is not just a place to live; it's a community brimming with opportunities and vibrant spaces. Our website serves as a vital hub for the residents of Milton, Ontario, designed to keep you connected, informed, and actively engaged in shaping our town.
                    {!isAboutPage && (
                    <span>....
                    <Link  to="/about" className="ml-2">
                      Read More <i className="fas fa-arrow-right ms-2" />
                    </Link >
                    </span> )}
                    </p> 

                  </div>
                </div>
              </div>
              {!isHomePage && (
              <div className="achive-about">
                <div className="achive-about_content">
                  <div className="achive-about_icon">
                    <i className="fas fa-check" />
                  </div>
                  <div className="media-body">
                    <h3 className="box-title">
                      Engage with Us: Let’s Talk Milton
                    </h3>
                    <p className="achive-about_text">
                    Let’s Talk!! Milton Residents Association (MRA) is your online community engagement platform. This is where you can influence the future of our community. From policy changes to new projects and initiatives, your voice matters. Share your ideas and help us make Milton an even better place to live.
                    </p>
                  </div>
                </div>
              </div>
              )}

              {!isAboutPage && (
              <div className="btn-wrap mt-20">
                {/* <Link to="/about" className="global-btn border mt-xl-0 mt-20">
                  Read More <i className="fas fa-arrow-right ms-2" />
                </Link> */}
              </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutOne;
