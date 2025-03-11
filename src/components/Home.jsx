import React from "react";
import Navbar from "./Navbar";
import About from "./About";
import Jobs from "./Jobs";
import Contact from "./Contact";
import Skills from "./Progress";
import WaveImg from "../assets/wave.svg";

// import Project from "./Project";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { motion } from "framer-motion";

function Home() {
  return (
    <>
      <Navbar />
      {/* <motion.h2
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      Welcome to My Portfolio
    </motion.h1> */}
      <div id="banner">
        <div className="container" style={{ height: "500px" }}>
          <div
            className="d-flex flex-column justify-content-center align-items-center"
            style={{ height: "inherit" }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="fs-1"
            >
              I'm Samuel
            </motion.h2>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: false }}
              className=""
            >
              FRONT-END <span style={{ color: "#48cae4" }}>WEB DEVELOPER</span>
            </motion.h2>
            <p>turning ideas into interactive reality.</p>
            <div>
              <motion.ul
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="d-flex justify-content-between"
                style={{ listStyleType: "none" }}
              >
                <li className="me-2">
                  <a
                    href="https://github.com/MrSamuelUN/"
                    target="_blank"
                    style={{ color: "#000" }}
                  >
                    <FaGithub size={"25px"} />
                  </a>
                </li>

                <li className="me-2">
                  <a href="https://x.com/Mrsamuel_UN" target="_blank" style={{ color: "#000" }}>
                    <BsTwitterX size={"25px"} />
                  </a>
                </li>
              </motion.ul>
            </div>
          </div>
        </div>
      </div>
      {/* About me */}

      <About />

      <div className="mb-3">
        <div className="techstack mb-5">
          <h2 style={{ textTransform: "uppercase", textAlign: "center" }}>
            Skills
          </h2>

          <hr />
          <div className="techstack-container">
            <div className="col-4">
              <FaHtml5 size={50} color="" />
              <p className="fw-bold text-dark">HTML&CSS</p>
              <p>
                Highly skilled in HTML & CSS, adeptly crafting visually
                appealing and responsive websites for optimal user experiences.
              </p>
            </div>
            <div className="col-4">
              <IoLogoJavascript size={50} color="" />
              <p className="fw-bold">JavaScript</p>
              <p>
                Expertise in JavaScript, building interactive and dynamic web
                applications with a focus on seamless user interactions and
                functionality.
              </p>
            </div>
            <div className="col-4">
              <FaReact size={50} color="" />
              <p className="fw-bold">React</p>
              <p>
                Advanced proficiency in React, developing efficient and
                interactive front-end applications with a strong emphasis on
                component-based architecture.
              </p>
            </div>
          </div>

          {/* skill progress */}
          <Skills />
          {/* 
          <div className="w-75 mt-3 mb-5" id="progress-bar">
            <div className="mb-2">
              <label htmlFor="">HTML</label>
              <div
                className="progress mb-3"
                role="progressbar"
                aria-label="Example with label"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div class="progress-bar bg-dark" style={{ width: "90%" }}>
                  95%
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="">CSS</label>
              <div
                className="progress mb-3"
                role="progressbar"
                aria-label="Example with label"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div class="progress-bar bg-dark" style={{ width: "90%" }}>
                  90%
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="">JavaScript</label>
              <div
                className="progress mb-3"
                role="progressbar"
                aria-label="Example with label"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div class="progress-bar bg-dark" style={{ width: "75%" }}>
                  70%
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="">Bootstrap</label>
              <div
                className="progress mb"
                role="progressbar"
                aria-label="Example with label"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div class="progress-bar bg-dark" style={{ width: "80%" }}>
                  80%
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="">React</label>
              <div
                className="progress"
                role="progressbar"
                aria-label="Example with label"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div class="progress-bar bg-dark" style={{ width: "70%" }}>
                  70%
                </div>
              </div>
            </div>
          </div> */}

          {/*  */}
        </div>
      </div>
      {/* Projec */}
      {/* <Project/> */}
      {/* <Skill/> */}
      <Jobs />
      <Contact />
    </>
  );
}

export default Home;
