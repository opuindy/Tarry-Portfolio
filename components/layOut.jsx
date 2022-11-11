import React from 'react';
import Footer from './footer';
import Navbar from './Navbar';

const LayOut = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className='mainLayOut'>{children}</main>
      <Footer />
    </>
  );
};

export default LayOut;
