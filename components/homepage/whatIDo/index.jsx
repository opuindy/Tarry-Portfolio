import { useEffect } from 'react';
import styles from './whatIDo.module.scss';
import { data } from '../../utilities/whatIDo';
import HereIsWhatIDo from "../Here's";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const WhatIDo = () => {
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
    <section className={styles.section} ref={ref}>
      <motion.h2
        className={styles.title}
        variants={titleVariant}
        initial='hidden'
        animate={animation}
        viewport={{ once: true, amount: 1 }}
      >
        Here is What I Do
      </motion.h2>
      {data.map((dataItem) => {
        return <HereIsWhatIDo dataItem={dataItem} key={dataItem.id} />;
      })}
    </section>
  );
};

export default WhatIDo;
