import React from "react";
import Typewriter from "typewriter-effect";

export function TypeWriterEffect() {
  const roles = ["Software Developer.", "Photographer.", "Music Producer."];

  return (
    <span className="inline-block bg-gradient-to-tr from-third to-fifth text-transparent bg-clip-text">
      <Typewriter
        options={{
          strings: roles,
          autoStart: true,
          loop: true,
          delay: 70,
          deleteSpeed: 50,
          pauseFor: 2000,
          wrapperClassName: "text-2xl md:text-4xl",
        }}
      />
    </span>
  );
}

export default TypeWriterEffect;
