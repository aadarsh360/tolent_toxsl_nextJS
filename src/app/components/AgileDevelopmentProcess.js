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
    <div className="container my-5">
      <div className="row align-items-center">
        {/* Left Section */}
        <div className="col-md-5 text-center ">
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
        <div className="col-md-7 text-center position-relative">
          <h3 className="fw-bold mb-4">Our Process</h3>
          <div className="process-wheel">
            {processes.map((process, index) => (
              <div
                key={index}
                className={`process-segment segment-${index + 1} d-flex flex-column align-items-center justify-content-center`}
              >
                <span className="process-number">{process.number}</span>
                <h6 className="process-title fw-bold mt-2">{process.title}</h6>
                <p className="process-description text-muted">
                  {process.description}
                </p>
              </div>
            ))}
            <div className="process-center-circle d-flex align-items-center justify-content-center">
              <span className="fw-bold">Our Process</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgileDevelopmentProcess;


<div className="container">
  <section className="hero-section">
    <h1 className="hero-title">
      Reshape Your Business With Our Agile Development Process
    </h1>

    <div className="agile-diagram">
      <div className="agile-circle">
        <span className="agile-text">AGILE</span>
      </div>
      {/* Arrows would be added as background SVG in a production environment */}
    </div>

    <div className="hero-subtitle">
      Become the next big thing by implementing our robust Agile development process.
    </div>

    <div className="process-wheel">
      <div className="process-center">
        <h3>Our<br />Process</h3>
      </div>

      <div className="row">
        {[
          {
            number: "01",
            title: "Customer Satisfaction",
            description: "We follow a customer-centric approach, ensuring that the final product meets our customer's expectations."
          },
          {
            number: "02",
            title: "Team Collaboration",
            description: "We promote teamwork and collaboration, maintaining transparency with customers by keeping them informed."
          },
          {
            number: "03",
            title: "Faster Time-to-Market",
            description: "By breaking down the development process into smaller iterations, customers can respond quickly to changes."
          },
          {
            number: "04",
            title: "Cost Efficiency",
            description: "We focus on delivering value early and frequently, allowing businesses to prioritize features based on their ROI."
          },
          {
            number: "05",
            title: "Enhanced Flexibility",
            description: "Our solutions enable businesses to adapt to changing requirements during development."
          },
          {
            number: "06",
            title: "High Quality",
            description: "We emphasize continuous testing and feedback, ensuring quality is built into the product from the start."
          }
        ].map((item, index) => (
          <div key={index} className="col-md-6 col-lg-4">
            <div className="process-item">
              <div className="process-number">{item.number}</div>
              <h4 className="process-title">{item.title}</h4>
              <p className="process-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
</div>
