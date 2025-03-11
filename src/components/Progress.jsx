import React from "react";
import { motion } from "framer-motion";

const ProgressBar = ({ label, percentage }) => {
  return (
    <div className="mb-2">
      <label>{label}</label>
      <div
        className="progress mb-3"
        role="progressbar"
        aria-label={label}
        aria-valuenow={percentage}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <motion.div
          className="progress-bar bg-dark"
          initial={{ width: "0%" }}
          whileInView={{ width: `${percentage}%` }}
          whileHover={{ scale: 1.05 }} // Slightly expands on hover
          transition={{ duration: 1 }}
        >
          {percentage}%
        </motion.div>
      </div>
    </div>
  );
};



const Skills = () => {
    return (
      <div className="w-75 mt-3 mb-5" id="progress-bar">
        <ProgressBar label="HTML" percentage={95} />
        <ProgressBar label="CSS" percentage={90} />
        <ProgressBar label="JavaScript" percentage={75} />
        <ProgressBar label="Bootstrap" percentage={80} />
        <ProgressBar label="React" percentage={70} />
      </div>
    );
  };
  
  export default Skills;