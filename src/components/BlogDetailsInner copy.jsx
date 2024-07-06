import React from 'react'
import { Link } from 'react-router-dom'

const BlogDetailsInner = () => {
    return (
        <section className="blog-area space-top space-extra-bottom">
            <div className="container">
                <div className="row gx-30">
                    <div className="col-xxl-12 col-lg-12">
                        <div className="blog-details-card">
                            <div className="blog-meta">
                                <Link to="/blog">
                                    <i className="fas fa-user" />
                                    By admin
                                </Link>
                                <Link to="/blog">
                                    <i className="fas fa-folder-open" />
                                    Category
                                </Link>
                                <Link to="/blog">
                                    <i className="fas fa-comments" />
                                    Comments (05)
                                </Link>
                            </div>
                            <h2 className="blog-title">Partnering for  MRA an the Success</h2>
                            <div className="blog-thumb text-center">
                                <img src="assets/img/blog/blog_s2_4.png" alt="Milton Residents Association-MRA" />
                            </div>
                            <div className="blog-content">
                                <p className="mt-n2 mb-15">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas dolorem omnis aut natus quia hic corrupti explicabo debitis laborum id, impedit soluta fugit earum. Odit sequi accusantium consectetur maiores illum?{" "}
                                </p>
                                <p className="mb-25">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore facere incidunt iste atque laboriosam alias fugiat suscipit aspernatur repudiandae, beatae ab esse rem vitae iusto necessitatibus unde eum? Velit, quaerat!
                                </p>
               
                                <p className="mt-xs-25">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati corporis inventore, dicta amet eligendi molestiae, at praesentium rem dignissimos in officia earum fuga cupiditate saepe ullam ex quibusdam aliquid? Cupiditate?
                                </p>
              
                                <h3 className="blog-inner-title">Keep your free time free!</h3>
                                <p className="mt-20">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis explicabo dolor ex consequatur dolorum neque libero nam ratione exercitationem? Aliquid expedita numquam quisquam delectus sapiente, harum earum cupiditate ullam dolore!
                                </p>
                                <div className="share-links clearfix ">
                                    <div className="row justify-content-between">
 
                                        <div className="col-sm-auto text-xl-end">
                                            <ul className="social-links">
                                                <li>
                                                    <Link to="#" target="_blank">
                                                        <i className="fab fa-facebook-f" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#" target="_blank">
                                                        <i className="fab fa-twitter" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#" target="_blank">
                                                        <i className="fab fa-linkedin-in" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#" target="_blank">
                                                        <i className="fab fa-instagram" />
                                                    </Link>
                                                </li>
                                            </ul>
                                            {/* End Social Share */}
                                        </div>
                                        {/* Share Links Area end */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="comments-wrap style2  ">
                            <h2 className="blog-inner-title h3">01 Comment</h2>
                            <ul className="comment-list">
                                <li className="comment-item">
                                    <div className="post-comment">
                                        <p className="text">
                                            Contrary to popular belief, Lorem Ipsum is not simply random
                                            text. It has roots in a piece of classical Latin literature
                                            from 45 BC, making
                                        </p>
                                    </div>
                                    <div className="comment-content">
                                        <h3 className="name">Alex Turi</h3>
                                        <span className="commented-on">
                                            April 23,2024
                                        </span>
                                        {/* <div className="reply_and_edit">
                                            <Link to="/blog-details" className="reply-btn">
                                                Reply
                                            </Link>
                                        </div> */}
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="comments-wrap">
                            {/* Comment Form */}
                            <h3 className="blog-inner-title text-capitalize"> Leave a comment</h3>
                            <div className="comment-form mb-30">
                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        <input
                                            type="text"
                                            placeholder="Your Name"
                                            className="form-control style-white"
                                        />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <input
                                            type="text"
                                            placeholder="Your Email"
                                            className="form-control style-white"
                                        />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <input
                                            type="text"
                                            placeholder="Phone Number"
                                            className="form-control style-white"
                                        />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <select
                                            name="subject"
                                            id="subject"
                                            className="form-select style-white"
                                        >
                                            <option defaultValue={1} >
                                                Choose a Option
                                            </option>
                                            <option value={1}>01</option>
                                            <option value={2}>02</option>
                                            <option value={3}>03</option>
                                        </select>
                                        <i className="fas fa-angle-down" />
                                    </div>
                                    <div className="col-12 form-group">
                                        <textarea
                                            placeholder="Message here.."
                                            className="form-control style-white"
                                            defaultValue={""}
                                        />
                                    </div>
                                    <div className="col-12 form-group mb-0">
                                        <button className="global-btn">
                                            Submit Now
                                            <img src="assets/img/icon/right-icon.svg" alt="Milton Residents Association-MRA" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>{" "}
                        {/* Comment end */}
                    </div> 
                </div>
            </div>
        </section>

    )
}

export default BlogDetailsInner