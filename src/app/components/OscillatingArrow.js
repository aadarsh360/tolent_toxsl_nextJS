import React from 'react'

function OscillatingArrow() {
    return (
        <div className="text-center mt-5">
            <span
                className="fs-1"
                style={{
                    display: "inline-block",
                    animation: "oscillate 2s infinite",
                }}
            >
                &gt;
            </span>

            {/* Inline CSS for keyframes */}
            <style>
                {`
          @keyframes oscillate {
            0% { transform: translateX(-5px); }
            50% { transform: translateX(5px); }
            100% { transform: translateX(-5px); }
          }
        `}
            </style>
        </div>
    )
}

export default OscillatingArrow
