'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function QuotesListPage() {
  const [statusFilter, setStatusFilter] = useState('all');

  // ダミーの見積もりデータ（実際はAPIから取得）
  const allQuotes = [
    {
      id: 'q-123456',
      customerName: '佐藤 一郎',
      prefecture: '東京都',
      city: '新宿区',
      propertyType: '一戸建て',
      status: '未対応',
      createdAt: '2024-03-14T09:30:00',
    },
    {
      id: 'q-123457',
      customerName: '鈴木 花子',
      prefecture: '神奈川県',
      city: '横浜市',
      propertyType: 'マンション',
      status: '見積提出済',
      createdAt: '2024-03-13T15:45:00',
    },
    {
      id: 'q-123458',
      customerName: '田中 太郎',
      prefecture: '埼玉県',
      city: 'さいたま市',
      propertyType: '一戸建て',
      status: '成約',
      createdAt: '2024-03-12T11:20:00',
    },
    {
      id: 'q-123459',
      customerName: '高橋 恵子',
      prefecture: '千葉県',
      city: '千葉市',
      propertyType: '商業施設',
      status: '未対応',
      createdAt: '2024-03-11T14:10:00',
    },
    {
      id: 'q-123460',
      customerName: '山田 健太',
      prefecture: '東京都',
      city: '渋谷区',
      propertyType: '一戸建て',
      status: '成約',
      createdAt: '2024-03-10T10:15:00',
    },
    {
      id: 'q-123461',
      customerName: '中村 由美',
      prefecture: '埼玉県',
      city: '川口市',
      propertyType: 'マンション',
      status: '見積提出済',
      createdAt: '2024-03-09T16:30:00',
    },
    {
      id: 'q-123462',
      customerName: '小林 直樹',
      prefecture: '東京都',
      city: '世田谷区',
      propertyType: '一戸建て',
      status: '未対応',
      createdAt: '2024-03-08T13:45:00',
    },
    {
      id: 'q-123463',
      customerName: '加藤 みどり',
      prefecture: '神奈川県',
      city: '川崎市',
      propertyType: '一戸建て',
      status: '成約',
      createdAt: '2024-03-07T09:20:00',
    },
  ];

  // フィルター適用
  const filteredQuotes = allQuotes.filter((quote) => {
    if (statusFilter === 'all') return true;
    return quote.status === statusFilter;
  });

  // ステータスに応じた色を取得する関数
  const getStatusColor = (status: string) => {
    switch (status) {
      case '未対応':
        return 'bg-yellow-100 text-yellow-800';
      case '見積提出済':
        return 'bg-blue-100 text-blue-800';
      case '成約':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">見積もり一覧</h1>
        <div className="flex space-x-2">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="border border-gray-300 rounded-md p-2 text-sm"
          >
            <option value="all">すべて</option>
            <option value="未対応">未対応</option>
            <option value="見積提出済">見積提出済</option>
            <option value="成約">成約</option>
          </select>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  ID
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  顧客名
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  地域
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  物件タイプ
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  ステータス
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  依頼日
                </th>
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">詳細</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredQuotes.map((quote) => (
                <tr key={quote.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {quote.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {quote.customerName}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {quote.prefecture} {quote.city}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {quote.propertyType}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(
                        quote.status
                      )}`}
                    >
                      {quote.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(quote.createdAt).toLocaleDateString('ja-JP')}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Link
                      href={`/admin/quotes/${quote.id}`}
                      className="text-blue-600 hover:text-blue-900"
                    >
                      詳細
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredQuotes.length === 0 && (
          <div className="p-6 text-center text-gray-500">
            該当する見積もりが見つかりませんでした。
          </div>
        )}

        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-600">
              全 {allQuotes.length} 件中 {filteredQuotes.length} 件表示
            </div>
            <div className="flex space-x-2">
              <button className="px-3 py-1 border border-gray-300 rounded-md text-sm bg-white">
                前へ
              </button>
              <button className="px-3 py-1 border border-gray-300 rounded-md text-sm bg-white">
                次へ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
