import React from "react";

const YouTubeVideo = () => {
    return (
        <div className=" bg-black text-center py-3 px-0">
            <div className="ratio ratio-16x9">
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/a6d3QKp1dsA?si=DBLRr9ivdp8NhUnc" 
                    title="YouTube video player"
                    // frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};

export default YouTubeVideo;
