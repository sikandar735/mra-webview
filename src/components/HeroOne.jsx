import React from "react";
import { Link } from "react-router-dom";

const HeroOne = () => {
  return (
    <div
      className="hero-wrapper bg-smoke hero-1"
      id="hero" 
    >
      <div className="container">
        <div className="row align-items-end">
          <div className="col-xl-6">
            <div className="hero-style1">
              <span className="sub-title">
                <img src="assets/img/icon/title_left.svg" alt="shape" />
                Welcome Message
              </span>
              <h1 className="hero-title">
              Mayor Gordon Krantz
              </h1>
              <p className="hero-text">
              Welcome to the Milton Residents Association website, your hub for community engagement and support. Connect with local government, stay informed about events, and participate in our activities. Thank you for your support.
              </p>
              <div className="btn-group">

                <Link to="/about" className="secondary-common-button">
                  Learn More 
                </Link>
                <a to="https://sikandar735.github.io/comming-soon/" className="secondary-common-button">
                  Join Now
                </a> 

              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="hero-image-wrapp">
              <div className="hero-thumb text-center">
                <img src="assets/img/normal/representative-1.png" alt="img" />
              </div>
              <div className="hero-shape1" />
              {/* <div className="hero-shape2" /> */}
              <div className="hero-shape3" />
              <div className="hero-shape4" />
              <div className="hero-shape5 spin" />
            </div>
          </div>
        </div>
        {/* <div className="hero-item-content">
          <div className="hero-card_wrapper">
            <div className="hero-card">
              <div className="hero-card_icon">
                <img src="assets/img/icon/1.svg" alt="img" />
              </div>
              <div className="hero-card_content">
                <h4 className="box-title">Growth Acceler</h4>
                <p className="hero-card_text">A  MRA consultant</p>
              </div>
            </div>
            <div className="hero-card">
              <div className="hero-card_icon">
                <img src="assets/img/icon/2.svg" alt="img" />
              </div>
              <div className="hero-card_content">
                <h4 className="box-title">Growth Acceler</h4>
                <p className="hero-card_text">Consultan professional</p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default HeroOne;
