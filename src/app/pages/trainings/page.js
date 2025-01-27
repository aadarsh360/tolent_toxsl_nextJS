import ChatWithUs from '@/app/components/ChatWithUs';
import FooterToxsl from '@/app/components/FooterToxsl'
import Navbar2 from '@/app/components/Navbar2';
import Link from 'next/link';
import React from 'react'

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

    const courses = [
        {
          title: "Inside Sales",
          description:
            "Training Syllabus: Month 1: Foundation and Outbound Lead Generation (Weeks 1-4) Week 1: Onboarding and Company Overview Introduce the sales team, company...",
          qualification: "B.Tech / MCA / BCA / M.Tech.",
          durations: ["3 Months"],
        },
        {
          title: "Artificial Intelligence and Large Language Model Complete Course",
          description:
            "3 Months Course Structure Month 1: Introduction to AI and LLM Overview of AI and its applications Introduction to LLM and its benefits Types of LLM...",
          qualification: "B.Tech / MCA / BCA / M.Tech.",
          durations: ["3 Months", "6 Months", "45 Days"],
        },
        {
          title: "Web Development Bootcamp",
          description:
            "Learn HTML, CSS, JavaScript, and popular frameworks like React and Node.js. Build real-world projects and become a full-stack web developer.",
          qualification: "Any Graduate",
          durations: ["6 Months"],
        },
        {
          title: "Data Science with Python",
          description:
            "Understand data analysis, visualization, and machine learning concepts. Hands-on experience with Python libraries like Pandas, NumPy, and Scikit-learn.",
          qualification: "B.Tech / MCA / BCA / M.Tech.",
          durations: ["4 Months", "8 Months"],
        },
        {
          title: "Digital Marketing Masterclass",
          description:
            "Learn SEO, SEM, Content Marketing, Social Media Marketing, and Email Marketing. Work on live campaigns and become a certified digital marketer.",
          qualification: "Any Graduate",
          durations: ["3 Months", "6 Months"],
        },
        {
          title: "Cloud Computing with AWS",
          description:
            "Master AWS services like EC2, S3, Lambda, and RDS. Learn to build and deploy scalable applications on the cloud.",
          qualification: "B.Tech / MCA / BCA / M.Tech.",
          durations: ["5 Months"],
        },
        {
          title: "Cybersecurity Essentials",
          description:
            "Learn how to protect systems, networks, and data from cyber threats. Topics include ethical hacking, risk assessment, and security protocols.",
          qualification: "B.Tech / MCA / BCA / M.Tech.",
          durations: ["6 Months"],
        },
        {
          title: "Machine Learning with TensorFlow",
          description:
            "Understand the basics of machine learning and implement models using TensorFlow. Work on real-world projects in domains like healthcare and finance.",
          qualification: "B.Tech / M.Tech / Data Science Enthusiasts",
          durations: ["6 Months", "1 Year"],
        },
        {
          title: "Mobile App Development",
          description:
            "Learn to build cross-platform mobile applications using React Native or Flutter. Publish apps on the App Store and Play Store.",
          qualification: "Any Graduate",
          durations: ["4 Months", "8 Months"],
        },
        {
          title: "Graphic Design and UI/UX",
          description:
            "Learn the principles of design, typography, and color theory. Hands-on experience with tools like Photoshop, Illustrator, and Figma.",
          qualification: "Any Graduate",
          durations: ["3 Months"],
        },
        {
          title: "Blockchain and Cryptocurrency",
          description:
            "Dive into blockchain fundamentals, smart contracts, and decentralized apps (DApps). Understand cryptocurrencies like Bitcoin and Ethereum.",
          qualification: "B.Tech / MCA / BCA / M.Tech.",
          durations: ["6 Months"],
        },
        {
          title: "Big Data with Hadoop",
          description:
            "Understand big data concepts and tools like Hadoop and Spark. Learn to analyze large datasets using Hive and Pig.",
          qualification: "B.Tech / MCA / BCA / M.Tech.",
          durations: ["8 Months"],
        },
        {
          title: "Artificial Intelligence in Healthcare",
          description:
            "Explore the role of AI in healthcare. Topics include medical imaging, drug discovery, and predictive analytics for patient care.",
          qualification: "B.Tech / M.Tech / Healthcare Professionals",
          durations: ["3 Months", "9 Months"],
        },
        {
          title: "IoT (Internet of Things)",
          description:
            "Learn to build IoT devices and understand IoT protocols. Work on projects like home automation and smart energy systems.",
          qualification: "B.Tech / MCA / BCA / M.Tech.",
          durations: ["5 Months"],
        },
        {
          title: "Game Development with Unity",
          description:
            "Learn to create 2D and 3D games using Unity. Topics include game physics, animations, and multiplayer game development.",
          qualification: "Any Graduate",
          durations: ["4 Months", "10 Months"],
        },
      ];
      

    return (
        <div className='background-light-sky'>
            <Navbar2 />
            <ChatWithUs />
            <div className='bg-success py-5 mt-5'>
                <div className='container py-2 mt-4'>
                    <h1 className='text-white'>TRAINING OPPORTUNITIES</h1>
                    <span className='text-white'><Link href={"/"} style={{color:"white", textDecoration:"none"}}>Home</Link> / Trainings</span>
                </div>
            </div>

            {/* =============================================================================================================    */}
            <div>
                <div className="container mt-5">
                    <div className="row" style={{

                        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                        borderRadius: "8px",
                        background: "#F9FBFF",
                        // padding: "10px",
                    }}>
                        <div
                            className="col-md-10 col-12 px-2 py-4"
                        >
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Title / Description"
                                style={{
                                    border: "none",
                                    borderRadius: "8px",
                                    boxShadow: "none",
                                    backgroundColor: "#F4F4F4",
                                }}
                            />
                        </div>

                        <div className='col-md-2 col-12 d-flex justify-content-center align-items-center' style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)" }}>
                            <div className='py-2'>
                                <button
                                    className="btn btn-success px-5"
                                    type="button"
                                >
                                    SEARCH
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ================================================================================================================== */}


            <div>
                <div className="container my-5">
                    <div className="row">
                        <div className="col-lg-8">
                            {courses.map((course, index) => (
                                <CourseCard
                                    key={index}
                                    title={course.title}
                                    description={course.description}
                                    qualification={course.qualification}
                                    durations={course.durations}
                                />
                            ))}
                        </div>
                        <div className="col-lg-4">
                            <ContactCard />
                        </div>
                    </div>
                </div>
            </div>
            


            {/* =============================================================================================================================== */}
            <div className="container my-5">
                <div className="py-2">
                    <span className=" py-1 px-3 rounded bg-success">Highlights</span>
                </div>
                <h2 className=" py-1 text-success" >We are the <span className='text-warning'>Best.</span> Know Why?</h2>

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
                                <h5 className="text-success mb-2">{item.title}</h5>
                                <p className="text-black fs-6">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* ======================================================================================================================= */}


            {/* ================================================================================================================== */}
            <div className="background-light-gray py-5">
                <div className="container my-5">
                    <div className="text-center">
                        <span className=" py-1 px-3 rounded" style={{ backgroundColor: "#FF7518" }}>OUR LATEST BLOGS</span>
                    </div>
                    <h2 className="text-center text-success py-2">Explore Our Latest Career & News</h2>

                    <div className="row g-3 mt-4">

                        {/* first */}
                        <div className="col-md-4 col-12 ">
                            <div className="p-3 shadow">
                                {/* Image */}
                                <img
                                    src="https://talent.toxsl.com/blog/image/111?file=218761&thumbnail=400"
                                    alt="Example"
                                    className="img-fluid mb-3"

                                />

                                {/* Heading */}
                                <h4 className="text-success mb-2">Transform Your App Development Skills with React Native Training in Mohali</h4>

                                {/* Paragraph */}
                                <p className="text-muted">
                                    Inthe fast-paced world of app development, mobile applications havebecome an essential part of every business, whether it’s fore-commerce, entertainment, social interaction, or...
                                </p>

                                {/* Button */}
                                <button className="btn btn-outline-success px-2 py-2">Read More</button>
                            </div>
                        </div>

                        {/* second */}
                        <div className="col-md-4 col-12">
                            <div className="p-3 shadow">
                                {/* Image */}
                                <img
                                    src="https://talent.toxsl.com/blog/image/110?file=218760&thumbnail=400"
                                    alt="Example"
                                    className="img-fluid mb-3"

                                />

                                {/* Heading */}
                                <h4 className="text-success mb-2">Kickstart Your Career with Professional Web Designing Training in Mohali</h4>

                                {/* Paragraph */}
                                <p className="text-muted">In the modern digital age, having a website is crucial for businessesand individuals alike. With the world becoming increasingly digital,a well-designed website plays a pivotal role in creating...</p>

                                {/* Button */}
                                <button className="btn btn-outline-success px-2 py-2">Read More</button>
                            </div>
                        </div>

                        {/* third */}
                        <div className="col-md-4 col-12 ">
                            <div className="p-3 shadow">
                                {/* Image */}
                                <img
                                    src="https://talent.toxsl.com/blog/image/109?file=218759&thumbnail=400"
                                    alt="Example"
                                    className="img-fluid mb-3"

                                />

                                {/* Heading */}
                                <h4 className="text-success mb-2">Top Reasons to Choose Java Training in Mohali for a Successful Career</h4>

                                {/* Paragraph */}
                                <p className="text-muted">Java is one of the most powerful, versatile, and widely used programming languages in the world today. It is at the core of many industries, from finance to healthcare, from mobile apps to...</p>

                                {/* Button */}
                                <button className="btn btn-outline-success px-2 py-2">Read More</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* ============================================================================================================================================== */}

            <FooterToxsl />
        </div>
    )
}

