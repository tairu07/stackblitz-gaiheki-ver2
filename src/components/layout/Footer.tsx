import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 会社情報 */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-xl font-bold mb-4">外壁見積もり窓口</h2>
            <p className="mb-4">
              全国の優良な外壁塗装業者から、お客様のご要望に合った最適な見積もりをご提案します。
              無料一括見積もりでお得に安心な外壁塗装をはじめましょう。
            </p>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center">
                <span className="mr-2">📍</span>
                <span>〒100-0001 東京都千代田区1-1-1</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">📞</span>
                <span>0120-XXX-XXX（平日9:00〜18:00）</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">✉️</span>
                <span>info@gaiheki-madoguchi.com</span>
              </div>
            </div>
          </div>

          {/* サイトマップ */}
          <div>
            <h3 className="text-lg font-semibold mb-4">サイトマップ</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="hover:text-blue-300 transition-colors duration-200"
                >
                  ホーム
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-blue-300 transition-colors duration-200"
                >
                  サービス内容
                </Link>
              </li>
              <li>
                <Link
                  href="/quote"
                  className="hover:text-blue-300 transition-colors duration-200"
                >
                  見積もり依頼
                </Link>
              </li>
              <li>
                <Link
                  href="/login"
                  className="hover:text-blue-300 transition-colors duration-200"
                >
                  業者ログイン
                </Link>
              </li>
            </ul>
          </div>

          {/* お役立ち情報 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">お役立ち情報</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="hover:text-blue-300 transition-colors duration-200"
                >
                  外壁塗装の基礎知識
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-blue-300 transition-colors duration-200"
                >
                  塗料の種類と特徴
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-blue-300 transition-colors duration-200"
                >
                  見積もりの見方
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-blue-300 transition-colors duration-200"
                >
                  よくある質問
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* コピーライト */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>© {currentYear} 外壁見積もり窓口 All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
