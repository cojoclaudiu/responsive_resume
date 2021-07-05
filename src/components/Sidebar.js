import styles from '../styles/components/Sidebar.module.css';
import React from 'react';
import Contact from './Contact';
import { useWindowSize as width } from '../hooks/windowSize';

const Sidebar = () => {
  return (
    <div className={styles.sidebarBox}>
      <div className={styles.buttonBox}>
        <button className={styles.sidebarPrimaryButton} onClick={() => window.print()}>
          Downlaod .pdf
        </button>
      </div>
      <Contact />
      {<footer className={styles.footerSidebar}>Claudiu Cojocaru Resume &copy; 2021</footer> && width() < 940}
    </div>
  );
};

export default Sidebar;
