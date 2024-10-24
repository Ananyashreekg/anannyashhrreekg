// components/Home.js
import React from "react";
import "./Home.css";
import profilePicture from "../assets/profile.jpg"; // Import your profile image

function Home() {
  return (
    <div className="home">
      <div className="ps">
        {/* Profile picture */}
        <img src={profilePicture} alt="Ananyashree K G" className="profile-picture" />
        <h1>Hii there, <br />Thanks for visiting my Portfolio!</h1>
        <h4>
          I am a passionate developer specializing in AI, Machine Learning, and Web Development.
          <br />Check out my Projects and Resume for more information.
        </h4>
      </div>
    </div>
  );
}

export default Home;
