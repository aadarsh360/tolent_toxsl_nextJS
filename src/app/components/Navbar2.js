import React from 'react'

function Navbar2() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
            <div className="container d-flex justify-content-between py-2">

                <div className=''>
                    <a className="navbar-brand" href="#">
                        <img
                            src="https://talent.toxsl.com/themes/toxsl/toxsl/img/toxsl_logo.png"
                            alt="Logo"
                            className="d-inline-block align-text-top"
                        />
                    </a>
                </div>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>


                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="nav  justify-content-end navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link "  href="#">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Career</a>
                        </li>

                        <li className="nav-item">
                            <button className="btn gradient-background-blue-sky text-white px-3 py-2">Contact Us </button>
                        </li>
                    </ul>

                </div>


            </div>
        </nav>

    )
}

export default Navbar2
