// Program.js
import React from "react";

const Program = () => {
  const programs = [
    { name: "Bachelor of Science in Computer Science", duration: "4 years" },
    { name: "Bachelor of Business Administration", duration: "3 years" },
    { name: "Master of Arts in Education", duration: "2 years" },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Programs Offered</h1>
      <ul>
        {programs.map((program, index) => (
          <li key={index}>
            {program.name} - {program.duration}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Program;
