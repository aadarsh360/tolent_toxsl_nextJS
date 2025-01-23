"use client"
import React from 'react';
// const FloatingWhatsApp = dynamic(() => import('react-floating-whatsapp'), { ssr: false });
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import dynamic from 'next/dynamic';

const WhatsAppChat = () => {
    return (
        <div className='custom-whatsapp'>
            <FloatingWhatsApp
                phoneNumber="+9519760942" // Replace with your WhatsApp number
                accountName="Your Company Name" // Your account or business name
                avatar="https://via.placeholder.com/150" // Replace with your logo URL
                statusMessage="Typically replies within 1 hour" // Custom status message
                chatMessage="Hi there! How can we help you?" // Initial message in the chat
                allowEsc // Allow closing with the Esc key
                notification // Enable notification popup
                notificationSound // Enable notification sound
                placeholder="Type a message..." // Placeholder text for input
            />
        </div>
    );
};

export default WhatsAppChat;
