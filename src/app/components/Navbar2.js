import React from 'react'
import dousoftLogo6 from '/public/images/dousoftLogo6.png'
import dousoftLogo8 from '/public/images/dousoftLogo8.png'
import dousoftLogo7 from '/public/images/dousoftLogo7.png'
import dousoftLogo9 from '/public/images/dousoftLogo9.png'
import dousoftLogo10 from '/public/images/dousoftLogo10.png'
import Image from 'next/image'
import Link from 'next/link'

function Navbar2() {

    // const navItems = [
    //     {
    //         name: "About Us",
    //         url: "/pages/about-us"
    //     },
    //     {
    //         name: "Services",
    //         url: "/pages/service/mobile-app-development-services"
    //     },
    //     {
    //         name: "Portfolio",
    //         url: "/pages/portfolio"
    //     },
    //     {
    //         name: "Career",
    //         url: "/pages/career"
    //     }

    // ];

    const navbarItems = [
        {
            title: "About us",
            submenu: [
                { title: "About Us", imageUrl: "https://toxsl.com/themes/new/img/service-icons/about_us.png", link: "/pages/about-us" },
                { title: "Life @ Dousoft", imageUrl: "https://toxsl.com/themes/new/img/service-icons/life_toxsl.png", link: "/pages/about-us" },
                { title: "Client Reviews", imageUrl: "https://toxsl.com/themes/new/img/service-icons/review.png", link: "/pages/about-us" },
            ],
        },
        {
            title: "Business Models",
            submenu: [
                { title: "Gojek", imageUrl: "https://toxsl.com/themes/new/img/icons/business-icon/gojek.png", link: "/pages/business-model/gojek" },
                { title: "Ebay", imageUrl: "https://toxsl.com/themes/new/img/icons/business-icon/ebay.png", link: "/pages/business-model/gojek" },
                { title: "Practo", imageUrl: "https://toxsl.com/themes/new/img/icons/business-icon/practo_icon.png", link: "/pages/business-model/gojek" },
            ],
        },
        {
            title: "Services",
            submenu: [
                { title: "Mobile App Development", imageUrl: "https://toxsl.com/themes/new/img/service-icons/MobileAppDevelopmentServices.svg", link: "/pages/service/mobile-app-development-services" },
                { title: "Web Development", imageUrl: "https://toxsl.com/themes/new/img/service-icons/webdevelopmentservices.svg", link: "/pages/service/web-development-services" },
                { title: "ERP Software Development", imageUrl: "https://toxsl.com/themes/new/img/service-icons/MobileAppDevelopmentServices.svg", link: "/pages/service/erp-software-development" },
                { title: "Web Design Services", imageUrl: "https://toxsl.com/themes/new/img/service-icons/MobileAppDevelopmentServices.svg", link: "#" },
                { title: "Web Development Frameworks", imageUrl: "https://toxsl.com/themes/new/img/service-icons/MobileAppDevelopmentServices.svg", link: "#" },
                { title: "Automated Testing", imageUrl: "https://toxsl.com/themes/new/img/service-icons/MobileAppDevelopmentServices.svg", link: "#" },
                { title: "Digital Marketing", imageUrl: "https://toxsl.com/themes/new/img/service-icons/MobileAppDevelopmentServices.svg", link: "#" },
            ],
        },
        {
            title: "Solutions",
            submenu: [
                { title: "Taxi Booking App Development", imageUrl: "https://toxsl.com/themes/new/img/icons/taxi.svg", link: "/pages/solution/taxi-booking-app-development" },
                { title: "Lifestyle", imageUrl: "https://toxsl.com/themes/new/img/icons/lifestyle.svg", link: "/pages/service/web-development-services" },
                { title: "Healthcare", imageUrl: "https://toxsl.com/themes/new/img/icons/medical.svg", link: "/pages/service/erp-software-development" },
                { title: "Web Design Services", imageUrl: "https://toxsl.com/themes/new/img/service-icons/MobileAppDevelopmentServices.svg", link: "#" },
                { title: "Web Development Frameworks", imageUrl: "https://toxsl.com/themes/new/img/service-icons/MobileAppDevelopmentServices.svg", link: "#" },
                { title: "Automated Testing", imageUrl: "https://toxsl.com/themes/new/img/service-icons/MobileAppDevelopmentServices.svg", link: "#" },
                { title: "Digital Marketing", imageUrl: "https://toxsl.com/themes/new/img/service-icons/MobileAppDevelopmentServices.svg", link: "#" },
            ],
        },
        {
            title: "Portfolio",
            link: "/pages/portfolio",
        },
        {
            title: "Careers",
            submenu: [
                { title: "Job Openings", imageUrl: "https://toxsl.com/themes/new/img/icons/job_offers.png", link: "/pages/carrer" },
                { title: "Trainings", imageUrl: "https://toxsl.com/themes/new/img/icons/training-c.png", link: "/pages/trainings" },
                { title: "Why Join Us", imageUrl: "https://toxsl.com/themes/new/img/icons/lifestyle.svg", link: "/pages/why-join-us" },
            ],
        }

    ];

    // const navbarItems = [
    //     {
    //         title: "Company",
    //         submenu: [
    //             { title: "About Us", link: "#" },
    //             { title: "Life @ ToXSL", link: "#" },
    //             { title: "Client Reviews", link: "#" },
    //         ],
    //     },
    //     {
    //         title: "Services",
    //         submenu: [
    //             { title: "Web Development", link: "#" },
    //             { title: "Mobile Apps", link: "#" },
    //             { title: "Digital Marketing", link: "#" },
    //         ],
    //     },
    //     {
    //         title: "Portfolio",
    //         link: "#",
    //     },
    //     {
    //         title: "Careers",
    //         link: "#",
    //     },
    //     {
    //         title: "Hire Us",
    //         link: "#",
    //     },
    // ];

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
            <div className="container d-flex justify-content-between py-2">

                <div className=''>
                    <Link className="navbar-brand " href="/">
                        <Image
                            // src="https://talent.toxsl.com/themes/toxsl/toxsl/img/toxsl_logo.png"
                            src={dousoftLogo8}
                            alt="Logo"
                            className="d-inline-block align-text-top align-text-center img-fluid "
                            style={{ objectFit: "contain", width: "auto", height: "60px", }}
                        />
                    </Link>
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

                {/* Navbar Items */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="nav gap-3 justify-content-end navbar-nav ms-auto mb-2 mb-lg-0">
                        {/* Map through navbar items */}
                        {navbarItems?.map((item, index) => (
                            <li
                                className={`nav-item ${item.submenu ? "position-relative" : ""}`}
                                key={index}
                            >
                                <a className="nav-link" href={item.link || "#"}>
                                    {item?.title}<i className="bi bi-chevron-down px-1" style={{fontSize:"12px"}}></i>
                                </a>
                                {/* Render submenu if it exists */}
                                {item?.submenu && (
                                    <div className="hover-menu shadow">
                                        {item?.submenu?.map((subitem, subindex) => (
                                            <Link
                                                className="dropdown-item"
                                                href={subitem?.link}
                                                key={subindex}
                                            >
                                                <div className=''>
                                                    <img src={subitem?.imageUrl} alt='Image' className='img-fluid p-1'
                                                        style={{ objectFit: "contain", width: "auto", height: "30px", }} />   {subitem?.title}
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </li>
                        ))}

                        {/* Contact Us Button */}
                        <li className="nav-item">
                            <Link className='' href="/pages/contact-us">
                                <button className="border-0 rounded  text-white px-3 py-2" style={{ backgroundColor: "#008000" }}>Contact Us </button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
            <div className="container d-flex justify-content-between py-2">

                <div className=''>
                    <Link className="navbar-brand " href="/">
                        <Image
                            // src="https://talent.toxsl.com/themes/toxsl/toxsl/img/toxsl_logo.png"
                            src={dousoftLogo8}
                            alt="Logo"
                            className="d-inline-block align-text-top align-text-center img-fluid "
                            style={{ objectFit: "contain", width: "auto", height: "60px", }}
                        />
                    </Link>
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
                            <Link className='' href="/pages/contact-us">
                                <button className="border-0 rounded  text-white px-3 py-2" style={{ backgroundColor: "#FFA500" }}>Contact Us </button>
                            </Link>
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
