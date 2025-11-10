import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-center py-24">
        <div className="text-[5vw] font-semibold leading-[6vw]">
          <h1>Design agency focused</h1>
          <h1>on AI-driven products</h1>
        </div>
        <p className="text-xl pt-4">
          Cuberto is a digital design and technology partner focused on smart <br />
          interactions, delightful UX, and cutting-edge AI solutions.
        </p>
      </div>
      <div className="video h-screen w-full py-2 px-24 overflow-hidden rounded-2xl">
        <video className="h-full w-full object-cover rounded-2xl" src="https://cuberto.com/assets/showreel/short.mp4" autoPlay loop muted></video>
      </div>
    </div>
  );
};

export default Hero;
