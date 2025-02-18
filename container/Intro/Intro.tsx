"use client";
import { useState, useRef } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import "./Intro.css";

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = useRef<HTMLVideoElement | null>(null);

  const handleVideoToggle = () => {
    setPlayVideo((prev) => !prev);
    if (vidRef.current) {
      if (playVideo) {
        vidRef.current.pause();
      } else {
        vidRef.current.play();
      }
    }
  };

  return (
    <div className="app__video">
      <video
        ref={vidRef}
        src="/meal.mp4"
        // type="video/mp4"
        loop
        controls={false}
        muted
      />
      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={handleVideoToggle}
        >
          {playVideo ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
