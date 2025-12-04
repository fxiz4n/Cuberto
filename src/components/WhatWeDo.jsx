import React from "react";
import Button from "./ui/Button";

const WhatWeDo = () => {
  return (
    <div className="flex max-tab:flex-col items-center gap-6 py-16 tab:py-32 px-8 desktop:px-36">
      <div className="left desktop:w-1/2 w-full flex items-center justify-center">
        <div className="video h-[40vh] w-[80vw] tab:w-[50vw] desktop:h-full desktop:w-full ">
          <video className="h-full w-full object-cover object-center" src="https://cuberto.com/assets/home/summary/2.mp4" autoPlay muted loop></video>
        </div>
      </div>
      <div className="right text-2xl desktop:w-1/2 flex flex-col gap-6 items-start">
        <p>Since 2010, we have been helping our clients find exceptional solutions for their businesses, creating memorable websites and digital products.</p>
        <p>Cuberto doesn't do cookie-cutter solutions and we build products exactly as they were during the design phase, no short cuts or simplifications.</p>
        <Button text="What We Do" />
      </div>
    </div>
  );
};

export default WhatWeDo;
