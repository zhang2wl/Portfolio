import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Ansys MAPDL Developer",
          "Researcher",
          "Enthusiatic Learner",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 10,
      }}
    />
  );
}

export default Type;
