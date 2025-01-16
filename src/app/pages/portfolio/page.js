import ChatWithUs from '@/app/components/ChatWithUs'
import FooterToxsl from '@/app/components/FooterToxsl'
import Navbar2 from '@/app/components/Navbar2'
import OscillatingArrow from '@/app/components/OscillatingArrow'
import YouTubeVideo from '@/app/components/YouTubeVideo'
import React from 'react'

function page() {
    return (
        <>

            <Navbar2 />

            <ChatWithUs />
            {/* ========================================================================================================================= */}
            {/* hero section  */}
            <div>
                <div className="py-5 my-5 gradient-background-blue-sky " >
                    <div className="container">
                        <div className="row g-3">
                            <div className=" col-lg-6 col-12 py-2 ">
                                <div className="py-5 my-5 ">
                                    <h1 className="py-2 fw-bold text-white" style={{ fontSize: "50px" }}>Portfolio</h1>
                                    <p className="py-2 fs-5 text-white">Our work shows our ability. We entitle your business with advanced tools and technologies to offer cutting-edge solutions.</p>


                                    <div className="input-group">
                                        {/* Search Input */}
                                        <input
                                            type="text"
                                            className="form-control p-2"
                                            placeholder="Search..."
                                            aria-label="Search"
                                            aria-describedby="search-icon"
                                        />
                                        {/* Search Icon */}
                                        <button className="btn btn-outline-light" type="button" id="search-icon">
                                            <i className="bi bi-search"></i>
                                        </button>
                                    </div>



                                </div>
                            </div>

                            <div className=" col-lg-6 col-12 py-4 px-4">
                                {/* <div className="border border-primary bg-white py-5 my-5">
                                youtube video
                            </div> */}
                                <YouTubeVideo />
                            </div>
                        </div>
                    </div>

                </div>

                < div className='my-4'>
                    <div className='container'>

                        <div className=' d-flex flex-wrap gap-2 justify-content-center'>

                            <a className="text-decoration-none" href="#">
                                <div className='py-3 px-4  border border-primary rounded'>All</div>
                            </a>

                            <a className="text-decoration-none" href="#">
                                <div className='py-3 px-4 border border-primary rounded'>Food Delivery</div>
                            </a>

                            <a className="text-decoration-none" href="#">
                                <div className='py-3 px-4 border border-primary rounded'>Taxi App</div>
                            </a>

                            <a className="text-decoration-none" href="#">
                                <div className='py-3 px-4 border border-primary rounded'>Real Estate</div>
                            </a>

                            <a className="text-decoration-none" href="#">
                                <div className='py-3 px-4 border border-primary rounded'>Social App</div>
                            </a>

                            <a className="text-decoration-none" href="#">
                                <div className='py-3 px-4 border border-primary rounded'>Medical</div>
                            </a>

                            <a className="text-decoration-none" href="#">
                                <div className='py-3 px-4 border border-primary rounded'>Education</div>
                            </a>

                            <a className="text-decoration-none" href="#">
                                <div className='py-3 px-4 border border-primary rounded'>Fintech</div>
                            </a>

                        </div>

                        <div className='mt-3 d-flex flex-wrap gap-2 justify-content-center'>

                            <a className="text-decoration-none" href="#">
                                <div className='py-3 px-4  border border-primary rounded'>Marketplace</div>
                            </a>

                            <a className="text-decoration-none" href="#">
                                <div className='py-3 px-4 border border-primary rounded'>Sports</div>
                            </a>

                            <a className="text-decoration-none" href="#">
                                <div className='py-3 px-4 border border-primary rounded'>CRM</div>
                            </a>

                            <a className="text-decoration-none" href="#">
                                <div className='py-3 px-4 border border-primary rounded'>Docker Integration</div>
                            </a>

                            <a className="text-decoration-none" href="#">
                                <div className='py-3 px-4 border border-primary rounded'>Ondemand</div>
                            </a>

                            <a className="text-decoration-none" href="#">
                                <div className='py-3 px-4 border border-primary rounded'>IOT Applications</div>
                            </a>

                            <a className="text-decoration-none" href="#">
                                <div className='py-3 px-4 border border-primary rounded'>Fitness App</div>
                            </a>


                        </div>
                    </div>
                </div>
            </div>

            {/* ============================================================================================================================== */}

            {/* one  */}
            <div className="container-fluid" style={{ position: "relative" }}>

                {/* Centered Images */}
                <div className='portfolio-centered-image' >
                    <img
                        src="https://toxsl.com/portfolio/image/597/wonolo1.png"
                        alt="Mobile View 1"
                        className="img-fluid "
                        style={{ width: "400px", }}
                    />
                </div>

                <div className="row " style={{ height: "100vh" }}>
                    {/* column 1  */}
                    <div className='col-lg-1 d-none d-lg-block '></div>
                    {/* column 2 */}
                    {/* Left Side Content */}
                    <div className="col-lg-4 col-12 py-5 px-2 " style={{ background: "#fff" }}>
                        <div>
                            <div className='py-2'>
                                <h1 className='text-strong-blue'>Wonolo</h1>

                                <p>
                                    Wonolo is a go-to staffing platform connecting workers and
                                    employers. Post or find jobs across multiple categories,
                                    streamlining recruitment for all parties. Download the app now!
                                </p>
                            </div>
                            <div className='py-2'>
                                <p>Available on:</p>
                                <div className="d-flex flex-wrap gap-3 mb-4">
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                                        alt="Google Play"
                                        style={{ width: "120px" }}
                                    />
                                    <img
                                        src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                                        alt="App Store"
                                        style={{ width: "120px" }}
                                    />
                                    <img
                                        src="https://toxsl.com/themes/new/img/visit_website.png"
                                        alt="App Store"
                                        style={{ width: "120px" }}
                                    />

                                </div>
                            </div>

                            <div className="d-flex gap-4">
                                <div>
                                    <h3>2M+</h3>
                                    <p className='text-strong-blue'>Downloads</p>
                                </div>
                                <div>
                                    <h3>2.8M+</h3>
                                    <p className='text-strong-blue'>Visitors / Month</p>
                                </div>
                            </div>
                            <button className="border-0 rounded text-white gradient-background-blue-sky mt-4 px-4 py-2">Request More Details <OscillatingArrow /></button>
                        </div>


                    </div>

                    {/* column 3  */}
                    <div className='col-lg-1 d-none d-lg-block '></div>

                    {/* column 4  */}
                    {/* Right Side Image Background */}
                    <div
                        className="col-lg-6 d-none d-lg-block " // Hide on small screens
                        style={{
                            backgroundImage: "url('https://toxsl.com/portfolio/bc-image/597?file=portfolio-1688469938-background_image-use_id_7.png')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            overflow: "hidden",
                            position: "relative",
                            // height: "100%"
                        }}
                    >

                    </div>

                </div>
            </div>
            {/* -------------------------------------------------------------------------------------------------------------------------------------- */}

            {/* two  */}
            <div className="container-fluid" style={{ position: "relative" }} >
                {/* Centered Images */}
                <div className='portfolio-centered-image2' >
                    <img
                        src="https://toxsl.com/portfolio/image/1001/1733897599-Group+1000005435.png"
                        alt="Mobile View 1"
                        className="img-fluid "
                        style={{ width: "400px", }}
                    />
                </div>

                <div className="row " style={{ height: "100vh" }}>

                    {/* column 4  */}
                    {/* Right Side Image Background */}
                    <div
                        className="col-lg-6 d-none d-lg-block " // Hide on small screens
                        style={{
                            backgroundImage: "url('	https://toxsl.com/portfolio/bc-image/1001?file=portfolio-1733897598-background_image-user_id_11.png')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            position: "relative",
                            // height: "100%"
                        }}
                    >

                    </div>

                    {/* column 1  */}
                    <div className='col-lg-1 d-none d-lg-block '></div>
                    {/* column 2 */}
                    {/* Left Side Content */}
                    <div className="col-lg-4 col-12 py-5 px-2" style={{ background: "#fff" }}>
                        <div>
                            <div className='py-2'>
                                <h1 className='text-strong-blue'>NEXTLEVEL</h1>

                                <p>NextLevel provide simple solutions for tracking employee information, organizing schedules, calculating payroll costs, and providing detailed earnings statements.</p>
                            </div>
                            <div className='py-2'>
                                <p>Available on:</p>
                                <div className="d-flex flex-wrap gap-3 mb-4">
                                    <img
                                        src="https://toxsl.com/themes/new/img/visit_website.png"
                                        alt="App Store"
                                        style={{ width: "120px" }}
                                    />

                                </div>
                            </div>

                            <div className="d-flex gap-4">
                                <div>
                                    <h3>3M+</h3>
                                    <p className='text-strong-blue'>Visitors / Month</p>
                                </div>

                            </div>
                            <button className="border-0 rounded text-white gradient-background-blue-sky mt-4 px-4 py-2">Request More Details <OscillatingArrow /></button>
                        </div>


                    </div>

                    {/* column 3  */}
                    <div className='col-lg-1 d-none d-lg-block '></div>


                </div>
            </div>
            {/* --------------------------------------------------------------------------------------------------------------------------------- */}

            {/* three  */}
            <div className="container-fluid" style={{ position: "relative" }}>
                {/* Centered Images */}
                <div className='portfolio-centered-image' >
                    <img
                        src="https://toxsl.com/portfolio/image/990/blinq.png"
                        alt="Mobile View 1"
                        className="img-fluid "
                        style={{ width: "400px", }}
                    />
                </div>

                <div className="row " style={{ height: "100vh" }}>
                    {/* column 1  */}
                    <div className='col-lg-1 d-none d-lg-block '></div>
                    {/* column 2 */}
                    {/* Left Side Content */}
                    <div className="col-lg-4 col-12 py-5 px-2 " style={{ background: "#fff" }}>
                        <div>
                            <div className='py-2'>
                                <h1 className='text-strong-blue'>BlinqX</h1>

                                <p>
                                    BlinqX is a revolutionary smart safety light designed to improve visibility on the road. Cutting-edge technology and sleek design provide added safety and convenience. Download the...
                                </p>
                            </div>
                            <div className='py-2'>
                                <p>Available on:</p>
                                <div className="d-flex flex-wrap gap-3 mb-4">
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                                        alt="Google Play"
                                        style={{ width: "120px" }}
                                    />
                                    <img
                                        src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                                        alt="App Store"
                                        style={{ width: "120px" }}
                                    />
                                    <img
                                        src="https://toxsl.com/themes/new/img/visit_website.png"
                                        alt="App Store"
                                        style={{ width: "120px" }}
                                    />

                                </div>
                            </div>

                            <div className="d-flex gap-4">
                                <div>
                                    <h3>150k+</h3>
                                    <p className='text-strong-blue'>Downloads</p>
                                </div>
                                <div>
                                    <h3>4M+</h3>
                                    <p className='text-strong-blue'>Visitors / Month</p>
                                </div>
                            </div>
                            <button className="border-0 rounded text-white gradient-background-blue-sky mt-4 px-4 py-2">Request More Details <OscillatingArrow /></button>
                        </div>


                    </div>

                    {/* column 3  */}
                    <div className='col-lg-1 d-none d-lg-block '></div>

                    {/* column 4  */}
                    {/* Right Side Image Background */}
                    <div
                        className="col-lg-6 d-none d-lg-block " // Hide on small screens
                        style={{
                            backgroundImage: "url('https://toxsl.com/portfolio/bc-image/990?file=portfolio-1690803594-background_image-user_id_7.png')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            position: "relative",
                            // height: "100%"
                        }}
                    >

                    </div>

                </div>
            </div>
            {/* -------------------------------------------------------------------------------------------------------------------------------------- */}

            {/* four  */}
            <div className="container-fluid" style={{ position: "relative" }}>
                {/* Centered Images */}
                <div className='portfolio-centered-image2' >
                    <img
                        src="https://toxsl.com/portfolio/image/997/thek.ai1.png"
                        alt="Mobile View 1"
                        className="img-fluid "
                        style={{ width: "400px", }}
                    />
                </div>

                <div className="row " style={{ height: "100vh" }}>

                    {/* column 4  */}
                    {/* Right Side Image Background */}
                    <div
                        className="col-lg-6 d-none d-lg-block " // Hide on small screens
                        style={{
                            backgroundImage: "url('	https://toxsl.com/portfolio/bc-image/997?file=portfolio-1722401132-background_image-user_id_11.png')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            position: "relative",
                            // height: "100%"
                        }}
                    >

                    </div>

                    {/* column 1  */}
                    <div className='col-lg-1 d-none d-lg-block '></div>
                    {/* column 2 */}
                    {/* Left Side Content */}
                    <div className="col-lg-4 col-12 py-5 px-2 " style={{ background: "#fff" }}>
                        <div>
                            <div className='py-2'>
                                <h1 className='text-strong-blue'>Thek AI</h1>

                                <p>Streamline conversations with thek.ai – your Arabic chatbot assistant. Enhance education, entertainment, and customer support with engaging conversations. Revolutionize business in...</p>
                            </div>
                            <div className='py-2'>
                                <p>Available on:</p>
                                <div className="d-flex flex-wrap gap-3 mb-4">
                                    <img
                                        src="https://toxsl.com/themes/new/img/visit_website.png"
                                        alt="App Store"
                                        style={{ width: "120px" }}
                                    />

                                </div>
                            </div>

                            <div className="d-flex gap-4">
                                <div>
                                    <h3>3M+</h3>
                                    <p className='text-strong-blue'>Visitors / Month</p>
                                </div>

                            </div>
                            <button className="border-0 rounded text-white gradient-background-blue-sky mt-4 px-4 py-2">Request More Details <OscillatingArrow /></button>
                        </div>


                    </div>

                    {/* column 3  */}
                    <div className='col-lg-1 d-none d-lg-block '></div>


                </div>
            </div>
            {/* --------------------------------------------------------------------------------------------------------------------------------- */}

            {/* five */}
            <div className="container-fluid" style={{ position: "relative" }}>
                {/* Centered Images */}
                <div className='portfolio-centered-image' >
                    <img
                        src="https://toxsl.com/portfolio/image/597/wonolo1.png"
                        alt="Mobile View 1"
                        className="img-fluid "
                        style={{ width: "400px", }}
                    />
                </div>

                <div className="row " style={{ height: "100vh" }}>
                    {/* column 1  */}
                    <div className='col-lg-1 d-none d-lg-block '></div>
                    {/* column 2 */}
                    {/* Left Side Content */}
                    <div className="col-lg-4 col-12 py-5 px-2 " style={{ background: "#fff" }}>
                        <div>
                            <div className='py-2'>
                                <h1 className='text-strong-blue'>Chargey</h1>

                                <p>Chargey simplifies EV charging. With Chargey, you can easily find nearby stations, check real-time availability, and book your charge with just a few clicks. Streamline your electr...</p>
                            </div>
                            <div className='py-2'>
                                <p>Available on:</p>
                                <div className="d-flex flex-wrap gap-3 mb-4">
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                                        alt="Google Play"
                                        style={{ width: "120px" }}
                                    />
                                    <img
                                        src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                                        alt="App Store"
                                        style={{ width: "120px" }}
                                    />
                                    <img
                                        src="https://toxsl.com/themes/new/img/visit_website.png"
                                        alt="App Store"
                                        style={{ width: "120px" }}
                                    />

                                </div>
                            </div>

                            <div className="d-flex gap-4">
                                <div>
                                    <h3>2M+</h3>
                                    <p className='text-strong-blue'>Downloads</p>
                                </div>
                                <div>
                                    <h3>2.8M+</h3>
                                    <p className='text-strong-blue'>Visitors / Month</p>
                                </div>
                            </div>
                            <button className="border-0 rounded text-white gradient-background-blue-sky mt-4 px-4 py-2">Request More Details <OscillatingArrow /></button>
                        </div>


                    </div>

                    {/* column 3  */}
                    <div className='col-lg-1 d-none d-lg-block '></div>

                    {/* column 4  */}
                    {/* Right Side Image Background */}
                    <div
                        className="col-lg-6 d-none d-lg-block " // Hide on small screens
                        style={{
                            backgroundImage: "url('	https://toxsl.com/portfolio/bc-image/992?file=portfolio-1692252216-background_image-user_id_7.png')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            position: "relative",
                            // height: "100%"
                        }}
                    >

                    </div>

                </div>
            </div>
            {/* -------------------------------------------------------------------------------------------------------------------------------------- */}

            {/* six  */}
            <div className="container-fluid" style={{ position: "relative" }}>
                {/* Centered Images */}
                <div className='portfolio-centered-image2' >
                    <img
                        src="https://toxsl.com/portfolio/image/597/wonolo1.png"
                        alt="Mobile View 1"
                        className="img-fluid "
                        style={{ width: "400px", }}
                    />
                </div>

                <div className="row " style={{ height: "100vh" }}>

                    {/* column 4  */}
                    {/* Right Side Image Background */}
                    <div
                        className="col-lg-6 d-none d-lg-block " // Hide on small screens
                        style={{
                            backgroundImage: "url('	https://toxsl.com/portfolio/bc-image/983?file=portfolio-1689162960-background_image-user_id_7.png')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            position: "relative",
                            // height: "100%"
                        }}
                    >

                    </div>

                    {/* column 1  */}
                    <div className='col-lg-1 d-none d-lg-block '></div>
                    {/* column 2 */}
                    {/* Left Side Content */}
                    <div className="col-lg-4 col-12 py-5 px-2 " style={{ background: "#fff" }}>
                        <div>
                            <div className='py-2'>
                                <h1 className='text-strong-blue'>Basigo</h1>

                                <p>Experience the all-electric future of public transport in Africa with Basigo. Cost-effective, convenient, reliable e-vehicles with modern features. Join the all-electric future wit...</p>
                            </div>
                            <div className='py-2'>
                                <p>Available on:</p>
                                <div className="d-flex flex-wrap gap-3 mb-4">
                                    <img
                                        src="https://toxsl.com/themes/new/img/visit_website.png"
                                        alt="App Store"
                                        style={{ width: "120px" }}
                                    />

                                </div>
                            </div>

                            <div className="d-flex gap-4">
                                <div>
                                    <h3>3M+</h3>
                                    <p className='text-strong-blue'>Visitors / Month</p>
                                </div>

                            </div>
                            <button className="border-0 rounded text-white gradient-background-blue-sky mt-4 px-4 py-2">Request More Details <OscillatingArrow /></button>
                        </div>


                    </div>

                    {/* column 3  */}
                    <div className='col-lg-1 d-none d-lg-block '></div>


                </div>
            </div>
            {/* --------------------------------------------------------------------------------------------------------------------------------- */}

            {/* seven */}
            <div className="container-fluid" style={{ position: "relative" }}>
                {/* Centered Images */}
                <div className='portfolio-centered-image' >
                    <img
                        src="https://toxsl.com/portfolio/image/597/wonolo1.png"
                        alt="Mobile View 1"
                        className="img-fluid "
                        style={{ width: "400px", }}
                    />
                </div>

                <div className="row " style={{ height: "100vh" }}>
                    {/* column 1  */}
                    <div className='col-lg-1 d-none d-lg-block '></div>
                    {/* column 2 */}
                    {/* Left Side Content */}
                    <div className="col-lg-4 col-12 py-5 px-2 " style={{ background: "#fff" }}>
                        <div>
                            <div className='py-2'>
                                <h1 className='text-strong-blue'>Profleet Africa</h1>

                                <p>
                                    Profleet Africa is a premium car hire solution designed to meet the transportation needs of private and corporate clients. Our platform offers seamless booking, availability chec...
                                </p>
                            </div>
                            <div className='py-2'>
                                <p>Available on:</p>
                                <div className="d-flex flex-wrap gap-3 mb-4">
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                                        alt="Google Play"
                                        style={{ width: "120px" }}
                                    />
                                    <img
                                        src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                                        alt="App Store"
                                        style={{ width: "120px" }}
                                    />
                                    <img
                                        src="https://toxsl.com/themes/new/img/visit_website.png"
                                        alt="App Store"
                                        style={{ width: "120px" }}
                                    />

                                </div>
                            </div>

                            <div className="d-flex gap-4">
                                <div>
                                    <h3>150k+</h3>
                                    <p className='text-strong-blue'>Downloads</p>
                                </div>
                                <div>
                                    <h3>4M+</h3>
                                    <p className='text-strong-blue'>Visitors / Month</p>
                                </div>
                            </div>
                            <button className="border-0 rounded text-white gradient-background-blue-sky mt-4 px-4 py-2">Request More Details <OscillatingArrow /></button>
                        </div>


                    </div>

                    {/* column 3  */}
                    <div className='col-lg-1 d-none d-lg-block '></div>

                    {/* column 4  */}
                    {/* Right Side Image Background */}
                    <div
                        className="col-lg-6 d-none d-lg-block " // Hide on small screens
                        style={{
                            backgroundImage: "url('	https://toxsl.com/portfolio/bc-image/1003?file=portfolio-1733902193-background_image-user_id_11.png')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            position: "relative",
                            // height: "100%"
                        }}
                    >

                    </div>

                </div>
            </div>
            {/* -------------------------------------------------------------------------------------------------------------------------------------- */}

            {/* eight  */}
            <div className="container-fluid" style={{ position: "relative" }}>
                {/* Centered Images */}
                <div className='portfolio-centered-image2' >
                    <img
                        src="https://toxsl.com/portfolio/image/597/wonolo1.png"
                        alt="Mobile View 1"
                        className="img-fluid "
                        style={{ width: "400px", }}
                    />
                </div>

                <div className="row " style={{ height: "100vh" }}>

                    {/* column 4  */}
                    {/* Right Side Image Background */}
                    <div
                        className="col-lg-6 d-none d-lg-block " // Hide on small screens
                        style={{
                            backgroundImage: "url('https://toxsl.com/portfolio/bc-image/766?file=portfolio-1722324794-background_image-user_id_11.png')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            position: "relative",
                            // height: "100%"
                        }}
                    >

                    </div>

                    {/* column 1  */}
                    <div className='col-lg-1 d-none d-lg-block '></div>
                    {/* column 2 */}
                    {/* Left Side Content */}
                    <div className="col-lg-4 col-12 py-5 px-2 " style={{ background: "#fff" }}>
                        <div>
                            <div className='py-2'>
                                <h1 className='text-strong-blue'>Alfatiha</h1>

                                <p>Alfatiha is a popular platform for mastering Al-Fatihah recitation. Available in Arabic and English, it helps students perfect their reading and record their recitation until they...</p>
                            </div>
                            <div className='py-2'>
                                <p>Available on:</p>
                                <div className="d-flex flex-wrap gap-3 mb-4">
                                    <img
                                        src="https://toxsl.com/themes/new/img/visit_website.png"
                                        alt="App Store"
                                        style={{ width: "120px" }}
                                    />

                                </div>
                            </div>

                            <div className="d-flex gap-4">
                                <div>
                                    <h3>3M+</h3>
                                    <p className='text-strong-blue'>Visitors / Month</p>
                                </div>

                            </div>
                            <button className="border-0 rounded text-white gradient-background-blue-sky mt-4 px-4 py-2">Request More Details <OscillatingArrow /></button>
                        </div>


                    </div>

                    {/* column 3  */}
                    <div className='col-lg-1 d-none d-lg-block '></div>


                </div>
            </div>
            {/* --------------------------------------------------------------------------------------------------------------------------------- */}

            {/* nine  */}
            <div className="container-fluid" style={{ position: "relative" }}>
                {/* Centered Images */}
                <div className='portfolio-centered-image' >
                    <img
                        src="https://toxsl.com/portfolio/image/597/wonolo1.png"
                        alt="Mobile View 1"
                        className="img-fluid "
                        style={{ width: "400px", }}
                    />
                </div>

                <div className="row " style={{ height: "100vh" }}>
                    {/* column 1  */}
                    <div className='col-lg-1 d-none d-lg-block '></div>
                    {/* column 2 */}
                    {/* Left Side Content */}
                    <div className="col-lg-4 col-12 py-5 px-2 " style={{ background: "#fff" }}>
                        <div>
                            <div className='py-2'>
                                <h1 className='text-strong-blue'>Wonolo</h1>

                                <p>
                                    Wonolo is a go-to staffing platform connecting workers and
                                    employers. Post or find jobs across multiple categories,
                                    streamlining recruitment for all parties. Download the app now!
                                </p>
                            </div>
                            <div className='py-2'>
                                <p>Available on:</p>
                                <div className="d-flex flex-wrap gap-3 mb-4">
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                                        alt="Google Play"
                                        style={{ width: "120px" }}
                                    />
                                    <img
                                        src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                                        alt="App Store"
                                        style={{ width: "120px" }}
                                    />
                                    <img
                                        src="https://toxsl.com/themes/new/img/visit_website.png"
                                        alt="App Store"
                                        style={{ width: "120px" }}
                                    />

                                </div>
                            </div>

                            <div className="d-flex gap-4">
                                <div>
                                    <h3>2M+</h3>
                                    <p className='text-strong-blue'>Downloads</p>
                                </div>
                                <div>
                                    <h3>2.8M+</h3>
                                    <p className='text-strong-blue'>Visitors / Month</p>
                                </div>
                            </div>
                            <button className="border-0 rounded text-white gradient-background-blue-sky mt-4 px-4 py-2">Request More Details <OscillatingArrow /></button>
                        </div>


                    </div>

                    {/* column 3  */}
                    <div className='col-lg-1 d-none d-lg-block '></div>

                    {/* column 4  */}
                    {/* Right Side Image Background */}
                    <div
                        className="col-lg-6 d-none d-lg-block " // Hide on small screens
                        style={{
                            backgroundImage: "url('https://toxsl.com/portfolio/bc-image/597?file=portfolio-1688469938-background_image-use_id_7.png')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            position: "relative",
                            // height: "100%"
                        }}
                    >

                    </div>

                </div>
            </div>
            {/* -------------------------------------------------------------------------------------------------------------------------------------- */}

            {/* ten  */}
            <div className="container-fluid" style={{ position: "relative" }}>
                {/* Centered Images */}
                <div className='portfolio-centered-image2' >
                    <img
                        src="https://toxsl.com/portfolio/image/597/wonolo1.png"
                        alt="Mobile View 1"
                        className="img-fluid "
                        style={{ width: "400px", }}
                    />
                </div>

                <div className="row " style={{ height: "100vh" }}>

                    {/* column 4  */}
                    {/* Right Side Image Background */}
                    <div
                        className="col-lg-6 d-none d-lg-block " // Hide on small screens
                        style={{
                            backgroundImage: "url('	https://toxsl.com/portfolio/bc-image/1001?file=portfolio-1733897598-background_image-user_id_11.png')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            position: "relative",
                            // height: "100%"
                        }}
                    >

                    </div>

                    {/* column 1  */}
                    <div className='col-lg-1 d-none d-lg-block '></div>
                    {/* column 2 */}
                    {/* Left Side Content */}
                    <div className="col-lg-4 col-12 py-5 px-2 " style={{ background: "#fff" }}>
                        <div>
                            <div className='py-2'>
                                <h1 className='text-strong-blue'>NEXTLEVEL</h1>

                                <p>NextLevel provide simple solutions for tracking employee information, organizing schedules, calculating payroll costs, and providing detailed earnings statements.</p>
                            </div>
                            <div className='py-2'>
                                <p>Available on:</p>
                                <div className="d-flex flex-wrap gap-3 mb-4">
                                    <img
                                        src="https://toxsl.com/themes/new/img/visit_website.png"
                                        alt="App Store"
                                        style={{ width: "120px" }}
                                    />

                                </div>
                            </div>

                            <div className="d-flex gap-4">
                                <div>
                                    <h3>3M+</h3>
                                    <p className='text-strong-blue'>Visitors / Month</p>
                                </div>

                            </div>
                            <button className="border-0 rounded text-white gradient-background-blue-sky mt-4 px-4 py-2">Request More Details <OscillatingArrow /></button>
                        </div>


                    </div>

                    {/* column 3  */}
                    <div className='col-lg-1 d-none d-lg-block '></div>


                </div>
            </div>
            {/* --------------------------------------------------------------------------------------------------------------------------------- */}

            {/* eleven  */}
            <div className="container-fluid" style={{ position: "relative" }}>
                {/* Centered Images */}
                <div className='portfolio-centered-image' >
                    <img
                        src="https://toxsl.com/portfolio/image/597/wonolo1.png"
                        alt="Mobile View 1"
                        className="img-fluid "
                        style={{ width: "400px", }}
                    />
                </div>

                <div className="row " style={{ height: "100vh" }}>
                    {/* column 1  */}
                    <div className='col-lg-1 d-none d-lg-block '></div>
                    {/* column 2 */}
                    {/* Left Side Content */}
                    <div className="col-lg-4 col-12 py-5 px-2 " style={{ background: "#fff" }}>
                        <div>
                            <div className='py-2'>
                                <h1 className='text-strong-blue'>BlinqX</h1>

                                <p>
                                    BlinqX is a revolutionary smart safety light designed to improve visibility on the road. Cutting-edge technology and sleek design provide added safety and convenience. Download the...
                                </p>
                            </div>
                            <div className='py-2'>
                                <p>Available on:</p>
                                <div className="d-flex flex-wrap gap-3 mb-4">
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                                        alt="Google Play"
                                        style={{ width: "120px" }}
                                    />
                                    <img
                                        src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                                        alt="App Store"
                                        style={{ width: "120px" }}
                                    />
                                    <img
                                        src="https://toxsl.com/themes/new/img/visit_website.png"
                                        alt="App Store"
                                        style={{ width: "120px" }}
                                    />

                                </div>
                            </div>

                            <div className="d-flex gap-4">
                                <div>
                                    <h3>150k+</h3>
                                    <p className='text-strong-blue'>Downloads</p>
                                </div>
                                <div>
                                    <h3>4M+</h3>
                                    <p className='text-strong-blue'>Visitors / Month</p>
                                </div>
                            </div>
                            <button className="border-0 rounded text-white gradient-background-blue-sky mt-4 px-4 py-2">Request More Details <OscillatingArrow /></button>
                        </div>


                    </div>

                    {/* column 3  */}
                    <div className='col-lg-1 d-none d-lg-block '></div>

                    {/* column 4  */}
                    {/* Right Side Image Background */}
                    <div
                        className="col-lg-6 d-none d-lg-block " // Hide on small screens
                        style={{
                            backgroundImage: "url('https://toxsl.com/portfolio/bc-image/990?file=portfolio-1690803594-background_image-user_id_7.png')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            position: "relative",
                            // height: "100%"
                        }}
                    >

                    </div>

                </div>
            </div>
            {/* -------------------------------------------------------------------------------------------------------------------------------------- */}

            {/* twelve  */}
            <div className="container-fluid" style={{ position: "relative" }}>
                {/* Centered Images */}
                <div className='portfolio-centered-image2' >
                    <img
                        src="https://toxsl.com/portfolio/image/597/wonolo1.png"
                        alt="Mobile View 1"
                        className="img-fluid "
                        style={{ width: "400px", }}
                    />
                </div>

                <div className="row " style={{ height: "100vh" }}>

                    {/* column 4  */}
                    {/* Right Side Image Background */}
                    <div
                        className="col-lg-6 d-none d-lg-block " // Hide on small screens
                        style={{
                            backgroundImage: "url('	https://toxsl.com/portfolio/bc-image/997?file=portfolio-1722401132-background_image-user_id_11.png')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            position: "relative",
                            // height: "100%"
                        }}
                    >

                    </div>

                    {/* column 1  */}
                    <div className='col-lg-1 d-none d-lg-block '></div>
                    {/* column 2 */}
                    {/* Left Side Content */}
                    <div className="col-lg-4 col-12 py-5 px-2 " style={{ background: "#fff" }}>
                        <div>
                            <div className='py-2'>
                                <h1 className='text-strong-blue'>Thek AI</h1>

                                <p>Streamline conversations with thek.ai – your Arabic chatbot assistant. Enhance education, entertainment, and customer support with engaging conversations. Revolutionize business in...</p>
                            </div>
                            <div className='py-2'>
                                <p>Available on:</p>
                                <div className="d-flex flex-wrap gap-3 mb-4">
                                    <img
                                        src="https://toxsl.com/themes/new/img/visit_website.png"
                                        alt="App Store"
                                        style={{ width: "120px" }}
                                    />

                                </div>
                            </div>

                            <div className="d-flex gap-4">
                                <div>
                                    <h3>3M+</h3>
                                    <p className='text-strong-blue'>Visitors / Month</p>
                                </div>

                            </div>
                            <button className="border-0 rounded text-white gradient-background-blue-sky mt-4 px-4 py-2">Request More Details <OscillatingArrow /></button>
                        </div>


                    </div>

                    {/* column 3  */}
                    <div className='col-lg-1 d-none d-lg-block '></div>


                </div>
            </div>
            {/* --------------------------------------------------------------------------------------------------------------------------------- */}

            {/* ================================================================================================================================================= */}
            <FooterToxsl />
            {/* ================================================================================================================================== */}
        </>
    )
}

export default page
