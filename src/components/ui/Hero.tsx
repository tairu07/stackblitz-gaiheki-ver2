import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="relative h-[80vh] min-h-[500px] w-full bg-blue-800">
      {/* 背景（StackBlitzでは画像が利用できないため単色背景で代用） */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-blue-700 to-blue-900">
        {/* オーバーレイ */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>

      {/* コンテンツ */}
      <div className="container mx-auto px-4 h-full flex items-center relative z-10">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            理想の外観を手に入れる、
            <br />
            最適な外壁塗装
          </h1>
          <p className="text-xl mb-8">
            全国の優良業者から無料で一括見積もり。
            お客様にぴったりの施工プランをご提案します。
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/quote"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-200 text-center"
            >
              無料見積もりを依頼する
            </Link>
            <Link
              href="/services"
              className="bg-white hover:bg-gray-100 text-blue-600 font-semibold py-3 px-6 rounded-md transition-colors duration-200 text-center"
            >
              サービス内容を見る
            </Link>
          </div>

          {/* 利点のハイライト */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4">
              <h3 className="font-bold mb-1">無料一括見積もり</h3>
              <p className="text-sm">複数業者の見積もりを簡単比較</p>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4">
              <h3 className="font-bold mb-1">厳選優良業者</h3>
              <p className="text-sm">実績と評価で選んだ安心の業者</p>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4">
              <h3 className="font-bold mb-1">専門家の提案</h3>
              <p className="text-sm">お客様に最適なプランをご提案</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
