import React from 'react'
import Navbar from '../components/Navbar'
import YouTubeVideo from '../components/YouTubeVideo'
import Cards from '../components/Cards'
import Footer from '../components/Footer'

function page() {

    const datas = [
        {
            imageUrl: "https://talent.toxsl.com/themes/toxsl/img/works/payed.png",
            description: "Extra Pay For Extra Efforts",
            message: "We ensure to appreciate all our employees who put in more effort by working extra for the company. Whether employees have worked on a non-working day or has spent extra working hours on usual days."
        },

        {
            imageUrl: "https://talent.toxsl.com/themes/toxsl/img/works/outing.png",
            description: "Get-Togethers & Outings",
            message: "From time to time, we plan outings to bring zeal of excitement and explore the real world, whether it is a birthday celebration, annual party, or any festive season."
        },

        {
            imageUrl: "https://talent.toxsl.com/themes/toxsl/img/works/award.png",
            description: "Recognition & Awards",
            message: "We never let our staff efforts get overlooked. Whether the employee has put effort into a project or referred a candidate, we present recognition awards and prizes."
        },

        {
            imageUrl: "https://talent.toxsl.com/themes/toxsl/img/works/insurance.png",
            description: "Health Insurance Policy",
            message: "We treat our employees as our family and care for their well-being. We have introduced a group health insurance program for all employees to stay safer."
        },

        {
            imageUrl: "https://talent.toxsl.com/themes/toxsl/img/works/weekly_training.png",
            description: "Weekly Training",
            message: "To stay updated with the latest technology trends which other competitors are practicing, we make a point to carry out regular training sessions and ensure that every employee is aware of the current technologies."
        },

        {
            imageUrl: "https://talent.toxsl.com/themes/toxsl/img/works/explore_learn.png",
            description: "Explore and Learn",
            message: "We don't believe in grasping technology. We implement it in real life and explore more out of it. Our expert masters and developers assist the employee"
        },

        {
            imageUrl: "https://talent.toxsl.com/themes/toxsl/img/works/dinner_coupons.png",
            description: "Extra Dinner Coupons",
            message: "We value every effort put by our employees towards the company. We ensure that if any of our employees are working late after the working hours, gets extra dinner coupons free from the company. So they can order the food of their own choice."
        },

        {
            imageUrl: "https://talent.toxsl.com/themes/toxsl/img/works/lively_wok_environment.png",
            description: "Lively Work Environment",
            message: "Working with us promises you a lively and vibrant workplace where Mondays do not at all seem gruesome. Working in our company no longer seems a burden."
        },

    ];




    return (
        <>
            <Navbar />

            <div className=" p-5 gradient-background-blue-sky " >
                <div className=" container">
                    <div className="row g-3">
                        <div className=" col-lg-6 col-12 py-2 ">
                            <div className="py-5 my-5 ">
                                <h2 className="py-2 text-white">Explore The World Of Big Opportunities</h2>
                                <p className="py-2 fs-5 text-white">We strive to give you full-fledged growth in your career, driven with passion. We have a bundle of opportunities for you!</p>

                                <button className="btn btn-outline-light fw-bold mb-2 px-4 py-3">
                                    View Job Openings &gt;
                                </button>
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

            {/* ====================================================================================================== */}

            <div className="background-light-gray py-5">
                <div className="container  my-5">
                    <div className="text-center">
                        <span className=" py-1 px-3 rounded" style={{ backgroundColor: "#5dade2" }}>Environment</span>
                    </div>
                    <h2 className="text-center py-2 text-navy" >You want a challenging & <span style={{ color: "#0D47A1" }}>enjoyable work</span> environment, and we want to realize your potential</h2>

                    <p className="py-1">You want to be recognized for your work, and we want you to fulfill your aspirations. Being a performance-oriented organization, we believe that the courage to fulfill vision comes from passion and not position. We strive to be the best at what we do every day by providing a working environment where people can grow professionally and personally. We offer a winning combination of mobile and web development services to help our clients get the most out of our solutions, so they can focus on what they do best.
                    </p>

                    <p className="py-1">We focus on working with the best talent in the industry. If you want the world to be your playground, you need the best coaches. If you’re looking for a place that values your passion and desire to learn, and if you are aspiring to achieve your dreams, then wait no more and send us your candidature for the position that best suits your expertise.</p>

                    <p className="py-1">Share your resume at career@toxsl.com and get yourself enrolled at the earliest!</p>

                    <div className="text-center mt-5">
                        <button className="btn btn-outline-primary fw-bold mb-2 px-4 py-2">
                            Join Us Today &gt;
                        </button>
                    </div>
                </div>
            </div>


            {/* ================================================================================================================ */}

            <div className=" py-5" style={{ backgroundColor: "#E3F2FD" }}>
                <div className="container  my-5">
                    <div className="py-2">
                        <span className=" py-1 px-3 rounded" style={{ backgroundColor: "#5dade2" }}>Why Join Us</span>
                    </div>
                    <h2 className=" py-1 text-navy" >We Appreciate, Create, and Admire your <span style={{ color: "#0D47A1" }}>Talent</span></h2>

                    <div className="row g-1 mt-4 d-flex">

                        {
                            datas.map((currentElement, index) => (
                                <Cards key={index} currentElement={currentElement} />
                            ))
                        }

                    </div>
                </div>
            </div>



            <Footer />
        </>
    )
}

export default page
