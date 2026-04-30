import Link from "next/link";
import Image from "next/image";
import { type Product, formatPrice } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white hover:border-blue-300 hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
      id={`product-card-${product.slug}`}
    >
      {/* Gradient Visual */}
      {/* Visual Area */}
      <div className={`relative flex h-52 items-center justify-center ${product.imageUrl ? 'bg-white' : `bg-gradient-to-br ${product.gradient}`} overflow-hidden`}>
        {product.imageUrl ? (
          <Image 
            src={product.imageUrl} 
            alt={product.nameKo} 
            fill 
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain p-4 group-hover:scale-105 transition-transform duration-500" 
          />
        ) : (
          <>
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-white/10 blur-2xl group-hover:scale-150 transition-transform duration-700" />
              <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-white/10 blur-2xl group-hover:scale-150 transition-transform duration-700 delay-100" />
            </div>
            <span className="relative text-7xl drop-shadow-lg group-hover:scale-110 transition-transform duration-500">
              {product.iconEmoji}
            </span>
          </>
        )}
        
        {/* PM2.5 Badge */}
        <div className="absolute top-3 right-3 rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-extrabold text-zinc-800 shadow-sm border border-zinc-100">
          PM2.5: {product.pm25}µg/m³
        </div>
        {/* Country Badge */}
        <div className="absolute top-3 left-3 rounded-full bg-white/90 backdrop-blur-sm px-2.5 py-1 text-xs font-medium text-zinc-800 shadow-sm border border-zinc-100 flex items-center gap-1.5">
          <img src={`https://flagcdn.com/w20/${product.flagCode}.png`} alt={product.country} className="w-4 h-3 object-cover rounded-sm" />
          <span>{product.country}</span>
        </div>
      </div>

      {/* Info */}
      {/* Info */}
      <div className="flex flex-1 flex-col p-5 bg-white">
        <h3 className="text-lg font-black text-zinc-900 group-hover:text-blue-700 transition-colors">
          {product.nameKo}
        </h3>
        <p className="mt-0.5 text-xs text-zinc-500 font-light tracking-wide">
          {product.nameEn}
        </p>
        <p className="mt-2 text-sm text-zinc-600 leading-relaxed line-clamp-2 font-light">
          {product.description}
        </p>
        <div className="mt-auto pt-4 flex items-center justify-between">
          <span className="text-lg font-black bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
            {formatPrice(product.options[0].price)}~
          </span>
          <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600 group-hover:bg-blue-50 group-hover:text-blue-700 transition-all">
            자세히 보기 →
          </span>
        </div>
      </div>
    </Link>
  );
}
