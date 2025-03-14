'use client';

import React, { Suspense, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

// ローディング表示用コンポーネント
function LoadingState() {
  return (
    <div className="flex justify-center items-center p-8">
      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
      <span className="ml-2">読み込み中...</span>
    </div>
  );
}

// SearchParamsを使用するコンポーネント
function QuoteConfirmationContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // URLパラメータから見積もりIDを取得（実際のAPIには接続しない簡易版）
  const quoteId = searchParams.get('id') || 'demo-123456';

  // 見積もり依頼日時
  const formattedDate = new Date().toLocaleString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  // もしURLパラメータが無い場合は見積もりページにリダイレクト
  useEffect(() => {
    if (!searchParams.get('id') && !searchParams.get('demo')) {
      router.push('/quote');
    }
  }, [router, searchParams]);

  return (
    <div className="max-w-lg mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-green-600 p-6 text-white text-center">
        <div className="text-5xl mb-4">✓</div>
        <h1 className="text-2xl font-bold">見積もり依頼を受け付けました</h1>
      </div>

      <div className="p-6">
        <p className="text-gray-600 mb-6">
          お客様の見積もり依頼が正常に送信されました。ご入力いただきありがとうございます。
        </p>

        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <h2 className="text-lg font-semibold mb-3">依頼内容の確認</h2>
          <ul className="space-y-2">
            <li className="flex justify-between">
              <span className="text-gray-600">依頼ID:</span>
              <span className="font-medium">{quoteId}</span>
            </li>
            <li className="flex justify-between">
              <span className="text-gray-600">お名前:</span>
              <span className="font-medium">サンプル 太郎</span>
            </li>
            <li className="flex justify-between">
              <span className="text-gray-600">メールアドレス:</span>
              <span className="font-medium">sample@example.com</span>
            </li>
            <li className="flex justify-between">
              <span className="text-gray-600">依頼日時:</span>
              <span className="font-medium">{formattedDate}</span>
            </li>
          </ul>
        </div>

        <div className="space-y-4 mb-8">
          <div className="flex items-start">
            <div className="flex-shrink-0 mr-3">
              <span className="text-blue-600">⏱</span>
            </div>
            <div>
              <h3 className="font-semibold">今後の流れ</h3>
              <p className="text-sm text-gray-600">
                数日以内に提携業者からご連絡いたします。見積もり内容や現地調査の日程などについてご相談させていただきます。
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0 mr-3">
              <span className="text-blue-600">📞</span>
            </div>
            <div>
              <h3 className="font-semibold">お問い合わせ</h3>
              <p className="text-sm text-gray-600">
                ご不明点やご質問がございましたら、お気軽にお問い合わせください。
                <br />
                電話: 0120-XXX-XXX（平日9:00〜18:00）
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md transition-colors duration-200 inline-block"
          >
            トップページに戻る
          </Link>
        </div>
      </div>
    </div>
  );
}

// メインページコンポーネント
export default function QuoteConfirmationPage() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <Suspense fallback={<LoadingState />}>
          <QuoteConfirmationContent />
        </Suspense>
      </div>
    </div>
  );
}
