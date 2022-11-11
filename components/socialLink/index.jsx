import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { socialLinks } from '../utilities/utils';
import styles from './socialLink.module.scss';
import { motion } from 'framer-motion';

const SocialLink = () => {
  return (
    <div className={styles.socialContainer}>
      <ul className={styles.socialContainer__list}>
        {socialLinks.map((socialLink) => {
          const { link, id, image } = socialLink;
          return (
            <motion.div key={id} whileTap={{ scale: 0.8 }}>
              <Link href={link}>
                <a target='_blank' rel='noopener noreferrer'>
                  <Image
                    src={image}
                    width='100%'
                    height='100%'
                    alt='link logo'
                  />
                </a>
              </Link>
            </motion.div>
          );
        })}
      </ul>
    </div>
  );
};

export default SocialLink;
