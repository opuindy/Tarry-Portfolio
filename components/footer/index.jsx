import React from 'react';
import styles from './footer.module.scss';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      Copyright &copy; {year} Tarry Harcourt
    </footer>
  );
};

export default Footer;
