'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';

export default function QuoteDetailPage() {
  const params = useParams();
  const router = useRouter();
  const quoteId = params.id as string;

  const [loading, setLoading] = useState(true);
  const [quote, setQuote] = useState<any>(null);
  const [status, setStatus] = useState('');

  useEffect(() => {
    // 実際のアプリではAPIから取得
    const fetchQuote = async () => {
      // モックデータ
      const mockQuote = {
        id: quoteId,
        customerName: '佐藤 一郎',
        customerEmail: 'sato@example.com',
        customerPhone: '090-1234-5678',
        prefecture: '東京都',
        city: '新宿区',
        address: '新宿1-1-1',
        propertyType: '一戸建て',
        propertySize: 120,
        propertyAge: 15,
        description:
          '外壁の塗装が剥がれてきているため、全面的な塗り替えを希望します。防水性の高い塗料を使いたいです。',
        status: '未対応',
        createdAt: '2024-03-14T09:30:00',
        notes: [],
        estimatedAmount: null,
        completionDate: null,
      };

      setQuote(mockQuote);
      setStatus(mockQuote.status);
      setLoading(false);
    };

    fetchQuote();
  }, [quoteId]);

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 実際のアプリではAPIを呼び出し
    alert(`ステータスを「${status}」に更新しました`);

    // 見積もり更新処理（モック）
    setQuote((prev) => ({
      ...prev,
      status: status,
    }));
  };

  const handleCancel = () => {
    router.back();
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-3 text-gray-600">読み込み中...</p>
        </div>
      </div>
    );
  }

  if (!quote) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-700">
          見積もりが見つかりませんでした
        </h2>
        <p className="mt-2 text-gray-600">
          指定されたIDの見積もり依頼は存在しないか、削除された可能性があります。
        </p>
        <Link
          href="/admin/quotes"
          className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          見積もり一覧に戻る
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">見積もり詳細</h1>
        <Link
          href="/admin/quotes"
          className="text-blue-600 hover:text-blue-800"
        >
          見積もり一覧に戻る
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">基本情報</h2>
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold ${
                quote.status === '未対応'
                  ? 'bg-yellow-100 text-yellow-800'
                  : quote.status === '成約'
                  ? 'bg-green-100 text-green-800'
                  : 'bg-blue-100 text-blue-800'
              }`}
            >
              {quote.status}
            </span>
          </div>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-1">
                見積もりID
              </h3>
              <p className="text-gray-900">{quote.id}</p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-1">
                依頼日時
              </h3>
              <p className="text-gray-900">
                {new Date(quote.createdAt).toLocaleString('ja-JP')}
              </p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-1">お名前</h3>
              <p className="text-gray-900">{quote.customerName}</p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-1">
                メールアドレス
              </h3>
              <p className="text-gray-900">{quote.customerEmail}</p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-1">
                電話番号
              </h3>
              <p className="text-gray-900">{quote.customerPhone}</p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-1">住所</h3>
              <p className="text-gray-900">
                {quote.prefecture} {quote.city} {quote.address}
              </p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-1">
                物件タイプ
              </h3>
              <p className="text-gray-900">{quote.propertyType}</p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-1">
                物件の広さ
              </h3>
              <p className="text-gray-900">{quote.propertySize} m²</p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-1">築年数</h3>
              <p className="text-gray-900">{quote.propertyAge} 年</p>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-sm font-medium text-gray-500 mb-1">依頼内容</h3>
            <p className="text-gray-900 whitespace-pre-line bg-gray-50 p-4 rounded-md">
              {quote.description || '依頼内容の詳細はありません。'}
            </p>
          </div>
        </div>
      </div>

      {/* ステータス更新フォーム */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold">ステータス更新</h2>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="status"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                ステータス
              </label>
              <select
                id="status"
                value={status}
                onChange={handleStatusChange}
                className="w-full border border-gray-300 rounded-md p-2"
              >
                <option value="未対応">未対応</option>
                <option value="見積提出済">見積提出済</option>
                <option value="成約">成約</option>
                <option value="不成約">不成約</option>
                <option value="完了">完了</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="estimatedAmount"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                見積金額（円）
              </label>
              <input
                id="estimatedAmount"
                type="number"
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder="例: 350000"
                defaultValue={quote.estimatedAmount || ''}
              />
            </div>
          </div>

          <div className="mt-6">
            <label
              htmlFor="notes"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              メモ
            </label>
            <textarea
              id="notes"
              rows={4}
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="お客様とのやり取りや状況について記録してください"
            ></textarea>
          </div>

          <div className="mt-6 flex justify-end space-x-3">
            <button
              type="button"
              onClick={handleCancel}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              キャンセル
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              更新する
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
