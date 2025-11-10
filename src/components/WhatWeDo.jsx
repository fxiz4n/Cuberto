import React from "react";
import Button from "./ui/Button";

const WhatWeDo = () => {
  return (
    <div className="flex items-center gap-6 py-32 px-52">
      <div className="left w-1/2">
        <div className="video">
          <video src="https://cuberto.com/assets/home/summary/2.mp4" autoPlay muted loop></video>
        </div>
      </div>
      <div className="right text-xl w-1/2 flex flex-col gap-6 items-start">
        <p>Since 2010, we have been helping our clients find exceptional solutions for their businesses, creating memorable websites and digital products.</p>
        <p>Cuberto doesn't do cookie-cutter solutions and we build products exactly as they were during the design phase, no short cuts or simplifications.</p>
        <Button text="What We Do" />
      </div>
    </div>
  );
};

export default WhatWeDo;
