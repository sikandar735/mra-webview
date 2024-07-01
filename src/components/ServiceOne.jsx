import React from "react";
import { Link } from "react-router-dom";

const ServiceOne = () => {
  return (
    <div className="service-area-1 space overflow-hidden">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7">
            <div className="title-area text-center">
              <span className="sub-title">
                <img src="assets/img/icon/title_left.svg" alt="shape" />
                Latest service
              </span>
              <h2 className="sec-title style2">
                We provide a wide range of services  
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row gx-30 gy-30 justify-content-center">

          <div className="col-md-6">
            <div className="service-card">
              <div className="service-card_img">
                <img src="assets/img/service/service-1-1.jpg" alt="img" />
              </div>
              <div className="service-card_content">
                <h4 className="service-card_title">
                  <Link to="/service-details">Dashboard Overview</Link>
                </h4>
                <p className="service-card_text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda laboriosam eligendi quis sit repellat nesciunt asperiores facere voluptas est saepe aliquam minus delectus, nemo quia soluta iste pariatur incidunt maxime.                </p>
                <Link to="/service-details" className="link-btn">
                  Read More <i className="fas fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="service-card">
              <div className="service-card_img">
                <img src="assets/img/service/service-1-2.jpg" alt="img" />
              </div>
              <div className="service-card_content">
                <h4 className="service-card_title">
                  <Link to="/service-details">Community News Updates</Link>
                </h4>
                <p className="service-card_text">
                Providing timely and relevant news updates specific to the Milton community to keep residents informed about local events and developments.
                </p>
                <Link to="/service-details" className="link-btn">
                  Read More <i className="fas fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="service-card">
              <div className="service-card_img">
                <img src="assets/img/service/service-1-3.jpg" alt="img" />
              </div>
              <div className="service-card_content">
                <h4 className="service-card_title">
                  <Link to="/service-details">Compliance Information</Link>
                </h4>
                <p className="service-card_text">
                Offering detailed compliance information to ensure residents are aware of and adhere to community regulations and standards.
                </p>
                <Link to="/service-details" className="link-btn">
                  Read More <i className="fas fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="service-card">
              <div className="service-card_img">
                <img src="assets/img/service/service-1-4.jpg" alt="img" />
              </div>
              <div className="service-card_content">
                <h4 className="service-card_title">
                  <Link to="/service-details">Event Information and Updates</Link>
                </h4>
                <p className="service-card_text">
                Keeping residents informed about upcoming events and activities within the Milton community, ensuring high participation and engagement.
                </p>
                <Link to="/service-details" className="link-btn">
                  Read More <i className="fas fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>

          {/* <div className="col-md-6">
            <div className="service-card">
              <div className="service-card_img">
                <img src="assets/img/service/service-1-4.jpg" alt="img" />
              </div>
              <div className="service-card_content">
                <h4 className="service-card_title">
                  <Link to="/service-details">Government Services Information</Link>
                </h4>
                <p className="service-card_text">
                Providing updates and information about local government services and initiatives relevant to the Milton community.
                </p>
                <Link to="/service-details" className="link-btn">
                  Read More <i className="fas fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div> */}

          {/* <div className="col-md-6">
            <div className="service-card">
              <div className="service-card_img">
                <img src="assets/img/service/service-1-4.jpg" alt="img" />
              </div>
              <div className="service-card_content">
                <h4 className="service-card_title">
                  <Link to="/service-details">Local  MRA Support</Link>
                </h4>
                <p className="service-card_text">
                Promoting local  MRAes within the Milton community, helping them to connect with residents and grow their customer base.
                </p>
                <Link to="/service-details" className="link-btn">
                  Read More <i className="fas fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div> */}

          {/* <div className="col-md-6">
            <div className="service-card">
              <div className="service-card_img">
                <img src="assets/img/service/service-1-4.jpg" alt="img" />
              </div>
              <div className="service-card_content">
                <h4 className="service-card_title">
                  <Link to="/service-details">Volunteer Opportunities</Link>
                </h4>
                <p className="service-card_text">
                Promoting volunteer opportunities within the Milton community to encourage resident participation and community building.
                </p>
                <Link to="/service-details" className="link-btn">
                  Read More <i className="fas fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div> */}

          {/* <div className="col-md-6">
            <div className="service-card">
              <div className="service-card_img">
                <img src="assets/img/service/service-1-4.jpg" alt="img" />
              </div>
              <div className="service-card_content">
                <h4 className="service-card_title">
                  <Link to="/service-details">Youth and Family Programs</Link>
                </h4>
                <p className="service-card_text">
                Offering information on programs and events specifically designed for youth and families within the Milton community.
                </p>
                <Link to="/service-details" className="link-btn">
                  Read More <i className="fas fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div> */}

        </div>
      </div>
    </div>
  );
};

export default ServiceOne;
