import styles from '../styles/components/Contact.module.css';
import React from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import { SiGmail } from 'react-icons/si';
import { CgPin } from 'react-icons/cg';

const Contact = () => {
  return (
    <div>
      <div className={`${styles.address} ${styles.gridRow}`}>
        <CgPin />
        <span>Chelmsford, Essex, UK</span>
      </div>

      <div className={`${styles.phoneNumber} ${styles.gridRow}`}>
        <FiPhoneCall />
        <span>+44 07425 872 302</span>
      </div>

      <div className={`${styles.email} ${styles.gridRow}`}>
        <SiGmail />
        <span>cojoclaudiu@gmail.com</span>
      </div>
    </div>
  );
};

export default Contact;
