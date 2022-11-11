import React, { useEffect } from 'react';
import Image from 'next/image';
import styles from './hereIsWhatIDo.module.scss';
import Tooltip from '../tooltips';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const HereIsWhatIDo = ({ dataItem }) => {
  const { id, image, techIcons, title, textInfo } = dataItem;
  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start('visible');
    }
  }, [animation, inView]);

  const hereImgVariant = {
    hidden: {
      x: '-50vw',
    },
    visible: {
      x: 0,
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

  const infoVariant = {
    hidden: {
      x: '50vw',
    },
    visible: {
      x: 0,
      transition: {
        duration: 2,
        when: 'beforeChildren',
        staggerChildren: 0.6,
      },
    },
  };

  const imgContainerVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.3,
      },
    },
  };

  const techCardVariants = {
    hidden: {
      opacity: 0,
      x: -5,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },
  };

  const skillTextVariant = {
    hidden: {
      y: 30,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <>
      <div className='generalLayout' key={id} ref={ref}>
        <motion.div
          className={styles.imgContainer}
          variants={hereImgVariant}
          initial='hidden'
          animate={animation}
        >
          <motion.div variants={imgVariant}>
            <Image src={image} alt='what_I_Do_Pic' height='500%' width='500%' />
          </motion.div>
        </motion.div>
        <motion.div
          className={styles.info}
          variants={infoVariant}
          initial={'hidden'}
          animate={animation}
          // whileInView={'visible'}
          viewport={{ once: true, amount: 1 }}
        >
          <h3 className={styles.info__text}>{title}</h3>
          <motion.div
            className={styles.info__imageContainer}
            variants={imgContainerVariant}
          >
            {techIcons.map((techImage, index) => {
              const { img, text } = techImage;
              return (
                <motion.div
                  className={styles.img}
                  key={index}
                  variants={techCardVariants}
                >
                  <Tooltip content={text} delay='200' direction=' down'>
                    <Image
                      src={img}
                      alt={text}
                      height='100%'
                      width='100%'
                      className={styles.image}
                    />
                  </Tooltip>
                </motion.div>
              );
            })}
          </motion.div>
          <div className={styles.info__skillTextContainer}>
            {textInfo &&
              textInfo.map((textmsg, index) => {
                const { text } = textmsg;
                return (
                  <motion.p key={index} variants={skillTextVariant}>
                    &#9889; {text}
                  </motion.p>
                );
              })}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default HereIsWhatIDo;
