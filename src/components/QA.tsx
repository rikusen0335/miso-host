// import Footer from '@/components/Footer';
import clsx from 'clsx';
import React from 'react';
import { FadeInUp } from './FadeInUp';

type QAProps = {
  question: string;
  answer: string;
  className?: string;
};

/* eslint-disable react/no-array-index-key */
const QA: React.FC<QAProps> = ({ question, answer, className }) => {
  const addLineBreaks = (str: string) =>
    str.split(`\n`).map((text: string, index) => (
      <React.Fragment key={`${text}-${index}`}>
        {text}
        <br />
      </React.Fragment>
    ));

  return (
    <div
      className={clsx(
        `p-4 px-12 pb-6 m-2 flex flex-col items-center`,
        className,
      )}
    >
      <h2 className="text-lg font-bold text-gray-800">Q. {question}</h2>
      <p className="font-normal text-center text-gray-600 whitespace-pre-wrap text-md">
        A. {addLineBreaks(answer)}
      </p>
    </div>
  );
};

export default QA;
