import React, { useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import HelmetReact from "../elements/HelmetReact";
import HeaderOne from "../components/HeaderOne";
import Breadcrumb from "../components/Breadcrumb";
import FooterOne from "../components/FooterOne";
// import Newsletter from "../components/Newsletter";  
import BlogOne from "../components/BlogOne";



const NewsUpdates = () => {
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
      <HelmetReact title={"News Updates"} />

      {/* HeaderFive */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb title="News Updates" />

      {/* BlogOne */}
      <BlogOne/>

      {/* Newsletter */}
      {/* <Newsletter /> */}

      {/* FooterOne */}
      <FooterOne />

    </>
  );
};

export default NewsUpdates;
