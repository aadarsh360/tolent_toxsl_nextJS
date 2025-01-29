"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import FooterToxsl from "./components/FooterToxsl";
import OscillatingArrow from "./components/OscillatingArrow";
import OurHappyClient from "./components/OurHappyClient";
import ComprehensiveTechnologyStack from "./components/ComprehensiveTechnologyStack";
import IndustriesWeServe from "./components/IndustriesWeServe";
import ServicesWeOffer from "./components/ServicesWeOffer";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SampleNextArrow from './components/SliderArrow';
import SamplePrevArrow from './components/SliderArrow';
import TechGrid from "./components/TechGrid";
import Navbar2 from "./components/Navbar2";
import ChatWithUs from "./components/ChatWithUs";
import Offcanvas from "./components/Offcanvas";
import WhatsAppChat from "./components/WhatsAppChat";
import PhoneWhatsAppLogo from "./components/PhoneWhatsAppLogo";
import heroSectionImage from '/public/images/heroSectionHomePageDousoft.jpeg'
import dousoftLogo8 from '/public/images/dousoftLogo8.png'
import BookAMeeting from "./components/BookAMeeting";
import TechnologiesWeMaster from "./components/TechnologiesWeMaster";
import AgileDevelopmentProcess from "./components/AgileDevelopmentProcess";
import Link from "next/link";



