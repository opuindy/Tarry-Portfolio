import React from 'react';
import { useRouter } from 'next/router';
import styles from './contactMe.module.scss';
import { motion } from 'framer-motion';

const ContactMe = () => {
  const router = useRouter();
  const handleNavigate = () => {
    router.push('#contact');
  };

  return (
    <>
      <motion.button
        className={styles.button}
        type='button'
        onClick={handleNavigate}
      >
        Contact Me
      </motion.button>
    </>
  );
};

export default ContactMe;
