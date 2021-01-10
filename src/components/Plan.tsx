// import Footer from '@/components/Footer';
import clsx from 'clsx';
import React from 'react';

type PlanProps = {
  planName: string;
  hourPrice: string;
  monthPrice: string;

  memory: string;
  cpu: string;
  storage: string;

  className?: string;
};

/* eslint-disable react/no-array-index-key */
const Plan: React.FC<PlanProps> = ({
  planName,
  hourPrice,
  monthPrice,
  memory,
  cpu,
  storage,
  className,
}) => {
  const addLineBreaks = (str: string) =>
    str.split(`\n`).map((text: string, index) => (
      <React.Fragment key={`${text}-${index}`}>
        {text}
        <br />
      </React.Fragment>
    ));

  return (
    <div className="w-full p-4 md:w-1/2 lg:w-1/4">
      <div className="box-border relative flex flex-col border rounded-sm shadow-lg border-steel-400">
        <div className="w-full px-4 py-6">
          <h3 className="mx-auto mb-4 text-base font-semibold text-center underline text-steel-400">
            {planName}
          </h3>
          <p className="text-3xl font-bold text-center text-steel-400">
            {hourPrice}円<span className="text-xl"> / 時間</span>
          </p>
          <p className="text-3xl font-bold text-center text-steel-400">
            {monthPrice}円<span className="text-xl"> / 月</span>
          </p>
        </div>

        <div className="flex flex-col items-center justify-center w-full h-full bg-steel-400">
          <div className="flex justify-center w-full h-full py-2 space-x-2 bg-steel-400">
            <p className="text-xl text-white">CPU</p>
            <p className="text-xl text-white">{cpu}コア</p>
          </div>
          <div className="flex justify-center w-full h-full py-2 space-x-2 bg-steel-300">
            <p className="text-xl text-white">RAM</p>
            <p className="text-xl text-white">{memory}GB</p>
          </div>
          <div className="flex justify-center w-full h-full py-2 space-x-2 bg-steel-400">
            <p className="text-xl text-white">SSD</p>
            <p className="text-xl text-white">{storage}GB</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
