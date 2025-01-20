"use client"
import ChatWithUs from '@/app/components/ChatWithUs'
import FooterToxsl from '@/app/components/FooterToxsl'
import Navbar2 from '@/app/components/Navbar2'
import OscillatingArrow from '@/app/components/OscillatingArrow'
import React from 'react'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function page() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024, // For devices below 1024px
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 768, // For devices below 768px
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 480, // For devices below 480px
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
        ],
    };
    

    return (
        <>

            <Navbar2 />
            <ChatWithUs />
            <div className='mt-5 py-5'>
                <div className='container py-5'>
                    <span className='bg-danger px-3 py-2 my-5 text-white'>Android App Development</span>

                    <h1 className='py-2'>Cutting-Edge Android App Development <br></br>Services For Your Business</h1>

                    <p className='text-strong-blue'>Budding over a decade in the Android App development industry, we are the leading organization known for crafting mobile applications with vigorous code, a user-friendly interface, and a unique UX. Our developers leverage the best and latest Android technologies to develop cutting-edge solutions.</p>
                    <p className='text-strong-blue'>Our team always stands out with you and makes the right twitch to your business logic. Build more reliable, fully functional, and customized solutions as per your business need.</p>

                    {/* mobile devlopment card start */}

                    <div className=" my-5">

                        <h4 className="text-center py-2 " >Explore Our Mobile Development</h4>

                        <div className="row g-3 mt-4 d-flex flex-wrap">
                            <Slider {...settings}>
                            {/* first */}
                            <div className="col-md-4 col-12 d-flex ">
                                <div className="p-3 bg-white shadow d-flex flex-column">
                                    {/* Image */}
                                    <img
                                        src='https://toxsl.com/themes/new/img/works/cross_platform.png'
                                        alt="Example"
                                        className="img-fluid mb-3"

                                    />

                                    {/* Heading */}
                                    <h5 className="py-2 mb-2">Android App Development</h5>

                                    {/* Paragraph */}

                                    {/* Button */}
                                    <div>
                                        <button className="btn btn-outline-primary px-2 py-2">Read More <OscillatingArrow /> </button>
                                    </div>
                                </div>
                            </div>

                            {/* second */}
                            <div className="col-md-4 col-12 d-flex">
                                <div className="p-3 bg-white shadow d-flex flex-column">
                                    {/* Image */}
                                    <img
                                        src="https://toxsl.com/themes/new/img/works/flutter.png"
                                        alt="Example"
                                        className="img-fluid mb-3"

                                    />

                                    {/* Heading */}
                                    <h5 className="py-2 mb-2">Flutter App Development</h5>

                                    {/* Paragraph */}

                                    {/* Button */}
                                    <div>
                                        <button className="btn btn-outline-primary px-2 py-2">Read More <OscillatingArrow /> </button>
                                    </div>
                                </div>
                            </div>

                            {/* third */}
                            <div className="col-md-4 col-12 d-flex ">
                                <div className="p-3 bg-white shadow d-flex flex-column">
                                    {/* Image */}
                                    <img
                                        src="https://toxsl.com/themes/new/img/works/cross_platform.png"
                                        alt="Example"
                                        className="img-fluid mb-3"

                                    />

                                    {/* Heading */}
                                    <h5 className="py-2 mb-2">Cross-Platform App Development</h5>

                                    {/* Paragraph */}

                                    {/* Button */}
                                    <div>
                                        <button className="btn btn-outline-primary px-2 py-2">Read More <OscillatingArrow /> </button>
                                    </div>
                                </div>
                            </div>

                            {/* four */}
                            <div className="col-md-4 col-12 d-flex ">
                                <div className="p-3 bg-white shadow d-flex flex-column">
                                    {/* Image */}
                                    <img
                                        src="https://toxsl.com/themes/new/img/works/ios_app_development.png"
                                        alt="Example"
                                        className="img-fluid mb-3"

                                    />

                                    {/* Heading */}
                                    <h5 className="py-2 mb-2">iOS App Development</h5>

                                    {/* Paragraph */}

                                    {/* Button */}
                                    <div>
                                        <button className="btn btn-outline-primary px-2 py-2">Read More <OscillatingArrow /> </button>
                                    </div>
                                </div>
                            </div>

                            {/* five */}
                            <div className="col-md-4 col-12 d-flex ">
                                <div className="p-3 bg-white shadow d-flex flex-column">
                                    {/* Image */}
                                    <img
                                        src="https://toxsl.com/themes/new/img/works/argumented_development%20.png"
                                        alt="Example"
                                        className="img-fluid mb-3"

                                    />

                                    {/* Heading */}
                                    <h5 className="py-2 mb-2">Augmented Reality/VR</h5>

                                    {/* Paragraph */}

                                    {/* Button */}
                                    <div>
                                        <button className="btn btn-outline-primary px-2 py-2">Read More <OscillatingArrow /> </button>
                                    </div>
                                </div>
                            </div>

                            </Slider>

                        </div>
                    </div>


                    {/* mobile development card end  */}


                    <h2>Industry Specific and Personalized App Development Services</h2>
                    <p className='text-strong-blue'>We at ToXSL boast an unmatched team of Android developers, which makes us one of India's leading Android app development companies. At ToXSL, we are pretty proud of the differences between our competitors and us.</p>

                    <p className='text-strong-blue'>Our industry-best pricing is certainly one major advantage, ensuring that even small and mid-sized companies can take advantage of Android app development solutions. However, our robust team is another advantage, ensuring we can provide in-house solutions throughout every step of the app development process, from concept to design to bug testing to final polishing.</p>
                    <p className='text-strong-blue'>We follow the fixed payment method without any hidden charges. Once you strike the deal with us, we ensure that we complete your work on the agreed terms. We believe in delivering what we promised and at the fixed prices.</p>
                    <p className='text-strong-blue'>With over 300 apps developed to date on Android and iOS, our experience and expertise ensure that the client will have the process. Our apps have seen immense success, and we are proud to extend that to our clients.</p>
                    <p className='text-strong-blue'>So what are you waiting for? Contact us and get going with a highly professional, efficient, and truly global Android app, which will massively benefit your business.</p>

                    <h2>Our Android App Development Services Includes:</h2>

                    <p className='text-strong-blue'>Our approach to the Android App development process offers you end-to-end results, and here are the top-notch services we offer:</p>


                    <ul className="">
                        <li className="">
                            <p className='text-strong-blue'>UI/UX for Android</p>
                            <p>A clear and unique user interface is sure to bring more and more users to your Android App. We have highly skilled designers who create a simple, unique, and easy-to-navigate design for your application.</p>
                        </li>
                        <li className="">
                            <p className='text-strong-blue'>Customized Android Apps</p>
                            <p>We offer customized, easy-to-scale, and launch solutions that boost your business performance. Whether speed, design, or more, we stand unique in all the factors and offer a more personalized and superior experience.</p>
                        </li>
                        <li className="">
                            <p className='text-strong-blue'>Android App Development and Consulting</p>
                            <p>Our end-to-end development solutions ultimately transform your ideas into a perfect Android app. We also offer consultation services that strive to solve all your business problems, no matter how complex it is.</p>
                        </li>
                        <li className="">
                            <p>Back-end Solutions</p>
                            <p>Our developers offer the most secure and scalable platform, implement the trusted APIs, and ensure to take care of your evolving business needs.</p>
                        </li>
                        <li className="">
                            <p className='text-strong-blue'>Support and Maintenance</p>
                            <p>With round-the-clock support and maintenance for the Android apps, we ensure to keep your business up-to-date and on track. Whether it's fixing bugs or any update, we offer instant maintenance services.</p>
                        </li>
                        <li className="">
                            <p className='text-strong-blue'>Android App Testing</p>
                            <p>Once we develop an Android application for you, our stringent Android app testing services perform standardization checks and ensure there are minimal or no errors.</p>
                        </li>
                    </ul>

                    <div className='mt-2 py-2'>
                        <h2>Process Flow For Android App Development at ToXSL Technologies</h2>

                        <ol className="">
                            <li >
                                <p className="fs-5 text-strong-blue">Requirement Gathering</p>

                                <ul className="disc">
                                    <li className="">
                                        <p className='text-strong-blue'>App idea with the client for concept evaluation.</p>
                                    </li>
                                    <li className="">
                                        <p className='text-strong-blue'>Refining the idea to make it more lucrative.</p>
                                    </li>
                                    <li className="">
                                        <p className='text-strong-blue'>Creating a final requirements document.</p>
                                    </li>
                                    <li className="">
                                        <p className='text-strong-blue'>Finalizing the milestones to be achieved.</p>
                                    </li>

                                </ul>
                            </li>

                            <li className="">
                                <p className="fs-5 text-strong-blue">Android App Design</p>

                                <ul className="disc">
                                    <li className="">
                                        <p className='text-strong-blue'>Choosing the right style of design for the android app.</p>
                                    </li>
                                    <li className="">
                                        <p className='text-strong-blue'>Refining the idea to make it more lucrative.</p>
                                    </li>
                                    <li className="">
                                        <p className='text-strong-blue'>Creating a final requirements document.</p>
                                    </li>

                                </ul>
                            </li>
                            <li className="">
                                <p className="fs-5 text-strong-blue">Android App Development</p>

                                <ul className="disc">
                                    <li className="">
                                        <p className='text-strong-blue'>App idea with the client for concept evaluation.</p>
                                    </li>
                                    <li className="">
                                        <p className='text-strong-blue'>Refining the idea to make it more lucrative.</p>
                                    </li>
                                    <li className="">
                                        <p className='text-strong-blue'>Creating a final requirements document.</p>
                                    </li>
                                    <li className="">
                                        <p className='text-strong-blue'>Finalizing the milestones to be achieved.</p>
                                    </li>

                                </ul>
                            </li>
                            <li className="">

                                <p className="fs-5 text-strong-blue">Final Delivery</p>

                                <ul className="disc">
                                    <li className="">
                                        <p className='text-strong-blue'>App idea with the client for concept evaluation.</p>
                                    </li>
                                    <li className="">
                                        <p className='text-strong-blue'>Refining the idea to make it more lucrative.</p>
                                    </li>
                                    <li className="">
                                        <p className='text-strong-blue'>Creating a final requirements document.</p>
                                    </li>

                                </ul>
                            </li>
                        </ol>

                    </div>

                </div>
            </div>

            {/* ======================================================================================================== */}
            <div className='py-4' style={{ backgroundColor: "#021461" }}>
                <div className="container py-2">
                    <div className="row align-items-center">
                        {/* Left Column */}
                        <div className="col-md-6">
                            <h1 className="mb-3 text-white">Transform Business With Best Android App Development Company</h1>
                            <p className='text-white'>
                                With years of expertise in offering custom and fully functional Android applications, we have gained a reputation in the industry. Our services help you deliver reliable products that plead to the users!
                            </p>
                        </div>

                        {/* Right Column */}
                        <div className="col-md-6 text-center">
                            <img
                                src="https://toxsl.com/themes/new/img/works/android_app_development1.png"
                                alt="Sample"
                                className="img-fluid"
                                style={{ maxWidth: "100%", height: "auto" }}
                            />
                        </div>
                    </div>
                </div>

            </div>
            {/* ============================================================================================================== */}

            <div className='py-5 my-2'>
                <div className='container'>
                    <div className='text-center'>
                        <h2>Choosing Us As Your Leading Android App Development Company</h2>
                        <p className='fs-5'>We will help you every step of the way and get you the Android app results that will grow your business.</p>
                    </div>
                    <div className='row p-4 mt-4'
                        style={{
                            backgroundColor: "#021461",
                            borderTopLeftRadius: '50px', // Top-right border radius
                            borderBottomRightRadius: '50px', // Bottom-left border radius
                        }}>

                        {/* Feature Card 1 */}
                        <div className="col-lg-4 col-md-6 mb-4 p-3">
                            <div className="card h-100 shadow-lg p-3 rounded bg-white">
                                <div className=" mb-3">
                                    <img
                                        src="https://toxsl.com/themes/new/img/icons/customized_solutions.svg"
                                        alt="Customized Solutions"
                                        className="mb-3"
                                    />
                                </div>
                                <h5 className=" ">CUSTOMIZED SOLUTIONS</h5>
                                <p className="">
                                    We focus on giving a personalized experience to our customers. That is why we
                                    customize every solution as per your business requirements.
                                </p>
                            </div>
                        </div>

                        {/* Feature Card 2 */}
                        <div className="col-lg-4 col-md-6 mb-4 p-3">
                            <div className="card h-100 border-0 shadow-lg p-3 rounded bg-white">
                                <div className=" mb-3">
                                    <img
                                        src="https://toxsl.com/themes/new/img/icons/save_money&time.svg"
                                        alt="Customized Solutions"
                                        className="mb-3"
                                    />
                                </div>
                                <h5 className=" ">CUSTOMIZED SOLUTIONS</h5>
                                <p className="">
                                    We focus on giving a personalized experience to our customers. That is why we
                                    customize every solution as per your business requirements.
                                </p>
                            </div>
                        </div>

                        {/* Feature Card 3 */}
                        <div className="col-lg-4 col-md-6 mb-4 p-3">
                            <div className="card h-100 border-0 shadow-lg p-3 rounded bg-white">
                                <div className=" mb-3">
                                    <img
                                        src="https://toxsl.com/themes/new/img/icons/skilled_developers.svg"
                                        alt="Customized Solutions"
                                        className="mb-3"
                                    />
                                </div>
                                <h5 className=" ">CUSTOMIZED SOLUTIONS</h5>
                                <p className="">
                                    We focus on giving a personalized experience to our customers. That is why we
                                    customize every solution as per your business requirements.
                                </p>
                            </div>
                        </div>

                        {/* Feature Card 4 */}
                        <div className="col-lg-4 col-md-6 mb-4 p-3">
                            <div className="card h-100 border-0 shadow-lg p-3 rounded bg-white" >
                                <div className=" mb-3">
                                    <img
                                        src="https://toxsl.com/themes/new/img/icons/24_7_support.svg"
                                        alt="Customized Solutions"
                                        className="mb-3"
                                    />
                                </div>
                                <h5 className=" ">CUSTOMIZED SOLUTIONS</h5>
                                <p className="">
                                    We focus on giving a personalized experience to our customers. That is why we
                                    customize every solution as per your business requirements.
                                </p>
                            </div>
                        </div>

                        {/* Feature Card 5 */}
                        <div className="col-lg-4 col-md-6 mb-4 p-3">
                            <div className="card h-100 border-0 shadow-lg p-3 rounded bg-white">
                                <div className=" mb-3">
                                    <img
                                        src="https://toxsl.com/themes/new/img/icons/interactive_designs.svg"
                                        alt="Customized Solutions"
                                        className="mb-3"
                                    />
                                </div>
                                <h5 className=" ">CUSTOMIZED SOLUTIONS</h5>
                                <p className="">
                                    We focus on giving a personalized experience to our customers. That is why we
                                    customize every solution as per your business requirements.
                                </p>
                            </div>
                        </div>

                        {/* Feature Card 6 */}
                        <div className="col-lg-4 col-md-6 mb-4 p-3">
                            <div className="card h-100 border-0 shadow-lg p-3 rounded bg-white">
                                <div className=" mb-3">
                                    <img
                                        src="https://toxsl.com/themes/new/img/icons/delivering_solutions.svg"
                                        alt="Customized Solutions"
                                        className="mb-3"
                                    />
                                </div>
                                <h5 className=" ">CUSTOMIZED SOLUTIONS</h5>
                                <p className="">
                                    We focus on giving a personalized experience to our customers. That is why we
                                    customize every solution as per your business requirements.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ================================================================================================================== */}

            <div className='py-4' style={{ backgroundColor: "#021461" }}>
                <div className='container text-center py-2'>
                    <h2 className='text-white'>Shaping The Digitalization With Our Android App Development</h2>
                    <p className='p-2 text-white fs-5'>We have extensive experience in offering Android app development services that brings value to your enterprise or brand. Our industry-specific development services rely on the most up-to-date platforms, technologies, and tools with a deep understanding of workflow. We help you develop smart solutions that work on any device, regardless of the brand!</p>

                    <div>
                        <button className="border-0 rounded  px-5 py-3 bg-white">Get the Quote </button>
                    </div>
                </div>
            </div>

            {/* ============================================================================================================================== */}

            <div className='py-4'>
                <div className='container'>
                    <h2 className='text-center'>FAQs on Android App Development</h2>

                    <div className='my-5'>
                        <hr></hr>
                        <h5 className='py-2'>What is Android App Development?</h5>
                        <p className='py-2'>Android App Development is a process by which applications are created that runs on android devices.</p>

                        <hr></hr>

                        <h5 className='py-2'>What are the languages used by you to develop Android App Development?</h5>
                        <p className='py-2'>Our experts are well-versed in Kotlin, Java, and C++. Moreover, we are not limited to that, we are open to using any other language if needed.</p>

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

                <div className='container border rounded-3'>
                    <div className='row rounded'>
                        <div className='col-md-9 col-12 py-3 px-2 text-white' style={{backgroundColor:"#5f59fd"}}>
                            <h2 className='p-2'>Are you looking for customized mobile apps for a plethora of industry verticals?</h2>
                        </div>
                        <div className='col-md-3 col-12 bg-warning d-flex justify-content-center align-items-center'>
                            <span>
                            <button className="btn btn-outline-light px-2 py-2">Hire us!</button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            {/* ================================================================================================================================= */}
            <FooterToxsl />
        </>
    )
}

export default page
