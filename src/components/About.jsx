import React from "react";
import profile from "../assets/profile.png";
import { MdOutlineFileDownload } from "react-icons/md";
import { motion } from "framer-motion";

const resumeUrl =
  "https://docs.google.com/document/d/1zfKmg6jiaA5JnlfWvytuFO7Qxtp8t40CAZSTUu-TGY8/edit?tab=t.0";

function About() {
  function downloadResume() {
    window.open(resumeUrl);
  }
  return (
    <>
      <motion.div className="about bg-light" id="about">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 2, y: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: false }}
          className="about-container"
        >
          <div className="col-4 mt-5" id="aboutsection-image" >
            <img src={profile} class="img-fluid object-fit-cover" alt="..."  style={{width:"300px", height:"300px", borderRadius:"100%"}}/>
          </div>
          <div className="col-8">
            <h2 style={{ textTransform: "uppercase", textAlign: "center" }}>
              About Me
            </h2>
            <p>
              I'm a passionate Frontend Web Developer specializing in creating
              responsive and user-friendly websites. With expertise in React.js
              and Redux Toolkit, I focus on building dynamic and
              high-performance web applications. My goal is to deliver seamless
              user experiences while embracing modern web technologies and best
              practices.
            </p>
            <button onClick={downloadResume} type="button" class="btn btn-dark">
              <MdOutlineFileDownload size={20} />
              Download Resume
            </button>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}

export default About;

// E-mail service id=service_px6jst6
// E-mail public key=FkhGKTd2x4TADg_5w
