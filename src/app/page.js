import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
export default function Home() {
  return (
    <div className="">

      <Navbar />

      <div className="min-vh-100 ">
        <div className="container-fluid h-screen">
          <div className="row">

            <div className="col-md-1 col-0 bg-primary"></div>
            {/* Left Section */}
            <div className=" min-vh-100 col-md-5 bg-primary text-white d-flex flex-column justify-content-center py-5 px-3">

              <div className="">
                <h1 className="fw-bold">We are <br /> <span className="" style={{ fontSize: "5rem" }}>Hiring !</span></h1>
                <p className="fs-4">
                  Unleash your potential! We're looking for talented individuals who
                  can help us push boundaries and achieve greatness.
                </p>
                <div>
                  <button className="btn btn-outline-light  fw-bold mb-2 px-4 py-3">
                    Job Opportunities &gt;
                  </button>
                </div>
                <div>
                  <button className="btn btn-outline-light fw-bold px-4 py-3">
                    Trainings &gt;
                  </button>
                </div>

              </div>

            </div>

            <div className="col-md-1 col-0" style={{ backgroundColor: "#E3F2FD" }}></div>
            {/* Right Section */}
            <div className="col-md-4  d-flex flex-column justify-content-center py-5 px-3" style={{ backgroundColor: "#E3F2FD" }}>

              <div className=" ">
                <h2 className="fw-bold text-navy" style={{ fontSize: "3rem" }}>Directly Contact Us !</h2>
                <p className="fs-4">
                  Want to start your career journey with us? Contact us directly.
                </p>


                <div className="d-flex align-items-center mb-3 py-3 bg-white fs-4">
                  <span className="me-3 fs-4">
                    <i className="bi bi-telephone"></i>
                  </span>
                  <span>
                    +91 956 912 7788 <i className="bi bi-whatsapp text-success"></i>
                  </span>
                </div>

                <div className="d-flex align-items-center mb-3 py-3 bg-white fs-4">
                  <span className="me-3 fs-4">
                    <i className="bi bi-envelope"></i>
                  </span>
                  <span>career@toxsl.com</span>
                </div>

                <div className="d-flex align-items-center py-3 bg-white fs-4">
                  <span className="me-3 fs-4">
                    <i className="bi bi-clock"></i>
                  </span>
                  <span>9:00 to 6:30 (5 working days)</span>
                </div>

              </div>
            </div>
            <div className="col-md-1 col-0" style={{ backgroundColor: "#E3F2FD" }}></div>
            
          </div>

          {/* Footer */}
          {/* <div className="position-fixed bottom-0 w-100 bg-warning text-dark text-center py-2">
            We use cookies, check our Privacy Policies. <button className="btn btn-sm btn-success ms-2">Agree</button>
          </div> */}
        </div>

      </div>


      {/* =================================================================================================================================== */}
      <div className="">
        <div className="mt-5 mb-5 py-5 container  text-center">
          <h1 className="text-navy">All Our Offerings at a Glance</h1>
          <p>Being a global leader in next-generation software services, we ensure that you grow with us.</p>

          <div className="py-2 d-flex flex-wrap justify-content-around">
            <div className="text-center">
              <img
                src="https://talent.toxsl.com/themes/toxsl/img/cat-img1.svg"
                alt="Sample Image"
                className="img-fluid mb-3"
              />
              <p className="text-navy">Digital Marketing</p>
            </div>

            <div className="text-center">
              <img
                src="https://talent.toxsl.com/themes/toxsl/img/cat-img2.svg"
                alt="Sample Image"
                className="img-fluid mb-3"
              />
              <p className="text-navy">Web Development</p>
            </div>

            <div className="text-center">
              <img
                src="https://talent.toxsl.com/themes/toxsl/img/cat-img3.svg"
                alt="Sample Image"
                className="img-fluid mb-3"
              />
              <p className="text-navy">Web Design</p>
            </div>

            <div className="text-center">
              <img
                src="https://talent.toxsl.com/themes/toxsl/img/cat-img4.svg"
                alt="Sample Image"
                className="img-fluid mb-3"
              />
              <p className="text-navy">App Development</p>
            </div>

            <div className="text-center">
              <img
                src="https://talent.toxsl.com/themes/toxsl/img/cat-img5.svg"
                alt="Sample Image"
                className="img-fluid mb-3"
              />
              <p className="text-navy">IoT Application</p>
            </div>

            <div className="text-center">
              <img
                src="https://talent.toxsl.com/themes/toxsl/img/cat-img6.svg"
                alt="Sample Image"
                className="img-fluid mb-3"
              />
              <p className="text-navy">Artificial Intelligence</p>
            </div>

            <div className="text-center">
              <img
                src="https://talent.toxsl.com/themes/toxsl/img/cat-img7.svg"
                alt="Sample Image"
                className="img-fluid mb-3"
              />
              <p className="text-navy">Cybersecurity</p>
            </div>

          </div>
        </div>
      </div>

      <div className="" style={{ backgroundColor: "#E3F2FD" }}>
        <div className="container py-5 ">
          <h1 className="text-navy text-center">Unlock Your Potential with jiTalent</h1>
          <p className="text-center fs-5">Are you tired of feeling stuck in your career? Do you want to unlock your full potential and<br></br> achieve your goals? jiTalent is here to help.</p>

          <div className="d-flex flex-wrap justify-content-evenly py-5" style={{ backgroundColor: "#E3F2FD" }}>
            <div className="text-center position-relative">
              {/* Main Circle */}
              <div
                className="d-flex justify-content-center align-items-center mx-auto"
                style={{
                  width: "150px",
                  height: "150px",
                  borderRadius: "50%",
                  backgroundColor: "white",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}
              >
                <img
                  src="https://talent.toxsl.com/themes/toxsl/img/search.png"
                  alt="Icon"
                  style={{ width: "50px", height: "50px" }}
                />
              </div>

              {/* Number Circle */}
              <div
                className="d-flex justify-content-center align-items-center position-absolute"
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  backgroundColor: "#FFA726",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "16px",
                  bottom: "50px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}
              >
                01
              </div>

              {/* Text Below */}
              <p style={{ marginTop: "40px", color: "#0D47A1", fontWeight: "bold", fontSize: "16px" }}>Search</p>
            </div>

            <div className="text-center position-relative">
              {/* Main Circle */}
              <div
                className="d-flex justify-content-center align-items-center mx-auto"
                style={{
                  width: "150px",
                  height: "150px",
                  borderRadius: "50%",
                  backgroundColor: "white",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}
              >
                <img
                  src="https://talent.toxsl.com/themes/toxsl/img/discover.png"
                  alt="Icon"
                  style={{ width: "50px", height: "50px" }}
                />
              </div>

              {/* Number Circle */}
              <div
                className="d-flex justify-content-center align-items-center position-absolute"
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  backgroundColor: "#FFA726",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "16px",
                  bottom: "50px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}
              >
                02
              </div>

              {/* Text Below */}
              <p style={{ marginTop: "40px", color: "#0D47A1", fontWeight: "bold", fontSize: "16px" }}>Discover</p>
            </div>

            <div className="text-center position-relative">
              {/* Main Circle */}
              <div
                className="d-flex justify-content-center align-items-center mx-auto"
                style={{
                  width: "150px",
                  height: "150px",
                  borderRadius: "50%",
                  backgroundColor: "white",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}
              >
                <img
                  src="https://talent.toxsl.com/themes/toxsl/img/apply.png"
                  alt="Icon"
                  style={{ width: "50px", height: "50px" }}
                />
              </div>

              {/* Number Circle */}
              <div
                className="d-flex justify-content-center align-items-center position-absolute"
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  backgroundColor: "#FFA726",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "16px",
                  bottom: "50px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}
              >
                03
              </div>

              {/* Text Below */}
              <p style={{ marginTop: "40px", color: "#0D47A1", fontWeight: "bold", fontSize: "16px" }}>Apply</p>
            </div>

            <div className="text-center position-relative">
              {/* Main Circle */}
              <div
                className="d-flex justify-content-center align-items-center mx-auto"
                style={{
                  width: "150px",
                  height: "150px",
                  borderRadius: "50%",
                  backgroundColor: "white",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}
              >
                <img
                  src="https://talent.toxsl.com/themes/toxsl/img/nodes.png"
                  alt="Icon"
                  style={{ width: "50px", height: "50px" }}
                />
              </div>

              {/* Number Circle */}
              <div
                className="d-flex justify-content-center align-items-center position-absolute"
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  backgroundColor: "#FFA726",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "16px",
                  bottom: "50px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}
              >
                01
              </div>

              {/* Text Below */}
              <p style={{ marginTop: "40px", color: "#0D47A1", fontWeight: "bold", fontSize: "16px" }}>Connect</p>
            </div>

            <div className="text-center position-relative">
              {/* Main Circle */}
              <div
                className="d-flex justify-content-center align-items-center mx-auto"
                style={{
                  width: "150px",
                  height: "150px",
                  borderRadius: "50%",
                  backgroundColor: "white",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}
              >
                <img
                  src="https://talent.toxsl.com/themes/toxsl/img/success2.png"
                  alt="Icon"
                  style={{ width: "50px", height: "50px" }}
                />
              </div>

              {/* Number Circle */}
              <div
                className="d-flex justify-content-center align-items-center position-absolute"
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  backgroundColor: "#FFA726",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "16px",
                  bottom: "50px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}
              >
                01
              </div>

              {/* Text Below */}
              <p style={{ marginTop: "40px", color: "#0D47A1", fontWeight: "bold", fontSize: "16px" }}>Achieve</p>
            </div>
          </div>

        </div>
      </div>

      {/* ============================================================================================================================ */}

      <div className="">
        <div className="container my-5">
          <div className="row">
            {/* Left Side: Image */}
            <div className=" col-md-6 col-12">
              <img
                src="https://talent.toxsl.com/themes/toxsl/img/why-choose-us.png"
                alt="Example"
                style={{ maxWidth: "100%", borderRadius: "8px" }}
              />
            </div>

            {/* Right Side: Heading and Paragraph */}
            <div className="col-md-6 col-12">
              <div>
                <h1 className="mb-3" style={{ color: "#0D47A1" }}>Why Choose Us</h1>
                <p style={{ color: "#555" }}>
                  We promise you an inclusive work environment where you'll embrace challenges and thrive in overcoming them.
                </p>

              </div>

              {/* first */}
              <div className=" my-4">
                <div className="d-flex gap-2">
                  <div className="p-2 align-items-center">
                    {/* Image */}
                    <img
                      src="https://talent.toxsl.com/themes/toxsl/img/work-icon.jpg"
                      alt="Example"
                      className="border rounded-circle"
                    />
                  </div>
                  <div className="px-2">
                    <h5 className="my-0" style={{ color: "#0D47A1" }}>Diverse Training Domains</h5>
                    <p>We offer training in various domains such as artificial intelligence, Android, iOS, PHP, software testing, and web design. </p>
                  </div>
                </div>
              </div>

              {/* second */}
              <div className=" my-4">
                <div className="d-flex gap-2">
                  <div className="p-2 align-items-center">
                    {/* Image */}
                    <img
                      src="https://talent.toxsl.com/themes/toxsl/img/budget.jpg"
                      alt="Example"
                      className="border rounded-circle"
                    />
                  </div>
                  <div className="px-2">
                    <h5 className="my-0" style={{ color: "#0D47A1" }}>Focus on Practical Skills</h5>
                    <p>We focus on real-world applications and live projects, helping candidates to build practical skills.</p>
                  </div>
                </div>
              </div>

              {/* third */}
              <div className=" my-4">
                <div className="d-flex gap-2">
                  <div className="p-2 align-items-center">
                    {/* Image */}
                    <img
                      src="https://talent.toxsl.com/themes/toxsl/img/service-icon.jpg"
                      alt="Example"
                      className="border rounded-circle"
                    />
                  </div>
                  <div className="px-2">
                    <h5 className="my-0" style={{ color: "#0D47A1" }}>Continuous Learning Opportunities</h5>
                    <p>We foster a positive work atmosphere with supportive staff who are willing to help whenever needed.</p>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>

      {/* ================================================================================================================= */}
      <div className="py-5">
        <div className="container border border-primary rounded-5 my-5 p-3 bg-primary">
          <div className="row ">
            {/* left */}
            <div className="col-md-6 col-12">
              <div>
                <h1 className="mb-3 text-white">Elevate Your Business With World-Class Excellence</h1>
                <p className="text-white">jiTalent embraces the power of change to create 360° value and shared success for our partners, communities, and the talented individuals we connect with.</p>

              </div>

              {/* first */}
              <div className=" my-4">
                <div className="d-flex gap-2">
                  <div className="p-2 align-items-center">
                    {/* Image */}
                    <img
                      src="https://talent.toxsl.com/themes/toxsl/img/work-icon.jpg"
                      alt="Example"
                      className="border rounded-circle"
                    />
                  </div>
                  <div className="px-2">
                    <h5 className="text-white">Recognition and Rewards</h5>
                    <p className="text-white">The company values employee contributions through recognition programs.</p>
                  </div>
                </div>
              </div>

              {/* second */}
              <div className=" my-4">
                <div className="d-flex gap-2">
                  <div className="p-2 align-items-center">
                    {/* Image */}
                    <img
                      src="https://talent.toxsl.com/themes/toxsl/img/budget.jpg"
                      alt="Example"
                      className="border rounded-circle"
                    />
                  </div>
                  <div className="px-2">
                    <h5 className="text-white" >Supportive Work Environment</h5>
                    <p className="text-white">Employees benefit from a collaborative work culture that encourages professional development.</p>
                  </div>
                </div>
              </div>

              {/* third */}
              <div className=" my-4">
                <div className="d-flex gap-2">
                  <div className="p-2 align-items-center">
                    {/* Image */}
                    <img
                      src="https://talent.toxsl.com/themes/toxsl/img/service-icon.jpg"
                      alt="Example"
                      className="border rounded-circle"
                    />
                  </div>
                  <div className="px-2">
                    <h5 className="text-white" >Global Exposure</h5>
                    <p className="text-white">ToXSL offers employees a chance to work on global projects and interact with diverse teams.</p>
                  </div>
                </div>
              </div>


            </div>

            {/* right */}
            <div className=" col-md-6 col-12">
              <img
                src="https://talent.toxsl.com/themes/toxsl/img/who-we-are.png"
                alt="Example"
                className="align-items-center"
                style={{ maxWidth: "100%", borderRadius: "8px" }}
              />
            </div>

          </div>
        </div>
      </div>
      {/* =====================================================================================================================  */}

      <div className="background-light-gray py-5">
        <div className="container  my-5">
          <div className="text-center">
            <span className=" py-1 px-3 rounded" style={{ backgroundColor: "#5dade2" }}>OUR LATEST BLOGS</span>
          </div>
          <h2 className="text-center py-2" style={{ color: "#0D47A1" }}>Explore Our Latest Career & News</h2>

          <div className="row g-3 mt-4">

            {/* first  */}
            <div className="col-md-4 col-12 ">
              <div className="p-3 shadow">
                {/* Image */}
                <img
                  src="https://talent.toxsl.com/blog/image/111?file=218761&thumbnail=400"
                  alt="Example"
                  className="img-fluid mb-3"

                />

                {/* Heading */}
                <h4 className="text-primary mb-2">Transform Your App Development Skills with React Native Training in Mohali</h4>

                {/* Paragraph */}
                <p className="text-muted">
                  Inthe fast-paced world of app development, mobile applications havebecome an essential part of every business, whether it’s fore-commerce, entertainment, social interaction, or...
                </p>

                {/* Button */}
                <button className="btn btn-outline-primary px-2 py-2">Read More</button>
              </div>
            </div>

            {/* second  */}
            <div className="col-md-4 col-12">
              <div className="p-3 shadow">
                {/* Image */}
                <img
                  src="https://talent.toxsl.com/blog/image/110?file=218760&thumbnail=400"
                  alt="Example"
                  className="img-fluid mb-3"

                />

                {/* Heading */}
                <h4 className="text-primary mb-2">Kickstart Your Career with Professional Web Designing Training in Mohali</h4>

                {/* Paragraph */}
                <p className="text-muted">In the modern digital age, having a website is crucial for businessesand individuals alike. With the world becoming increasingly digital,a well-designed website plays a pivotal role in creating...</p>

                {/* Button */}
                <button className="btn btn-outline-primary px-2 py-2">Read More</button>
              </div>
            </div>

            {/* third  */}
            <div className="col-md-4 col-12 ">
              <div className="p-3 shadow">
                {/* Image */}
                <img
                  src="https://talent.toxsl.com/blog/image/109?file=218759&thumbnail=400"
                  alt="Example"
                  className="img-fluid mb-3"

                />

                {/* Heading */}
                <h4 className="text-primary mb-2">Top Reasons to Choose Java Training in Mohali for a Successful Career</h4>

                {/* Paragraph */}
                <p className="text-muted">Java is one of the most powerful, versatile, and widely used programming languages in the world today. It is at the core of many industries, from finance to healthcare, from mobile apps to...</p>

                {/* Button */}
                <button className="btn btn-outline-primary px-2 py-2">Read More</button>
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* ======================================================================================================================= */}

      <Footer />

    </div>
  );
}
