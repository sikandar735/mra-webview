import React, { Component } from 'react';

export default class MainSlider extends Component {
    render() {
        return (
            <div>
                <div
                    id="carouselExampleDark"
                    className="carousel carousel-dark slide"
                    data-bs-ride="carousel"
                >
                    <div className="carousel-indicators indicators-line">
                        <button
                            type="button"
                            data-bs-target="#carouselExampleDark"
                            data-bs-slide-to={0}
                            className="active"
                            aria-current="true"
                            aria-label="Slide 1"
                        />
                        <button
                            type="button"
                            data-bs-target="#carouselExampleDark"
                            data-bs-slide-to={1}
                            aria-label="Slide 2"
                        />
                        <button
                            type="button"
                            data-bs-target="#carouselExampleDark"
                            data-bs-slide-to={2}
                            aria-label="Slide 3"
                        />
                    </div>

                    <div className="carousel-inner">
                        <div className="carousel-item image-container active" data-bs-interval={10000}>
                            <img src="assets/img/main-slider/image-2.png" className="d-block w-100 transparent-image" alt="..." />
                            <div className="carousel-caption d-block mobile-screen main-slider-section" style={{ marginBottom: '10%', fontSize: '80%', textAlign: 'center' }}>
                                <h3 className='text-white title-text'>Join the Milton Residents Association</h3>
                                <p className='text-white' style={{ fontSize: '0.9rem' }}>Become a member and help shape our community.</p>
                                <a href=" https://mra-dashboard-latest.vercel.app/auth/login" class="btn btn-outline-secondary button-secondary-slider main-slider-button">
                                <i  className='far fa-hand-point-right arrow-icon'></i> Membership
                                </a>                            
                            </div>
                        </div>
                        <div className="carousel-item image-container" data-bs-interval={2000}>
                            <img src="assets/img/main-slider/image-1.png" className="d-block w-100 transparent-image" alt="..." />
                            <div className="carousel-caption d-block mobile-screen main-slider-section" style={{ marginBottom: '10%', fontSize: '80%', textAlign: 'center' }}>
                                <h3 className='text-white title-text'>Welcome to Milton!</h3>
                                <p className='text-white' style={{ fontSize: '0.9rem' }}>Discover resources and information for new residents.</p>
                                <a href=" https://mra-dashboard-latest.vercel.app/auth/login" class="btn btn-outline-secondary button-secondary-slider main-slider-button">
                                <i  className='far fa-hand-point-right arrow-icon'></i> Membership
                                </a>                            
                            </div>
                        </div>
                        <div className="carousel-item image-container">
                            <img src="assets/img/main-slider/image-3.png" className="d-block w-100 transparent-image" alt="..." />
                            <div className="carousel-caption d-block mobile-screen main-slider-section" style={{ marginBottom: '10%', fontSize: '80%', textAlign: 'center' }}>
                                <h3 className='text-white title-text'>Voice Your Concerns</h3>
                                <p className='text-white' style={{ fontSize: '0.9rem' }}>Share your issues and ideas to improve Milton.</p>
                                <a href=" https://mra-dashboard-latest.vercel.app/auth/login" class="btn btn-outline-secondary button-secondary-slider main-slider-button">
                                <i  className='far fa-hand-point-right arrow-icon'></i> Membership
                                </a>                            
                            </div>
                        </div>
                    </div>

                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        );
    }
}
