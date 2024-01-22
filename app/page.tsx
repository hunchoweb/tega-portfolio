import Image from "next/image";
import { FaMedium, FaLinkedin } from "react-icons/fa";

import styles from "../styles/home.module.scss";
import commonStyles from "../styles/common.module.scss";

import Header from "../components/header";
import IntroOverlay from "../components/intro-overlay";
import { projectsList } from "../utils/project-data";
import ProjectListing from "../components/project-listing";
import TegaOdje from "../images/Tega.jpeg"


export default function Homepage() {
  return (
    <div className={styles.homeContainer}>
      <IntroOverlay />
      <div id="afterAnimation">
        <Header logoLink="/" />
        <main>
          <section className={styles.hero}>
            <div className={styles.cta}>
              <h1 id="title" className={styles.title}>
                I create
                <span className={commonStyles.playful}> playful </span>{" "}
                experiences.
              </h1>
              <div id="portraitContainer" className={styles.portraitContainer}>
                <Image
                  src={TegaOdje}
                  alt="Portrait of Odje Tega"
                  className={styles.portrait}
                  priority
                />
              </div>
            </div>
            <p id="jobTitle" className={styles.jobTitle}>
              Tega Odje / Data Analyst
            </p>
          </section>
          <section
            id="blogPreviewContainer"
            className={styles.blogPreviewContainer}
          >
            <h2>About Me</h2>
            <p>
              In my role as an Entry Level Data Analyst, I am dedicated to advancing 
              in a position that encourages collaborative processes and leverages 
              business intelligence for effective decision-making. I am particularly 
              drawn to projects involving database creation and the formulation of 
              complex queries to extract valuable insights from diverse datasets. <br />
              <br /> My commitment to continuous learning is driven by a desire to enhance my 
              skills and stay at the forefront of the ever-evolving field of data analytics. 
              With a keen eye for detail and a proactive approach, I aim to ensure accuracy 
              and precision in every analytical endeavor.
            </p>
          </section>
          <section className={styles.projectContainer} id="projects">
            <div className={styles.projectTitleContainer}>
              <h2>My Projects</h2>
            </div>

            <div className={styles.projectListingsContainer}>
              {projectsList.map((project) => (
                <ProjectListing key={project.slug} project={project} />
              ))}
            </div>
          </section>
        </main>
        <footer>
          <h2>Connect with Me</h2>
          <ul id="footerLinks" className={styles.footerLinks}>
            <li>
              <a
                href="https://docs.google.com/document/d/1fZQrCyHd3f-tNPjFWbqDO8hIzaKKJ6MLiyDCortuFcI/"
                target="_blank"
                rel="noopener noreferrer"
                title="Download Tega's Resume"
              >
                Resume
              </a>
            </li>
            <li>
              <a
                href="http://medium.com/@odjetega"
                target="_blank"
                rel="noopener noreferrer"
                title="Go to Tega's Medium"
              >
                <FaMedium />
                <span className={commonStyles.hiddenText}>GitHub</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/alexander-grattan/"
                target="_blank"
                rel="noopener noreferrer"
                title="Connect with Alexander on LinkedIn"
              >
                <FaLinkedin />
                <span className={commonStyles.hiddenText}>LinkedIn</span>
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
}
