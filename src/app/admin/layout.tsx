'use client';

import React, { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const pathname = usePathname();

  const menuItems = [
    { href: '/admin/dashboard', label: 'ダッシュボード', icon: '📊' },
    { href: '/admin/quotes', label: '見積もり一覧', icon: '📋' },
    { href: '/admin/settings', label: '設定', icon: '⚙️' },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        {/* サイドバー */}
        <div className="w-64 bg-gray-800 text-white min-h-screen fixed">
          <div className="p-4 border-b border-gray-700">
            <h1 className="text-xl font-bold">管理画面</h1>
            <p className="text-xs text-gray-400">外壁見積もり窓口</p>
          </div>
          <nav className="mt-4">
            <ul className="space-y-1">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`flex items-center px-4 py-3 transition-colors ${
                      pathname === item.href
                        ? 'bg-blue-700 text-white'
                        : 'text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    <span className="mr-3">{item.icon}</span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="absolute bottom-0 w-full p-4 border-t border-gray-700">
            <Link
              href="/"
              className="flex items-center text-gray-300 hover:text-white transition-colors"
            >
              <span className="mr-2">🏠</span>
              サイトに戻る
            </Link>
          </div>
        </div>

        {/* メインコンテンツ */}
        <div className="ml-64 flex-1">
          <header className="bg-white shadow-sm">
            <div className="flex justify-between items-center px-6 py-4">
              <h1 className="text-xl font-semibold">管理パネル</h1>
              <div className="flex items-center space-x-4">
                <span className="text-gray-600">管理者</span>
                <button className="text-blue-600 hover:text-blue-800">
                  ログアウト
                </button>
              </div>
            </div>
          </header>
          <main className="p-6">{children}</main>
        </div>
      </div>
    </div>
  );
}
