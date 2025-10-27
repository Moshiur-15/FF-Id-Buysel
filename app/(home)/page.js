'use client'
import React, { useEffect } from 'react';
import Home from '../components/Home';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Main = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
    AOS.refresh();
  }, []);

  return (
    <div>
      <Home />
    </div>
  );
};

export default Main;
