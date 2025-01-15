"use client"
import FooterToxsl from '@/app/components/FooterToxsl'
import Navbar2 from '@/app/components/Navbar2'
import React from 'react'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import YouTubeVideo from '@/app/components/YouTubeVideo';

function page() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 4000,
        cssEase: "linear"

    };

    return (
        <>
            <Navbar2 />

            <div className='mt-5'>
                <div className='container mt-5 py-2'>
                    <div>
                        <p className='fs-5'>WHO WE ARE</p>
                        <h1>We Grow Your Business,</h1>
                        <h1 className='text-primary'>With Our Innovative Solutions</h1>

                        <p className='py-1'>ToXSL Technologies is a premium software development company renowned for offering the most innovative software services to clients across various industries. Established in 2012, we have solidified our reputation as a leading provider of customized solutions for businesses of all scales. Our global presence spans various locations, including India, Australia, Dubai, the USA, and the UK. With a team of expert developers and designers, we relentlessly strive to create top-notch software solutions that seamlessly align with our clients' unique needs. Committed to staying ahead in the ever-evolving marketplace, we invest substantially in research and development, ensuring that we consistently deliver innovative solutions and provide ongoing support to our valued clients.</p>

                        <p className='py-1'>We believe that a successful platform is both visually appealing and functional. Our developers are skilled in creating intuitive interfaces and incorporating cutting-edge technologies such as Augmented Reality, Artificial Intelligence, Blockchain, and the Internet of Things (IoT). Our comprehensive suite of services encompasses Web and Mobile App Development, Web Design, ERP Software Development, Cybersecurity Services, and Managed Cloud Services, ensuring our clients receive tailored solutions that excel in both form and function.</p>

                        <p className='py-1'>Our commitment to quality shines through in our comprehensive testing process, which ensures that every solution that we release meets the highest standards for performance, security, and reliability. At ToXSL Technologies, we offer flexible pricing plans that are customized to meet each client's unique needs and budget. We are dedicated to building long-term relationships with our clients, and this is reflected in our exceptional customer service.</p>

                        <span className='bg-danger px-3 py-2 my-5'><a className="text-decoration-none text-white" href="#">Download Our Company Profile</a></span>
                    </div>
                </div>
            </div>

            <div className='background-blue-gray'>
                <div className='container '>
                    <div>
                        <Slider {...settings}>
                            <div className=''>
                                <img
                                    src="https://toxsl.com/themes/new/img/about-company-img.png"
                                    alt="Image"
                                    className="img-fluid "
                                    style={{ height: "500px", width: "100%", objectFit: 'cover' }}

                                />

                            </div>

                            <div>
                                <img
                                    src='https://toxsl.com/themes/new/img/about-company-img1.png'
                                    alt="Image"
                                    className="img-fluid "
                                    style={{ height: "500px", width: "100%", objectFit: 'cover' }}
                                />

                            </div>
                            <div>
                                <img
                                    src='https://toxsl.com/themes/new/img/about-company-img2.png'
                                    alt="Image"
                                    className="img-fluid "
                                    style={{ height: "500px", width: "100%", objectFit: 'cover' }}
                                />

                            </div>
                            <div>
                                <img
                                    src='https://toxsl.com/themes/new/img/about-company-img3.png'
                                    alt="Image"
                                    className="img-fluid "
                                    style={{ height: "500px", width: "100%", objectFit: 'cover' }}
                                />

                            </div>
                            <div>
                                <img
                                    src='https://toxsl.com/themes/new/img/about-company-img4.png'
                                    alt="Image"
                                    className="img-fluid "
                                    style={{ height: "500px", width: "100%", objectFit: 'cover' }}
                                />

                            </div>
                            <div>
                                <img
                                    src='	https://toxsl.com/themes/new/img/about-company-img5.png'
                                    alt="Image"
                                    className="img-fluid "
                                    style={{ height: "500px", width: "100%", objectFit: 'cover' }}
                                />

                            </div>
                        </Slider>
                    </div>

                    <div className='mt-5'>
                        <p className='fs-5'>Why People Choose Us</p>
                        <h1>WE COMMIT TO WORLD-CLASS SERVICES</h1>
                        <h1 className='text-primary'>THAT SET GREAT BUSINESS STANDARDS</h1>

                        <div className='row'>
                            <div className='col-md-7 col-12'>
                                <img
                                    src="https://toxsl.com/themes/new/img/works/infographic.png"
                                    alt="Image"
                                    className="img-fluid p-2"
                                    style={{ objectFit: 'cover' }}

                                />
                            </div>
                            <div className='col-md-5 col-12 py-2'>
                                <div className='py-3'>
                                    <h3 className='text-success'>Our Mission</h3>
                                    <p className='fs-5'>Invest in the latest technologies and develop ideas that will help businesses reshape their future globally.</p>
                                </div>

                                <div className='py-3'>
                                    <h3 className='text-primary'>Our Vision</h3>
                                    <p className='fs-5'>To be recognized for offering remarkable, world-class services by connecting the latest technology and innovative ideas that drive growth.</p>
                                </div>

                                <div className='py-3'>
                                    <h3 className='text-danger'>Our Strategy</h3>
                                    <p className='fs-5'>We believe in delivering the highest value of services to our clients, which is why we have been awarded and recognized for our excellent and exceptional work.</p>
                                </div>
                            </div>
                        </div>

                        <div className='row g-3 d-flex py-5'>
                            <div className='col-md-3 col-6 d-flex flex-column'>
                                <div className='p-2 bg-white text-center' >
                                    <h1 className='text-danger'>12 +</h1>
                                    <p>YEARS IN BUSINESS</p>
                                </div>
                            </div>

                            <div className='col-md-3 col-6 d-flex flex-column'>
                                <div className='p-2 bg-white text-center'>
                                    <h1 className='text-primary'>1600 +</h1>
                                    <p>Customer Reviews</p>
                                </div>
                            </div>

                            <div className='col-md-3 col-6 d-flex flex-column'>
                                <div className='p-2 bg-white text-center'>
                                    <h1 className='text-success'>2000 +</h1>
                                    <p>CLIENTS WORLDWIDE</p>
                                </div>
                            </div>

                            <div className='col-md-3 col-6 d-flex flex-column'>
                                <div className='p-2 bg-white text-center'>
                                    <h1 className='text-info'>300 +</h1>
                                    <p>EMPLOYEES</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* ============================================================================================================= */}
            <div className='bg-danger py-4'>
                <div className='container'>
                    <div>
                        <p className='fs-5 text-white'>Why ToXSL</p>
                        <h2 className='text-white'>GET CUSTOMIZED SOLUTIONS WITH THE</h2>
                        <h2 className='text-primary'>LATEST TECHNOLOGY</h2>
                    </div>

                    <div className="row g-3">

                        <div className=" col-lg-6 col-12 py-4 px-4">
                            {/* <div className="border border-primary bg-white py-5 my-5">
                                youtube video
                            </div> */}
                            <YouTubeVideo />
                        </div>

                        <div className=" col-lg-6 col-12 py-2 ">
                            <div className="px-5 ">
                                <p className="py-2 fs-5 text-white">We offer innovative solutions as per your business requirements to deliver a stand-out project.</p>
                                <p className="py-2 fs-5 text-white">Our team will give you scalable technology solutions, services with appropriate security measures.</p>
                                <p className="py-2 fs-5 text-white">ToXSL's tested & proven expertise will help your business in completing your current project faster.</p>
                                <p className="py-2 fs-5 text-white">We offer your business innovation and state-of-the-art solutions that are easy to adapt to changing customer behavior and demand.</p>
                                <p className="py-2 fs-5 text-white">With 12 years of experience, we have gained trust and expertise in Android, iOS, and Web Framework Development.</p>
                                <p className="py-2 fs-5 text-white">Our resolution to adopt the latest technological practices makes us stand out in meeting client demands. </p>
                                <p className="py-2 fs-5 text-white">Sincerity, discipline, and prowess in all our project undertakings.</p>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* ============================================================================================================ */}

            <div className='my-5'>
                <div className='container'>
                    <div>
                        <p className='fs-5'>Meet the team</p>
                        <h2>Our <span className='text-primary'>Pillars Of Strength</span> Setting The Business Standards</h2>
                    </div>

                    <div className='row'>
                        <div className='col-md-6 col-12'>
                            <div className='p-4 row ' style={{ height: "400px" }}>
                                <div className='col-md-5 col-12 d-flex align-items-center justify-content-center' style={{ backgroundColor: "#021461" }}>
                                    <div className=' '>
                                        <p className='text-center text-white'>SHIV CHARAN PANJETA</p>
                                        <p className='text-center text-white'>CEO & Founder</p>
                                    </div>
                                </div>
                                <div className='col-md-7 col-12 d-flex align-items-center background-blue-gray'>
                                    <p>Shiv Charan Panjeta is the CEO of ToXSL Technologies Pvt Ltd. He is an MBA, B.Tech, and has more than 20+ years of experience in Mobile App and software development.</p>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-6 col-12' >
                            <div className='p-4 row ' style={{ height: "400px" }}>
                                <div className='col-md-5 col-12 d-flex align-items-center justify-content-center' style={{ backgroundColor: "#021461" }}>
                                    <div >
                                        <p className='text-center text-white'>MONIKA PANJETA</p>
                                        <p className='text-center text-white'>Director & Founder</p>
                                    </div>
                                </div>
                                <div className='col-md-7 col-12 d-flex align-items-center background-blue-gray'>
                                    <p>Monika Panjeta jointly founded ToXSL Technologies Pvt Ltd. She has 12+ years of experience. She manages multiple roles and always available to take every step for the growth of the company.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* ============================================================================================================================= */}

            <FooterToxsl />
        </>
    )
}

export default page
