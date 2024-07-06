import React, { useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import HelmetReact from "../elements/HelmetReact";
import HeaderOne from "../components/HeaderOne";
import HeroOne from "../components/HeroOne";
import ServiceOne from "../components/ServiceOne";
import AboutTwo from "../components/AboutTwo";
import CTAOne from "../components/CTAOne";
import AboutOne from "../components/AboutOne";
import ProcessOne from "../components/ProcessOne";
import PortfolioOne from "../components/PortfolioOne";
import TestimonialOne from "../components/TestimonialOne";
import MarqueeOne from "../components/MarqueeOne";
import CounterOne from "../components/CounterOne";
import TeamOne from "../components/TeamOne";
import MainSlider from "../components/MainSlider";
import FaqOne from "../components/FaqOne";
import BlogOne from "../components/BlogOne";
import FooterOne from "../components/FooterOne";
import Newsletter from "../components/Newsletter";
import PollAndComments from "../components/PollAndComments";

const HomeOne = () => {
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
      <HelmetReact title={"Home"} />

      {/* MarqueeOne */}
      <MarqueeOne />

      {/* HeaderOne */}
      <HeaderOne />

      {/* MainSlider */}
      <MainSlider /> 

      {/* HeroOne */}
      <HeroOne />

      {/* CTA_One */}
      {/* <CTAOne /> */}

      {/* AboutOne */}
      <AboutOne />

      {/* AboutTwo */}
      <AboutTwo />

      {/* ProcessOne */}
      {/* <ProcessOne /> */}

      {/* PortfolioOne */}
      {/* <PortfolioOne /> */}

      {/* TestimonialOne */}
      {/* <div className="space-bottom"><TestimonialOne /></div> */}
 
      {/* TeamOne */}
      {/* <TeamOne /> */}

      {/* CounterOne */}
      {/* <CounterOne /> */}
      
      {/* FaqOne */}
      <div className="faq-area-1 bg-smoke space">
        <FaqOne />
      </div>

      {/* ServiceOne */}
      <ServiceOne />

      {/* BlogOne */}
      <BlogOne />

      {/* Newsletter */}
      <Newsletter />

      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default HomeOne;
