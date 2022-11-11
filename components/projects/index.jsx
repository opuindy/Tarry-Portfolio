import React, { useEffect } from 'react';
import styles from './projects.module.scss';
import Project from './project';
import { projectWorks } from '../utilities/works';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start('visible');
    }
  }, [animation, inView]);

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

  return (
    <section className={styles.section} id='projects'>
      <motion.h2
        className={styles.title}
        variants={titleVariant}
        initial='hidden'
        animate={animation}
        viewport={{ once: true, amount: 1 }}
        ref={ref}
      >
        Projects
      </motion.h2>

      {projectWorks.map((project, index) => {
        return <Project {...project} key={project.id} index={index} />;
      })}
    </section>
  );
};

export default Projects;
