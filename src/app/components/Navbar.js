// Import React
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import dousoftLogo8 from '/public/images/dousoftLogo8.png'


// Navbar Component
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container-fluid container ">
        {/* Left Side: Image */}
        <Link className="navbar-brand " href="/">
          <Image
            // src="https://talent.toxsl.com/themes/toxsl/toxsl/img/toxsl_logo.png"
            src={dousoftLogo8}
            alt="Logo"
            className="d-inline-block align-text-top align-text-center img-fluid "
            style={{ objectFit: "contain", width: "auto", height: "60px", }}
          />
        </Link>

        {/* Toggle Button for Mobile View */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Right Side: List Items */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto navbar-li-font">
            <li className="nav-item px-2" style={{ color: "black" }}>
              <a className="nav-link navbar-a-height" href="#" style={{ color: 'black', fontStretch: 'condensed' }}>WHY JOIN US</a>
            </li>
            <li className="nav-item px-1">
              <a className="nav-link navbar-a-height" href="#" style={{ color: 'black' }}>INDUSTRIAL TRAININGS</a>
            </li>
            <li className="nav-item px-1">
              <a className="nav-link navbar-a-height" href="#" style={{ color: 'black', fontStretch: "50%" }}>BLOG</a>
            </li>
            <li className="nav-item px-1">
              <a className="nav-link navbar-a-height" href="#" style={{ color: 'black' }}>JOBS</a>
            </li>
            <li className="nav-item px-1">
              <a className="nav-link navbar-a-height" href="#" style={{ color: 'black' }}>TRAININGS</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
