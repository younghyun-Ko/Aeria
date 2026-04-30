"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { useState } from "react";

export default function Header() {
  const { totalItems, setIsCartOpen } = useCart();
  const { user, logout } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-200/50 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-2xl font-black tracking-tight bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent group-hover:from-blue-500 group-hover:to-sky-400 transition-all">
            Aeria
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">
            홈
          </Link>
          <Link href="/#products" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">
            상품
          </Link>

          {user ? (
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-cyan-700">
                {user.name}님
              </span>
              <button
                onClick={logout}
                className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors"
              >
                로그아웃
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link
                href="/login"
                className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors"
              >
                로그인
              </Link>
              <Link
                href="/signup"
                className="rounded-full bg-gradient-to-r from-blue-600 to-sky-500 px-4 py-1.5 text-sm font-medium text-white hover:from-blue-500 hover:to-sky-400 transition-all"
              >
                회원가입
              </Link>
            </div>
          )}

          {/* Cart */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative ml-2 rounded-full p-2 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 transition-all"
            id="cart-button"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-sky-500 text-[10px] font-extrabold text-white animate-pulse">
                {totalItems}
              </span>
            )}
          </button>
        </nav>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative rounded-full p-2 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-sky-500 text-[10px] font-extrabold text-white">
                {totalItems}
              </span>
            )}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-full p-2 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-zinc-200 bg-white/95 backdrop-blur-xl animate-fade-in">
          <div className="px-4 py-4 space-y-3">
            <Link href="/" onClick={() => setMobileOpen(false)} className="block text-sm font-medium text-zinc-600 hover:text-zinc-900 py-2">홈</Link>
            <Link href="/#products" onClick={() => setMobileOpen(false)} className="block text-sm font-medium text-zinc-600 hover:text-zinc-900 py-2">상품</Link>
            {user ? (
              <>
                <span className="block text-sm font-medium text-blue-700 py-2">{user.name}님 환영합니다</span>
                <button onClick={() => { logout(); setMobileOpen(false); }} className="block text-sm font-medium text-zinc-600 hover:text-zinc-900 py-2">로그아웃</button>
              </>
            ) : (
              <>
                <Link href="/login" onClick={() => setMobileOpen(false)} className="block text-sm font-medium text-zinc-600 hover:text-zinc-900 py-2">로그인</Link>
                <Link href="/signup" onClick={() => setMobileOpen(false)} className="block text-sm font-medium text-blue-700 hover:text-blue-800 py-2">회원가입</Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
