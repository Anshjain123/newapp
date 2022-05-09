import React from 'react'
// import PropTypes from 'prop-types'
import {
    Link
} from "react-router-dom";
const Navbar = () => {

    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src="https://thumbs.dreamstime.com/b/luxury-gold-n-h-nh-letter-classy-floral-logo-icon-vintage-drawn-emblem-book-design-weeding-card-stamp-restaurant-boutique-185131076.jpg" alt="" width="30" height="30" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item"><Link className="nav-link" to="/General">Home</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/Business">Business</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/Entertainment">Entertainment</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/Health">Health</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/Science">Science</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/Sports">Sports</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/Technology">Technology</Link></li>

                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}


export default Navbar
