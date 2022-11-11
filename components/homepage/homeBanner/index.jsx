import React from 'react';
import styles from './homeBanner.module.scss';
import Image from 'next/image';
import bannerPic from '../../../public/images/bannerPic.png';
import Typewriter from 'typewriter-effect';
import SocialIcons from '../../socialIcons';
import ContactMe from '../../contactMeButton';
import { motion } from 'framer-motion';

const HomeBanner = () => {
  const buttonVariants = {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: [-1, 0, 0.4, 0.8, 1],

      transition: {
        delay: 3,

        duration: 3,
      },
    },
    hover: {
      x: 13,
      cursor: 'pointer',
      transition: {
        yoyo: Infinity,
      },
    },
    tap: {
      scale: 0.8,
    },
  };

  const infoVariant = {
    hidden: {
      x: '-50vw',
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: [0.5, 1],
      transition: {
        duration: 2,
        when: 'beforeChildren',
        staggerChildren: 0.6,
      },
    },
  };

  const infoChildrenVariants = {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: [0, 0.4, 0.8, 1],
      transition: {
        duration: 2,
      },
    },
  };

  const bannerImgVariant = {
    hidden: {
      x: '100vw',
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: [0.5, 1],
      transition: {
        duration: 2,
        when: 'beforeChildren',
        staggerChildren: 0.6,
      },
    },
  };

  const imgVariant = {
    hidden: {
      scale: 0.9,
      rotate: 2,
    },
    visible: {
      scale: [1.1, 1],
      rotate: -2,
      transition: {
        delay: 5,
        duration: 2,
        yoyo: Infinity,
      },
    },
  };

  return (
    <section className='generalLayout'>
      <motion.div
        className={styles.info}
        variants={infoVariant}
        initial='hidden'
        animate='visible'
      >
        <h1 className={styles.info__greetingText}>
          Hi <span className={styles.info__imoji}>&#128075;</span>,
        </h1>

        <motion.div
          className={styles.info__paragraph}
          variants={infoChildrenVariants}
        >
          <span>I</span>
          <span className={styles.info__span}>
            <Typewriter
              options={{
                strings: [
                  `am Tarry Harcourt,`,
                  `am a Frontend Developer.`,
                  `am a problem solver.`,
                  `enjoy bringing product ideas to life.`,
                ],
                autoStart: true,
                loop: true,
                typespeed: '1',
              }}
            />
          </span>
        </motion.div>
        <motion.p
          className={styles.info__paragraph2}
          variants={infoChildrenVariants}
        >
          I am specialized in building exceptional digital experiences and
          currently focused on building responsive front-end web applications.
        </motion.p>
        <motion.div
          className={styles.info__iconContainer}
          variants={infoChildrenVariants}
        >
          <SocialIcons />
        </motion.div>
        <motion.div
          className={styles.info__buttonContainer}
          variants={buttonVariants}
          initial='hidden'
          animate='visible'
          whileHover='hover'
          whileTap='tap'
        >
          <ContactMe />
        </motion.div>
      </motion.div>
      <motion.div
        className={styles.bannerImg}
        variants={bannerImgVariant}
        initial='hidden'
        animate='visible'
      >
        <motion.div variants={imgVariant}>
          <Image
            src={bannerPic}
            alt='bannerPic'
            className={styles.img}
            height='700%'
            width='700%'
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HomeBanner;
