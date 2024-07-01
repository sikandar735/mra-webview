import React, { useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import HelmetReact from "../elements/HelmetReact";
import HeaderOne from "../components/HeaderOne";
import Breadcrumb from "../components/Breadcrumb";
import MarqueeOne from "../components/MarqueeOne";
import FooterOne from "../components/FooterOne";
import ProcessOne from "../components/ProcessOne";
import Newsletter from "../components/Newsletter";
import ServiceView from "../components/ServiceView";
import AppointmentTwo from "../components/AppointmentTwo";
import AdvocacyPetition from "../components/AdvocacyPetition";


const Service = () => {
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
      <HelmetReact title={"Service"} />

      {/* MarqueeOne */}
      <MarqueeOne />

      {/* HeaderFive */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb title="Service" />

      {/* ProcessOne */}
      {/* <ProcessOne /> */}
      
      {/* ServiceOne */}
      {/* <ServiceView /> */}

      <AdvocacyPetition/>

      {/* AppointmentTwo */}
      {/* <AppointmentTwo /> */}

      {/* Newsletter */}
      <Newsletter />

      {/* FooterOne */}
      <FooterOne />

    </>
  );
};

export default Service;
