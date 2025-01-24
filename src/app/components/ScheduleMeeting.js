"use client"
import React, { useState } from "react";


const ScheduleMeeting = () => {
  const [dateTime, setDateTime] = useState("");
  const [purpose, setPurpose] = useState("");

  const handleConfirmMeeting = () => {
    alert(`Meeting Scheduled on: ${dateTime}\nPurpose: ${purpose}`);
  };

  return (
    <div className="py-5 d-flex align-items-center" style={{height:"100vh"}}>
      <div className="container shadow-lg d-flex justify-content-center my-5 py-5 ">
        <div className="" style={{ width: "600px" }}>
          <div className="text-center mb-4">
            <h2 className="fw-bold">Schedule a Meeting</h2>
          </div>
          <div className=" p-4">
            <div className="mb-3">
              <label htmlFor="datetime" className="form-label fw-bold">
                Select Date and Time
              </label>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="bi bi-calendar-event"></i>
                </span>
                <input
                  type="datetime-local"
                  id="datetime"
                  className="form-control"
                  value={dateTime}
                  onChange={(e) => setDateTime(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="purpose" className="form-label fw-bold">
                Enter Purpose
              </label>
              <textarea
                id="purpose"
                className="form-control"
                rows="4"
                placeholder="Discuss about project."
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
              ></textarea>
            </div>
            <div className="text-center">
              <button
                className="btn btn-primary "
                onClick={handleConfirmMeeting}
              >
                Confirm Meeting
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleMeeting;