function Home() {

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

  var settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="">

      <Navbar2 />
      <ChatWithUs />
      {/* <WhatsAppChat /> */}
      <PhoneWhatsAppLogo />
      {/* <Offcanvas /> */}

      <div className="mt-5 mb-5 py-5">
        <div className="container py-5">

          <Slider {...settings}>
            {/* first row  */}
            <div className="row d-flex">

              <div className="col-lg-6 col-md-6 col-12 py-4 ">
                <p className="fw-bold fs-5">Perfect Blend of Technology & Creativity!</p>

                {/* style={{ color: "#0D47A1", fontSize: "45px" }}  */}
                <h1 className="" style={{ color: "#008000", fontSize: "50px" }}>Artificial Intelligence<br></br> Development<br></br> Company</h1>

                <p className="py-4">Being a top app development company, Dousoft offers customized app development solutions based on the latest technology and design methods.</p>

                {/* Button */}
                <button className="btn btn-outline-success px-2 py-2">Contact Us <OscillatingArrow /> </button>
              </div>

              <div className="col-lg-6 col-md-6 col-12 position-relative">
                <Image
                  // src="https://toxsl.com/themes/new/img/img-banner.webp"
                  src={heroSectionImage}
                  alt="Image"
                  // className="card-img-top p-2"
                  className="d-inline-block align-text-top align-text-center img-fluid "
                  style={{ objectFit: "contain", width: "auto", height: "500px", }}
                />

                {/* ------------------------move up down------------------------------- */}

                {/* Centered Div */}
                <Link href={"/pages/service/web-development-services"}>
                  {/* top-50 start-50 translate-middle  */}
                  <div className="position-absolute text-white  rounded animated-move1"
                    // style={{ transform: "translate(50%, -150%)" }}
                    // style={{ bottom: "140px", left: "50px", backgroundColor:"#008000"}} // Moves up by 150px
                  >
                    Artificial Intelligence
                  </div>
                </Link>

                {/* Top Positioned Div */}
                <Link href={"/pages/service/mobile-app-development-services"}>
                  {/* top-0 end-0 translate-middle-x  */}
                  <div className="position-absolute text-white  rounded animated-move2"
                    // style={{ transform: "translate(-120%, 300%)" }}
                    // style={{ top: "140px", right: "50px", backgroundColor: "#FF7518" }} // Moves up by 150px
                  >
                    App Development
                  </div>
                </Link>

                {/* ------------------------------------------------------------------- */}

              </div>

            </div>

            {/* second row  */}
            <div className="row d-flex">
              <div className="col-lg-6 col-md-6 col-12 py-4 ">
                <p className="fw-bold fs-5">Delivering Success In Every Solution!</p>

                <h1 className="" style={{ color: "#008000", fontSize: "50px" }}>Custom Software<br></br> Development<br></br> Company</h1>

                <p className="py-4">Our custom software development services are designed to meet all of your business needs and assist in promoting business expansion on a global scale.</p>

                {/* Button */}
                <button className="btn btn-outline-success px-2 py-2">Contact Us <OscillatingArrow /> </button>
              </div>

              <div className="col-lg-6 col-md-6 col-12 position-relative">
                <img
                  src="https://toxsl.com/themes/new/img/softwaredv.webp"
                  alt="Image"
                  className="card-img-top p-2"

                />

                {/* ------------------------move up down------------------------------- */}


                {/* Centered Div */}
                <Link href={"/pages/service/web-development-services"}>
                  {/* top-50 start-50 translate-middle  */}
                  <div className="position-absolute text-white  rounded animated-move1"
                    // style={{ transform: "translate(50%, -150%)" }}
                    // style={{ bottom: "140px", left: "50px", backgroundColor:"#008000" }} // Moves up by 150px
                  >
                    Website Development
                  </div>
                </Link>

                {/* Top Positioned Div */}
                <Link href={"/pages/service/erp-software-development"}>
                  {/* top-0 end-0 translate-middle-x  */}
                  <div className="position-absolute text-white rounded animated-move2"
                    // style={{ transform: "translate(-120%, 300%)" }}
                    // style={{ top: "140px", right: "50px", backgroundColor: "#FF7518" }} // Moves up by 150px
                  >
                    ERP Solutions
                  </div>
                </Link>

                {/* ------------------------------------------------------------------- */}

              </div>

            </div>
          </Slider>
        </div>
      </div>


      {/* ======================================================================================================================== */}

      <div className="background-blue-gray">
        <div className="container py-5">
          <div className="row">

            <div className="col-lg-3 col-md-3 col-sm-12  p-2 ">
              <div className=" d-flex p-2">
                <div className="d-flex align-items-center">
                  <img
                    src="https://toxsl.com/themes/new/img/icons/startup.svg"
                    alt="Image"
                    className=" p-2 bg-white"
                    style={{ objectFit: 'cover', borderRadius: '5px', borderTopRightRadius: '25px', borderBottomLeftRadius: '25px', width: "70px", height: "70px" }}
                  />
                </div>
                <div className="px-4 py-2">
                  <h2>12+</h2>
                  <p>Years In Business</p>
                </div>
              </div>
            </div>


            <div className="col-lg-3 col-md-3 col-sm-12  p-2">
              <div className=" d-flex p-2">
                <div className="d-flex align-items-center">
                  <img
                    src="https://toxsl.com/themes/new/img/icons/team.svg"
                    alt="Image"
                    className=" p-2 bg-white"
                    style={{ objectFit: 'cover', borderRadius: '5px', borderTopRightRadius: '25px', borderBottomLeftRadius: '25px', width: "70px", height: "70px" }}
                  />
                </div>
                <div className="px-4 py-2">
                  <h2>300+</h2>
                  <p>Team Members</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-12  p-2">
              <div className=" d-flex p-2">
                <div className="d-flex align-items-center">
                  <img
                    src="https://toxsl.com/themes/new/img/icons/countries-served.png"
                    alt="Image"
                    className=" p-2 bg-white"
                    style={{ objectFit: 'cover', borderRadius: '5px', borderTopRightRadius: '25px', borderBottomLeftRadius: '25px', width: "70px", height: "70px" }}
                  />
                </div>
                <div className="px-4 py-2">
                  <h2>160+</h2>
                  <p>Countries Served</p>
                </div>
              </div>
            </div>


            <div className="col-lg-3 col-md-3 col-sm-12  p-2">
              <div className=" d-flex p-2">
                <div className="d-flex align-items-center">
                  <img
                    src="https://toxsl.com/themes/new/img/icons/technologies-covered.png"
                    alt="Image"
                    className=" p-2 bg-white"
                    style={{ objectFit: 'cover', borderRadius: '5px', borderTopRightRadius: '25px', borderBottomLeftRadius: '25px', width: "70px", height: "70px" }}
                  />
                </div>
                <div className="px-4 py-2">
                  <h2>200+</h2>
                  <p>Technologies Covered</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-12  p-2">
              <div className=" d-flex p-2">
                <div className="d-flex align-items-center">
                  <img
                    src="https://toxsl.com/themes/new/img/icons/deal.svg"
                    alt="Image"
                    className=" p-2 bg-white"
                    style={{ objectFit: 'cover', borderRadius: '5px', borderTopRightRadius: '25px', borderBottomLeftRadius: '25px', width: "70px", height: "70px" }}
                  />
                </div>
                <div className="px-4 py-2">
                  <h2>2000+</h2>
                  <p>Clients Worldwide</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-12  p-2">
              <div className=" d-flex p-2">
                <div className="d-flex align-items-center">
                  <img
                    src="https://toxsl.com/themes/new/img/icons/computers.svg"
                    alt="Image"
                    className=" p-2 bg-white"
                    style={{ objectFit: 'cover', borderRadius: '5px', borderTopRightRadius: '25px', borderBottomLeftRadius: '25px', width: "70px", height: "70px" }}
                  />
                </div>
                <div className="px-4 py-2">
                  <h2>5000+</h2>
                  <p>Projects Delivered</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-12  p-2">
              <div className=" d-flex p-2">
                <div className="d-flex align-items-center">
                  <img
                    src="https://toxsl.com/themes/new/img/icons/worker.svg"
                    alt="Image"
                    className=" p-2 bg-white"
                    style={{ objectFit: 'cover', borderRadius: '5px', borderTopRightRadius: '25px', borderBottomLeftRadius: '25px', width: "70px", height: "70px" }}
                  />
                </div>
                <div className="px-4 py-2">
                  <h2>70M+</h2>
                  <p>Hours Worked</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-12  p-2">
              <div className=" d-flex p-2">
                <div className="d-flex align-items-center">
                  <img
                    src="https://toxsl.com/themes/new/img/icons/customer-service.svg"
                    alt="Image"
                    className=" p-2 bg-white"
                    style={{ objectFit: 'cover', borderRadius: '5px', borderTopRightRadius: '25px', borderBottomLeftRadius: '25px', width: "70px", height: "70px" }}
                  />
                </div>
                <div className="px-4 py-2">
                  <h2>24/7</h2>
                  <p>Support Available</p>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
      {/* ========================================================================================================================= */}

      <TechnologiesWeMaster />
      {/* ==================================================================================================================== */}
      <ServicesWeOffer />
      {/* ======================================================================================================================== */}

      <AgileDevelopmentProcess />

      {/* =================================================================================================================================== */}
      <IndustriesWeServe />

      {/* =========================================================================================================================== */}
      <ComprehensiveTechnologyStack />
      {/* ==================================================================================================================== */}
      <div className="background-light-sky py-5">
        <div className=" container">
          <div className="text-center py-3">
            <h2 className=" py-1 px-3 " style={{ color: "#008000" }} >Accolades And Recognition As A Global Business Leader</h2>
          </div>

          {/* row 1  */}
          <div className="d-flex flex-wrap justify-content-center gap-4 py-2">
            <div className="card border-0 p-4 shadow-lg">
              <img
                src="https://toxsl.com/themes/new/img/glassdoor.svg"
                alt="Image"
                className="card-img-top p-2"
                style={{ height: '100px', width: '100px', objectFit: 'contain' }}
              />
            </div>

            <div className="card border-0 p-4 shadow-lg">
              <img
                src="https://toxsl.com/themes/new/img/clutch-img.webp"
                alt="Image"
                className="card-img-top p-2"
                style={{ height: '100px', width: '100px', objectFit: 'contain' }}
              />
            </div>

            <div className="card border-0 p-4 shadow-lg">
              <img
                src="https://toxsl.com/themes/new/img/goodfirm.png"
                alt="Image"
                className="card-img-top p-2"
                style={{ height: '100px', width: '100px', objectFit: 'contain' }}
              />
            </div>

            <div className="card border-0 p-4 shadow-lg">
              <img
                src="https://toxsl.com/themes/new/img/people-per-hour.png"
                alt="Image"
                className="card-img-top p-2"
                style={{ height: '100px', width: '100px', objectFit: 'contain' }}
              />
            </div>

            <div className="card border-0 p-4 shadow-lg">
              <img
                src="https://toxsl.com/themes/new/img/techreviewer.svg"
                alt="Image"
                className="card-img-top p-2"
                style={{ height: '100px', width: '100px', objectFit: 'contain' }}
              />
            </div>


          </div>

          {/* row 2  */}
          <div className="d-flex flex-wrap justify-content-center gap-4 py-2">
            <div className="card border-0 p-4 shadow-lg">
              <img
                src="https://toxsl.com/themes/new/img/appfutura-badge.png"
                alt="Image"
                className="card-img-top p-2"
                style={{ height: '100px', width: '100px', objectFit: 'contain' }}
              />
            </div>

            <div className="card border-0 p-4 shadow-lg">
              <img
                src="https://toxsl.com/themes/new/img/upwork.png"
                alt="Image"
                className="card-img-top p-2"
                style={{ height: '100px', width: '100px', objectFit: 'contain' }}
              />
            </div>

            <div className="card border-0 p-4 shadow-lg">
              <img
                src="https://toxsl.com/themes/new/img/top-developers.webp"
                alt="Image"
                className="card-img-top p-2"
                style={{ height: '100px', width: '100px', objectFit: 'contain' }}
              />
            </div>

            <div className="card border-0 p-4 shadow-lg">
              <img
                src="https://toxsl.com/themes/new/img/tech-behemoths.svg"
                alt="Image"
                className="card-img-top img-fluid p-2"
                style={{ height: '100px', width: '100px', objectFit: 'contain' }}
              />
            </div>

            <div className="card border-0 p-4 shadow-lg">
              <img
                src="https://toxsl.com/themes/new/img/mobile-app-daily.webp"
                alt="Image"
                className="card-img-top p-2"
                style={{ height: '100px', width: '100px', objectFit: 'contain' }}
              />
            </div>


          </div>

        </div>
      </div>

      {/* ================================================================================================================ */}
      {/* <OurHappyClient /> */}

      {/* ============================================================================================================== */}

      {/* <div className="background-blue-gray py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-12 d-flex align-items-center ">

              <div>
                <h2 className="" style={{ color: "#008000" }}>What Our Clients Say!</h2>
                <p className="fs-5">Over 2000+ satisfied clients and growing.</p>
              </div>

            </div>
            <div className="col-md-7 col-12">

              <div style={{ height: "400px" }}>
                <Slider {...settings2}>
                  <div className="bg-white p-4" style={{ height: "400px" }} >

                    <p>jiTalent embraces the power of change to create 360° value and shared success for our partners, communities, and the talented individuals we connect with.</p>

                    <h6>Rahul Gupta</h6>
                    <p>India</p>

                    <p className="text-white">start</p>
                    <p className="text-white">start</p>
                    <p className="text-white">start</p>
                    <p className="text-white">start</p>
                    <p className="text-white">start</p>


                  </div>


                  <div className="bg-white p-4" style={{ height: "100%" }}>
                    <p>jiTalent embraces the power of change to create 360° value and shared success for our partners, communities, and the talented individuals we connect with.</p>

                    <h6>Ankit Kumar</h6>
                    <p>India</p>

                    <p className="text-white">start</p>
                    <p className="text-white">start</p>
                    <p className="text-white">start</p>
                    <p className="text-white">start</p>
                    <p className="text-white">start</p>
                  </div>

                  <div className="bg-white p-4" style={{ height: "100%" }}>
                    <p>jiTalent embraces the power of change to create 360° value and shared success for our partners, communities, and the talented individuals we connect with.</p>

                    <h6>Anoop Singh</h6>
                    <p>India</p>

                    <p className="text-white">start</p>
                    <p className="text-white">start</p>
                    <p className="text-white">start</p>
                    <p className="text-white">start</p>
                    <p className="text-white">start</p>
                  </div>

                </Slider>
              </div>


            </div>
          </div>
        </div>
      </div> */}
      {/* =========================================================================================================================== */}
      <div className="background-light-sky py-5">
        <div className="container my-5">
          <div className="text-center">
            <h2 className=" py-1 px-3 " style={{ color: "#008000" }} >Our Latest Blogs</h2>
          </div>
          <p className="text-center py-2 fs-5" >Explore our latest tech stories & news.</p>

          <div className="row g-3 mt-4 d-flex">

            {/* first */}
            <div className="col-md-4 col-12 d-flex ">
              <div className="p-3 bg-white shadow d-flex flex-wrap">
                {/* Image */}
                <img
                  src="https://toxsl.com/blog/image/442?file=5252&thumbnail=400"
                  alt="Example"
                  className="img-fluid mb-3"

                />

                {/* date  */}
                <div className="py-2">
                  <span className="py-2 px-2 background-light-sky">Jan 08, 2025</span>
                </div>
                {/* Heading */}
                <h5 className="py-2 mb-2">Why Custom Software Is Better For Most Industries</h5>

                {/* Paragraph */}

                {/* Button */}
                <button className="btn btn-outline-primary px-2 py-2">Read More <OscillatingArrow /> </button>
              </div>
            </div>

            {/* second */}
            <div className="col-md-4 col-12 d-flex">
              <div className="p-3 bg-white shadow d-flex flex-wrap">
                {/* Image */}
                <img
                  src="https://toxsl.com/blog/image/441?file=5236&thumbnail=400"
                  alt="Example"
                  className="img-fluid mb-3"

                />

                {/* date  */}
                <div className="py-2">
                  <span className="py-2 px-2 background-light-sky">Jan 08, 2025</span>
                </div>
                {/* Heading */}
                <h5 className="py-2 mb-2">How Much Does It Cost to Develop Document Management Software?</h5>

                {/* Paragraph */}

                {/* Button */}
                <button className="btn btn-outline-primary px-2 py-2">Read More <OscillatingArrow /></button>
              </div>
            </div>

            {/* third */}
            <div className="col-md-4 col-12 d-flex ">
              <div className="p-3 bg-white shadow d-flex flex-wrap">
                {/* Image */}
                <img
                  src="https://toxsl.com/blog/image/440?file=5226&thumbnail=400"
                  alt="Example"
                  className="img-fluid mb-3"

                />

                {/* date  */}
                <div className="py-2">
                  <span className="py-2 px-2 background-light-sky">Jan 08, 2025</span>
                </div>
                {/* Heading */}
                <h5 className="py-2 mb-2">Why Should Large Organizations Choose Custom ERP Software?</h5>

                {/* Paragraph */}

                {/* Button */}
                <button className="btn btn-outline-primary px-2 py-2">Read More <OscillatingArrow /></button>
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* ================================================================================================================== */}

      <FooterToxsl />
    </div>
  );
}


export default Home;
