import React from 'react';
import Link from 'next/link';
import Hero from '@/components/ui/Hero';
import ServiceCard from '@/components/ui/ServiceCard';

export default function HomePage() {
  return (
    <>
      {/* ヒーローセクション */}
      <Hero />

      {/* サービスの特徴セクション */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            外壁見積もり窓口のサービス
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
              <div className="bg-blue-100 w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center">
                <span className="text-blue-600 text-2xl">✓</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">無料一括見積もり</h3>
              <p className="text-gray-600">
                全国の優良施工業者から簡単に見積もりを取得できます。費用やサービス内容を比較して最適な選択が可能です。
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
              <div className="bg-blue-100 w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center">
                <span className="text-blue-600 text-2xl">★</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">厳選された業者</h3>
              <p className="text-gray-600">
                当社が厳しい基準で審査した、実績豊富な優良業者のみをご紹介。安心して依頼できる業者だけをご案内します。
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
              <div className="bg-blue-100 w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center">
                <span className="text-blue-600 text-2xl">?</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">専門家のサポート</h3>
              <p className="text-gray-600">
                外壁塗装のプロがお客様の要望に合わせた提案をサポート。疑問や不安なことがあれば、いつでもご相談いただけます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* サービス一覧セクション */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">提供サービス</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              title="外壁塗装"
              description="建物を保護し美観を向上させる高品質な外壁塗装サービス。"
              icon="🏠"
              link="/services"
            />
            <ServiceCard
              title="屋根塗装"
              description="耐久性と断熱性を高める専門的な屋根塗装サービス。"
              icon="🏡"
              link="/services"
            />
            <ServiceCard
              title="防水工事"
              description="雨漏りを防ぎ建物の寿命を延ばす高品質な防水工事。"
              icon="💧"
              link="/services"
            />
          </div>
        </div>
      </section>

      {/* 施工の流れ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            かんたん3ステップで依頼完了
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative">
              <div className="bg-white p-6 rounded-lg shadow-md text-center h-full">
                <div className="absolute -top-3 -left-3 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <div className="text-4xl text-blue-600 mx-auto mb-4">🏠</div>
                <h3 className="text-xl font-semibold mb-3">見積もりを依頼</h3>
                <p className="text-gray-600">
                  お住まいの情報と希望する施工内容を入力するだけ。たった5分で完了します。
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white p-6 rounded-lg shadow-md text-center h-full">
                <div className="absolute -top-3 -left-3 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <div className="text-4xl text-blue-600 mx-auto mb-4">🔧</div>
                <h3 className="text-xl font-semibold mb-3">施工業者から連絡</h3>
                <p className="text-gray-600">
                  あなたの要望に合った施工業者から連絡があります。複数の見積もりを比較検討できます。
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white p-6 rounded-lg shadow-md text-center h-full">
                <div className="absolute -top-3 -left-3 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl">
                  3
                </div>
                <div className="text-4xl text-blue-600 mx-auto mb-4">⚙️</div>
                <h3 className="text-xl font-semibold mb-3">最適な業者を選択</h3>
                <p className="text-gray-600">
                  見積もり内容やサービスを比較し、最適な業者を選んで工事を依頼しましょう。
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/quote"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-md transition-colors duration-200 inline-block"
            >
              無料で見積もりを依頼する
            </Link>
          </div>
        </div>
      </section>

      {/* CTA セクション */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            無料で見積もりを依頼しませんか？
          </h2>
          <p className="max-w-2xl mx-auto mb-8">
            全国の優良業者からあなたに最適な外壁塗装プランを無料でご提案します。
            簡単な情報入力だけで、複数の見積もりを比較検討いただけます。
          </p>
          <Link
            href="/quote"
            className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-md transition-colors duration-200 inline-block"
          >
            無料見積もりを依頼する
          </Link>
        </div>
      </section>
    </>
  );
}
