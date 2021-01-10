import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';

const Layout: React.FC = ({ children }) => (
  <div className="flex flex-col min-h-screen bg-gray-900;">
    <Header />

    <div className="flex items-stretch flex-grow w-full h-full text-gray-400">
      {children}
    </div>

    <Footer />
  </div>
);

export default Layout;
