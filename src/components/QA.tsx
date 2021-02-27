// import Footer from '@/components/Footer';
import clsx from 'clsx';
import React from 'react';
import ReactMarkdown from 'react-markdown';

type QAProps = {
  question: string;
  answer: string;
  className?: string;
};

const QA: React.FC<QAProps> = ({ question, answer, className }) => (
  <div
    className={clsx(`p-4 px-12 pb-6 m-2 flex flex-col items-center`, className)}
  >
    <h2 className="text-lg font-bold text-gray-800">Q. {question}</h2>
    <p className="font-normal text-center text-gray-600 whitespace-pre-wrap text-md">
      <ReactMarkdown className="markdown">{`A. ${answer}`}</ReactMarkdown>
    </p>
  </div>
);

export default QA;
