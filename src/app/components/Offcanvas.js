"use client"
import React, { useEffect } from "react";


const Offcanvas = () => {
    useEffect(() => {
        // Use Bootstrap Offcanvas API to show the offcanvas on page load
        const offcanvasElement = document.getElementById("offcanvas");
        const offcanvas = new bootstrap.Offcanvas(offcanvasElement);

        // Show the offcanvas on page load
        offcanvas.show();

        // Allow scrolling when offcanvas is shown
        document.body.classList.remove("offcanvas-backdrop");

        // Add custom rotate-out animation on hide
        offcanvasElement.addEventListener("hide.bs.offcanvas", () => {
            offcanvasElement.classList.add("rotate-out");
        });

        // Clean up event listener
        return () => {
            offcanvasElement.removeEventListener("hide.bs.offcanvas", () => {
                offcanvasElement.classList.add("rotate-out");
            });
        };
    }, []);

    return (

        <div
            className="offcanvas offcanvas-bottom small-offcanvas"
            tabIndex={-1}
            id="offcanvas"
            aria-labelledby="offcanvasLabel"
        >
            <div className="offcanvas-header bg-warning rounded-2">
                <h5 className="offcanvas-title " id="offcanvasLabel ">Welcome!</h5>
                <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                />
            </div>
            <div className="offcanvas-body">Welcome in Duosoft</div>
        </div>

    );
};

export default Offcanvas;
