import React from "react";
import {
  PiNumberCircleOneLight,
  PiNumberCircleTwoLight,
  PiNumberCircleThreeLight,
} from "react-icons/pi";

import "./Process.css";

const Process = () => {
  const person = [
    {
      src: <PiNumberCircleOneLight className="number-icon" />,
      name: "John Doe",
    },
    {
      src: <PiNumberCircleTwoLight className="number-icon" />,
      name: "Mike Doe",
    },
    {
      src: <PiNumberCircleThreeLight className="number-icon" />,
      name: "Jane Doe",
    },
  ];

  return (
    <section id="process">
      <div className="image-gallery-container">
        <h1 className="process-heading">Process</h1>
        <div className="image-gallery">
          {person.map((image, index) => (
            <div className="image-item" key={index}>
              <div>{image.src}</div>
              <p className="process-name">{image.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
