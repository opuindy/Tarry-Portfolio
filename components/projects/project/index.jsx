import React, { useEffect, useState } from 'react';
import styles from './project.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import browser from '../../../public/images/browser.png';
import promocode from '../../../public/images/promocode.png';
import Tooltip from '../../homepage/tooltips';

const Project = ({
  projectTitle,
  about,
  technology,
  desktopImage,
  mobileImage,
  liveUrl,
  gitUrl,
  index,
}) => {
  const { ref, inView } = useInView();
  const animation = useAnimation();
  const [windowWidth, setWindowWidth] = useState(0);
  const handleSize = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };

  useEffect(() => {
    window.addEventListener('resize', handleSize);
    return () => {
      window.removeEventListener('resize', handleSize);
    };
  }, []);

  useEffect(() => {
    if (inView) {
      animation.start('visible');
    }
  }, [inView, animation]);

  const reverse = () => {
    if ((index + 1) % 2 === 0) {
      return false;
    }

    return true;
  };

  const image = windowWidth > 767 ? desktopImage : mobileImage;

  const imageVariant = reverse()
    ? {
        hidden: {
          x: '-40vw',
          opacity: 0,
        },
        visible: {
          x: 0,
          opacity: [0, 0.2, 0.4, 0.6, 0.8, 1],
          transition: {
            duration: 1,
          },
        },
      }
    : {
        hidden: {
          x: '40vw',
          opacity: 0,
        },
        visible: {
          x: 0,
          opacity: [0, 0.2, 0.4, 0.6, 0.8, 1],
          transition: {
            duration: 1,
          },
        },
      };

  const infoVariant = reverse()
    ? {
        hidden: {
          x: '40vw',
          opacity: 0,
        },
        visible: {
          x: 0,
          opacity: [0, 0.2, 0.4, 0.6, 0.8, 1],
          transition: {
            duration: 1,
            when: 'beforeChildren',
            staggerChildren: 0.4,
          },
        },
      }
    : {
        hidden: {
          x: '-40vw',
          opacity: 0,
        },
        visible: {
          x: 0,
          opacity: [0, 0.2, 0.4, 0.6, 0.8, 1],
          transition: {
            duration: 1,
            when: 'beforeChildren',
            staggerChildren: 0.4,
          },
        },
      };

  const infoChildrenVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        when: 'beforeChildren',
        staggerChildren: 0.6,
      },
    },
  };

  const childVariant = {
    hidden: {
      opacity: 0,
      x: '2vw',
    },

    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div
      className={reverse() ? 'generalLayout' : 'reverseGeneralLayout'}
      ref={ref}
    >
      <motion.div
        className={styles.imgContainer}
        variants={imageVariant}
        initial='hidden'
        animate={animation}
        // viewport={{ once: false, amount: 1 }}
      >
        <Image
          src={image}
          alt='projectImg'
          height='700%'
          width='700%'
          objectFit='cover'
          className={styles.img}
        />
      </motion.div>
      <motion.div
        className={styles.info}
        variants={infoVariant}
        initial='hidden'
        animate={animation}
        // viewport={{ once: false, amount: 1 }}
      >
        <h3 className={styles.info__text}>{projectTitle}</h3>
        <motion.div
          className={styles.info__innerContainer}
          variants={infoChildrenVariant}
        >
          <h4 className={styles.info__textTitle}>About</h4>
          <motion.p className={styles.info__paragraph} variants={childVariant}>
            {about}
          </motion.p>
        </motion.div>
        <motion.div
          className={styles.info__innerContainer}
          variants={infoChildrenVariant}
        >
          <h4 className={styles.info__textTitle}>Technologies</h4>
          <ul className={styles.info__technologyList}>
            {technology.map((tech, index) => {
              return (
                <motion.li
                  className={styles.info__technologyUsed}
                  key={index}
                  variants={childVariant}
                >
                  {tech}
                </motion.li>
              );
            })}
          </ul>
        </motion.div>

        <motion.div
          className={styles.info__urlContainer}
          variants={infoChildrenVariant}
        >
          <motion.div variants={childVariant} whileTap={{ scale: 0.8 }}>
            <Link href={liveUrl}>
              <a
                target='_blank'
                rel='noopener noreferrer'
                className={styles.info__link}
              >
                <div className={styles.info__imgBackground}>
                  <Tooltip
                    content='visit live page'
                    delay='200'
                    direction=' down'
                  >
                    <Image
                      src={browser}
                      width='100%'
                      height='100%'
                      alt='browser-logo'
                    />
                  </Tooltip>
                </div>
              </a>
            </Link>
          </motion.div>
          <motion.div variants={childVariant} whileTap={{ scale: 0.8 }}>
            <Link href={gitUrl}>
              <a
                target='_blank'
                rel='noopener noreferrer'
                className={styles.info__link}
              >
                <Tooltip content='visit code' delay='200' direction=' down'>
                  <div className={styles.info__imgBackground}>
                    <Image
                      src={promocode}
                      width='100%'
                      height='100%'
                      objectFit='contain'
                      className={styles.info__img}
                      alt='code logo'
                    />
                  </div>
                </Tooltip>
              </a>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Project;
