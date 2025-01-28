"use client"
import React, { useState } from "react";

const ChatWithUs = () => {
    const [showChat, setShowChat] = useState(false);

    const toggleChat = () => {
        setShowChat(!showChat);
    };

    return (
        <div>
            {/* Chat Button */}
            <div
                className="position-fixed"
                style={{
                    bottom: "20px",
                    right: "20px",
                    zIndex: "1000",
                }}
            >
                <button
                    // className="btn btn-primary d-flex align-items-center shadow"
                    className="btn text-white d-flex align-items-center shadow"
                    // style={{ borderRadius: "20px", padding: "10px 15px",  backgroundColor:"#FFA500" }}
                    style={{ borderRadius: "20px", padding: "10px 15px",  backgroundColor:"#008000" }}
                    onClick={toggleChat}
                >
                    <i className="bi bi-chat-left-dots-fill" style={{ fontSize: "20px" }}></i>
                    <span className="ms-2">Chat with us</span>
                </button>
            </div>

            {/* Chat Section */}
            {showChat && (
                <div
                    className="position-fixed bg-white shadow-lg"
                    style={{
                        bottom: "80px",
                        right: "20px",
                        width: "300px",
                        height: "400px",
                        borderRadius: "15px",
                        zIndex: "999",
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    {/* Chat Header */}
                    <div
                        className="bg-success text-white d-flex justify-content-between align-items-center p-3"
                        style={{ borderTopLeftRadius: "15px", borderTopRightRadius: "15px" }}
                    >
                        <span>Chat</span>
                        <button
                            className="btn btn-sm btn-close btn-close-white"
                            onClick={toggleChat}
                        ></button>
                    </div>

                    {/* Chat Messages */}
                    <div
                        className="flex-grow-1 p-3"
                        style={{
                            overflowY: "auto",
                            fontSize: "14px",
                        }}
                    >
                        <div className="mb-3">
                            <strong>Agent:</strong> Hi! How can I help you?
                        </div>
                        {/* Add user messages dynamically */}
                    </div>

                    {/* Chat Input */}
                    <div className="p-3 border-top d-flex">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Type your message..."
                        />
                        <div className="mx-1 px-2 bg-primary rounded d-flex align-items-center">
                        <i className="bi bi-send text-white"></i>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChatWithUs;
