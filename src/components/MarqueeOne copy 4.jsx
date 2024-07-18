import React from "react";
import Marquee from "react-fast-marquee";
const MarqueeOne = () => {
  return (
    <div className="marquee-area bg-smoke">
      <div className="container-fluid p-0 overflow-hidden">
        <div className="slider__marquee">
          <div className="marquee_mode">
            <Marquee speed={50}>
              <div className="item">
               
                  {/* <img src="assets/img/icon/marquee-icon-1-2.svg" alt="img" /> */}
                  <i class="fa fa-drivers-license-o ml-2"></i>
                  <span className="icon-text">Breaking Barriers</span>
               
              </div>
              <div className="item">
               
                  {/* <img src="assets/img/icon/marquee-icon-1-1.svg" alt="img" /> */}
                  <i class="fa fa-drivers-license-o ml-2"></i>
                  <span className="icon-text"> New Park Opening in Downtown Milton</span>
               
              </div>
              <div className="item">
               
                  {/* <img src="assets/img/icon/marquee-icon-1-2.svg" alt="img" /> */}
                  <i class="fa fa-drivers-license-o ml-2"></i>
                  <span className="icon-text"> Milton High School Achieves Record Exam Results</span>
               
              </div>
              <div className="item">
               
                  {/* <img src="assets/img/icon/marquee-icon-1-1.svg" alt="img" /> */}
                  <i class="fa fa-drivers-license-o ml-2"></i>
                  <span className="icon-text"> Local  MRA Expo to be Held Next Month</span>
               
              </div>
              <div className="item">
               
                  {/* <img src="assets/img/icon/marquee-icon-1-1.svg" alt="img" /> */}
                  <i class="fa fa-drivers-license-o ml-2"></i>
                  <span className="icon-text"> Milton Charity Run Raises Funds for Community Projects</span>
               
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarqueeOne;
