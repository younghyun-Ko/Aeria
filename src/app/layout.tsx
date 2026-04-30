import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

export const metadata: Metadata = {
  title: "AirMall — 세계 프리미엄 공기 쇼핑몰",
  description:
    "세계보건기구(WHO)의 엄격한 초미세먼지(PM2.5) 권고 기준(5µg/m³ 이하)을 충족하는 전 세계 프리미엄 공기를 만나보세요.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
