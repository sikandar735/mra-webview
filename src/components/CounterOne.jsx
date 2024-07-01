import React from "react";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
const CounterOne = () => {
  return (
    <div className="container mt-5">
      <div className="counter-area-2 bg-smoke">
        <div className="row gy-40 justify-content-between counter-section ">
          <div className="col-sm-6 col-lg-auto">
            <div className="counter-card style2">
              <div className="media-body">
                <h2 className="counter-card_number">
                  <TrackVisibility once>
                    {({ isVisible }) =>
                      isVisible && (
                        <span className="counter-number">
                          <CountUp delay={0} start={0} end={(366.6)} />
                          km
                        </span>
                      )
                    }
                  </TrackVisibility>
                </h2>
                <p className="counter-card_text">Area Covered </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-auto">
            <div className="counter-card style2">
              <div className="media-body">
                <h2 className="counter-card_number">
                  <TrackVisibility once>
                    {({ isVisible }) =>
                      isVisible && (
                        <span className="counter-number">
                          <CountUp delay={0} start={0} end={158249} /> 
                        </span>
                      )
                    }
                  </TrackVisibility>
                </h2>
                <p className="counter-card_text">Population Size</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-auto">
            <div className="counter-card style2">
              <div className="media-body">
                <h2 className="counter-card_number">
                  <TrackVisibility once>
                    {({ isVisible }) =>
                      isVisible && (
                        <span className="counter-number">
                          <CountUp delay={0} start={0} end={65} />
                          %
                        </span>
                      )
                    }
                  </TrackVisibility>
                </h2>
                <p className="counter-card_text">Education Workforce</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-auto">
            <div className="counter-card style2">
              <div className="media-body">
                <h2 className="counter-card_number">
                  <TrackVisibility once>
                    {({ isVisible }) =>
                      isVisible && (
                        <span className="counter-number">
                          <CountUp delay={0} start={0} end={900} />
                          +
                        </span>
                      )
                    }
                  </TrackVisibility>
                </h2>
                <p className="counter-card_text">Client review</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterOne;
