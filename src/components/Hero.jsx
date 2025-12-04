import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";

const Hero = () => {

  return (
    <div className="flex flex-col justify-center items-center mt-32 tab:mt-20">
      <div className="text-center py-8 tab:py-24 px-5">
        <div className="text-[8vw] leading-[10vw] desktop:text-[5vw] font-semibold desktop:leading-[6vw]">
          <h1>Design agency focused</h1>
          <h1>on AI-driven products</h1>
        </div>
        <p className="text-xl desktop:text-2xl pt-4">
          Cuberto is a digital design and technology partner focused on smart{" "}
          <br />
          interactions, delightful UX, and cutting-edge AI solutions.
        </p>
      </div>
      <div className="video h-[45vh] desktop:h-[60vh] xl:h-screen w-full py-2 px-5 tab:px-12 desktop:px-24 overflow-hidden rounded-2xl">
        <video
          className="h-full w-full object-cover rounded-2xl"
          src="https://cuberto.com/assets/showreel/short.mp4"
          autoPlay
          loop
          muted
        ></video>
      </div>
    </div>
  );
};

export default Hero;
