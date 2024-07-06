import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import blogData from "../data/data.json";

const BlogOne = () => {
  let settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <>
      <section className="blog-area-1 space">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <div className="title-area text-center">
                <span className="sub-title">
                  <img
                    src="assets/img/icon/title_left.svg"
                    alt="shape"
                  />
                  PLANNING AN EVENT SHARE
                </span>
                <h2 className="sec-title">City Events</h2>
              </div>
            </div>
          </div>
          <div className="row global-carousel blog-slider slider-shadow">
            <Slider {...settings}>
              {blogData.blogs.map((blog) => (
                <div key={blog.id} className="blog-card p-3">
                  <div className="blog-img">
                    <img src={blog.image} alt={blog.title} />
                  </div>
                  <div className="blog-content">
                    <h3 className="blog-title">
                      <Link to={`/blog-details/${blog.id}`}>
                        {blog.title}
                      </Link>
                    </h3> 
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogOne;
