import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Contact from '../components/Contact'

function page() {
    return (
        <>
            <Navbar />

            <div className='background-light-gray'>
                <div className='container pb-5' style={{ backgroundColor: "#E3F2FD" }}>
                    <div className="row">
                        {/* Left Section */}
                        <div className="col-lg-8 col-12  px-4 py-5">

                            <div className="align-items-center px-3 py-3 mb-3">
                                <h4 className="text-navy py-2 px-2">
                                    <i className="bi bi-telephone-fill me-2"></i>Get in touch
                                </h4>
                                <p className="mb-4">Interested in our services? Just dial us now.</p>
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/2560px-Flag_of_India.svg.png"
                                    alt="India Flag"
                                    style={{ width: "30px", height: "30px" }}
                                    className="me-2 img-fluid rounded-circle"
                                />
                                <span className="fw-bold">+91 956 912 7788</span>
                                <a href="https://wa.me/919569127788" className="ms-2 text-success">
                                    <i className="bi bi-whatsapp"></i>
                                </a>
                            </div>

                            <div className="px-3 py-2 mb-4">
                                <div className='border p-3 hover-bg-light'>
                                <h5 className="fw-bold text-navy">
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/2560px-Flag_of_India.svg.png"
                                        alt="India Flag"
                                        style={{ width: "30px", height: "30px" }}
                                        className="me-2 img-fluid rounded-circle"
                                    />
                                    India
                                </h5>
                                <p>C-127, Phase 8, Industrial Area, Sector 72, Mohali, Punjab</p>
                                <p>
                                    HR: <span className="fw-bold">+91 956 912 7788</span>
                                    <a href="https://wa.me/919569127788" className="ms-2 text-success">
                                        <i className="bi bi-whatsapp"></i>
                                    </a>
                                </p>
                                </div>

                            </div>

                            <div className='text-center mt-4'>
                                <button className="btn btn-primary px-4">Schedule a Meeting</button>
                            </div>
                        </div>

                        {/* Right Section */}
                        <div className="col-lg-4 col-12 background-golden px-4 py-5">
                            <Contact />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default page
