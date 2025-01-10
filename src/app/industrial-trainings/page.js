import React from 'react'
import Navbar from '../components/Navbar'
import YouTubeVideo from '../components/YouTubeVideo'
import Footer from '../components/Footer'

function page() {

    const highlights = [
        {
            icon: "https://talent.toxsl.com/themes/toxsl/img/icons/stipend.png", // Replace with your icon
            title: "Competitive Stipend",
            description:
                "Gain valuable skills while earning a handsome stipend. Transform your learning experience into tangible financial rewards!",
        },
        {
            icon: "https://talent.toxsl.com/themes/toxsl/img/icons/scholarships.png", // Replace with your icon
            title: "Scholarships",
            description:
                "We have special scholarships for meritorious students on our training programs. Invest in your future without breaking the bank!",
        },
        {
            icon: "https://talent.toxsl.com/themes/toxsl/img/icons/hours.png", // Replace with your icon
            title: "8-Hours Training",
            description:
                "Dive deep into our 8-hours extensive training sessions. Master essential skills and knowledge in a single, focused industry experience!",
        },
        {
            icon: "https://talent.toxsl.com/themes/toxsl/img/icons/placement.png", // Replace with your icon
            title: "In-house Placement",
            description:
                "We offer in-house placement options for well-deserving candidates who have the zeal to learn and grow in the development sector.",
        },
        {
            icon: "https://talent.toxsl.com/themes/toxsl/img/icons/experience.png", // Replace with your icon
            title: "Hands-on Experience",
            description:
                "We have numerous sets of 3 months and 6 months industrial training programs under which the candidates can enroll for the most suitable ones.",
        },
        {
            icon: "https://talent.toxsl.com/themes/toxsl/img/icons/learning.png", // Replace with your icon
            title: "Learning from Industry Experts",
            description:
                "Trainees often work under the guidance of experienced professionals who provide mentorship and share their industry insights.",
        },
        {
            icon: "https://talent.toxsl.com/themes/toxsl/img/icons/technologies.png", // Replace with your icon
            title: "Exposure to Latest Technologies",
            description:
                "IT companies often work with cutting-edge technologies. Trainees get exposure to these technologies, tools, and frameworks that are currently in demand in the industry.",
        },
        {
            icon: "https://talent.toxsl.com/themes/toxsl/img/icons/liveproject.png", // Replace with your icon
            title: "Live Project-based Learning",
            description:
                "Trainees are usually assigned to projects where they apply their skills to solve real problems. This project-based learning approach enhances their problem-solving abilities and project management skills.",
        },
        {
            icon: "https://talent.toxsl.com/themes/toxsl/img/icons/feedback.png", // Replace with your icon
            title: "Feedback and Evaluation",
            description:
                "Trainees receive feedback on their performance and progress throughout the training period. This helps them identify areas for improvement and grow professionally.",
        },
    ];

    return (
        <>
            <Navbar />

            {/* ====================================================================================== */}
            <div className=" p-5 gradient-background-blue-sky " >
                <div className=" container">
                    <div className="row g-3">
                        <div className=" col-lg-6 col-12 py-2 ">
                            <div className="py-5 my-5 ">
                                <h2 className="py-2 text-white">Learn from the tricity's best company!</h2>
                                <p className="py-2 fs-5 text-white">ToXSL Technologies has a group of professionals who love to think out of the box. So kickstart your career by enrolling in our exclusive training!</p>

                                <button className="btn btn-outline-light fw-bold mb-2 px-4 py-3">
                                    Check Trainings &gt;
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

            {/* ============================================================================================ */}

            <div className="background-light-gray py-5">
                <div className="container  my-5">
                    <div className="">
                        <span className=" py-1 px-3 rounded" style={{ backgroundColor: "#5dade2" }}>Time To Shine</span>
                    </div>
                    <h2 className=" py-2 text-navy" >Kickstart Your Career With Our <span style={{ color: "#0D47A1" }}>Training Programs</span></h2>

                    <p className="py-1 fs-5">ToXSL Technologies is the leading software company that provides six months of Industrial Training in Chandigarh, Mohali, for IT students. ToXSL Technologies excel in the field of limitless possibilities, as the tag line says, towards excellence. It is one of the best training hubs in India, which offers exclusive six months/three months of industrial training to B. Tech/M. Tech, BCA/MCA, B.Sc./M.Sc. (IT) & Diploma students. We offer you the best PHP training programs in Chandigarh, assuring you an excellent level of knowledge and experience.</p>

                    <p className="py-1 fs-5">Your educational and professional development is our top priority. With our exclusive learning technologies and an elite team of expert professionals, you will receive the most effective hands-on training experience available-guaranteed. ToXSL experts help you address challenges and support you in your transformation journey for better profitability and increased competitiveness.</p>

                </div>
            </div>

            {/* ======================================================================================================== */}

            <div className="py-5 gradient-background-sky-blue">
                <div className="container  my-5">
                    <div className="text-center">
                        <span className=" py-1 px-3 rounded" style={{ backgroundColor: "#5dade2" }}>Prioritize</span>
                    </div>
                    <h2 className="text-center py-2 text-white" >Make success a priority and begin your journey today!</h2>

                    <p className="fs-5 text-center text-white">As you embark on this journey of growth and self-improvement, remember that making success a priority is not just a mindset, but a deliberate choice. It means setting clear goals, being intentional with your time, and taking consistent action towards achieving them. Don't wait for the perfect moment or until every obstacle is removed - start working towards your vision today! Every small step counts, every decision adds up, and every effort brings you closer to realizing your dreams.</p>

                    <div className="text-center mt-5 ">
                        <button className="btn btn-outline-light fw-bold mb-2 px-4 py-2 mx-2">
                            Enroll Now &gt;
                        </button>
                        <button className="btn btn-outline-light fw-bold mb-2 px-4 py-2 mx-2">
                            Contact Us &gt;
                        </button>
                    </div>
                </div>
            </div>

            {/* ============================================================================================================= */}

            <div className="container my-5">
                <div className="py-2">
                    <span className=" py-1 px-3 rounded" style={{ backgroundColor: "#5dade2" }}>Highlights</span>
                </div>
                <h2 className=" py-1 text-navy" >We are the <span style={{ color: "#0D47A1" }}>Best.</span> Know Why?</h2>

                <div className="row g-4 mt-2 d-flex">
                    {highlights.map((item, index) => (
                        <div className="col-md-4 col-12 d-flex" key={index}>
                            <div className="p-4 shadow-lg rounded-4 bg-white border d-flex flex-column" >
                                <img
                                    src={item.icon}
                                    alt={item.title}
                                    className="mb-3"
                                    style={{ width: "50px", height: "50px" }}
                                />
                                <h5 className="text-navy mb-2">{item.title}</h5>
                                <p className="text-black fs-6">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            {/* ========================================================================================================================== */}
            <Footer />
        </>
    )
}

export default page
