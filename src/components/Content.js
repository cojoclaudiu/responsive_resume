import styles from '../styles/components/Content.module.css';
import React from 'react';
import { HiOutlineExternalLink } from 'react-icons/hi';



const aboutMe = "My name is Claudiu, and I'm a self-taught developer. I'm passionate about the web and here I can include design, branding, UI/UX and marketing. My first programming language is JavaScript and in addition I'm working with React.";

const Content = () => {
  return (
    <>
      
      <article className={styles.contentItem}>
        <h2 className={styles.categoryHeading}>About Me</h2>
        {aboutMe}
      </article>

      <article className={styles.contentItem}>
        <h2 className={styles.categoryHeading}>Languages and Technologies</h2>
        <div className={styles.item}>
          <span className={styles.title}>Languages:</span> JavaScript, TypeScript, HTML, CSS, SQL
        </div>
        <div className={styles.item}>
          <span className={styles.title}>Technologies:</span> React, Sass, PugJs, BEM, CSS Modules, Bootstrap, Git, Github, Wordpress
        </div>
        <div className={styles.item}>
          <span className={styles.title}>Software:</span> Visual Studio Code, Adobe Photoshop, Adobe Illustrator, Adobe Xd
        </div>
        <div className={styles.item}>
          <span className={styles.title}>Operating System:</span> macOS, Windows, Linux
        </div>
      </article>

      <article className={styles.contentItem}>
        <h2 className={styles.categoryHeading}>Work Experience and Portfolio</h2>
        <div className={styles.gridTbl}>
          <div className={styles.gridCol1}>Freelancer </div>
          <div className={styles.gridCol2}>
            <div>
              <span className={styles.title}>Front-End Developer</span>
              <em className={styles.yearTo}>2020-present</em>
            </div>

            <div>
              <span className={styles.title}>Web/Logo/Graphic Designer</span>

              <em className={styles.yearTo}>2011-present</em>
            </div>
            <div>
              <span className={styles.title}>Web developer</span>
              <em className={styles.yearTo}>2011-present</em>
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <span className={styles.title}>
            Twitter Clone UI/UX -{' '}
            <a className={styles.externalLink} href="https://thirsty-morse-cc2621.netlify.app/" target="_blank" rel="noreferrer">
              Netlify
              <HiOutlineExternalLink />
            </a>{' '}
            |{' '}
            <a className={styles.externalLink} href="https://github.com/cojoclaudiu/twitter-clone-practice" target="_blank" rel="noreferrer">
              Github
              <HiOutlineExternalLink />
            </a>
          </span>
          <p>Techologies used: React, CSS (Flex, Grid, Transitions, Media Queries)</p>
        </div>
      </article>
    </>
  );
};

export default Content;
