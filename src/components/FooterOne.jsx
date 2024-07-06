import React from "react";
import { Link } from "react-router-dom";
import footerBg from "../assets/img/bg/footer-bg1-1.png";
import footerLogo from "../assets/img/logo.png";

const FooterOne = () => {
  return (
    <footer
      className="footer-wrapper footer-layout1"
      style={{ backgroundImage: `url(${footerBg})` }}
    >
      <div className="container">
        <div className="widget-area">
          <div className="row justify-content-between">
            <div className="col-md-6 col-xl-5">
              <div className="widget footer-widget widget-about">
                <div className="about-logo">
                  <Link to="/">
                    <img className="footer-logo text-white" src={footerLogo} alt="Milton Residents Association-MRA" />
                  </Link>
                </div>
                <p className="footer-text mb-30">
                  Welcome to Milton Residents Association-MRA your serene escape in the heart of Canada. Nestled in the heart of Canada, our modern community offers comfort and convenience amidst breathtaking natural surroundings. Experience the best of Milton living with us.
                </p>
                <div className="social-btn style3">
                  <Link to="#" tabIndex={-1}>
                    <i className="fa fa-instagram" />
                  </Link>
                  <Link to="#" tabIndex={-1}>
                    <i className="fa fa-linkedin" />
                  </Link>
                  <Link to="#" tabIndex={-1}>
                    <i className="fa fa-twitter" />
                  </Link>
                  <Link to="#" tabIndex={-1}>
                    <i className="fa fa-facebook-f" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">Useful Links</h3>
                <div className="menu-all-pages-container">
                  <ul className="menu">
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/service">Services</Link>
                    </li>
                    <li>
                      <Link to="#">News & Updates</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="widget footer-widget me-xl-3">
                <h3 className="widget_title">Contact</h3>
                <div className="widget-contact2">
                  <div className="widget-contact-grid">
                    <i className="fa fa-phone" />
                    <div className="contact-grid-details">
                      <h6>
                        <Link to="#">+1 (647)-206-2227</Link>
                      </h6>
                    </div>
                  </div>
                  <div className="widget-contact-grid">
                    <i className="fa fa-envelope" />
                    <div className="contact-grid-details">
                      <h6>
                        <Link to="#">
                          info@miltonresidentsassociation.ca
                        </Link>
                      </h6>
                    </div>
                  </div>
                  <div className="widget-contact-grid">
                    <i className="fa fa-map-marker" />
                    <div className="contact-grid-details">
                      <h6>
                        Milton, Ontario Canada
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright-wrap">
          <div className="row gy-3 justify-content-lg-between justify-content-center">
            <div className="col-auto align-self-center">
              <p className="copyright-text text-center">
                © <Link to="#">Milton Residents Association-MRA </Link> 2024 | All Rights Reserved
              </p>
            </div>
            <div className="col-auto">
              <div className="footer-links">
                <Link to="/contact">Privacy</Link>
                <Link to="/contact">Terms</Link>
                <Link to="/contact">Sitemap</Link>
                <Link to="/contact">Help</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterOne;
