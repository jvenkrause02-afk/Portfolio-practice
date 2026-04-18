import '@/styles/animate.css';
import '@/styles/prism-vsc-dark-plus.css';
import '@/styles/star.css';
import '@/styles/tailwind.css';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ScrollToTop from '@/components/ScrollToTop';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { Metadata } from 'next';
import NextTopLoader from 'nextjs-toploader';
import AuthProvider from '../context/AuthContext';
import ToasterContext from '../context/ToastContext';

export const metadata: Metadata = {
  title: {
    default: 'Jven portfolio',
    template: '%s | Jven portfolio',
  },
  description:
    'Full-stack developer portfolio showcasing web development expertise',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
};

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={plusJakarta.className}>
      <body>
        {/* Blurred Background Layer */}
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'url(/images/bgcode.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(3px)',
            zIndex: -1,
          }}
        />
        <div className='isolate'>
          <NextTopLoader
            color='#3b82f6'
            crawlSpeed={300}
            showSpinner={false}
            shadow='none'
          />

          <AuthProvider>
            <Header />
            {children}
            <Footer />

            <ToasterContext />
          </AuthProvider>
        </div>

        <ScrollToTop />
      </body>
    </html>
  );
}
