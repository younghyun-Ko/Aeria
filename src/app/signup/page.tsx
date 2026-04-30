"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { signup, user } = useAuth();
  const router = useRouter();

  if (user) {
    router.push("/");
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    if (!name || !email || !password) {
      setError("모든 필드를 입력해주세요.");
      setIsLoading(false);
      return;
    }

    if (password.length < 8) {
      setError("비밀번호는 최소 8자 이상이어야 합니다.");
      setIsLoading(false);
      return;
    }

    try {
      const success = await signup(name, email, password);
      if (success) {
        router.push("/login");
      } else {
        setError("이미 가입된 이메일이거나 오류가 발생했습니다.");
      }
    } catch (err) {
      setError("회원가입 중 오류가 발생했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-[80vh] items-center justify-center px-4">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-1/4 h-80 w-80 rounded-full bg-blue-500/10 blur-[100px]" />
        <div className="absolute bottom-1/3 left-1/4 h-80 w-80 rounded-full bg-sky-500/10 blur-[100px]" />
      </div>

      <div className="relative w-full max-w-md animate-slide-up mt-8">
        <div className="rounded-2xl border border-zinc-200 bg-white/90 backdrop-blur-xl p-8 shadow-2xl">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="text-4xl font-black tracking-tight bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">Aeria</div>
            <h1 className="mt-4 text-2xl font-extrabold text-zinc-900">회원가입</h1>
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
              <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-2">
                닉네임
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="멋진 닉네임"
                className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 outline-none transition-all focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50"
              />
            </div>

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
              {isLoading ? "가입 중..." : "회원가입"}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-zinc-500">
              이미 계정이 있으신가요?{" "}
              <Link href="/login" className="text-blue-600 hover:text-blue-500 font-medium transition-colors">
                로그인
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
