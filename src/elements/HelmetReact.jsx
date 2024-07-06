import React from "react";
import { Helmet } from "react-helmet";
const HelmetReact = ({ title }) => {
  return (
    <Helmet>
      <title>
        {title} || Milton Residents Association-MRA  
      </title>
      <meta
        name="description"
        content="Milton Residents Association-MRA  "
      />
    </Helmet>
  );
};

export default HelmetReact;
