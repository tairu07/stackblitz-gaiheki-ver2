'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: '/', label: 'ホーム' },
    { href: '/services', label: 'サービス内容' },
    { href: '/quote', label: '見積もり依頼' },
  ];

  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <span className="text-xl font-bold text-blue-600">
            外壁見積もり窓口
          </span>
        </Link>

        {/* デスクトップナビゲーション */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-medium transition-colors duration-200 hover:text-blue-600 ${
                pathname === link.href ? 'text-blue-600' : 'text-gray-700'
              }`}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/login"
            className="font-medium text-white bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
          >
            ログイン
          </Link>
        </nav>

        {/* モバイルメニューボタン */}
        <button
          className="md:hidden text-gray-700 hover:text-blue-600 transition-colors duration-200"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'メニューを閉じる' : 'メニューを開く'}
        >
          {isMenuOpen ? 'X' : '☰'}
        </button>
      </div>

      {/* モバイルナビゲーション */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col space-y-2 px-4 py-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium p-2 transition-colors duration-200 hover:text-blue-600 ${
                  pathname === link.href ? 'text-blue-600' : 'text-gray-700'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/login"
              className="font-medium p-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors duration-200 text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              ログイン
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
