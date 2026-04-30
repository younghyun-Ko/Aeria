"use client";

import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/data/products";

export default function CartSidebar() {
  const { items, removeItem, updateQuantity, totalPrice, isCartOpen, setIsCartOpen } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm animate-fade-in" onClick={() => setIsCartOpen(false)} />

      {/* Sidebar */}
      <div className="fixed right-0 top-0 z-50 h-full w-full max-w-md border-l border-zinc-200 bg-slate-100/95 backdrop-blur-xl shadow-2xl animate-slide-in-right flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-zinc-200 px-6 py-4">
          <h2 className="text-lg font-extrabold text-zinc-900 flex items-center gap-2">
            장바구니
            <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs text-blue-700 font-extrabold">
              {totalItems}
            </span>
          </h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="rounded-full p-2 text-zinc-500 hover:text-zinc-900 hover:bg-black/5 transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4 custom-scrollbar">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-zinc-600">
              <span className="text-6xl mb-4">🛍️</span>
              <p className="text-lg font-black text-zinc-900">장바구니가 비어있습니다</p>
              <p className="text-sm font-medium mt-1 text-zinc-500">프리미엄 공기를 담아보세요!</p>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.optionId} className="flex gap-4 rounded-xl border border-zinc-200 bg-white p-4 shadow-sm">
                {/* Icon */}
                <div className={`relative flex h-14 w-14 shrink-0 items-center justify-center rounded-xl ${item.imageUrl ? 'bg-white border border-zinc-100 overflow-hidden' : `bg-gradient-to-br ${item.gradient}`}`}>
                  {item.imageUrl ? (
                    <Image src={item.imageUrl} alt={item.nameKo} fill className="object-contain p-1" />
                  ) : (
                    <span className="text-2xl">{item.iconEmoji}</span>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-semibold text-zinc-900 truncate">{item.nameKo}</h4>
                  <p className="text-xs font-medium text-zinc-500">{item.optionLabel} ({item.size})</p>
                  <div className="mt-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.optionId, item.quantity - 1)}
                        className="flex h-7 w-7 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-50 text-xs text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 transition-all"
                      >
                        −
                      </button>
                      <span className="text-sm font-extrabold text-zinc-900 w-5 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.optionId, item.quantity + 1)}
                        className="flex h-7 w-7 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-50 text-xs text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 transition-all"
                      >
                        +
                      </button>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span className="text-sm font-extrabold text-blue-600">{formatPrice(item.price * item.quantity)}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => removeItem(item.optionId)}
                  className="self-start rounded-full p-1.5 text-zinc-400 hover:bg-red-50 hover:text-red-500 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-zinc-200 px-6 py-4 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-extrabold text-zinc-600">합계</span>
              <span className="text-2xl font-black bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
                {formatPrice(totalPrice)}
              </span>
            </div>
            <button className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 py-3.5 text-sm font-extrabold text-white hover:from-blue-500 hover:to-sky-400 transition-all hover:shadow-lg hover:shadow-blue-500/25">
              결제 진행하기
            </button>
          </div>
        )}
      </div>
    </>
  );
}
