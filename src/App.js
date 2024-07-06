import React from "react";
import axios from 'axios';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import RouteScrollToTop from "./elements/RouteScrollToTop";
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToTop from "react-scroll-to-top";
import IndexPage from "./pages/IndexPage";
import HomeOne from "./pages/HomeOne";
import HomeTwo from "./pages/HomeTwo";
import HomeThree from "./pages/HomeThree";
import HomeFour from "./pages/HomeFour";
import HomeFive from "./pages/HomeFive";
import About from "./pages/About";
import Service from "./pages/Service";
import ServiceDetails from "./pages/ServiceDetails";
import Project from "./pages/Project";
import ProjectDetails from "./pages/ProjectDetails";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Pricing from "./pages/Pricing";
import Advocacy from "./pages/Advocacy";
import NewsUpdates from "./pages/NewsUpdates";
import Team from "./pages/Team";
import TeamDetails from "./pages/TeamDetails";
import Contact from "./pages/Contact";
import Error from "./pages/Error";  
import OpinionPolls from "./pages/OpinionPolls";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <RouteScrollToTop />
        <ScrollToTop smooth color="#196164" />
        <Routes>
          <Route exact path="/" element={<HomeOne />} /> 
          <Route exact path="/about" element={<About />} />
          <Route exact path="/service" element={<Service />} />
          <Route exact path="/news-updates" element={<NewsUpdates />} />
          <Route exact path="/advocacy" element={<Advocacy />} />
          <Route exact path="/service-details" element={<ServiceDetails />} />
          <Route exact path="/opinion-polls" element={<OpinionPolls />} />
          <Route exact path="/project" element={<Project />} />
          <Route exact path="/project-details" element={<ProjectDetails />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/blog-details/:id" element={<BlogDetails />} />
          <Route exact path="/pricing" element={<Pricing />} />
          <Route exact path="/team" element={<Team />} />
          <Route exact path="/team-details" element={<TeamDetails />} />
          <Route exact path="/contact" element={<Contact />} /> 
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
