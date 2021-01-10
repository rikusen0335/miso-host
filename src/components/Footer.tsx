import React from 'react';
import Link from 'next/link';
import cx from 'clsx';

// Nav sample from: https://tailwindui.com/components/application-ui/navigation/navbars

const Footer: React.FC = () => (
  <div className="py-8 mt-32 bg-steel-300">
    <p className="font-bold text-right text-white mx-60">
      &copy; 2021 MeguHost
    </p>
  </div>
);

export default Footer;
