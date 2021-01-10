import React from 'react';
import Layout from '@/components/Layout';
import Card from '@/components/Card';
import { NextPage } from 'next';
import Plan from '@/components/Plan';
import { FadeInUp } from '@/components/FadeInUp';

const Home: NextPage = () => (
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
            className="col-auto"
            title="コンビニ決済対応"
            description={`コンビニ決済で、ラクラク決済。\nもちろんクレジットカードも\n使用可能！`}
          />
          <Card
            delay={50}
            iconUrl="https://img.icons8.com/ultraviolet/80/000000/lightning-bolt.png"
            className="col-auto"
            title="契約から起動まで約１分"
            description="素早く環境を試せます"
          />
          <Card
            delay={100}
            iconUrl="https://img.icons8.com/ultraviolet/80/000000/money--v1.png"
            className="col-auto"
            title="１時間２円〜使える"
            description="ご利用プランに合わせた柔軟な価格設定で使えます"
          />
          <Card
            delay={150}
            iconUrl="https://img.icons8.com/ultraviolet/80/000000/ssd.png"
            className="col-auto"
            title="SSD搭載"
            description={`素早い読み書き速度で、\nストレスのないホスティング`}
          />
        </div>
      </section>

      {/* 画像カラム */}
      <section className="mx-auto">
        <div className="flex flex-col py-32 space-y-32 bg-gray-100 px-96">
          <FadeInUp delay={100} className="grid grid-cols-5 gap-12">
            <div className="col-span-2 my-6">
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

            <img
              className="col-span-3"
              src="/images/misohost-2.png"
              alt="ダッシュボード"
            />
          </FadeInUp>

          <FadeInUp delay={100} className="grid grid-cols-5 gap-12">
            <img
              className="col-span-3"
              src="/images/misohost-4.png"
              alt="コンソール"
            />

            <div className="col-span-2 my-6">
              <h2 className="mb-2 text-3xl font-bold text-black">
                見やすいダッシュボード
              </h2>
              <p className="text-lg text-gray-700">
                見やすさを追求したダッシュボードで、直感的でわかりやすい画面をお届けします。
              </p>
            </div>
          </FadeInUp>

          <FadeInUp delay={100} className="grid grid-cols-5 gap-12">
            <div className="col-span-2 my-6">
              <h2 className="mb-2 text-3xl font-bold text-black">
                見やすいダッシュボード
              </h2>
              <p className="text-lg text-gray-700">
                見やすさを追求したダッシュボードで、直感的でわかりやすい画面をお届けします。
              </p>
            </div>

            <img
              className="col-span-3"
              src="/images/misohost-5.png"
              alt="ファイルエクスプローラー"
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
    </div>
  </Layout>
);

export default Home;
