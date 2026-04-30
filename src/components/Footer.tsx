export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl font-black tracking-tight bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
                Aeria
              </span>
            </div>
            <p className="text-sm text-zinc-500 leading-relaxed font-light">
              세계보건기구(WHO)의 엄격한 초미세먼지(PM2.5) 권고 기준
              5µg/m³ 이하를 충족하는 프리미엄 공기만을 엄선하여 판매합니다.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-extrabold text-zinc-900 mb-4">고객 서비스</h3>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li><span className="hover:text-zinc-800 cursor-pointer transition-colors">자주 묻는 질문</span></li>
              <li><span className="hover:text-zinc-800 cursor-pointer transition-colors">배송 안내</span></li>
              <li><span className="hover:text-zinc-800 cursor-pointer transition-colors">반품 / 교환</span></li>
              <li><span className="hover:text-zinc-800 cursor-pointer transition-colors">이용약관</span></li>
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-sm font-extrabold text-zinc-900 mb-4">인증 & 품질</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2">
                <span className="text-lg">🏥</span>
                <div>
                  <p className="text-xs font-extrabold text-blue-700">WHO 인증</p>
                  <p className="text-[11px] text-zinc-500">PM2.5 ≤ 5µg/m³ 기준 준수</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2">
                <span className="text-lg">🔬</span>
                <div>
                  <p className="text-xs font-extrabold text-sky-700">ISO 인증</p>
                  <p className="text-[11px] text-zinc-500">국제 공기질 표준 인증</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-zinc-200 pt-6 text-center">
          <p className="text-xs text-zinc-500 font-light tracking-wide">
            © 2026 Aeria. All rights reserved. 본 사이트는 재미를 위한 가상의 쇼핑몰입니다.
          </p>
        </div>
      </div>
    </footer>
  );
}
