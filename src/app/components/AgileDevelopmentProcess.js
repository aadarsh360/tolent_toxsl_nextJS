import React from "react";

const AgileDevelopmentProcess = () => {
  const processes = [
    {
      title: "Customer Satisfaction",
      description:
        "We follow a customer-centric approach, ensuring that the final product meets our customers' needs.",
      number: "01",
    },
    {
      title: "Team Collaboration",
      description:
        "We promote teamwork while maintaining transparency with customers by keeping them involved.",
      number: "02",
    },
    {
      title: "Faster Time-to-Market",
      description:
        "By breaking down the development process into smaller iterations, customers can respond quickly to changes.",
      number: "03",
    },
    {
      title: "Cost Efficiency",
      description:
        "We focus on delivering value early and frequently, allowing businesses to prioritize features based on needs.",
      number: "04",
    },
    {
      title: "Enhanced Flexibility",
      description:
        "Our solutions enable businesses to adapt to changing requirements, ensuring that the final product aligns with needs.",
      number: "05",
    },
    {
      title: "High Quality",
      description:
        "We emphasize continuous testing and feedback, ensuring that quality is built into the product from the start.",
      number: "06",
    },
  ];


  const triangles = [
    { id: 1, text: "Customer Satisfaction", rotate: 0 },
    { id: 2, text: "Team Collaboration", rotate: 60 },
    { id: 3, text: "Faster Time-to-Market", rotate: 120 },
    { id: 4, text: "Cost Efficiency", rotate: 180 },
    { id: 5, text: "Enhanced Flexibility", rotate: 240 },
    { id: 6, text: "High Quality", rotate: 300 },
  ];

  const processSteps = [
    { title: "Customer Satisfaction", text: "We follow a customer-centric approach, ensuring that the final product meets our customer’s expectations." },
    { title: "Team Collaboration", text: "We promote teamwork and maintain transparency with customers by keeping them involved." },
    { title: "Faster Time-to-Market", text: "By breaking down development into smaller iterations, customers can respond quickly to market demands." },
    { title: "Cost Efficiency", text: "We focus on delivering value early and frequently, prioritizing features based on business needs." },
    { title: "Enhanced Flexibility", text: "Our solutions enable businesses to adapt to changing requirements efficiently." },
    { title: "High Quality", text: "We emphasize continuous testing and feedback to ensure the best product quality." },
  ];

  // return (
  //   <div className="container d-flex justify-content-center align-items-center min-vh-100">
  //     <div className="position-relative" style={{ width: "400px", height: "400px" }}>
  //       {/* Center Circle */}
  //       <div
  //         className="rounded-circle bg-primary text-white d-flex flex-column justify-content-center align-items-center position-absolute shadow"
  //         style={{
  //           width: "150px",
  //           height: "150px",
  //           top: "50%",
  //           left: "50%",
  //           transform: "translate(-50%, -50%)",
  //         }}
  //       >
  //         <h5 style={{ fontWeight: "bold" }}>Our Process</h5>
  //       </div>

  //       {/* Triangles */}
  //       {triangles.map((item) => (
  //         <div
  //           key={item.id}
  //           className="position-absolute"
  //           style={{
  //             width: "180px",
  //             height: "180px",
  //             top: "50%",
  //             left: "50%",
  //             transform: `translate(-50%, -50%) rotate(${item.rotate}deg)`,
  //           }}
  //         >
  //           <div
  //             className="position-absolute bg-light text-dark text-center shadow-sm p-2"
  //             style={{
  //               width: "100%",
  //               height: "100%",
  //               clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
  //               transform: `rotate(${item.rotate * -1}deg)`,
  //               display: "flex",
  //               justifyContent: "center",
  //               alignItems: "center",
  //               fontSize: "0.85rem",
  //             }}
  //           >
  //             {item.text}
  //           </div>
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // );

  return (

    <div className="background-light-sky py-5">
      <div className="container my-5">
        <div className="row align-items-center">
          {/* Left Section */}
          <div className="col-lg-6 col-12 text-center ">
            <h2 className="text-success mb-4">
              Reshape Your Business With<br></br> Our Agile Development<br></br> Process
            </h2>
            <img
              src="https://toxsl.com/themes/new/img/agile-process/agile-process2.png" // Replace with actual Agile image URL
              alt="Agile Development Process"
              className="img-fluid my-4"
              style={{ objectFit: 'cover', width: "300px", height: "auto" }}

            />

            <div className="d-flex justify-content-center my-2">
              <div className="mt-4 bg-success rounded-4" style={{ maxWidth: "440px" }}>
                <h2 className=" text-white fs-4 py-4 px-5">
                  Become the next big thing by implementing our robust Agile development process.
                </h2>
              </div>
            </div>
          </div>


          {/* Right Section */}
          <div className="col-lg-6 col-12 text-center position-relative">
            {/* Large Screen - Structured Layout */}
            <div className="triangle-layout-large-screen">
              <div className=" d-flex justify-content-center align-items-center  position-relative">
                {/* Circle */}
                <div className="circle2 d-flex justify-content-center align-items-center">Our<br></br> Process</div>

                {/* Triangles with Headings & Paragraphs */}
                <div className="triangle-container ">
                  {processSteps.map((item, index) => (
                    <div key={index} className={`triangle triangle-${index + 1} `}>
                      <div className={`triangle-number${index + 1}`}>0{index + 1}</div>
                      <h5 className={`triangle-heading-text${index + 1} text-black px-2`}>{item.title}</h5>
                      <p className={`triangle-paragraph-text${index + 1} text-black `}>{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>


            {/* Small Screen - Cards Layout */}
            <div className="triangle-layout-medium-screen">
              <div className="row py-2  gy-3">
                {processSteps.map((item, index) => (
                  <div key={index} className="col-6 d-flex">
                    <div className="card shadow-sm border-0 p-3 text-start flex-column">
                      <h5 className="text-success">{item.title}</h5>
                      <p className="text-muted">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AgileDevelopmentProcess;
