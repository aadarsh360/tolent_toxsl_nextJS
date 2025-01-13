import React from 'react'

function OscillatingArrow() {
    return (
        <span className="px-2">
            <span
                className=""
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
        </span>
    )
}

export default OscillatingArrow
