import React from "react";
import {
  PiNumberCircleOneLight,
  PiNumberCircleTwoLight,
  PiNumberCircleThreeLight,
} from "react-icons/pi";
import "./Process.css";

const steps = [
  {
    src: <PiNumberCircleOneLight className="number-icon" aria-label="Step 1" />,
    name1: "Cut open the pack & add",
    name2: "some salt if required",
  },
  {
    src: <PiNumberCircleTwoLight className="number-icon" aria-label="Step 2" />,
    name1: "Stir & spread clockwise and",
    name2: "Flip when edges turn golden-brown",
  },
  {
    src: (
      <PiNumberCircleThreeLight className="number-icon" aria-label="Step 3" />
    ),
    name1: "Serve with delicious",
    name2: "chutneys or sambhar!",
  },
];

const Process = React.memo(() => {
  return (
    <section id="process">
      <div className="image-gallery-container">
        <h1 className="process-heading">Process</h1>
        <div className="image-gallery">
          {steps.map((step, index) => (
            <div className="image-item" key={index}>
              <div>{step.src}</div>
              <p className="process-name">{step.name1}</p>
              <p className="process-name">{step.name2}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Process;
