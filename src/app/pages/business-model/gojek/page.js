"use client"
import ChatWithUs from '@/app/components/ChatWithUs';
import FooterToxsl from '@/app/components/FooterToxsl'
import Navbar2 from '@/app/components/Navbar2';
import PhoneWhatsAppLogo from '@/app/components/PhoneWhatsAppLogo';
import React from 'react'

function page() {

    const services = [
        {
            icon: "https://toxsl.com/themes/new/img/business-model-img/gojak/pickup.png",
            title: "Pickup & Delivery",
        },
        {
            icon: "https://toxsl.com/themes/new/img/business-model-img/gojak/ride.png",
            title: "Ride-Sharing",
        },
        {
            icon: "https://toxsl.com/themes/new/img/business-model-img/gojak/food.png",
            title: "Food Delivery",
        },
        {
            icon: "https://toxsl.com/themes/new/img/business-model-img/gojak/pickup.png",
            title: "Grocery Delivery",
        },
        {
            icon: "https://toxsl.com/themes/new/img/business-model-img/gojak/beauty-salon.png",
            title: "Beauty & Salon",
        },
        {
            icon: "https://toxsl.com/themes/new/img/business-model-img/gojak/beauty-salon.png",
            title: "Taxi Services",
        },
        {
            icon: "https://toxsl.com/themes/new/img/business-model-img/gojak/beauty-salon.png",
            title: "E-commerce",
        },
        {
            icon: "https://toxsl.com/themes/new/img/business-model-img/gojak/beauty-salon.png",
            title: "Logistic",
        },
        {
            icon: "https://toxsl.com/themes/new/img/business-model-img/gojak/beauty-salon.png",
            title: "Car Washing",
        },
        {
            icon: "https://toxsl.com/themes/new/img/business-model-img/gojak/beauty-salon.png",
            title: "Fuel",
        },
    ];


    const features = [
        {
            icon: "https://cdn-icons-png.flaticon.com/128/7182/7182236.png", // Replace with the actual icon
            title: "Various Services",
            description:
                "Launch various businesses such as delivery, home services, etc., using one platform.",
            color: "#3b82f6", // Blue
        },
        {
            icon: "https://cdn-icons-png.flaticon.com/128/1828/1828859.png", // Replace with the actual icon
            title: "Numerous Opportunities",
            description:
                "Explore various opportunities with advanced features such as route optimization, real-time chat, and data analysis tools.",
            color: "#f87171", // Red
        },
        {
            icon: "https://cdn-icons-png.flaticon.com/128/423/423519.png", // Replace with the actual icon
            title: "Enhanced Profits",
            description:
                "Replace costs associated with Google APIs with other alternatives, without sacrificing quality.",
            color: "#34d399", // Green
        },
    ];

    const cards = [
        {
            id: 1,
            title: "Customer Apps and Websites",
            buttonText: "Book Free Demo",
        },
        {
            id: 2,
            title: "Admin Panel",
            buttonText: "Book Free Demo",
        },
        {
            id: 3,
            title: "Delivery Apps",
            buttonText: "Book Free Demo",
        },
    ];


    const featuresOffer1 = [
        {
            icon: "bi bi-person-circle",
            title: "Login/Sign Up",
            description: "Allow users to log in quickly using their minimum details.",
        },
        {
            icon: "bi bi-list-task",
            title: "On-demand Services",
            description:
                "Provide users with the option of choosing as many services as they want.",
        },
        {
            icon: "bi bi-calendar-check",
            title: "Book Any Time",
            description:
                "Offer customers the flexibility to book any service at any time.",
        },
        {
            icon: "bi bi-star-fill",
            title: "Rate and Reviews",
            description:
                "Allow customers to give their feedback for the services and the providers.",
        },
    ];


    const featuresIntuitive = [
        {
            icon: "bi bi-telephone-fill",
            title: "VOIP Call Masking",
            description:
                "Contact customers via VOIP calling, without showing the customers' or agent's numbers.",
        },
        {
            icon: "bi bi-box-seam",
            title: "Multiple Order Delivery",
            description:
                "Allow agents to pick up multiple orders and deliver them at different locations.",
        },
        {
            icon: "bi bi-card-list",
            title: "Subscription Plan",
            description:
                "Customers or providers are allowed to buy weekly, monthly, and yearly subscription plans.",
        },
        {
            icon: "bi bi-calculator",
            title: "Auto Toll Calculation",
            description:
                "Customers get the notification of the toll amount and are auto-added to the cost if the toll includes the way.",
        },
        {
            icon: "bi bi-geo-alt-fill",
            title: "Replace Google Maps",
            description:
                "Replace Google Map API with the local Map API, making it easy to deliver services or products.",
        },
        {
            icon: "bi bi-bell-fill",
            title: "In-App Notifications",
            description:
                "Allow service providers to send notifications or broadcast messages to every user or agent.",
        },
        {
            icon: "bi bi-bar-chart-fill",
            title: "Business Analytics",
            description:
                "Get insights into your sales, revenue, and make better decisions.",
        },
        {
            icon: "bi bi-geo-fill",
            title: "Real-time Tracking",
            description:
                "Monitor and track all the agents, deliveries, and services in real time.",
        },
    ];


    return (
        <div>
            <Navbar2 />
            <ChatWithUs />
            <PhoneWhatsAppLogo />
            
            <div className='py-5 mt-5 ' style={{backgroundColor:"#00008B", minHeight:"100vh"}}>
                <div className='container mt-5'>
                    <div className='row'>
                        <div className='col-lg-6 col-12 '>
                            <h1 className='text-white'>Unlock limitless possibilities with the powerful All-in-one Gojek Clone</h1>
                            <p className='text-white' style={{ fontSize: "22px" }}>Our Customizable Multi-Services App Solutions Will Help You Transform Your Business.</p>
                            <div className='d-flex justify-content-between flex-wrap' style={{ maxWidth: "300px" }}>
                                {/* Button */}
                                <div className=''>
                                    <button className="btn btn-outline-light rounded-pill px-4 py-2 my-1">Request a Demo </button>
                                </div>

                            </div>
                        </div>

                        <div className='col-lg-6  col-12 '>
                            <div className='d-flex'>
                                <img
                                    src="https://toxsl.com/themes/new/img/business-model-img/gojak/banner-phone.png"
                                    alt="Image"
                                    className="  img-fluid "
                                    // style={{ objectFit: 'cover', borderRadius: '5px', width: "auto", height: "400px" }}
                                />

                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* =============================================================================================================== */}
            <div>
                <div className="container my-5">
                    <div className="text-center mb-4">
                        <span className="badge bg-secondary text-uppercase mb-2 p-2">Industries</span>
                        <h1 className="fw-bold text-success">All-in-one Solution For Every Industry</h1>
                        <p className="text-muted">
                            Elevate your business to the next level with our versatile all-in-one solution for all industries,
                            including e-commerce, ride-sharing, and delivery.
                        </p>
                    </div>

                    <div className="row g-4">
                        {services.map((service, index) => (
                            <div className="col-lg-2 col-md-4 col-6 g-5" key={index}>
                                <div
                                    className="card border-0 text-center shadow-sm position-relative"
                                    style={{
                                        backgroundColor: "#F3F4F6",
                                        borderRadius: "12px",
                                        padding: "20px",
                                        transition: "transform 0.3s ease",
                                    }}
                                >
                                    <div
                                        className="icon-container mb-3 mx-auto  d-flex align-items-center justify-content-center"
                                        style={{
                                            width: "70px",
                                            height: "70px",

                                        }}
                                    >
                                        <img
                                            src={service.icon}
                                            alt={service.title}
                                            style={{ width: "80px", height: "80px" }}
                                        />
                                    </div>

                                    <div
                                        className="position-absolute top-0 start-0  rounded-circle bg-success text-white d-flex justify-content-center align-items-center"
                                        style={{ width: "50px", height: "50px", transform: "translate(-10%, -40%)" }}
                                    >
                                        <img
                                            src={service.icon}
                                            alt={service.title}
                                            className='p-1 border border-white circle'
                                            style={{ width: "50px", height: "50px" }}
                                        />

                                    </div>
                                    <h6 className="fw-bold">{service.title}</h6>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* =================================================================================================================== */}

            {/* ========================================================================================================================== */}
            <div>
                <div className="container py-5">
                    <div className="text-center mb-4">
                        <span className="badge bg-secondary text-uppercase mb-2 p-2">LOGICS</span>
                        <h1 className="fw-bold text-success">Why should one consider investing in a Gojek clone?</h1>
                        <p className="text-muted">
                            Elevate your business to the next level with our versatile all-in-one solution for all industries,
                            including e-commerce, ride-sharing, and delivery.
                        </p>
                    </div>

                    <div className="my-5 row g-4">
                        {features.map((feature, index) => (
                            <div className="col-lg-4 col-md-6 mb-4 position-relative d-flex " key={index}>
                                <div
                                    className="card border-0 shadow-lg text-center py-4 d-flex flex-column feature-card"
                                    style={{
                                        borderRadius: "12px",
                                    }}
                                >
                                    <div
                                        className="icon-container mb-3 mx-auto position-absolute top-0 start-50 translate-middle rounded-circle d-flex align-items-center justify-content-center"
                                        style={{
                                            width: "80px",
                                            height: "80px",
                                            backgroundColor: feature.color,
                                            transform: "translate(0%, -50%)"
                                        }}
                                    >
                                        <img
                                            src={feature.icon}
                                            alt={feature.title}
                                            style={{
                                                width: "50px",
                                                height: "50px",
                                            }}
                                        />
                                    </div>
                                    <div className='mt-5 py-4'>
                                        <h5 className="fw-bold">{feature.title}</h5>
                                        <p className="text-muted">{feature.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* ======================================================================================================================== */}

            <div className='background-light-gray'>
                <div className="container py-5">
                    <div className="text-center mb-4">
                        <span className="badge bg-secondary text-uppercase mb-2 p-2">TECH-SUITE</span>
                        <h1 className="fw-bold text-success">Premium Tech Suite for Gojek Clone</h1>
                        <p className="text-muted">Develop intuitive apps with the help of high-quality and customizable features. </p>
                    </div>

                    <div className="row">
                        <div className='col-md-4 col-12 d-flex justify-content-center'>
                            <img
                                src="https://toxsl.com/themes/new/img/business-model-img/gojak/phone1.png"
                                alt="Image"
                                className="  img-fluid "
                                style={{ objectFit: 'cover', }}
                            />
                        </div>

                        <div className='col-md-4 col-12 d-flex align-items-center'>
                            <div className='my-4'>
                                <img
                                    src="https://toxsl.com/themes/new/img/business-model-img/gojak/middle-screen.png"
                                    alt="Image"
                                    className="  img-fluid "
                                    style={{ objectFit: 'cover', }}
                                />
                            </div>
                        </div>

                        <div className='col-md-4 col-12 d-flex justify-content-center'>
                            <img
                                src="https://toxsl.com/themes/new/img/business-model-img/gojak/phone2.png"
                                alt="Image"
                                className="  img-fluid "
                                style={{ objectFit: 'cover', }}
                            />
                        </div>

                    </div>

                    <div className="mt-5 row justify-content-center">
                        {cards.map((card) => (
                            <div key={card.id} className="col-md-4 col-sm-6 mb-4 d-flex flex-column">
                                <div className="bg-white text-center rounded-4 shadow-lg p-3 ">
                                    <div
                                        className="rounded-circle mx-auto d-flex justify-content-center align-items-center mb-3"
                                        style={{
                                            width: "50px",
                                            height: "50px",
                                            backgroundColor: "#6200EE",
                                            color: "white",
                                            fontSize: "20px",
                                            fontWeight: "bold",
                                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                                        }}
                                    >
                                        {card.id}
                                    </div>
                                    <h5 className="fw-bold mb-3">{card.title}</h5>
                                    <button className="btn btn-primary px-4">{card.buttonText}</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* =========================================================================================================================== */}


            <div>
                <div className="container my-5">
                    <div className="text-center mb-4">
                        <span className="badge bg-secondary text-uppercase mb-2 p-2">Key Features</span>
                        <h1 className="fw-bold text-success">Features Offered By Gojek Clone</h1>
                        <p className="text-muted">
                            We offer end-to-end features to drive engagement & revenue for your tailor-made Gojek like app
                        </p>
                    </div>

                    {/* first  */}
                    <div className="row align-items-center">
                        {/* Left Side Features */}
                        <div className="col-lg-7 mb-4">
                            <h3 className="fw-bold text-success mb-4">Customer Apps and Websites</h3>
                            <div className="row g-4">
                                {featuresOffer1.map((feature, index) => (
                                    <div key={index} className="col-md-6">
                                        <div className=" shadow-lg rounded-2 p-3 h-100">
                                            <div className="d-flex align-items-center mb-3">
                                                <i
                                                    className={`${feature.icon} text-primary fs-3 me-3`}
                                                ></i>
                                                <h5 className="fw-bold mb-0">{feature.title}</h5>
                                            </div>
                                            <p className="text-muted mb-0">{feature.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-4">
                                <button className="btn btn-outline-primary px-4 py-2">
                                    Schedule a Meeting <i className="bi bi-arrow-right ms-2"></i>
                                </button>
                            </div>
                        </div>

                        {/* Right Side Image */}
                        <div className="col-lg-5 text-center py-5">
                            <img
                                src="https://toxsl.com/themes/new/img/business-model-img/gojak/feature2.png"
                                alt="Mobile App Preview"
                                className="img-fluid"
                                style={{ maxWidth: "300px" }}
                            />
                        </div>
                    </div>

                    {/* second  */}
                    <div className="row align-items-center mt-5">
                        {/* Right Side Image */}
                        <div className="col-lg-5 text-center py-5">
                            <img
                                src="https://toxsl.com/themes/new/img/business-model-img/gojak/feature1.png"
                                alt="Mobile App Preview"
                                className="img-fluid"
                                style={{ maxWidth: "300px" }}
                            />
                        </div>

                        {/* Left Side Features */}
                        <div className="col-lg-7 mb-4">
                            <h3 className="fw-bold  mb-4">Customer Apps and Websites</h3>
                            <div className="row g-4">
                                {featuresOffer1.map((feature, index) => (
                                    <div key={index} className="col-md-6">
                                        <div className=" shadow-lg rounded-2 p-3 h-100">
                                            <div className="d-flex align-items-center mb-3">
                                                <i
                                                    className={`${feature.icon} text-primary fs-3 me-3`}
                                                ></i>
                                                <h5 className="fw-bold mb-0">{feature.title}</h5>
                                            </div>
                                            <p className="text-muted mb-0">{feature.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-4">
                                <button className="btn btn-outline-primary px-4 py-2">
                                    Schedule a Meeting <i className="bi bi-arrow-right ms-2"></i>
                                </button>
                            </div>
                        </div>


                    </div>

                    {/* third  */}
                    <div className="row align-items-center mt-5">
                        {/* Left Side Features */}
                        <div className="col-lg-7 mb-4">
                            <h3 className="fw-bold mb-4">Customer Apps and Websites</h3>
                            <div className="row g-4">
                                {featuresOffer1.map((feature, index) => (
                                    <div key={index} className="col-md-6">
                                        <div className=" shadow-lg rounded-2 p-3 h-100">
                                            <div className="d-flex align-items-center mb-3">
                                                <i
                                                    className={`${feature.icon} text-primary fs-3 me-3`}
                                                ></i>
                                                <h5 className="fw-bold mb-0">{feature.title}</h5>
                                            </div>
                                            <p className="text-muted mb-0">{feature.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-4">
                                <button className="btn btn-outline-primary px-4 py-2">
                                    Schedule a Meeting <i className="bi bi-arrow-right ms-2"></i>
                                </button>
                            </div>
                        </div>

                        {/* Right Side Image */}
                        <div className="col-lg-5 text-center py-5">
                            <img
                                src="https://toxsl.com/themes/new/img/business-model-img/gojak/admin.png"
                                alt="Mobile App Preview"
                                className="img-fluid"
                                style={{objectFit:"contain", maxWidth: "300px" }}
                            />
                        </div>
                    </div>

                </div>
            </div>
            {/* =============================================================================================================== */}


            {/* ================================================================================================================= */}

            <div>
                <div className="container my-5">
                    <div className="text-center mb-4">
                        <span className="badge bg-secondary text-uppercase mb-2 p-2">ADD-ONS</span>
                        <h1 className="fw-bold text-success">Intuitive Features To Make Your App Robust and Unparalleled</h1>
                        <p className="text-muted">Get the features that help your business grow</p>
                    </div>

                    <div className="row g-4">
                        {featuresIntuitive.map((feature, index) => (
                            <div key={index} className="col-md-6 col-lg-3 position-relative">
                                <div className="feature-card2 shadow-lg rounded-4 h-100 p-3">
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="icon-wrapper text-white position-absolute top-0  bg-success rounded-bottom-pill p-3 me-3"
                                        style={{transform: "translate(0%, 0%)" }}>
                                            <i className={`${feature.icon} fs-4`}></i>
                                        </div>
                                        
                                    </div>
                                    <div className='mt-5 py-4'>
                                    <h5 className="mb-0 py-2 fw-bold">{feature.title}</h5>
                                    <p className="">{feature.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            <FooterToxsl />
        </div>
    )
}

export default page
