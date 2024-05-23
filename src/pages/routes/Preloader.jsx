// src/components/Preloader.js
import React from "react";
// import "./Preloader.css"; // Add your CSS styles here
import video from "../../assets/preloader.mp4";

const Preloader = () => {
  return (
    <div className="preloader">
      <div className="spinner"></div>
      {/* <video width="750" height="500" loop autoPlay>
        <source src={video} type="video/mp4" />
      </video> */}
    </div>
  );
};

export default Preloader;
