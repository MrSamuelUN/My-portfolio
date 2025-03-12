import React from "react";
import filterImage from "../assets/filter-project.png";
import Ecommerce from "../assets/Ecommerce.png";
import latestMovie from "../assets/latest-movie.png";
import { motion } from "framer-motion";

function Jobs() {
  return (
    <>
      <motion.div className="mb-5" id="projects">
        <motion.div className="job">
          <h3 style={{ textAlign: "center", textTransform: "uppercase" }}>
            Projects
          </h3>
          <hr />
          <motion.div className="job-container mt-5 d-flex flex-lg-nowrap gap-3">
            <motion.div
              whileHover={{ scale: 1.0, y: -5 }} // Scale up & move slightly up
              transition={{ type: "spring", stiffness: 80 }}
              className="project-card rounded-3"
            >
              <img src={Ecommerce} alt="" />
              <div>
                <h5>Category Search</h5>
                <p className="card-text p-3">
                  A responsive e-commerce web app built with HTML, CSS, and
                  JavaScript, featuring product categorization and a search
                  filter by category for easy navigation. Designed with best
                  practices, it ensures clean code, smooth performance, and a
                  seamless shopping experience across all devices.
                </p>
                <a
                  href="https://e-commerce-livid-rho.vercel.app/"
                  target="blank"
                  className="btn btn-dark"
                >
                  Visit site
                </a>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.0, y: -5 }} // Scale up & move slightly up
              transition={{ type: "spring", stiffness: 80 }}
              className="project-card rounded-3"
            >
              <img src={filterImage} alt="" />
              <div>
                <h5>Responsive Filter Search App</h5>
                <p className="card-text">
                  A modern, responsive web app built with HTML, CSS, and
                  JavaScript, featuring a real-time search filter that allows
                  users to search items by keyword or category. Designed with
                  best practices, it ensures clean code, smooth performance, and
                  a seamless user experience across all devices.
                </p>
                <a
                  href="https://javascript-filter-and-search-feature.vercel.app/"
                  target="blank"
                  className="btn btn-dark"
                >
                  Visit site
                </a>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.0, y: -5 }} // Scale up & move slightly up
              transition={{ type: "spring", stiffness: 80 }}
              className="project-card rounded-3"
            >
              <img src={latestMovie} alt="" />
              <div>
                <h5>Movie Explorer</h5>
                <p className="card-text">
                  A responsive web app built with HTML, CSS, and JavaScript,
                  fetching real-time movie data from The Movie Database (TMDb)
                  API. It displays the latest and trending movies, along with
                  details like genre and release date. Designed with best
                  practices, it ensures clean code, smooth performance, and a
                  seamless user experience across all devices.
                </p>
                <a
                  href="https://latestmovieproject.vercel.app/"
                  target="blank"
                  className="btn btn-dark"
                >
                  Visit site
                </a>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Jobs;
