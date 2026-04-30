export interface ProductOption {
  id: string;
  label: string;
  size: string;
  price: number;
}

export interface Product {
  id: string;
  slug: string;
  nameKo: string;
  nameEn: string;
  region: string;
  country: string;
  countryFlag: string;
  pm25: number;
  oxygenLevel: number;
  description: string;
  longDescription: string;
  harvestMethod: string;
  features: string[];
  gradient: string;
  accentColor: string;
  iconEmoji: string;
  imageUrl?: string;
  flagCode: string;
  options: ProductOption[];
}

export const products: Product[] = [
  {
    id: "1",
    slug: "tasmania-pure-breeze",
    nameKo: "태즈메이니아 퓨어 브리즈",
    nameEn: "Tasmania Pure Breeze",
    region: "태즈메이니아, 호주",
    country: "호주",
    countryFlag: "🇦🇺",
    pm25: 1.2,
    oxygenLevel: 21.8,
    description: "세계에서 가장 깨끗한 공기로 유명한 태즈메이니아 원시림에서 채집한 프리미엄 공기입니다.",
    longDescription: "태즈메이니아는 남위 42도에 위치한 호주의 섬으로, 지구상에서 가장 깨끗한 공기를 보유한 지역 중 하나입니다. 인간의 손길이 닿지 않은 광활한 원시림과 세계유산으로 지정된 자연보호구역에서 특수 장비를 이용해 채집한 이 공기는 PM2.5 수치가 1.2µg/m³에 불과합니다. 남극에서 불어오는 청정 바람이 태즈메이니아의 유칼립투스 숲을 통과하며 만들어내는 자연 그대로의 피톤치드 향을 느껴보세요.",
    harvestMethod: "해발 1,200m 원시림 캐노피 레벨에서 특수 에어캡슐로 포집",
    features: ["피톤치드 함유", "남극 청정풍 유래", "유칼립투스 아로마", "세계유산 보호구역 채집"],
    gradient: "from-emerald-500 to-teal-600",
    accentColor: "#10b981",
    iconEmoji: "🌿",
    imageUrl: "/images/tasmania-pure-breeze.jpg",
    flagCode: "au",
    options: [
      { id: "1-s", label: "Standard", size: "250ml", price: 29900 },
      { id: "1-m", label: "Premium", size: "500ml", price: 49900 },
      { id: "1-l", label: "Luxury", size: "1L", price: 89900 },
    ],
  },
  {
    id: "2",
    slug: "canberra-botanical-air",
    nameKo: "캔버라 보태니컬 에어",
    nameEn: "Canberra Botanical Air",
    region: "캔버라, 호주",
    country: "호주",
    countryFlag: "🇦🇺",
    pm25: 2.1,
    oxygenLevel: 22.0,
    description: "호주 수도 캔버라의 국립 보태니컬 가든에서 채집한 식물 향 가득한 공기입니다.",
    longDescription: "캔버라 국립 보태니컬 가든은 6,000종 이상의 호주 자생 식물이 서식하는 거대한 식물원입니다. 이곳에서 채집한 공기에는 다양한 호주 토착 식물들의 자연 아로마가 풍부하게 함유되어 있습니다. 특히 새벽 시간대에 식물들의 광합성이 가장 활발할 때 포집하여, 일반 공기보다 높은 산소 농도를 자랑합니다. PM2.5 수치 2.1µg/m³로 WHO 기준을 한참 밑도는 프리미엄 보태니컬 에어를 경험해보세요.",
    harvestMethod: "새벽 5시~7시 광합성 피크 타임에 가든 중심부에서 포집",
    features: ["6,000종 식물 아로마", "고농도 산소", "새벽 포집", "자연 항산화 성분"],
    gradient: "from-green-500 to-lime-500",
    accentColor: "#22c55e",
    iconEmoji: "🌺",
    imageUrl: "/images/canberra-botanical-air.jpg",
    flagCode: "au",
    options: [
      { id: "2-s", label: "Standard", size: "250ml", price: 27900 },
      { id: "2-m", label: "Premium", size: "500ml", price: 45900 },
      { id: "2-l", label: "Luxury", size: "1L", price: 79900 },
    ],
  },
  {
    id: "3",
    slug: "wellington-roaring-forties",
    nameKo: "웰링턴 로어링 포티스",
    nameEn: "Wellington Roaring Forties",
    region: "웰링턴, 뉴질랜드",
    country: "뉴질랜드",
    countryFlag: "🇳🇿",
    pm25: 1.8,
    oxygenLevel: 21.5,
    description: "남위 40도의 거친 바다바람 '로어링 포티스'를 담은 역동적인 공기입니다.",
    longDescription: "로어링 포티스(Roaring Forties)는 남위 40~50도 해역을 가로지르는 강력한 편서풍을 말합니다. 뉴질랜드의 수도 웰링턴은 '바람의 도시'로 불리며, 이 거대한 바람이 남극 대양을 건너오면서 모든 오염물질을 정화합니다. PM2.5 1.8µg/m³의 이 공기에는 미세한 해양 미네랄과 음이온이 풍부하게 함유되어 있어, 마치 끝없는 바다 위에 서 있는 듯한 상쾌함을 선사합니다.",
    harvestMethod: "웰링턴 사우스 코스트 절벽에서 풍속 80km/h 이상 시 포집",
    features: ["해양 미네랄 함유", "고농도 음이온", "남극 대양풍", "자연 소금 결정"],
    gradient: "from-blue-800 to-slate-400",
    accentColor: "#3b82f6",
    iconEmoji: "🌊",
    imageUrl: "/images/wellington-roaring-forties.png",
    flagCode: "nz",
    options: [
      { id: "3-s", label: "Standard", size: "250ml", price: 32900 },
      { id: "3-m", label: "Premium", size: "500ml", price: 54900 },
      { id: "3-l", label: "Luxury", size: "1L", price: 94900 },
    ],
  },
  {
    id: "4",
    slug: "reykjavik-glacier-shot",
    nameKo: "레이캬비크 글래시어 샷",
    nameEn: "Reykjavik Glacier Shot",
    region: "레이캬비크, 아이슬란드",
    country: "아이슬란드",
    countryFlag: "🇮🇸",
    pm25: 0.8,
    oxygenLevel: 21.9,
    description: "1,000년 된 빙하가 녹으며 방출하는 태고의 공기를 포집한 최고급 에디션입니다.",
    longDescription: "아이슬란드의 바트나요쿨 빙하는 유럽 최대의 빙하로, 그 내부에는 수천 년 전의 공기가 기포 형태로 봉인되어 있습니다. 빙하가 천천히 녹으며 방출하는 이 태고의 공기는 산업혁명 이전, 인류가 대기를 오염시키기 훨씬 전의 순수한 대기 성분을 간직하고 있습니다. PM2.5 0.8µg/m³라는 경이로운 수치를 기록하는 이 공기는 그야말로 '시간을 호흡하는' 경험을 선사합니다.",
    harvestMethod: "바트나요쿨 빙하 크레바스 내부 기포 직접 포집 (연 200캔 한정)",
    features: ["1,000년 빙하 기포", "산업혁명 이전 대기", "초극저 PM2.5", "한정 생산"],
    gradient: "from-cyan-300 to-white",
    accentColor: "#67e8f9",
    iconEmoji: "🧊",
    imageUrl: "/images/reykjavik-glacier-shot.jpg",
    flagCode: "is",
    options: [
      { id: "4-s", label: "Standard", size: "250ml", price: 59900 },
      { id: "4-m", label: "Premium", size: "500ml", price: 99900 },
      { id: "4-l", label: "Luxury", size: "1L", price: 179900 },
    ],
  },
  {
    id: "5",
    slug: "tallinn-baltic-forest",
    nameKo: "탈린 발틱 포레스트",
    nameEn: "Tallinn Baltic Forest",
    region: "탈린, 에스토니아",
    country: "에스토니아",
    countryFlag: "🇪🇪",
    pm25: 2.3,
    oxygenLevel: 22.1,
    description: "발트해 연안 침엽수림의 깊은 숲 향기를 가득 담은 힐링 공기입니다.",
    longDescription: "에스토니아는 국토의 50% 이상이 숲으로 덮여 있는 유럽의 녹색 보석입니다. 탈린 근교의 라헤마 국립공원 깊숙한 곳, 수백 년 된 소나무와 가문비나무가 우거진 원시 침엽수림에서 채집한 이 공기는 풍부한 테르펜과 피톤치드를 함유하고 있습니다. 발트해의 시원한 해풍과 침엽수림의 깊은 향이 어우러진 이 공기는 스트레스 해소와 심신 안정에 탁월한 효과를 줍니다.",
    harvestMethod: "라헤마 국립공원 수령 300년 이상 침엽수 군락 중심부에서 포집",
    features: ["테르펜 고농도 함유", "피톤치드 풍부", "발트해 해풍 블렌딩", "스트레스 완화 효과"],
    gradient: "from-green-900 to-emerald-700",
    accentColor: "#059669",
    iconEmoji: "🌲",
    imageUrl: "/images/tallinn-baltic-forest.png",
    flagCode: "ee",
    options: [
      { id: "5-s", label: "Standard", size: "250ml", price: 25900 },
      { id: "5-m", label: "Premium", size: "500ml", price: 42900 },
      { id: "5-l", label: "Luxury", size: "1L", price: 74900 },
    ],
  },
  {
    id: "6",
    slug: "helsinki-nordic-zero",
    nameKo: "헬싱키 노르딕 제로",
    nameEn: "Helsinki Nordic Zero",
    region: "헬싱키, 핀란드",
    country: "핀란드",
    countryFlag: "🇫🇮",
    pm25: 1.5,
    oxygenLevel: 21.7,
    description: "핀란드식 '제로 오염' 철학이 담긴, 극도로 정제된 북유럽의 공기입니다.",
    longDescription: "핀란드는 세계 최고의 대기질을 자랑하는 국가 중 하나입니다. 헬싱키 인근 누크시오 국립공원의 호수와 숲이 만나는 지점에서 채집한 이 공기는 핀란드의 '제로 오염' 환경 철학을 그대로 담고 있습니다. 맑은 호수 위를 스치는 바람과 자작나무 숲의 청량한 향이 어우러져, 북유럽의 미니멀하면서도 깊은 자연을 호흡할 수 있습니다. 사우나 후 호흡하면 핀란드식 웰니스를 완성할 수 있습니다.",
    harvestMethod: "누크시오 국립공원 호수-숲 경계지점 새벽 안개 시간대 포집",
    features: ["호수-숲 블렌딩", "자작나무 향", "새벽 안개 포집", "사우나 애프터 추천"],
    gradient: "from-violet-400 to-slate-100",
    accentColor: "#a78bfa",
    iconEmoji: "❄️",
    imageUrl: "/images/helsinki-nordic-zero.png",
    flagCode: "fi",
    options: [
      { id: "6-s", label: "Standard", size: "250ml", price: 34900 },
      { id: "6-m", label: "Premium", size: "500ml", price: 57900 },
      { id: "6-l", label: "Luxury", size: "1L", price: 99900 },
    ],
  },
  {
    id: "7",
    slug: "san-juan-tradewind-essence",
    nameKo: "후안 트레이드윈드 에센스",
    nameEn: "San Juan Tradewind Essence",
    region: "산후안, 푸에르토리코",
    country: "푸에르토리코",
    countryFlag: "🇵🇷",
    pm25: 3.1,
    oxygenLevel: 21.4,
    description: "카리브해를 가로지르는 무역풍의 따뜻하고 이국적인 향기를 담았습니다.",
    longDescription: "카리브해의 보석 푸에르토리코 산후안에서 포집한 이 공기에는 대서양의 무역풍(Trade Wind)이 카리브해를 건너오며 머금은 열대의 에너지가 담겨 있습니다. 따뜻한 해류 위를 지나며 흡수한 미세한 해양 미네랄과 열대 꽃의 향기가 은은하게 느껴집니다. 엘 모로 요새의 성벽 위에서 불어오는 바람을 담은 이 공기는 한 모금만으로도 카리브해의 여유를 느끼게 합니다.",
    harvestMethod: "엘 모로 요새 해안 성벽 최상단에서 무역풍 직접 포집",
    features: ["카리브해 무역풍", "열대 플로럴 아로마", "해양 미네랄", "비타민D 활성 보조"],
    gradient: "from-orange-400 to-amber-500",
    accentColor: "#f59e0b",
    iconEmoji: "🌴",
    imageUrl: "/images/san-juan-tradewind-essence.png",
    flagCode: "pr",
    options: [
      { id: "7-s", label: "Standard", size: "250ml", price: 31900 },
      { id: "7-m", label: "Premium", size: "500ml", price: 52900 },
      { id: "7-l", label: "Luxury", size: "1L", price: 89900 },
    ],
  },
  {
    id: "8",
    slug: "honolulu-aloha-oxygen",
    nameKo: "호놀룰루 알로하 옥시젠",
    nameEn: "Honolulu Aloha Oxygen",
    region: "호놀룰루, 하와이",
    country: "미국 (하와이)",
    countryFlag: "🇺🇸",
    pm25: 2.5,
    oxygenLevel: 21.6,
    description: "태평양 한가운데 하와이의 알로하 스피릿이 담긴 트로피컬 옥시젠입니다.",
    longDescription: "하와이 오아후 섬 호놀룰루의 마카푸우 포인트에서 채집한 이 공기는 가장 가까운 대륙에서도 3,800km나 떨어진 태평양 한가운데의 순수한 대양풍을 담고 있습니다. 화산 토양 위에 자란 열대 식물들의 향과 태평양의 깨끗한 해풍이 만나 하와이 특유의 부드럽고 따뜻한 공기를 만들어냅니다. 하와이 원주민들이 '마나(Mana, 생명의 에너지)'가 깃든 바람이라 부르는 그 공기입니다.",
    harvestMethod: "마카푸우 포인트 해안 절벽 일출 시간대 태평양 해풍 포집",
    features: ["태평양 대양풍", "화산 미네랄", "플루메리아 아로마", "마나 에너지"],
    gradient: "from-rose-500 to-orange-400",
    accentColor: "#f43f5e",
    iconEmoji: "🌺",
    imageUrl: "/images/honolulu-aloha-oxygen.jpg",
    flagCode: "us",
    options: [
      { id: "8-s", label: "Standard", size: "250ml", price: 35900 },
      { id: "8-m", label: "Premium", size: "500ml", price: 59900 },
      { id: "8-l", label: "Luxury", size: "1L", price: 104900 },
    ],
  },
  {
    id: "9",
    slug: "sapporo-snow-crystal",
    nameKo: "삿포로 스노우 크리스털",
    nameEn: "Sapporo Snow Crystal",
    region: "삿포로, 일본",
    country: "일본",
    countryFlag: "🇯🇵",
    pm25: 2.0,
    oxygenLevel: 21.8,
    description: "홋카이도의 파우더 스노우와 함께하는 겨울 숲의 크리스털 에어입니다.",
    longDescription: "일본 홋카이도 삿포로 인근 다이세쓰산 국립공원에서 채집한 이 공기는 세계 최고 품질의 파우더 스노우가 내리는 겨울에만 한정 생산됩니다. 영하 15도 이하의 극저온에서 눈 결정이 형성될 때 함께 정화되는 대기는 놀라운 청정도를 자랑합니다. 침엽수림의 은은한 향과 눈 결정의 순수함이 어우러진 이 공기는 일본의 '와비사비(侘寂)' 미학을 호흡으로 경험하게 합니다.",
    harvestMethod: "다이세쓰산 해발 1,800m 적설 시 극저온 대기 포집 (겨울 한정)",
    features: ["파우더 스노우 동반 포집", "극저온 정화", "침엽수 아로마", "겨울 한정 생산"],
    gradient: "from-sky-400 to-indigo-100",
    accentColor: "#38bdf8",
    iconEmoji: "🏔️",
    imageUrl: "/images/sapporo-snow-crystal.png",
    flagCode: "jp",
    options: [
      { id: "9-s", label: "Standard", size: "250ml", price: 39900 },
      { id: "9-m", label: "Premium", size: "500ml", price: 64900 },
      { id: "9-l", label: "Luxury", size: "1L", price: 114900 },
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function formatPrice(price: number): string {
  return `₩${price.toLocaleString("ko-KR")}`;
}
