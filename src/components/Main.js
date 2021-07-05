import styles from '../styles/components/Main.module.css';
import React from 'react';
import Header from './Header';
import Content from './Content';

const Main = ({ children }) => {
  return (
    <div className={styles.mainGrid}>
      <Header />
      {children}
      <Content />
    </div>
  );
};

export default Main;
