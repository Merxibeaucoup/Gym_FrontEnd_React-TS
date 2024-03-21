import React, { useState } from "react";

const EmpowerSection: React.FC = () => {
  const [data] = useState({
    title: "Empower Your Fitness Journey with [Your Gym Name]",
    description: `At [Your Gym Name], we're dedicated to helping you achieve your fitness goals and lead a healthier lifestyle. Located in the heart of [Your City],
          At [Your Gym Name], we're dedicated to helping you achieve your fitness goals and lead a healthier lifestyle. Located in the heart of [Your City],`,
  });

  return (
    <div className="empower">
      <h2 className="empower--title">{data.title}</h2>
      <p className="empower--description">{data.description}</p>
      <div className="container">
        <div className="chevron"></div>
        <div className="chevron"></div>
        <div className="chevron"></div>
        <span className="text">Scroll down</span>
      </div>
    </div>
  );
};

export default EmpowerSection;
