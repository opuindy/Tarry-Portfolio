import React, { useEffect } from 'react';
import styles from './contact.module.scss';
import Image from 'next/image';
import contactMeImg from '../../public/images/contactMeImg.png';
import Form from './form';
import SocialLink from '../socialLink';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
const Contact = () => {
  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start('visible');
    }
  }, [inView, animation]);

  const titleVariant = {
    hidden: {
      x: '-50vw',
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        dampness: 70,
        stiffness: 120,
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

  const formVariant = {
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

  const childrenVariant = {
    hidden: {
      opacity: 0,
      x: '2vw',
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        when: 'beforeChildren',
        staggerChildren: 0.6,
      },
    },
  };

  const socialVariant = {
    hidden: {
      opacity: 0,
      y: '50vh',
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        dampness: 70,
        stiffness: 120,
        when: 'beforeChildren',
        staggerChildren: 0.6,
      },
    },
  };

  return (
    <section className={styles.section} id='contact'>
      <motion.h2
        className={styles.title}
        variants={titleVariant}
        initial='hidden'
        animate={animation}
        viewport={{ once: true, amount: 1 }}
        ref={ref}
      >
        Contact Me
      </motion.h2>
      <div className='contactLayout'>
        <motion.div
          className={styles.formContainer}
          variants={formVariant}
          initial='hidden'
          animate={animation}
          viewport={{ once: true, amount: 1 }}
        >
          <motion.div
            className={styles.formContainer__linksContainer}
            variants={socialVariant}
          >
            <SocialLink />
          </motion.div>
          <div className={styles.formContainer__form}>
            <motion.h3
              className={styles.formContainer__title}
              variants={childrenVariant}
            >
              Get in touch &#128075;
            </motion.h3>
            <motion.p
              className={styles.formContainer__paragraph}
              variants={childrenVariant}
            >
              Thank you for taking the time to learn more about me and my skills
              as a web developer. If you have any questions or would like to
              discuss potential projects, please don't hesitate to reach out via
              -
              <span className={styles.formContainer__email}>
                opuindy@gmail.com
              </span>
              .<br />
              Feel free to connect with me on LinkedIn, twitter or GitHub.
            </motion.p>
            <motion.div variants={childrenVariant}>
              <Form />
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          className={styles.imgContainer}
          variants={bannerImgVariant}
          initial='hidden'
          animate={animation}
          viewport={{ once: true, amount: 1 }}
        >
          <motion.div variants={imgVariant}>
            <Image src={contactMeImg} alt='contact img' />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
