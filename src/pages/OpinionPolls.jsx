import React, { useEffect, useState } from "react"; 
import Preloader from "../elements/Preloader";
import MarqueeOne from "../components/MarqueeOne";
import HelmetReact from "../elements/HelmetReact";
import HeaderOne from "../components/HeaderOne";
import Breadcrumb from "../components/Breadcrumb";
import FooterOne from "../components/FooterOne";
import Newsletter from "../components/Newsletter";
import PollingComponent from '../components/PollAndComments'

const OpinionPolls = () => {
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
  
        {/* PollingComponent */}
        <PollingComponent/>
  
        {/* Newsletter */}
        <Newsletter />
  
        {/* FooterOne */}
        <FooterOne />
  
      </>
    );
  };
  
  export default OpinionPolls; 