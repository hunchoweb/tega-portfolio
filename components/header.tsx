import Link from "next/link";
import { FaLinkedin, FaMedium } from "react-icons/fa";

import styles from "../styles/header.module.scss";
import commonStyles from "../styles/common.module.scss";

type HeaderProps = {
  logoLink: string;
};

export default function Header({ logoLink }: HeaderProps) {
  return (
    <header>
      <nav className={styles.nav}>
        <div className={styles.spaceBetween}>
          <Link href={logoLink} className={styles.logo}>
            OD
          </Link>
          <ul className={styles.navList}>
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
                <span className={commonStyles.hiddenText}>Medium</span>
              </a>
            </li>
            <li>
              <a
                href="http://www.linkedin.com/in/tega-odje-22882819b"
                title="Connect with Tega on LinkedIn"
              >
                <FaLinkedin />
                <span className={commonStyles.hiddenText}>LinkedIn</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
