"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login, user } = useAuth();
  const router = useRouter();

  if (user) {
    router.push("/");
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    if (!email || !password) {
      setError("이메일과 비밀번호를 입력해주세요.");
      setIsLoading(false);
      return;
    }

    try {
      const success = await login(email, password);
      if (success) {
        router.push("/");
        router.refresh();
      } else {
        setError("이메일 또는 비밀번호가 올바르지 않습니다.");
      }
    } catch (err) {
      setError("로그인 중 오류가 발생했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-[80vh] items-center justify-center px-4">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 h-80 w-80 rounded-full bg-blue-500/10 blur-[100px]" />
        <div className="absolute bottom-1/3 right-1/4 h-80 w-80 rounded-full bg-sky-500/10 blur-[100px]" />
      </div>

      <div className="relative w-full max-w-md animate-slide-up mt-8">
        <div className="rounded-2xl border border-zinc-200 bg-white/90 backdrop-blur-xl p-8 shadow-2xl">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="text-4xl font-black tracking-tight bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">Aeria</div>
            <h1 className="mt-4 text-2xl font-extrabold text-zinc-900">로그인</h1>
            <p className="mt-3 text-sm text-zinc-500 leading-relaxed font-light">
              전 세계 9개 지역에서 엄선한 최상급 공기를 만나보세요.<br />
              각 상품은 WHO PM2.5 기준을 통과한 인증 공기입니다.
            </p>
          </div>

          {/* Error */}
          {error && (
            <div className="mb-6 rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400 animate-fade-in">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-2">
                이메일
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 outline-none transition-all focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-zinc-400 mb-2">
                비밀번호
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 outline-none transition-all focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 py-3.5 text-sm font-bold text-white hover:from-blue-500 hover:to-sky-400 transition-all hover:shadow-lg hover:shadow-blue-500/25 active:scale-[0.98] disabled:opacity-50"
            >
              {isLoading ? "로그인 중..." : "로그인"}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-zinc-500">
              계정이 없으신가요?{" "}
              <Link href="/signup" className="text-blue-600 hover:text-blue-500 font-medium transition-colors">
                회원가입
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
