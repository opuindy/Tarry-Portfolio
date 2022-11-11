import React from 'react';
import styles from './socialIcon.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { socialLinks } from '../utilities/utils';
import { motion } from 'framer-motion';

const SocialIcons = () => {
  const listVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        when: 'beforeChildren',
        staggerChildren: '0.4',
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
      },
    },
  };

  return (
    <div className={styles.iconContainer}>
      <motion.ul
        className={styles.socialLinkContainer}
        variants={listVariant}
        initial='hidden'
        animate='visible'
      >
        {socialLinks.map((socialLink) => {
          const { id, link, image } = socialLink;
          return (
            <motion.div
              key={id}
              className={styles.linkdiv}
              variants={childrenVariant}
              whileTap={{ scale: 0.8 }}
            >
              <Link href={link} className={styles.anchor}>
                <a target='_blank' rel='noopener noreferrer'>
                  <Image src={image} alt='link' height='100%' width='100%' />
                </a>
              </Link>
            </motion.div>
          );
        })}
      </motion.ul>
    </div>
  );
};

export default SocialIcons;
