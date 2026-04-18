'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import jbImg from '../../picture/jb-Photoroom.png';

const Hero = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const jbRef = useRef<HTMLDivElement>(null);
  const [jbVisible, setJbVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    if (contentRef.current) observer.observe(contentRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setJbVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    if (jbRef.current) observer.observe(jbRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id='home'
      className='relative z-10 overflow-hidden pt-35 md:pt-40 xl:pt-45'
    >
      {/* <!-- Bottom Row: JB Image + Introduction --> */}
      <div className='mx-auto -mt-10 flex max-w-7xl flex-col items-center px-4 sm:px-8 md:flex-row md:items-end'>
        {/* JB Image - left, hidden on mobile */}
        <div
          ref={jbRef}
          className={`hidden shrink-0 transition-all duration-700 ease-out md:block ${jbVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}
          style={{
            maskImage:
              'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)',
            WebkitMaskImage:
              'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)',
          }}
        >
          <Image
            src={jbImg}
            alt='JB'
            width={500}
            height={500}
            className='h-auto w-full max-w-[400px] md:max-w-[500px]'
          />
        </div>

        {/* Introduction - centered in remaining space */}
        <div
          ref={contentRef}
          className='flex flex-1 flex-col items-center justify-center gap-8 px-4 md:gap-12'
        >
          <div
            className={`text-center transition-all duration-500 ease-out ${visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
            style={{ transitionDelay: '0ms' }}
          >
            <p className='text-lg font-medium text-white/70 sm:text-xl md:text-2xl'>
              Hi, I&apos;m
            </p>
            <h1 className='text-4xl font-extrabold text-white sm:text-5xl md:text-6xl'>
              Jven Butatil
            </h1>
          </div>

          <div
            className={`max-w-2xl text-center transition-all duration-500 ease-out ${visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
            style={{ transitionDelay: '200ms' }}
          >
            <p className='text-base leading-relaxed text-white/80 sm:text-lg md:text-xl'>
              A passionate developer with{' '}
              <span className='font-bold text-white'>
                3 professional certifications
              </span>{' '}
              in
              <span className='text-gradient font-semibold'> HTML</span>,
              <span className='text-gradient font-semibold'> Java</span>, and
              <span className='text-gradient font-semibold'> MySQL</span>.
              Building innovative solutions and turning ideas into reality.
            </p>
          </div>

          <div
            className={`flex flex-col gap-4 transition-all duration-500 ease-out sm:flex-row sm:gap-6 ${visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
            style={{ transitionDelay: '400ms' }}
          >
            <a
              href='#skills'
              className='hero-button-gradient rounded-lg px-6 py-3 text-center font-medium text-white transition-all duration-300 hover:opacity-80 sm:px-8 sm:py-3.5'
            >
              View Portfolio
            </a>
            <a
              href='#support'
              className='rounded-lg border-2 border-white/20 bg-white/5 px-6 py-3 text-center font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/10 sm:px-8 sm:py-3.5'
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
