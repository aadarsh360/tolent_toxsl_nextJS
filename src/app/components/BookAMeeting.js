import React from "react";
import WhatsAppLogo from "./WhatsAppLogo";
import PhoneLogo from "./PhoneLogo";
import Link from "next/link";

const BookAMeeting = () => {
    return (
        <div>
            {/* Vertical fixed text */}
            <Link href="/pages/meeting">
            <div
                className=""
                style={{
                    position: "fixed",
                    left: "22px",
                    top: "40%",
                    transform: "translateY(-50%) rotate(-90deg)",
                    transformOrigin: "left center",
                    zIndex: "1000",
                    backgroundColor: "#007bff",
                    color: "white",
                    padding: "6px 18px",
                    borderRadius: "5px",
                    fontWeight: "bold",
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                    writingMode: "horizontal-tb",
                }}
            >
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Handshake_icon_BLACK_and_WHITE.svg/640px-Handshake_icon_BLACK_and_WHITE.svg.png"
                    alt="Phone"
                    className='text-white vibration-animation'
                    style={{
                        width: '30px',
                        height: '30px',
                    }}
                />
                <span className="px-2">
                    Book a meeting
                </span>
            </div>
            </Link>
        </div>
    );
};

export default BookAMeeting;
