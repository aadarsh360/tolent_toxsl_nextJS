import React from 'react'

function Footer() {
    return (
        <footer className="border background-navy">
            <div className="container mt-5 ">
                <div className="row text-white">

                    <div className="col-md-3 col-sm-6">
                        <div className="inner-div ">
                            <h1 className="fs-3 px-2 py-2">jiTalent</h1>
                            <p className='px-2'>jiTalent allows organizations to manage their complete talent acquisition process within a single platform.</p>
                        </div>
                        <hr></hr>
                        <div className="inner-div ">
                            <p className="px-2 fs-3">Completed Trainings <br></br>1637</p>

                        </div>
                    </div>
                    <div className="col-md-1 col-sm-0"></div>
                    <div className="col-md-2 col-sm-6 ">

                        <h5>About Us</h5>
                        <ul className="list-unstyled">
                            <li className="py-2">
                                <a href="#about-us" className="text-decoration-none text-white hover-blue">
                                    About Us
                                </a>
                            </li>
                            <li className="py-2">
                                <a href="#blog" className="text-decoration-none text-white hover-blue">
                                    Blog
                                </a>
                            </li>
                            <li className="py-2">
                                <a href="#contact-us" className="text-decoration-none text-white hover-blue">
                                    Contact Us
                                </a>
                            </li>
                        </ul>

                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h5>Resource</h5>
                        <ul className="list-unstyled">
                            <li className="py-2">
                                <a href="#about-us" className="text-decoration-none text-white hover-blue">
                                    Terms And Conditions
                                </a>
                            </li>
                            <li className="py-2">
                                <a href="#blog" className="text-decoration-none text-white hover-blue">
                                    Privacy Policy
                                </a>
                            </li>
                        </ul>

                    </div>

                    <div className="col-md-3 col-sm-6 ">
                        <h5 className="">Recent Blog</h5>
                        <a href="#blog-post" className="py-2 text-decoration-none text-white hover-blue">
                            <div className="blog-item d-flex align-items-start py-2">
                                <img
                                    src="https://talent.toxsl.com/blog/image/111?file=218761&thumbnail=100"
                                    alt="Blog Thumbnail"
                                    className="img-fluid me-2"
                                    style={{ width: '80px', height: '40px', objectFit: 'cover' }}
                                />
                                <p className="mb-0">Transform Your App Development Skills with React Native Training in Mohali</p>
                            </div>
                        </a>

                        <a href="#blog-post" className="py-2 text-decoration-none text-white hover-blue">
                            <div className="blog-item d-flex align-items-start py-2">
                                <img
                                    src="https://talent.toxsl.com/blog/image/110?file=218760&thumbnail=100"
                                    alt="Blog Thumbnail"
                                    className="img-fluid me-2"
                                    style={{ width: '80px', height: '40px', objectFit: 'cover' }}
                                />
                                <p className="mb-0">Kickstart Your Career with Professional Web Designing Training in Mohali</p>
                            </div>
                        </a>

                        <a href="#blog-post" className="py-2 text-decoration-none text-white hover-blue">
                            <div className="blog-item d-flex align-items-start">
                                <img
                                    src="https://talent.toxsl.com/blog/image/109?file=218759&thumbnail=100"
                                    alt="Blog Thumbnail"
                                    className="img-fluid me-2"
                                    style={{ width: '80px', height: '40px', objectFit: 'cover' }}
                                />
                                <p className="mb-0">Top Reasons to Choose Java Training in Mohali for a Successful Career</p>
                            </div>
                        </a>

                    </div>
                </div>

                <hr className="text-white"></hr>
                <div className="d-flex justify-content-center">
                    <p className="text-white">© 2016- 2025 <span><a href="#blog-post" className="text-decoration-none text-green">jiTalent-TMS</a></span> | All Rights Reserved. Powered By <span><a href="#blog-post" className="text-decoration-none text-green">jiWeb Technologies LLP</a></span> Hosted By <span><a href="#blog-post" className="text-decoration-none text-green">jiWebHosting.com</a></span></p>
                </div>
            </div>
        </footer>
    )
}

export default Footer





