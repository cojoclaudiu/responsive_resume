import styles from './styles/components/App.module.css';

import React from 'react';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import { useWindowSize as width } from './hooks/windowSize';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className={styles.mainWrapper}>
      {width() < 940 ? (
        <>
          <Main>
            <Sidebar />
          </Main>
          <Footer />
        </>
      ) : (
        <>
          <Main />
          <Sidebar />
        </>
      )}
    </div>
  );
};

export default App;
