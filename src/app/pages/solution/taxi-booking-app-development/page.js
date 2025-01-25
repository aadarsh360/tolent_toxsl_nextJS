"use client"
import ChatWithUs from '@/app/components/ChatWithUs';
import FooterToxsl from '@/app/components/FooterToxsl';
import Navbar2 from '@/app/components/Navbar2';
import OscillatingArrow from '@/app/components/OscillatingArrow';
import PhoneWhatsAppLogo from '@/app/components/PhoneWhatsAppLogo';
import React, { useState } from 'react'

function page() {
    const steps = [
        {
            id: 1,
            title: "User Login/Signup",
            description: "In the first step users signup or login into their account.",
            icon: "bi bi-box-arrow-in-right",
        },
        {
            id: 2,
            title: "Search Cab",
            description: "The customer gets the search a cab option once they log in.",
            icon: "bi bi-geo-alt",
        },
        {
            id: 3,
            title: "Driver Acceptance",
            description:
                "The taxi app sends notifications to available drivers and the ride is confirmed.",
            icon: "bi bi-person-check",
        },
        {
            id: 4,
            title: "Arrival Notification",
            description:
                "The app will reflect the driver’s details, cost, distance, and ETA.",
            icon: "bi bi-bell",
        },
        {
            id: 5,
            title: "Payment Process",
            description:
                "Riders can pay the amount for the trip online securely.",
            icon: "bi bi-cash",
        },
        {
            id: 6,
            title: "Rate Your Ride",
            description: "Users can provide ratings and reviews on the app.",
            icon: "bi bi-star",
        },
    ];

    // Data for multiple sections
    const sections = [
        {
            title: "User App & Website Features",
            features: [
                {
                    icon: "bi-car-front-fill",
                    title: "Easy Trip Schedule",
                    description: "It allows the riders to schedule their upcoming trip. Edit or cancel anytime before the ride.",
                },
                {
                    icon: "bi-geo-alt-fill",
                    title: "Real-Time Tracking",
                    description: "Users can track the location of the driver in real-time. It gives them an idea of their arrival.",
                },
                {
                    icon: "bi-chat-dots-fill",
                    title: "Communication Tab",
                    description: "It helps passengers communicate with the drivers and offer a seamless experience.",
                },
                {
                    icon: "bi-credit-card-2-back-fill",
                    title: "Multiple Payment Options",
                    description: "Riders will access multiple payment options, thus making the process cash-less & digital.",
                },
            ],
            image: "https://toxsl.com/themes/new/img/screen/usertaxi.png",
        },

        {
            title: "Driver App Features",
            features: [
                {
                    icon: "bi-bar-chart-line-fill",
                    title: "Analytics Dashboard",
                    description: "Admins can view real-time data analytics to monitor performance and user engagement.",
                },
                {
                    icon: "bi-person-badge-fill",
                    title: "User Management",
                    description: "Allows admins to manage user profiles, including drivers and passengers.",
                },
                {
                    icon: "bi-gear-fill",
                    title: "Settings & Configurations",
                    description: "Admins can configure system-wide settings for seamless operation.",
                },
                {
                    icon: "bi-shield-lock-fill",
                    title: "Security & Privacy",
                    description: "Advanced security features to protect user data and system integrity.",
                },
            ],
            image: "https://toxsl.com/themes/new/img/screen/taxi-admin.png",
        },

        {
            title: "Admin Dashboard Features",
            features: [
                {
                    icon: "bi-bar-chart-line-fill",
                    title: "Analytics Dashboard",
                    description: "Admins can view real-time data analytics to monitor performance and user engagement.",
                },
                {
                    icon: "bi-person-badge-fill",
                    title: "User Management",
                    description: "Allows admins to manage user profiles, including drivers and passengers.",
                },
                {
                    icon: "bi-gear-fill",
                    title: "Settings & Configurations",
                    description: "Admins can configure system-wide settings for seamless operation.",
                },
                {
                    icon: "bi-shield-lock-fill",
                    title: "Security & Privacy",
                    description: "Advanced security features to protect user data and system integrity.",
                },
            ],
            image: "https://toxsl.com/themes/new/img/screen/driver.png",
        },
    ];


    // Data for the business solutions cards
    const businessSolutions = [
        {
            icon: "https://img.icons8.com/color/96/taxi.png",
            title: "Private Business/ Taxi Business",
            description:
                "If you are managing an independent Taxi business or a traditional one, our ready-made solutions will help you transform and bring more rides with our app development services.",
        },
        {
            icon: "https://img.icons8.com/color/96/carpool.png",
            title: "CarPooling and Rental",
            description:
                "The carpooling apps are gaining huge popularity. It offers huge savings for the users. So offering such services will bring more riders to your platform so that you can earn more.",
        },
        {
            icon: "https://img.icons8.com/color/96/skyscrapers.png",
            title: "For Corporates/ Enterprises",
            description:
                "Each enterprise has different requirements but we offer the best solutions to simplify mobility needs. Our customized solutions cater to the need of the client.",
        },
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const items = [
        {
            title: "Market Research Report",
            imageUrl: "https://toxsl.com/themes/new/img/market_research_report.png",
            content:
                "We gather all your requirements and validate your business idea. Let the experts handle this part for you and offer a polished plan.",
            buttonText: "Download Report",
        },
        {
            title: "Revenue Generation Model",
            imageUrl: "https://toxsl.com/themes/new/img/revenue_genration_model.png",
            content:
                "Explore strategies and tools to maximize revenue generation for your taxi app business with expert recommendations.",
            buttonText: "Explore Revenue Model",
        },
        {
            title: "Customized Solutions",
            imageUrl: "https://toxsl.com/themes/new/img/coustomized_solution.png",
            content:
                "Tailored solutions to meet the unique requirements of your business and streamline operations effectively.",
            buttonText: "Learn More",
        },
        {
            title: "Robust Business Plan",
            imageUrl: "https://toxsl.com/themes/new/img/business_plan.png",
            content:
                "Develop a comprehensive business plan that ensures long-term success for your app in a competitive market.",
            buttonText: "View Business Plan",
        },
        {
            title: "Branding and Marketing",
            imageUrl: "https://toxsl.com/themes/new/img/marketing.png",
            content:
                "Effective branding and marketing strategies to make your app stand out and attract more users.",
            buttonText: "Explore Strategies",
        },
        {
            title: "AI-Powered Analytics",
            imageUrl: "https://toxsl.com/themes/new/img/ai_powered_analytics.png",
            content:
                "Utilize AI-driven analytics to gain insights into your business operations and optimize performance.",
            buttonText: "Discover Analytics",
        },
    ];

    return (

        <>
            <div className='border-3 border-danger'>

                <Navbar2 />
                <ChatWithUs />
                <PhoneWhatsAppLogo />

                <div className='py-5 mt-5 bg-primary '>
                    <div className='container mt-5'>
                        <div className='row'>
                            <div className='col-lg-6 col-12 '>
                                <h1 className='text-white'>Grow Your Taxi Operations With On-demand Taxi Booking Solutions</h1>
                                <p className='text-white' style={{ fontSize: "22px" }}>Grow your business, raise operational efficiency and revenue with our customized on-demand Taxi booking app development services.</p>
                                <div className='d-flex justify-content-between flex-wrap' style={{ maxWidth: "300px" }}>
                                    {/* Button */}
                                    <div className=''>
                                        <button className="btn btn-outline-light px-2 py-2 my-1">Get Started <OscillatingArrow /> </button>
                                    </div>

                                    <div className=''>
                                        <button className="btn btn-outline-light px-2 py-2 my-1">Download PDF <i class="bi bi-download"></i> </button>
                                    </div>
                                </div>
                            </div>

                            <div className='col-lg-6 d-none d-lg-block '>
                                <div className='d-flex' style={{maxWidth:"300px"}}>
                                    <img
                                        src="https://toxsl.com/themes/new/img/screen/taxi-booking2.png"
                                        alt="Image"
                                        className="  img-fluid "
                                        style={{ objectFit: 'cover', borderRadius: '5px', width: "auto", height: "600px" }}
                                    />
                                    <img
                                        src="https://toxsl.com/themes/new/img/screen/taxi-banner3.png"
                                        alt="Image"
                                        className="img-fluid "
                                        style={{ objectFit: 'cover', borderRadius: '5px', width: "auto", height: "600px" }}
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* ======================================================================================================= */}
                <div className='background-light-sky '>
                    <div className="container py-5">
                        <h2 className="text-center mb-5">Work Flow of the Taxi Booking App</h2>
                        <div className="row text-center">
                            {steps.map((step) => (
                                <div className="col-md-4 col-lg-2 mb-4" key={step.id}>
                                    <div className="position-relative d-inline-block">
                                        <div
                                            className="rounded-circle bg-light d-flex justify-content-center align-items-center"
                                            style={{ width: "100px", height: "100px" }}
                                        >
                                            <i className={`${step.icon} fs-1 text-success`}></i>
                                        </div>
                                        <div
                                            className="position-absolute top-0 end-0 rounded-circle bg-success text-white d-flex justify-content-center align-items-center"
                                            style={{ width: "30px", height: "30px", transform: "translate(0%, 0%)" }}
                                        >
                                            {`0${step.id}`}
                                        </div>
                                    </div>
                                    <h5 className="mt-3 text-success">{step.title}</h5>
                                    <p className="text-black">{step.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                {/* =====================================================================================  */}
                <div className=''>
                    {sections.map((section, index) => (
                        <div className="container-fluid py-2" key={index}>
                            <div className="row align-items-center" style={{ minHeight: "600px" }}>
                                {/* Left Side Content */}
                                <div className="col-lg-5 col-12 order-2 order-lg-1 p-2">
                                    <h2 className="fw-bold mb-4 px-2">{section.title}</h2>

                                    <div className="row p-2">
                                        {section.features.map((feature, featureIndex) => (
                                            <div className="col-6 row mb-4" key={featureIndex}>
                                                <div className="col-2 text-center">
                                                    <i className={`bi ${feature.icon} text-primary fs-2`}></i>
                                                </div>
                                                <div className="col-10">
                                                    <h5 className="fw-bold">{feature.title}</h5>
                                                    <p className="text-muted mb-0">{feature.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Right Side Image */}
                                <div className="col-lg-7 order-1 order-lg-2 text-center bg-body-tertiary">
                                    <img src={section.image} alt="App Features" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* =================================================================================================== */}


                {/* =============================================================================================================== */}
                <div className=''>
                    <div className="container py-5 ">
                        <div className="text-center mb-4">
                            <h2 className="fw-bold text-success">Catering Our Solutions For The Following Businesses</h2>
                            <p className="fs-5">
                                Dousot offers customizable solutions and is ready to run any business that requires fleet handling. Here are the solutions our business verticals are common to:
                            </p>
                        </div>

                        <div className="row justify-content-center">
                            {businessSolutions.map((solution, index) => (
                                <div className="col-lg-4 col-md-12 mb-4" key={index}>
                                    <div className="card h-100 shadow-sm  border-0">
                                        <div className="card-body">
                                            <img
                                                src={solution.icon}
                                                alt={`${solution.title} Icon`}
                                                className="mb-3"
                                                style={{ height: "80px" }}
                                            />
                                            <h4 className="fw-bold text-success">{solution.title}</h4>
                                            <p className="">{solution.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* =================================================================================================================== */}

                <div className='py-5 '>
                    <div className='container'>
                        <div className='row'>

                            <div className='col-6 col-md-6 col-12'>
                                <div >
                                    <h2 className='text-success'>Why Go For Taxi Booking App Development?
                                    </h2>
                                    <p className=''>People nowadays prefer convenient and safe modes of transportation, so there was a boost in the on-demand Taxi booking services. It offers economical and effective services.</p>
                                    <img
                                        src="https://toxsl.com/themes/new/img/screen/map.png"
                                        alt="Image"
                                        className=" p-2 bg-white img-fluid"
                                        style={{ objectFit: 'cover', borderRadius: '5px', borderTopRightRadius: '25px', borderBottomLeftRadius: '25px', width: "500px", height: "500px" }}
                                    />
                                </div>
                            </div>

                            <div className='col-6 col-md-6 col-12'>

                                {/* one  */}
                                <div className='p-2' >
                                    <div className='d-flex shadow-lg bg-white hover-bg-primary'>
                                        <img
                                            src="https://toxsl.com/themes/new/img/icons/taxi_app.png"
                                            alt="Image"
                                            className=" p-2 bg-white img-fluid"
                                            style={{ objectFit: 'cover', borderRadius: '5px', width: "80px", height: "80px" }}
                                        />
                                        <div className='px-1'>
                                            <p className='fw-bold text-success py-0'>User-Friendly Customer & Driver Apps</p>
                                            <p className='py-0' style={{ fontSize: "14px" }}>We offer a user-friendly, easy-to-use driver and user app that offers you a competitive edge while making you stay ahead of the curve in the online Taxi Booking business.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* two  */}
                                <div className='p-2' >
                                    <div className='d-flex shadow-lg bg-white'>
                                        <img
                                            src="https://toxsl.com/themes/new/img/icons/analytics.png"
                                            alt="Image"
                                            className=" p-2 bg-white img-fluid"
                                            style={{ objectFit: 'cover', borderRadius: '5px', width: "80px", height: "80px" }}
                                        />
                                        <div className='px-1'>
                                            <p className='fw-bold text-success py-0'>Real-time Analytics for Tracking</p>
                                            <p className='py-0' style={{ fontSize: "14px" }}>We offer a powerful dashboard that helps to track progress in real-time. So easily monitor your entire workforce now.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* third  */}
                                <div className='p-2' >
                                    <div className='d-flex shadow-lg bg-white'>
                                        <img
                                            src="https://toxsl.com/themes/new/img/icons/visibilty.png"
                                            alt="Image"
                                            className=" p-2 bg-white img-fluid"
                                            style={{ objectFit: 'cover', borderRadius: '5px', width: "80px", height: "80px" }}
                                        />
                                        <div className='px-1'>
                                            <p className='fw-bold text-success py-0'>Higher Visibility</p>
                                            <p className='py-0' style={{ fontSize: "14px" }}>We offer a user-friendly, easy-to-use driver and user app that offers you a competitive edge while making you stay ahead of the curve in the online Taxi Booking business.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* four  */}
                                <div className='p-2' >
                                    <div className='d-flex shadow-lg bg-white'>
                                        <img
                                            src="https://toxsl.com/themes/new/img/icons/efficiency.png"
                                            alt="Image"
                                            className=" p-2 bg-white img-fluid"
                                            style={{ objectFit: 'cover', borderRadius: '5px', width: "80px", height: "80px" }}
                                        />
                                        <div className='px-1'>
                                            <p className='fw-bold text-success py-0'>Enhanced Efficiency</p>
                                            <p className='py-0' style={{ fontSize: "14px" }}>We offer a user-friendly, easy-to-use driver and user app that offers you a competitive edge while making you stay ahead of the curve in the online Taxi Booking business.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* five  */}
                                <div className='p-2' >
                                    <div className='d-flex shadow-lg bg-white'>
                                        <img
                                            src="https://toxsl.com/themes/new/img/icons/Fully_customized_solution.png"
                                            alt="Image"
                                            className=" p-2 bg-white img-fluid"
                                            style={{ objectFit: 'cover', borderRadius: '5px', width: "80px", height: "80px" }}
                                        />
                                        <div className='px-1'>
                                            <p className='fw-bold text-success py-0'>Multiple Payment Gateways</p>
                                            <p className='py-0' style={{ fontSize: "14px" }}>We offer a user-friendly, easy-to-use driver and user app that offers you a competitive edge while making you stay ahead of the curve in the online Taxi Booking business.</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                {/* ============================================================================================================ */}
                <div className=''>
                    <div className="container py-5">
                        <h2 className="fw-bold mb-4 text-center text-success">Technology Report For A Fortunate Taxi App Development</h2>
                        <div className="row align-items-center">
                            {/* Left Side List */}
                            <div className="col-md-3 col-12">

                                <ul className="list-unstyled">
                                    {items.map((item, index) => (
                                        <li
                                            key={index}
                                            className={`d-flex align-items-center p-3 mb-2 ${index === activeIndex ? "bg-light border-start border-success" : ""
                                                }`}
                                            style={{
                                                cursor: "pointer",
                                                transition: "background-color 0.3s ease",
                                            }}
                                            onMouseEnter={() => setActiveIndex(index)}
                                        >
                                            <i className={`bi bi-dot text-success me-2 fs-4`}></i>
                                            <span className="fw-bold">{item.title}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Right Side Content */}
                            <div className="col-md-9 col-12 ">

                                <div className='row p-4 bg-light shadow-lg'>
                                    <div className="col-lg-6 col-12">
                                        <img
                                            // src="https://cdn-icons-png.flaticon.com/512/3062/3062634.png"
                                            src={items[activeIndex].imageUrl}
                                            alt={items[activeIndex].title}
                                            className="img-fluid mb-3"
                                            style={{ objectFit: 'cover', width: "auto", height: "100%" }}
                                        />

                                    </div>
                                    <div className='col-lg-6 col-12'>
                                        <h4 className="fw-bold">{items[activeIndex].title}</h4>
                                        <p className="text-muted">{items[activeIndex].content}</p>
                                        <button className="btn btn-success">{items[activeIndex].buttonText}</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                {/* =================================================================================================================== */}


                {/* ============================================================================================================================= */}
                <div className='py-4 '>
                    <div className='container'>
                        <h2 className='text-center'>Frequently Asked Questions
                        </h2>

                        <div className='my-5'>
                            <hr></hr>
                            <h5 className='py-2'>How much does taxi booking app development cost?</h5>
                            <p className='py-2'>The cost of taxi booking app development can vary depending on several factors such as the complexity of the app, the number of features included, the platform (iOS or Android), and the geographical location of the development team. On average, the cost can range from $5,000 to $20,000 or more.</p>

                            <hr></hr>

                            <h5 className='py-2'>Why choose Duosoft Technologies for taxi booking app development?</h5>
                            <p className='py-2'>Duosoft Technologies is a reputable taxi booking app development company that offers top-notch services for developing a successful and secure app. Here are some reasons why you should choose us:</p>

                            <hr></hr>


                            <h5 className='py-2'>Will you assist me in uploading my Android App to the Play Store?</h5>
                            <p className='py-2'>Yes, we provide end-to-end services to our clients. We take full responsibility from development to publishing on the Play Store.</p>

                            <hr></hr>

                            <h5 className='py-2'>What is the Cost to Develop an Android App?</h5>
                            <p className='py-2'>The cost to make an Android app varies depending on the complexity of the app and its design requirements. Typically, an Android app starts from $10K for a basic version and can go up to $700K or more for complete app development with numerous features. This includes the cost of backend setup, graphic design costs, and API integration fees.</p>
                            <p>We also ensure that your Android app can be successfully published in the Play Store, and ready for use by all of your customers.</p>
                            <hr></hr>

                            <h5 className='py-2'>What is Android App Development?</h5>
                            <p className='py-2'>Android App Development is a process by which applications are created that runs on android devices.</p>

                            <hr></hr>
                        </div>

                    </div>

                </div>
                {/* ======================================================================================================================== */}
                <FooterToxsl />

            </div>
        </>
    );
}

export default page
