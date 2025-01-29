import React from "react";

const CircleWithTriangles = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="position-relative">
        {/* Central Circle */}
        <div
          className="circle bg-primary"
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            position: "relative",
          }}
        ></div>

        {/* Triangles Around Circle */}
        <div className="triangle triangle-top"></div>
        <div className="triangle triangle-top-right"></div>
        <div className="triangle triangle-bottom-right"></div>
        <div className="triangle triangle-bottom"></div>
        <div className="triangle triangle-bottom-left"></div>
        <div className="triangle triangle-top-left"></div>
      </div>
    </div>
  );
};

export default CircleWithTriangles;