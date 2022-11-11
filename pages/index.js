import Head from 'next/head';
import Image from 'next/image';
import BackToTop from '../components/backToTop';
import Contact from '../components/contact';
import HomeBanner from '../components/homepage/homeBanner';
import WhatIDo from '../components/homepage/whatIDo';
import Projects from '../components/projects';
import styles from '../styles/pages/homePage/Home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Tarry Portfolio</title>
        <meta
          name='viewport'
          content='initial-scale=1.0, width=device-width'
          key='title'
        />
      </Head>
      <BackToTop />
      <HomeBanner />
      <WhatIDo />
      <Projects />
      <Contact />
    </>
  );
}
