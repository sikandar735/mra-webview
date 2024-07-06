import React from "react";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";

const FaqOne = () => {
  return (
    <section className=" ">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-xl-6">
            <div className="title-area me-xl-5 mb-20">
              <span className="sub-title">
                <img src="assets/img/icon/title_left.svg" alt="shape" />
                Ask Question
              </span>
              <h2 className="sec-title style2">Innovation Moves You Forward</h2>
            </div>
            <div className="accordion-area accordion" id="faqAccordion">
              <div className="accordion-card active">
                <div className="accordion-header" id="collapse-item-1">
                  <button
                    className="accordion-button "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-1"
                    aria-expanded="true"
                    aria-controls="collapse-1"
                  >
                    What is the area covered?
                  </button>
                </div>
                <div
                  id="collapse-1"
                  className="accordion-collapse collapse show"
                  aria-labelledby="collapse-item-1"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <p className="faq-text">
                      Our services cover an extensive area of 367 kilometers, ensuring that we reach a wide range of clients and deliver exceptional service across a vast region.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-card ">
                <div className="accordion-header" id="collapse-item-2">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-2"
                    aria-expanded="false"
                    aria-controls="collapse-2"
                  >
                    What is the population size you serve?
                  </button>
                </div>
                <div
                  id="collapse-2"
                  className="accordion-collapse collapse "
                  aria-labelledby="collapse-item-2"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <p className="faq-text">
                      We serve a population size of 158,249 individuals, providing our services to a diverse and dynamic community that benefits from our innovative solutions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-card ">
                <div className="accordion-header" id="collapse-item-3">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-3"
                    aria-expanded="false"
                    aria-controls="collapse-3"
                  >
                    What percentage of your workforce is involved in education?
                  </button>
                </div>
                <div
                  id="collapse-3"
                  className="accordion-collapse collapse "
                  aria-labelledby="collapse-item-3"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <p className="faq-text">
                      A significant 65% of our workforce is dedicated to education, highlighting our commitment to fostering knowledge, skill development, and continuous learning within our community.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-card ">
                <div className="accordion-header" id="collapse-item-4">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-4"
                    aria-expanded="false"
                    aria-controls="collapse-4"
                  >
                    How many client reviews do you have?
                  </button>
                </div>
                <div
                  id="collapse-4"
                  className="accordion-collapse collapse "
                  aria-labelledby="collapse-item-4"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <p className="faq-text">
                      We have received over 900 client reviews, reflecting our dedication to delivering high-quality services and maintaining strong relationships with our clients.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="ms-xl-5">
              <p className="counter-text">
                We are proud to cover an area of 367 kilometers, serving a population of 158,249 people. With 65% of our workforce dedicated to education and over 900 client reviews, our commitment to excellence is evident in everything we do.
              </p>
              <div className="counter-box_wrapper">
                <div className="counter-box">
                  <div className="counter-box_icon">
                    <img
                      src="assets/img/icon/counter-icon_1-1.svg"
                      alt="icon"
                    />
                  </div>
                  <div className="media-body">
                    <h2 className="counter-box_number">
                      <TrackVisibility once>
                        {({ isVisible }) =>
                          isVisible && (
                            <span className="counter-number">
                              <CountUp delay={0} start={0} end={367} />
                              km
                            </span>
                          )
                        }
                      </TrackVisibility>
                    </h2>
                    <p className="counter-box_text">Area Covered</p>
                  </div>
                </div>
                <div className="counter-box">
                  <div className="counter-box_icon">
                    <img
                      src="assets/img/icon/counter-icon_1-2.svg"
                      alt="icon"
                    />
                  </div>
                  <div className="media-body">
                    <h2 className="counter-box_number">
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
                    <p className="counter-box_text">Population Size</p>
                  </div>
                </div>
                <div className="counter-box">
                  <div className="counter-box_icon">
                    <img
                      src="assets/img/icon/counter-icon_1-3.svg"
                      alt="icon"
                    />
                  </div>
                  <div className="media-body">
                    <h2 className="counter-box_number">
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
                    <p className="counter-box_text">Education Workforce</p>
                  </div>
                </div>
                <div className="counter-box">
                  <div className="counter-box_icon">
                    <img
                      src="assets/img/icon/counter-icon_1-4.svg"
                      alt="icon"
                    />
                  </div>
                  <div className="media-body">
                    <h2 className="counter-box_number">
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
                    <p className="counter-box_text">Client Review</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqOne;
