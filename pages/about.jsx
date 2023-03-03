import React, { useState, useEffect, useRef } from 'react';
import AboutUs from '../components/AboutUs';
import WAVES from 'vanta/dist/vanta.waves.min';
import * as THREE from 'three';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import shunyaLogo from '../assets/logo_white.webp';
import Footer from '../components/Footer';
import { BiArrowBack } from 'react-icons/bi';
import Link from 'next/link';

const About = () => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        WAVES({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x939,
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <div>
      <div
        ref={vantaRef}
        className={`${styles.home__vanta} flex items-center justify-center flex-col`}
      >
        <button className='absolute top-3 left-3 text-white'>
          <Link href='/'>
            <BiArrowBack />
          </Link>
        </button>
        {/* Shunya Logo Here */}
        <Image
          src={shunyaLogo}
          alt='NA'
          height={340}
          width={300}
          className='object-contain mt-8'
        />
        {/* Some Text here */}
        <p className='p-[70px] font-mono text-center text-white text-[17px] lg:text-[30px] overflow-hidden object-contain'>
          Shunya is a unique club at PES University centered around mathematics
          and its diverse applications. It offers an opportunity to explore and
          engage with various domains of mathematics.
        </p>

        <p className='p-[70px] font-mono text-center text-white text-[15px] lg:text-[24px] overflow-hidden mb-[10px]'>
          Stick around to find out the masterminds behind such a miraculous
          club!
        </p>
      </div>
      <AboutUs />
      {/* <Footer/> */}
    </div>
  );
};

export default About;
