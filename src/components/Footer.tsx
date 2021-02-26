import React from 'react';
import Link from 'next/link';
import cx from 'clsx';

// Nav sample from: https://tailwindui.com/components/application-ui/navigation/navbars

const Footer: React.FC = () => {
  const LinkedText = ({ children, href }) => (
    <a className="text-sm hover:underline" href={href}>
      {children}
    </a>
  );

  const Divider = () => <span className="mx-2">-</span>;

  return (
    <div className="py-8 mt-32 bg-steel-300">
      <p className="font-bold text-center text-white mx-60">
        <LinkedText href="https://qa.misohost.com/tos/">利用規約</LinkedText>
        <Divider />
        <LinkedText href="https://qa.misohost.com/warning/">
          注意事項
        </LinkedText>
        <Divider />
        <LinkedText href="https://qa.misohost.com/law/">
          特定商取引法に基づく表記
        </LinkedText>
        <Divider />
        <LinkedText href="https://qa.misohost.com/privacy-policy/">
          個人情報保護方針
        </LinkedText>
      </p>
      <p className="font-bold text-center text-white mx-60">
        &copy; 2021 MeguHost
      </p>
    </div>
  );
};

export default Footer;
