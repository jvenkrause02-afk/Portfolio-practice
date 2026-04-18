'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import htmlImg from '../../picture/html.png';
import javaImg from '../../picture/java.png';
import mysqlImg from '../../picture/mysql.png';

const SkillsShowcase = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const skills = [
    {
      name: 'HTML',
      image: htmlImg,
      description: 'Building responsive and semantic web structures',
      color: 'from-blue-500/20 to-cyan-500/20',
      delay: '0ms',
    },
    {
      name: 'Java',
      image: javaImg,
      description: 'Developing robust backend applications',
      color: 'from-blue-500/20 to-cyan-500/20',
      delay: '200ms',
    },
    {
      name: 'MySQL',
      image: mysqlImg,
      description: 'Database design and optimization',
      color: 'from-blue-500/20 to-cyan-500/20',
      delay: '400ms',
    },
  ];

  return (
    <section
      id='skills'
      ref={sectionRef}
      className='relative z-20 overflow-hidden pt-22.5 pb-22.5 lg:pt-27.5 lg:pb-27.5'
    >
      {/* Background Elements */}
      <div className='pointer-events-none absolute inset-0 -z-10 overflow-hidden'>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <div className='h-[600px] w-[600px] rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 blur-3xl'></div>
        </div>
      </div>

      <div className='mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0'>
        {/* Section Header */}
        <div className='mb-17.5 text-center'>
          <span className='hero-subtitle-gradient relative mb-4 inline-flex items-center gap-2 rounded-full px-4.5 py-2 text-sm font-medium'>
            <span className='hero-subtitle-text'>My Tech Stack</span>
          </span>
          <h2 className='xl:text-heading-2 mb-4 text-3xl font-extrabold text-white sm:text-4xl'>
            Skills & Technologies
          </h2>
          <p className='text-dark-3 mx-auto max-w-[714px] font-medium'>
            Leveraging modern technologies to build powerful and scalable
            solutions
          </p>
        </div>

        {/* Skills Grid */}
        <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${skill.color} p-8 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:border-white/20 ${
                visible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-8 opacity-0'
              }`}
              style={{
                transitionDelay: visible ? skill.delay : '0ms',
              }}
            >
              {/* Glow Effect on Hover */}
              <div className='absolute inset-0 -z-1 opacity-0 transition-opacity duration-500 group-hover:opacity-100'>
                <div className='absolute inset-0 bg-gradient-to-br from-white/5 to-transparent'></div>
              </div>

              {/* Content */}
              <div className='relative z-10 flex flex-col items-center text-center'>
                <div className='mb-6 transition-transform duration-500 group-hover:scale-110'>
                  <Image
                    src={skill.image}
                    alt={skill.name}
                    width={120}
                    height={120}
                    className='h-30 w-30 object-contain'
                  />
                </div>
                <h3 className='mb-3 text-2xl font-bold text-white'>
                  {skill.name}
                </h3>
                <p className='text-dark-3 text-sm'>{skill.description}</p>
              </div>

              {/* Decorative Corner */}
              <div className='absolute -top-10 -right-10 h-40 w-40 rounded-full bg-white/5 blur-2xl transition-all duration-500 group-hover:bg-white/10'></div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className='mt-15 text-center'>
          <p className='text-dark-3 text-sm font-medium'>
            Continuously learning and exploring new technologies to stay at the
            forefront of development
          </p>
        </div>
      </div>
    </section>
  );
};

export default SkillsShowcase;
