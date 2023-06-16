import type { PropsWithChildren } from 'react';
import Footer from './components/footer';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <main className='h-screen w-screen bg-white text-[#3a3a3a] dark:bg-[#1a1a1a] dark:text-[#e5e5e5]'>
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