const CourseCard = ({ title, description, qualification, durations }) => {
    return (
        <div className="card mb-4" style={{ borderRadius: "10px", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)" }}>
            <div className="card-body">
                <h5 className="  py-2">{title}</h5>
                <p className="card-text text-muted py-2">{description}</p>
                <div className="mb-3">
                    <div className=" background-light-sky text-dark px-3 py-2" style={{ borderRadius: "5px",maxWidth:"400px" }}>
                        Qualification:<br></br> {qualification}
                    </div>
                </div>
                <div className='d-flex justify-content-end'>
                    {durations.map((duration, index) => (
                        <button
                            key={index}
                            className="btn btn-success me-2"
                            style={{
                                background: "linear-gradient(to right, #008000, #FF7518)",
                                border: "none",
                                borderRadius: "5px",
                            }}
                        >
                            {duration}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

const ContactCard = () => {
    return (
        <div className="card" style={{ borderRadius: "10px", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)" }}>
            <div className="card-header bg-success text-white text-center fw-bold">Directly Contact Us!</div>
            <div className="card-body">
                <div className="mb-3 py-2">
                    <i className="bi bi-telephone-fill me-2 text-success"></i>
                    +91 999 189 6640
                </div>
                <div className="mb-3 py-2">
                    <i className="bi bi-envelope-fill me-2 text-success"></i>
                    career@dousoft.com
                </div>
                <div className='py-2'>
                    <i className="bi bi-clock-fill me-2 text-success"></i>
                    10:00 to 6:00 (5 working days)
                </div>
            </div>
        </div>
    );
};

export default page
