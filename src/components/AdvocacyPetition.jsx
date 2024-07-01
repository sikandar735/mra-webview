import React, { useRef } from "react";
import { Link } from "react-router-dom";
import SignatureCanvas from "react-signature-canvas";
// import "./styles.css"; // Assuming you have a CSS file for custom styles

const AdvocacyPetition = () => {
  const sigCanvas = useRef({});

  const clearSignature = () => {
    sigCanvas.current.clear();
  };

  const saveSignature = () => {
    const signatureData = sigCanvas.current.toDataURL();
    console.log(signatureData); // You can save this to your backend
  };

  return (
    <>
      <div className="space-bottom mt-4">
        <div className="container">
          <div className="row gy-40 justify-content-between">
            <div className="col-lg-4">
              <div className="title-area mb-0">
                <span className="sub-title">
                  <img src="assets/img/icon/title_left.svg" alt="shape" />
                  Advocacy Petition
                </span>
                <h2 className="sec-title style2">Get In Touch</h2>
                <p className="form-description text-justify">
                    Welcome to the Milton Residents Association Advocacy Petition form. Our mission is to connect with community members and understand the issues you face. By filling out this form, you can share your concerns and challenges with us. Whether it's a community issue, a need for policy change, or any other problem, we're here to assist you. Your input helps us prioritize and address the most pressing matters, ensuring that our community remains a supportive and thriving place for all. Please provide your contact information, select the subject of your concern, and leave a detailed message. Your feedback is crucial to our advocacy efforts.
                </p>
           
              </div>
            </div>
            <div className="col-xl-6 col-lg-8">
              <div className="contact-form">
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="form-control style-border"
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="form-control style-border"
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="form-control style-border"
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      placeholder="Phone Number"
                      className="form-control style-border"
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      placeholder="Address"
                      className="form-control style-border"
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <input
                      type="number"
                      placeholder="Postal Code"
                      className="form-control style-border"
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <input
                      type="date"
                      placeholder="Postal Code"
                      className="form-control style-border"
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <select
                      name="subject"
                      id="subject"
                      className="form-select style-border"
                    >
                      <option value="">Select Subject</option>
                      <option value="subject1">Community Issue</option>
                      <option value="subject2">Policy Change</option>
                      <option value="subject3">General Inquiry</option>
                    </select>
                    <i className="fas fa-angle-down" />
                  </div>
                  <div className="col-12 form-group">
                    <textarea
                      placeholder="Message here.."
                      className="form-control style-border"
                      defaultValue={""}
                    />
                  </div>
                  <div className="col-12 form-group">
                    <h5 className="signature-title">Signature</h5>
                    <SignatureCanvas
                      penColor="black"
                      ref={sigCanvas}
                      canvasProps={{ className: "sigCanvas" }}
                    />
                    <div className="signature-buttons">
                      <button type="button" onClick={clearSignature} className="global-btn border">
                        Clear Signature
                      </button>
                    </div>
                  </div>
                  <div className="col-12 form-group mb-0">
                    <button className="global-btn border w-100" onClick={saveSignature}>
                      Send Now
                      <img
                        src="assets/img/icon/right-icon.svg"
                        alt="Milton Residents Association-MRA"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdvocacyPetition;
