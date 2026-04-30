import Image from "next/image";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-4 text-center">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/hero-bg.png"
            alt="Hero Background"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]" />
          {/* Bottom white gradient fade */}
          <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-white via-white/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl animate-slide-up">
          {/* WHO Badge */}
          <div className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-5 py-2 backdrop-blur-sm shadow-sm">
            <span className="text-sm">🏥</span>
            <span className="text-xs font-extrabold text-blue-700">
              WHO PM2.5 ≤ 5µg/m³ 인증 공기
            </span>
          </div>

          <h1 className="leading-tight tracking-tight text-zinc-900">
            <span className="block text-7xl sm:text-8xl lg:text-9xl font-black bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 bg-clip-text text-transparent pb-2">
              Aeria
            </span>
            <span className="block mt-6 text-3xl sm:text-4xl font-black text-zinc-700 tracking-tight">
              지구에서 가장 깨끗한 공기를 마셔보세요
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg font-light">
            전 세계 9개 지역에서 엄선한 최상급 공기를 만나보세요.<br/>
            각 상품은 WHO PM2.5 기준을 통과한 <strong className="font-extrabold text-zinc-800">인증 공기</strong>입니다.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="#products"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-sky-500 px-8 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-blue-500/25 hover:from-blue-500 hover:to-sky-400 hover:shadow-blue-400/30 transition-all hover:scale-105"
            >
              공기 둘러보기 →
            </a>
            <a
              href="#trust"
              className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-8 py-3.5 text-sm font-extrabold text-zinc-700 shadow-sm hover:bg-zinc-50 hover:text-zinc-900 transition-all"
            >
              품질 인증 알아보기
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-6 sm:gap-10">
            <div className="text-center">
              <p className="text-4xl font-black text-zinc-900 sm:text-5xl drop-shadow-sm">9</p>
              <p className="mt-2 text-base font-extrabold text-zinc-700 sm:text-lg">엄선 지역</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-black text-blue-600 sm:text-5xl drop-shadow-sm">≤5µg</p>
              <p className="mt-2 text-base font-extrabold text-zinc-700 sm:text-lg">PM2.5 기준</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-black text-zinc-900 sm:text-5xl drop-shadow-sm">100%</p>
              <p className="mt-2 text-base font-extrabold text-zinc-700 sm:text-lg">자연 포집</p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-zinc-600">
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="relative px-4 py-24 sm:px-6 lg:px-8 bg-zinc-50 border-t border-zinc-200">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-black text-zinc-900 sm:text-4xl lg:text-5xl tracking-tight">
              프리미엄 공기 컬렉션
            </h2>
            <p className="mt-4 text-zinc-600 max-w-xl mx-auto font-light leading-relaxed">
              전 세계 9개 지역에서 엄선한 최상급 공기를 만나보세요.<br/>
              각 상품은 WHO PM2.5 기준을 통과한 <strong className="font-extrabold text-zinc-800">인증 공기</strong>입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, i) => (
              <div key={product.id} className={`animate-slide-up stagger-${i + 1}`} style={{ animationFillMode: "backwards" }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section id="trust" className="border-t border-zinc-200 px-4 py-24 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-black text-zinc-900 sm:text-4xl lg:text-5xl tracking-tight">
              왜 Aeria인가?
            </h2>
            <p className="mt-4 text-zinc-600 font-light text-lg">
              Aeria는 세계 최고 수준의 품질 관리 시스템을 운영합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-8 shadow-sm hover:border-blue-300 transition-colors">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-3xl mb-6">
                🏥
              </div>
              <h3 className="text-xl font-black text-zinc-900">WHO 인증 기준</h3>
              <p className="mt-3 text-sm text-zinc-600 leading-relaxed font-medium">
                세계보건기구(WHO)의 초미세먼지(PM2.5) 권고 기준 5µg/m³ 이하를 충족하는 공기만 판매합니다. 모든 배치는 독립 연구소에서 검증됩니다.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-8 shadow-sm hover:border-sky-300 transition-colors">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-sky-100 text-3xl mb-6">
                🔬
              </div>
              <h3 className="text-xl font-black text-zinc-900">과학적 포집</h3>
              <p className="mt-3 text-sm text-zinc-600 leading-relaxed font-medium">
                각 지역의 최적 시간대와 기상 조건을 분석하여 특수 제작된 에어캡슐로 포집합니다. 산소 농도, 미네랄 함량까지 분석합니다.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-8 shadow-sm hover:border-violet-300 transition-colors">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-violet-100 text-3xl mb-6">
                📦
              </div>
              <h3 className="text-xl font-black text-zinc-900">밀봉 배송</h3>
              <p className="mt-3 text-sm text-zinc-600 leading-relaxed font-medium">
                3중 밀봉 캡슐에 담아 질소 충전 포장으로 배송합니다. 개봉 전까지 채집 당시의 신선한 상태가 100% 유지됩니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
