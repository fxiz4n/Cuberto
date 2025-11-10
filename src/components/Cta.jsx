import React from "react";

const Cta = () => {
  return (
    <div className="bg-black text-white relative">
      <div className="h-screen w-full">
        <video
          className="h-full w-full object-cover"
          src="https://cuberto.com/assets/footer/ropes.mp4"
          autoPlay
          muted
          loop
        ></video>
      </div>
      <div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-8xl flex flex-col justify-center items-center gap-4">
          <h1>Have</h1>
          <h1>an Idea?</h1>
          <button className="border uppercase rounded-full py-4 px-8">Tell Us</button>
        </div>
      </div>
    </div>
  );
};

export default Cta;
