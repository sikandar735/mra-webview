import React from 'react'
import { Link } from 'react-router-dom'

const TeamDetailsInner = () => {
    return (
        <div className="team-details-area space">
            <div className="container">
                <div className="single-team-details">
                    <div className="team-about-card">
                        <div className="row g-lg-0">
                            <div className="col-lg-6">
                                <div className="team-about-card_img">
                                    <img
                                        className="w-100"
                                        src="assets/img/team/team-details.png"
                                        alt="team "
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6 align-self-center">
                                <div className="team-about-card_box">
                                    <h3 className="team-about-card_title">Biography</h3>
                                    <div className="skill-feature position-relative">
                                        <h3 className="skill-feature_title">abc</h3>
                                        <div className="progress">
                                            <div className="progress-bar" style={{ width: "100%" }}></div>
                                            <div className="progress-value">
                                                {/* <span className="counter-number">80</span>% */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="skill-feature position-relative">
                                        <h3 className="skill-feature_title">abc</h3>
                                        <div className="progress">
                                            <div className="progress-bar" style={{ width: "100%" }}></div>
                                            <div className="progress-value">
                                                {/* <span className="counter-number">90</span>% */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="skill-feature position-relative">
                                        <h3 className="skill-feature_title">abc</h3>
                                        <div className="progress">
                                            <div className="progress-bar" style={{ width: "100%" }}></div>
                                            <div className="progress-value">
                                                {/* <span className="counter-number">100</span>% */}
                                            </div>
                                        </div>
                                    </div>
                                    <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit accusamus omnis impedit maxime quam dolorem? Repellendus dolorem necessitatibus, saepe similique ratione hic tenetur fugiat quod cupiditate cumque corporis tempora facilis!
                                    </p>
                                    <p className="mb-n2">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde voluptatibus minus magni, facilis dicta deserunt necessitatibus odio voluptas nostrum molestiae amet quisquam ut nobis, repellat accusantium, quis ab delectus. Aut.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row gy-40">
                        <div className="col-lg-4">
                            <div className="team-details-wrap">
                                <h4 className="team-details-wrap-title">abc</h4>
                                <h6 className="team-details-wrap-desig">Manager</h6>
                                <p className="team-details-wrap-text mb-30">
                                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque doloribus tenetur nesciunt! Animi totam laborum impedit distinctio sequi quasi doloribus corporis quod nam ipsam, quis eos perferendis laboriosam consectetur saepe!
                                </p>
                                <div className="team-details-wrap_info">
                                    <span className="icon">
                                        <i className="fas fa-map-marker-alt" />
                                    </span>
                                    <p>
                                        Milton, MN 55337, <br />
                                        Canada
                                    </p>
                                </div>
                                <div className="team-details-wrap_info">
                                    <span className="icon">
                                        <i className="fas fa-phone-alt" />
                                    </span>
                                    <p>
                                        <Link to="#">+923034629266</Link> <br />
                                        <Link to="#">+923034629266</Link>
                                    </p>
                                </div>
                                <div className="team-details-wrap_info">
                                    <span className="icon">
                                        <i className="fas fa-envelope" />
                                    </span>
                                    <p>
                                        <Link to="#">info@xyz.com</Link> <br />
                                        <Link to="#">
                                            info.example@xyz.com
                                        </Link>
                                    </p>
                                </div>
                                <div className="social-btn style4 mt-35">
                                    <Link to="#">
                                        <i className="fab fa-facebook-f" />
                                    </Link>
                                    <Link to="#">
                                        <i className="fab fa-twitter" />
                                    </Link>
                                    <Link to="#">
                                        <i className="fab fa-instagram" />
                                    </Link>
                                    <Link to="#">
                                        <i className="fab fa-pinterest" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="team-contact-wrap">
                                <h3 className="mt-n1 mb-30 page-title">Contact Form</h3>
                                <form
                                    className="team-form ajax-contact"
                                >
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control style-border"
                                                    name="name"
                                                    id="name"
                                                    placeholder="Your Name"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control style-border"
                                                    name="email"
                                                    id="email"
                                                    placeholder="Email Address"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group col-12">
                                        <textarea
                                            placeholder="Message here.."
                                            id="contactForm"
                                            className="form-control style-border"
                                            defaultValue={""}
                                        />
                                    </div>
                                    <div className="form-btn col-12">
                                        <button className="global-btn">
                                            Send Now <i className="fas fa-arrow-right ms-2" />
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default TeamDetailsInner