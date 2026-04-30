"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/data/products";

export default function CartPage() {
  const { items, removeItem, updateQuantity, clearCart, totalPrice } = useCart();

  return (
    <div className="min-h-[80vh] px-4 py-10 sm:px-6 lg:px-8 bg-slate-100">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-black text-zinc-900 mb-8">🛒 장바구니</h1>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center animate-fade-in">
            <span className="text-7xl mb-6">🛍️</span>
            <h2 className="text-2xl font-black text-zinc-900">장바구니가 비어있습니다</h2>
            <p className="mt-2 text-base font-medium text-zinc-500">프리미엄 공기를 담아보세요!</p>
            <Link
              href="/#products"
              className="mt-8 inline-flex rounded-full bg-gradient-to-r from-blue-600 to-sky-500 px-8 py-3.5 text-sm font-extrabold text-white shadow-md hover:from-blue-500 hover:to-sky-400 hover:shadow-blue-500/25 transition-all"
            >
              쇼핑 계속하기
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Items List */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <div
                  key={item.optionId}
                  className="flex gap-5 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm animate-fade-in"
                >
                  {/* Icon */}
                  <Link
                    href={`/products/${item.productSlug}`}
                    className={`relative flex h-20 w-20 shrink-0 items-center justify-center rounded-xl ${item.imageUrl ? 'bg-white border border-zinc-100 overflow-hidden' : `bg-gradient-to-br ${item.gradient}`} hover:scale-105 transition-transform`}
                  >
                    {item.imageUrl ? (
                      <Image src={item.imageUrl} alt={item.nameKo} fill className="object-contain p-2" />
                    ) : (
                      <span className="text-4xl">{item.iconEmoji}</span>
                    )}
                  </Link>

                  <div className="flex-1 min-w-0">
                    <Link href={`/products/${item.productSlug}`} className="hover:text-blue-600 transition-colors">
                      <h3 className="text-base font-extrabold text-zinc-900">{item.nameKo}</h3>
                    </Link>
                    <p className="text-xs text-zinc-500 mt-0.5">{item.nameEn}</p>
                    <p className="text-xs text-zinc-500 mt-1">
                      {item.optionLabel} • {item.size}
                    </p>

                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateQuantity(item.optionId, item.quantity - 1)}
                          className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-50 text-sm text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 transition-all"
                        >
                          −
                        </button>
                        <span className="text-sm font-extrabold text-zinc-900 w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.optionId, item.quantity + 1)}
                          className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-50 text-sm text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 transition-all"
                        >
                          +
                        </button>
                      </div>
                      <span className="text-lg font-extrabold text-blue-600">{formatPrice(item.price * item.quantity)}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => removeItem(item.optionId)}
                    className="self-start rounded-full p-2 text-zinc-600 hover:text-red-400 hover:bg-red-500/10 transition-all"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                  </button>
                </div>
              ))}

              <button
                onClick={clearCart}
                className="mt-2 text-sm text-zinc-600 hover:text-red-400 transition-colors"
              >
                장바구니 비우기
              </button>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-extrabold text-zinc-900 mb-6">주문 요약</h3>

                <div className="space-y-3 border-b border-zinc-200 pb-4 mb-4">
                  {items.map((item) => (
                    <div key={item.optionId} className="flex justify-between text-sm">
                      <span className="text-zinc-600 truncate max-w-[180px]">
                        {item.nameKo} ({item.size}) × {item.quantity}
                      </span>
                      <span className="text-zinc-900 font-medium shrink-0 ml-2">{formatPrice(item.price * item.quantity)}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-2 border-b border-zinc-200 pb-4 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-600">배송비</span>
                    <span className="text-blue-600 font-extrabold">무료</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm font-extrabold text-zinc-600">합계</span>
                  <span className="text-2xl font-black bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
                    {formatPrice(totalPrice)}
                  </span>
                </div>

                <button className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 py-4 text-sm font-extrabold text-white hover:from-blue-500 hover:to-sky-400 transition-all hover:shadow-lg hover:shadow-blue-500/25 active:scale-[0.98]">
                  결제하기
                </button>

                <Link
                  href="/#products"
                  className="mt-4 block text-center text-sm text-zinc-500 hover:text-white transition-colors"
                >
                  ← 쇼핑 계속하기
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
