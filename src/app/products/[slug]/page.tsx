"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { getProductBySlug, formatPrice, products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import ProductCard from "@/components/ProductCard";

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const product = getProductBySlug(slug);
  const { addItem } = useCart();
  const [selectedOption, setSelectedOption] = useState(0);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
        <span className="text-6xl mb-4">😶‍🌫️</span>
        <h1 className="text-2xl font-extrabold text-zinc-900">상품을 찾을 수 없습니다</h1>
        <Link href="/" className="mt-6 rounded-full bg-zinc-100 border border-zinc-200 px-6 py-2 text-sm font-medium text-zinc-600 hover:bg-zinc-200 transition-colors">
          홈으로 돌아가기
        </Link>
      </div>
    );
  }

  const option = product.options[selectedOption];
  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 3);

  const handleAddToCart = () => {
    addItem({
      productId: product.id,
      productSlug: product.slug,
      nameKo: product.nameKo,
      nameEn: product.nameEn,
      optionId: option.id,
      optionLabel: option.label,
      size: option.size,
      price: option.price,
      gradient: product.gradient,
      iconEmoji: product.iconEmoji,
      imageUrl: product.imageUrl,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-sm font-medium text-zinc-500">
          <Link href="/" className="hover:text-zinc-900 transition-colors">홈</Link>
          <span>/</span>
          <Link href="/#products" className="hover:text-zinc-900 transition-colors">상품</Link>
          <span>/</span>
          <span className="text-zinc-800">{product.nameKo}</span>
        </nav>
      </div>

      {/* Product Detail */}
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Visual */}
          <div className={`relative flex aspect-square items-center justify-center rounded-3xl ${product.imageUrl ? 'bg-white border border-zinc-200' : `bg-gradient-to-br ${product.gradient}`} overflow-hidden`}>
            {product.imageUrl ? (
              <Image 
                src={product.imageUrl} 
                alt={product.nameKo} 
                fill 
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain p-8 group-hover:scale-105 transition-transform duration-500" 
              />
            ) : (
              <>
                <div className="absolute inset-0">
                  <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-white/10 blur-3xl animate-pulse-glow" />
                  <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-white/10 blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
                  <div className="absolute top-1/3 left-1/3 h-40 w-40 rounded-full bg-white/5 blur-2xl animate-float" />
                </div>
                <span className="relative text-[140px] sm:text-[180px] drop-shadow-2xl animate-float">{product.iconEmoji}</span>
              </>
            )}
            
            {/* Info badges */}
            <div className="absolute top-6 left-6 space-y-2">
              <div className="flex items-center gap-2 rounded-full bg-white/90 backdrop-blur-sm px-4 py-1.5 text-sm font-extrabold text-zinc-800 border border-zinc-200 shadow-sm">
                <img src={`https://flagcdn.com/w20/${product.flagCode}.png`} alt={product.country} className="w-5 h-3.5 object-cover rounded-sm" />
                {product.region}
              </div>
            </div>
            <div className="absolute top-6 right-6">
              <div className="rounded-full bg-white/90 backdrop-blur-sm px-4 py-1.5 text-sm font-extrabold text-blue-700 border border-zinc-200 shadow-sm">
                PM2.5: {product.pm25}µg/m³
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col">
            <div className="mb-2 inline-flex items-center gap-2 self-start rounded-full border border-blue-200 bg-blue-50 px-3 py-1 shadow-sm">
              <span className="text-xs font-extrabold text-blue-700">WHO 인증 공기</span>
            </div>

            <h1 className="text-3xl font-black text-zinc-900 sm:text-4xl">{product.nameKo}</h1>
            <p className="mt-1 text-sm text-zinc-500 font-medium">{product.nameEn}</p>

            <p className="mt-6 text-base text-zinc-600 leading-relaxed font-medium">{product.longDescription}</p>

            {/* Specs */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm">
                <p className="text-xs font-medium text-zinc-500">PM2.5 수치</p>
                <p className="mt-1 text-lg font-extrabold text-blue-700">{product.pm25}µg/m³</p>
              </div>
              <div className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm">
                <p className="text-xs font-medium text-zinc-500">산소 농도</p>
                <p className="mt-1 text-lg font-extrabold text-sky-700">{product.oxygenLevel}%</p>
              </div>
            </div>

            {/* Harvest Method */}
            <div className="mt-6 rounded-xl border border-zinc-200 bg-white p-4 shadow-sm">
              <p className="text-xs font-medium text-zinc-500 mb-1">채집 방법</p>
              <p className="text-sm font-medium text-zinc-800">{product.harvestMethod}</p>
            </div>

            {/* Features */}
            <div className="mt-6">
              <p className="text-xs font-medium text-zinc-500 mb-3">특징</p>
              <div className="flex flex-wrap gap-2">
                {product.features.map((f, i) => (
                  <span key={i} className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-700">
                    {f}
                  </span>
                ))}
              </div>
            </div>

            {/* Options */}
            <div className="mt-8">
              <p className="text-sm font-extrabold text-zinc-900 mb-3">사이즈 선택</p>
              <div className="grid grid-cols-3 gap-3">
                {product.options.map((opt, i) => (
                  <button
                    key={opt.id}
                    onClick={() => setSelectedOption(i)}
                    className={`rounded-xl border p-4 text-center transition-all ${
                      selectedOption === i
                        ? "border-blue-500 bg-blue-50 shadow-md"
                        : "border-zinc-200 bg-white hover:border-blue-300"
                    }`}
                  >
                    <p className={`text-xs font-extrabold ${selectedOption === i ? "text-blue-700" : "text-zinc-500"}`}>
                      {opt.label}
                    </p>
                    <p className={`mt-1 text-sm font-extrabold ${selectedOption === i ? "text-zinc-900" : "text-zinc-700"}`}>
                      {opt.size}
                    </p>
                    <p className={`mt-1 text-sm font-extrabold ${selectedOption === i ? "text-blue-700" : "text-zinc-500"}`}>
                      {formatPrice(opt.price)}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart */}
            <div className="mt-8 flex items-center gap-4">
              <button
                onClick={handleAddToCart}
                className={`flex-1 rounded-xl py-4 text-sm font-extrabold transition-all hover:scale-[1.02] active:scale-[0.98] ${
                  added
                    ? "bg-sky-500 text-white shadow-lg shadow-sky-500/25"
                    : "bg-gradient-to-r from-blue-500 to-sky-500 text-white shadow-lg shadow-blue-500/25 hover:from-blue-400 hover:to-sky-400"
                }`}
                id="add-to-cart-button"
              >
                {added ? "✓ 장바구니에 추가됨!" : "장바구니에 추가"}
              </button>
            </div>

            {/* Price display */}
            <div className="mt-4 text-center">
              <span className="text-2xl font-black bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
                {formatPrice(option.price)}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <section className="border-t border-zinc-200 bg-zinc-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-10 text-2xl font-extrabold text-zinc-900">다른 공기도 둘러보세요</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
