import React from "react";
import bgVideo from "../assets/bg-video.mp4"; // put your video in /src/assets

const BackgroundVideo = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div className="relative flex items-center justify-center h-full text-white text-4xl font-bold">
        Welcome to My Page 🚀
      </div>
    </div>
  );
};

export default BackgroundVideo;
