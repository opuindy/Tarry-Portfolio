import { useState, useEffect, useRef } from 'react';
import { links } from '../utilities/utils';
import Link from 'next/link';
import styles from './navBarStyles.module.scss';
import Image from 'next/image';
import myLogos from '../../public/images/myLogos.png';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [scrollHeight, setScrollHeight] = useState(0);
  const [fixedNav, setFixedNav] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);

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

  useEffect(() => {
    const headerHeight = linksRef.current.getBoundingClientRect().height;

    if (scrollHeight > headerHeight) {
      setFixedNav(true);
    } else {
      setFixedNav(false);
    }
  }, [scrollHeight]);

  const headerVariant = {
    hidden: {
      y: '-15vh',
    },
    visible: {
      y: 0,
      type: 'spring',
      stiffness: 100,
      mass: 0.2,
      damping: 4,
      when: 'beforeChildren',
      staggerChildren: 0.3,
    },
  };

  const logoVariant = {
    hidden: {
      x: '-50vw',
    },

    visible: {
      x: 0,
      transition: {
        delay: 0.5,
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  const navVariant = {
    hidden: {
      x: '100vw',
      opacity: 0,
    },

    visible: {
      x: 0,
      opacity: [0, 0.5, 1],
      transition: {
        delay: 0.5,
        type: 'spring',
        stiffness: 100,
        mass: 0.2,
        damping: 4,
        when: 'beforeChildren',
        staggerChildren: 0.3,
      },
    },
  };

  const navChildrenVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  const navBtnVariant = {
    hidden: {
      x: '100vw',
      opacity: 0,
    },

    visible: {
      x: 0,
      opacity: [0, 0.5, 1],
      transition: {
        delay: 0.3,
        type: 'spring',
        stiffness: 120,
      },
    },
  };

  return (
    <header
      className={fixedNav ? styles.fixedheader : styles.header}
      ref={headerRef}
    >
      <div className={styles.logoNavContainer}>
        <div className={styles.logoHamburgerContainer}>
          <motion.div
            className={styles.logocontainer}
            variants={logoVariant}
            initial='hidden'
            animate='visible'
          >
            <Image src={myLogos} className={styles.img} />
          </motion.div>
          <motion.div
            variants={navBtnVariant}
            initial='hidden'
            animate='visible'
            whileTap={{ scale: 0.8 }}
            className={styles.menuBtn}
            onClick={() => setShowLinks(!showLinks)}
          >
            <span
              className={
                showLinks
                  ? `${styles.menuBtn__burger} ${styles.open}`
                  : `${styles.menuBtn__burger}`
              }
            ></span>
          </motion.div>
        </div>

        <motion.nav
          variants={navVariant}
          initial='hidden'
          animate='visible'
          className={styles.nav}
          ref={linksContainerRef}
        >
          <ul
            variants={navVariant}
            initial='hidden'
            animate='visible'
            ref={linksRef}
          >
            {links.map((linkItem) => {
              const { id, link, name } = linkItem;
              return (
                <motion.div
                  key={id}
                  variants={navChildrenVariant}
                  whileHover={{
                    textShadow: '0px, 0px, 8px, hsl(0, 0%, 100%)',
                    color: `hsl(359, 100%, 68%)`,
                  }}
                  whileTap={{
                    scale: 0.8,
                  }}
                  className={styles.linkAnchor}
                >
                  <Link href={link}>{name}</Link>
                </motion.div>
              );
            })}
          </ul>
        </motion.nav>
      </div>
    </header>
  );
};

export default Navbar;
