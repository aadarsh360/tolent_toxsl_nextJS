"use client"
import React, { useEffect } from 'react';

const RainAnimation = () => {
  useEffect(() => {
    const rainContainer = document.querySelector('.rain-container');

    // Function to create raindrops
    const createRaindrops = () => {
      for (let i = 0; i < 10; i++) { // Number of raindrops
        const raindrop = document.createElement('div');
        raindrop.classList.add('raindrop');
        raindrop.textContent = '*'; // Raindrop symbol
        raindrop.style.left = `${Math.random() * 100}%`; // Random horizontal position
        raindrop.style.animationDelay = `${Math.random() * 3}s`; // Random delay
        rainContainer.appendChild(raindrop);
      }
    };

    createRaindrops(); // Create the raindrops
  }, []); // Run only once when the component mounts

  return(<div className="rain-container ">
    <div></div>
  </div>);
};

export default RainAnimation;
