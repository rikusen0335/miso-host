// import Footer from '@/components/Footer';
import clsx from 'clsx';
import React from 'react';
import { FadeInUp } from './FadeInUp';

type CardProps = {
  iconUrl: string;
  title: string;
  description: string;
  delay?: number;
  className?: string;
};

/* eslint-disable react/no-array-index-key */
const Card: React.FC<CardProps> = ({
  className,
  title,
  description,
  iconUrl,
  delay,
}) => {
  const addLineBreaks = (str: string) =>
    str.split(`\n`).map((text: string, index) => (
      <React.Fragment key={`${text}-${index}`}>
        {text}
        <br />
      </React.Fragment>
    ));

  return (
    <FadeInUp
      delay={delay}
      className={clsx(
        `p-4 px-12 pb-6 m-2 rounded shadow-lg flex flex-col items-center border`,
        className,
      )}
    >
      <img className="w-16 h-16 mt-2 mb-4" src={iconUrl} alt="アイコン" />
      <h2 className="mb-1 text-xl font-bold text-gray-800">{title}</h2>
      <p className="font-normal text-center text-gray-600 whitespace-pre-wrap text-md">
        {addLineBreaks(description)}
      </p>
    </FadeInUp>
  );
};

export default Card;
