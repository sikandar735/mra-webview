import React from "react";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
const AboutTwo = () => {
  return (
    <div className="space">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-12 mx-auto">
            <div className="title-area mb-30">
              <span className="sub-title">
                <img src="assets/img/icon/title_left.svg" alt="shape" />
                CITY WITH EQUITY - EFFICIENCY - OPPORTUNITY
              </span>
              <h5 className="sec-title style2">
              Infrastructures, Wide Spaces
              & Flawless Attractions
              </h5>
              <br></br>
              <h5>A Place of Possibility Milton, Canada</h5>
              <p className="sec-text">
              Let’s Talk Milton is our online community engagement platform. Follow and participate in engagement opportunities to help shape projects, policies and initiatives in your community. Share your ideas!
              </p>
            </div>
            <div className="checklist">
              <ul>
                <li>
                  <i className="fas fa-check-circle" />
                  Improving all types of opportunities
                </li>
                <li>
                  <i className="fas fa-check-circle" />
                  Quick solutions for daily problems
                </li>
                <li>
                  <i className="fas fa-check-circle" />
                  Community that grows larger
                </li>
                <li>
                  <i className="fas fa-check-circle" />
                  Best time and place to start business{" "}
                </li>
              </ul>
            </div> 
            <div className="btn-group">
              {/* <Link to="/about" className="global-btn style2">
                Explore More <img src="assets/img/icon/right-icon.svg" alt="Milton Residents Association-MRA" />
              </Link> */}
            </div>
          </div>
   
        </div>
      </div>
    </div>
    
  );
};

export default AboutTwo;
