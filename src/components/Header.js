import React from 'react';
import { ImLinkedin, ImGithub } from 'react-icons/im';

import styles from '../styles/components/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.avatarContainer}>
        <img className={styles.avatarImg} src="https://media-exp3.licdn.com/dms/image/C5603AQG9HvEWY4CPsQ/profile-displayphoto-shrink_800_800/0/1601299436279?e=1629936000&v=beta&t=f0neZbF5rtzx5cgYePXdmoulw_Yk-vpIEOWusxrmATo" alt="avatar user" />
      </div>
      <div className={styles.headerText}>
        <h1>Claudiu Cojocaru</h1>
        <h3>Front-End Developer</h3>
        <div className={styles.profileTbl}>
          <ImGithub />
          Github
        </div>
        <div className={styles.profileTbl}>
          <ImLinkedin />
          LinkedIn
        </div>
        <div className={styles.statusBox}>
          Status:
          <span className={styles.availableStatus}>&#11044;</span>
          Available
        </div>
      </div>
    </header>
  );
};

export default Header;
