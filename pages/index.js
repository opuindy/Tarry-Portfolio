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
        <link rel='manifest' href='%PUBLIC_URL%/manifest.json' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,700;0,800;1,300&display=swap'
          rel='stylesheet'
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
