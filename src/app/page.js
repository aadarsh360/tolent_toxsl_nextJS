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

export default function Home() {
  return (
    <div className="">

      {/* ==================================================================================================================== */}
      <ServicesWeOffer />
      {/* ======================================================================================================================== */}

      <IndustriesWeServe />

      {/* =========================================================================================================================== */}
      <ComprehensiveTechnologyStack />
      {/* ==================================================================================================================== */}
      <div className="background-light-sky py-5">
        <div className=" container">
          <div className="text-center py-3">
            <h2 className=" py-1 px-3 " style={{ color: "#0D47A1" }} >Accolades And Recognition As A Global Business Leader</h2>
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
      <OurHappyClient />

      {/* ============================================================================================================== */}
      <div className="background-light-sky py-5">
        <div className="container my-5">
          <div className="text-center">
            <h2 className=" py-1 px-3 " style={{ color: "#0D47A1" }} >Our Latest Blogs</h2>
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
