/** @type {import('next').NextConfig} */
const nextConfig = {
  // eslint 검사 무시
  eslint: {
    ignoreDuringBuilds: true,
  },
  // typescript 에러 무시
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig; // 만약 파일명이 .mjs면 export default nextConfig; 로 쓰셈
