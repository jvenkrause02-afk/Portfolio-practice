import BlogSection from '@/components/Blog';
import Hero from '@/components/Home/Hero';
import Newsletter from '@/components/Newsletter';
import Support from '@/components/Support';
import SkillsShowcase from '@/components/Portfolio/SkillsShowcase';

import { Metadata } from 'next';
import { integrations } from '../../../integrations.config';

export const metadata: Metadata = {
  title: 'Jven portfolio',
  description:
    'Full-stack developer portfolio showcasing web development expertise',
  icons: {
    icon: '/images/logo/logo.png',
  },
  // other metadata
};

export default function Home() {
  return (
    <>
      <Hero />
      <SkillsShowcase />
      <Support />
      {integrations.isSanityEnabled && <BlogSection />}
      <Newsletter />
    </>
  );
}
