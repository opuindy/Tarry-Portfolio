import React, { useEffect, useState } from 'react';
import styles from './backToTop.module.scss';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Image from 'next/image';
import arrow2 from '../../public/images/arrow2.png';

const BackToTop = () => {
  const [scrollHeight, setScrollHeight] = useState(0);

  const router = useRouter();
  const handleNavigate = () => {
    router.push('/');
  };

  const handleScrollHeight = () => {
    const height = window.pageYOffset;
    setScrollHeight(height);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScrollHeight);
    return () => {
      window.removeEventListener('scroll', handleScrollHeight);
    };
  }, []);

  const backToTop = {
    hidden: {
      scale: 0.9,
    },
    visible: {
      scale: 1.05,
      transition: {
        duration: 1,
        yoyo: Infinity,
      },
    },
  };

  return (
    <motion.section
      className={scrollHeight > 900 ? styles.container : styles.vanish}
      variants={backToTop}
      initial='hidden'
      animate='visible'
      onClick={handleNavigate}
    >
      <Image src={arrow2} alt='arrow logo' />
    </motion.section>
  );
};

export default BackToTop;
