import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const Card = (props) => {
  const videoRef = useRef();


    function playVideo() {
      videoRef.current.play();
    }
    
    function pauseVideo() {
        videoRef.current.currentTime = 0;
        videoRef.current.pause();
    }

  return (
    <div
      onMouseMove={() => {
        playVideo();
      }}
      onMouseOut={() => {
        pauseVideo();
      }}
      className="w-104 flex flex-col gap-6"
    >
      <div className="video w-full rounded-2xl overflow-hidden">
        <video
          className="h-full w-full object-cover"
          src={props.video}
          ref={videoRef}
          muted
          loop
        ></video>
      </div>
      <p className={`w-[${props.width}%]`}>
        <span className="font-bold">{props.title}</span> - {props.desc}
      </p>
    </div>
  );
};

export default Card;
