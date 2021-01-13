import React from 'react';
import Layout from '@/components/Layout';
import Card from '@/components/Card';
import { GetStaticProps, NextPage } from 'next';
import Plan from '@/components/Plan';
import { FadeInUp } from '@/components/FadeInUp';
import { fetchEntries, QAType } from '@/api';
import QA from '@/components/QA';
import ZoomableImage from '@/components/ZoomableImage';

type HomePageProps = {
  qas: [];
};

/* eslint-disable react/no-array-index-key */
const HomePage: NextPage<HomePageProps> = ({ qas }) => {
  console.log(qas);
  return (
    <Layout>
      <div className="flex flex-col items-center w-full">
        <section className="container mx-auto mt-24 mb-16">
          <h1 className="mb-16 text-5xl font-bold text-center text-gray-900">
            ゲームサーバーをホストしよう
          </h1>

          {/* 特徴説明 */}
          <div className="grid grid-cols-4 gap-4 mb-16">
            <Card
              iconUrl="https://img.icons8.com/ultraviolet/80/000000/mobile-payment.png"
              className="col-span-4 lg:col-auto"
              title="コンビニ決済対応"
              description={`コンビニ決済で、ラクラク決済。\nもちろんクレジットカードも\n使用可能！`}
            />
            <Card
              delay={50}
              iconUrl="https://img.icons8.com/ultraviolet/80/000000/lightning-bolt.png"
              className="col-span-4 lg:col-auto"
              title="契約から起動まで約１分"
              description="素早く環境を試せます"
            />
            <Card
              delay={100}
              iconUrl="https://img.icons8.com/ultraviolet/80/000000/money--v1.png"
              className="col-span-4 lg:col-auto"
              title="１時間２円〜使える"
              description="ご利用プランに合わせた柔軟な価格設定で使えます"
            />
            <Card
              delay={150}
              iconUrl="https://img.icons8.com/ultraviolet/80/000000/ssd.png"
              className="col-span-4 lg:col-auto"
              title="SSD搭載"
              description={`素早い読み書き速度で、\nストレスのないホスティング`}
            />
          </div>
        </section>

        {/* 画像カラム */}
        <section className="mx-auto">
          <div className="flex flex-col px-2 py-8 space-y-16 bg-gray-100 lg:py-32 lg:space-y-32 lg:px-96">
            <FadeInUp delay={100} className="grid grid-cols-5 gap-12">
              <div className="col-span-5 my-1 lg:my-6 lg:col-span-2">
                <h2 className="mb-2 text-3xl font-bold text-black">
                  見やすいダッシュボード
                </h2>
                <p className="text-lg text-gray-700">
                  見やすさを追求したダッシュボードで、直感的でわかりやすい画面をお届けします。
                </p>
                {/* <table className="m-4">
                <tbody>
                  <tr className="flex space-x-2">
                    <td className="text-base font-bold text-gray-800">The table body</td>
                    <td className="text-base text-gray-700">with two columns</td>
                  </tr>
                  <tr className="flex space-x-2">
                    <td className="text-base font-bold text-gray-800">The table body</td>
                    <td className="text-base text-gray-700">with two columns</td>
                  </tr>
                </tbody>
              </table> */}
              </div>

              <ZoomableImage
                className="col-span-5 lg:col-span-3"
                src="/images/misohost-2.png"
                alt="ダッシュボード"
              />
            </FadeInUp>

            <FadeInUp delay={100} className="grid grid-cols-5 gap-12">
              <ZoomableImage
                className="order-2 col-span-5 lg:order-1 lg:col-span-3"
                src="/images/misohost-4.png"
                alt="コンソール"
              />

              <div className="order-1 col-span-5 my-1 lg:order-2 lg:my-6 lg:col-span-2">
                <h2 className="mb-2 text-3xl font-bold text-black">
                  コンソールログから、使用状況をラクラク確認
                </h2>
                <p className="text-lg text-gray-700">
                  ひと目ですべての状況が確認できます。ストレスの原因となってしまうメモリやCPUの使用率も、しっかりと。
                </p>
              </div>
            </FadeInUp>

            <FadeInUp delay={100} className="grid grid-cols-5 gap-12">
              <div className="col-span-5 my-1 lg:my-6 lg:col-span-2">
                <h2 className="mb-2 text-3xl font-bold text-black">
                  ファイルマネージャーも完備
                </h2>
                <p className="text-lg text-gray-700">
                  素早い操作体験を、あなたのもとへ。
                </p>
              </div>

              <ZoomableImage
                className="col-span-5 lg:col-span-3"
                src="/images/misohost-5.png"
                alt="ファイルマネージャー"
              />
            </FadeInUp>
          </div>
        </section>

        {/* プランリスト */}
        <section className="container mx-auto mt-20">
          <FadeInUp
            delay={100}
            className="flex flex-wrap pt-4 pb-10 m-auto mt-6 md:mt-15 lg:px-12 xl:px-16"
          >
            <div className="w-full px-0 lg:px-4">
              <h2 className="px-12 text-lg font-bold text-center text-steel-500 md:text-2xl">
                おすすめのプランリスト
              </h2>
              <p className="py-1 mb-10 text-sm text-center text-steel-500">
                まずは始めてみたいという方へ、当サービスがおすすめするプランをご用意いたしました
              </p>

              <div className="flex flex-wrap items-center justify-center py-4 pt-0">
                <Plan
                  planName="1GBプラン"
                  hourPrice="2"
                  monthPrice="700"
                  cpu="1"
                  memory="1"
                  storage="10"
                />
                <Plan
                  planName="2GBプラン"
                  hourPrice="4"
                  monthPrice="1400"
                  cpu="1"
                  memory="2"
                  storage="20"
                />
                <Plan
                  planName="4GBプラン"
                  hourPrice="8"
                  monthPrice="2700"
                  cpu="1"
                  memory="4"
                  storage="40"
                />
              </div>
            </div>
          </FadeInUp>
        </section>

        <section className="container mx-auto mt-20">
          <h1 className="text-3xl text-center text-black">よくある質問</h1>
          {qas.map((qa: QAType, idx) => (
            <QA key={idx} question={qa.question} answer={qa.answer} />
          ))}
        </section>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetchEntries();
  const qas = await res.map((p: { fields: any }) => p.fields);

  return {
    props: {
      qas,
    },
  };
};

export default HomePage;
