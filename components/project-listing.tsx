import styles from "../styles/project-listing.module.scss";
import commonStyles from "../styles/common.module.scss";

import { ProjectType } from "../utils/project-data";

type ProjectListingProps = {
  project: ProjectType;
};

export default function ProjectListing({ project }: ProjectListingProps) {
  const { slug, image, mobileImage, name, description, code, tools } =
    project;

  return (
    <div className={`project ${styles.projectListing}`} id={slug}>
      <div className={styles.projectItemContainer}>
        <a
          href={code}
          target="_blank"
          rel="noopener noreferrer"
        >
          <picture>
            {mobileImage && (
              <source srcSet={mobileImage.src} media="(max-width:967px)" />
            )}
            <img src={image.src} alt={name} className={styles.projectImage} />
          </picture>
        </a>
        <div id="projectInfo" className={styles.projectInfo}>
          <a
            href={code}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={commonStyles.playfulHover}>{name}</h2>
          </a>
          {description.split("\n").map((str, index) => (
            <p key={index}>{str}</p>
          ))}
          <h3>Tools used:</h3>
          <ul className={styles.toolsList}>
            {tools.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <div className={styles.projectBtns}>
            {code && (
              <a
                href={code}
                title={`View Code for ${name}`}
                className={styles.projectBtn}
              >
                View Medium
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
