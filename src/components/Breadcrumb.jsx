import React from 'react'
import { Link } from 'react-router-dom' 
import breadcrumbImage from '../assets/img/normal/team-1.avif'

const Breadcrumb = ({ title }) => {
    return (
        <div className="breadcumb-wrapper">
            {/* bg animated image/ */}
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="breadcumb-content">
                            <h1 className="breadcumb-title">{title}</h1>
                            <ul className="breadcumb-menu">
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li className="active">{title}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 d-lg-block d-none">
                        <div className="breadcumb-thumb">
                            <div className='breadcrumb-image'>
                                <img src={breadcrumbImage} alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Breadcrumb