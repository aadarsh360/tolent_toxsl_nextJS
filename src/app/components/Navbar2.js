import React from 'react'
import dousoftLogo6 from '/public/images/dousoftLogo6.png'
import dousoftLogo8 from '/public/images/dousoftLogo8.png'
import dousoftLogo7 from '/public/images/dousoftLogo7.png'
import dousoftLogo9 from '/public/images/dousoftLogo9.png'
import Image from 'next/image'
import Link from 'next/link'

function Navbar2() {

    const navItems = [
        {
            name: "About Us",
            url: "/pages/about-us"
        },
        {
            name: "Services",
            url: "/pages/services"
        },
        {
            name: "Portfolio",
            url: "/pages/portfolio"
        },
        {
            name: "Career",
            url: "/pages/career"
        }

    ]

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
            <div className="container d-flex justify-content-between py-2">

                <div className=''>
                    <a className="navbar-brand " href="#">
                        <Image
                            // src="https://talent.toxsl.com/themes/toxsl/toxsl/img/toxsl_logo.png"
                            src={dousoftLogo8}
                            alt="Logo"
                            className="d-inline-block align-text-top align-text-center img-fluid "
                            style={{ objectFit: "contain", width: "auto", height: "60px", }}
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
                    <ul className="nav gap-3 justify-content-end navbar-nav ms-auto mb-2 mb-lg-0">
                        {
                            navItems?.map((navItem, index) => {
                                return (
                                    <li className="nav-item">
                                        <Link className="nav-link " href={navItem?.url}>{navItem?.name}<i className="bi bi-chevron-down px-1"></i></Link>
                                    </li>
                                )
                            })
                        }
                        
                        <li className="nav-item">
                            <button className="border-0 rounded  text-white px-3 py-2" style={{backgroundColor:"#FFA500"}}>Contact Us </button>
                        </li>
                    </ul>

                </div>


            </div>
        </nav>

    )

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
            <div className="container d-flex justify-content-between py-2">

                <div className=''>
                    <a className="navbar-brand " href="#">
                        <Image
                            // src="https://talent.toxsl.com/themes/toxsl/toxsl/img/toxsl_logo.png"
                            src={dousoftLogo6}
                            alt="Logo"
                            className="d-inline-block align-text-top align-text-center img-fluid "
                            style={{ objectFit: "contain", width: "auto", height: "60px", }}
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
                    <ul className="nav gap-3 justify-content-end navbar-nav ms-auto mb-2 mb-lg-0">
                        {
                            navItems?.map((navItem, index) => {
                                return (
                                    <li className="nav-item">
                                        <Link className="nav-link " href={navItem?.url}>{navItem?.name}</Link>
                                    </li>
                                )
                            })
                        }

                        <li className="nav-item">
                            <button className="border-0 rounded gradient-background-blue-sky text-white px-3 py-2">Contact Us </button>
                        </li>
                    </ul>

                </div>


            </div>
        </nav>

    )
}

export default Navbar2
