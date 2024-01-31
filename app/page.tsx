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
                I derive insight and trends from
                <span className={commonStyles.playful}> raw data </span>{" "}
                to inform decision making.
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
            <br />
            <br />
            <p>
              The power of a Data Analyst lies within understanding the basic concepts of manipulating 
              data and using the appropriate tools to answer well structured and measurable business problems. 
              My name is Tega Odje, I love working on projects that facilitate collaborative processes. 
              Welcome to my portfolio.
            </p>
            <a 
              href="mailto:odjetega@gmail.com"
            >
              <h3>
                Contact Me
              </h3>
            </a>
          </section>

          <section
            id="blogPreviewContainer"
            className={styles.blogPreviewContainer}
          >
            <h2>Soft Skills</h2>
            <ul>
              <li>Empathy</li>
              <li>EPIC commission frameworks </li>
              <li>SMART question frame works</li>
            </ul>
            <ul>
              <li>Problem solving and critical thinking </li>
              <li>Collaboration</li>
            </ul>
          </section>
          <br />

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
                href="mailto:odjetega@gmail.com"
              >
                Contact Me
              </a>
            </li>
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
