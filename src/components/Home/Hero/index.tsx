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
      <div className='mx-auto -mt-10 flex max-w-7xl items-end px-8'>
        {/* JB Image - left */}
        <div
          ref={jbRef}
          className={`shrink-0 transition-all duration-700 ease-out ${jbVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}
          style={{
            maskImage:
              'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)',
            WebkitMaskImage:
              'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)',
          }}
        >
          <Image src={jbImg} alt='JB' width={500} height={500} />
        </div>

        {/* Introduction - centered in remaining space */}
        <div
          ref={contentRef}
          className='flex flex-1 flex-col items-center justify-center gap-12 px-4'
        >
          <div
            className={`text-center transition-all duration-500 ease-out ${visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
            style={{ transitionDelay: '0ms' }}
          >
            <p className='text-2xl font-medium text-white/70'>Hi, I&apos;m</p>
            <h1 className='text-6xl font-extrabold text-white'>Jven Butatil</h1>
          </div>

          <div
            className={`max-w-2xl text-center transition-all duration-500 ease-out ${visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
            style={{ transitionDelay: '200ms' }}
          >
            <p className='text-xl leading-relaxed text-white/80'>
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
            className={`flex gap-6 transition-all duration-500 ease-out ${visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
            style={{ transitionDelay: '400ms' }}
          >
            <a
              href='#skills'
              className='hero-button-gradient rounded-lg px-8 py-3.5 font-medium text-white transition-all duration-300 hover:opacity-80'
            >
              View Portfolio
            </a>
            <a
              href='#support'
              className='rounded-lg border-2 border-white/20 bg-white/5 px-8 py-3.5 font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/10'
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
