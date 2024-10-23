import React from "react";
import "./weekendSpecial/wspcl.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="max-width">
        <div className="hero-content">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button>Reserve a table</button>
        </div>
        <img
          className="hero-image"
          src="https://littlelemon.alexismenest.vercel.app/static/media/restaurant-food.827fb0bfe6f625329f41.jpg"
          alt="little lemon"
        />
      </div>
    </div>
  );
};

export { Hero };
