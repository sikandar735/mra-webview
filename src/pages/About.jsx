import React, { useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import MarqueeOne from "../components/MarqueeOne";
import HelmetReact from "../elements/HelmetReact";
import HeaderOne from "../components/HeaderOne";
import Breadcrumb from "../components/Breadcrumb";
import GoalArea from "../components/GoalArea";
import AboutOne from "../components/AboutOne";
import ProcessThree from "../components/ProcessThree";
import TestimonialOne from "../components/TestimonialOne";
import CounterOne from "../components/CounterOne";
import WhyChoose from "../components/WhyChoose";
import Candidate from "../components/Candidate";
import FooterOne from "../components/FooterOne";
import Newsletter from "../components/Newsletter";

const About = () => {
  let [active, setActive] = useState(true);
  useEffect(() => {
    setTimeout(function () {
      setActive(false);
    }, 500);
  }, []);
  return (
    <>
      {/* Preloader */}
      {active === true && <Preloader />}

      {/* Helmet */}
      <HelmetReact title={"About"} />

     {/* MarqueeOne */}
     <MarqueeOne />

      {/* HeaderFive */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb title="About Us" />

      {/* AboutOne */}
      <AboutOne />

      {/* GoalArea */}
      {/* <GoalArea /> */}


      {/* ProcessThree */}
      {/* <ProcessThree /> */}

      {/* TestimonialOne */}
      {/* <div className="space">
        <TestimonialOne />
      </div> */}

      {/* WhyChoose */}
      {/* <div className="space">
        <WhyChoose />
      </div> */}

      {/* Candidate */}
      <div className="space">
        <Candidate />
      </div>

      {/* CounterOne */}
      {/* <CounterOne /> */}

      {/* Newsletter */}
      <Newsletter />

      {/* FooterOne */}
      <FooterOne />

    </>
  );
};

export default About; 