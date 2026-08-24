"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useAppContext } from "../context/AppContext";
import {
  Lock,
  User,
  Eye,
  EyeOff,
  LayoutDashboard,
  ArrowRight,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { login } = useAppContext();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Mock authentication
    setTimeout(() => {
      if (username === "admin" && password === "password") {
        login(username);
        router.push("/");
      } else {
        setError("ຊື່ຜູ້ໃຊ້ ຫຼື ລະຫັດຜ່ານບໍ່ຖືກຕ້ອງ");
        setIsLoading(false);
      }
    }, 1000);
  };

  const handleFillDemo = () => {
    setUsername("admin");
    setPassword("password");
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* 3D Ambient Background Lighting Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute -bottom-24 -right-24 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "6s" }}
        ></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-600/10 rounded-full blur-[120px] pointer-events-none"></div>

        {/* 3D Geometric Floating Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00968808_1px,transparent_1px),linear-gradient(to_bottom,#00968808_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>

      {/* Main 3D Card */}
      <div className="w-full max-w-md bg-slate-900/90 backdrop-blur-2xl rounded-3xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8),0_0_30px_rgba(13,148,136,0.2)] border border-slate-700/60 overflow-hidden relative z-10 p-6 sm:p-8 card-3d">
        {/* Subtle Top Glass Border Accent */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-teal-400/80 to-transparent"></div>

        <div className="w-full space-y-6">
          {/* 3D Icon & Header */}
          <div className="flex flex-col items-center text-center space-y-2.5">
            <div className="relative group">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-400 via-teal-600 to-teal-800 p-0.5 shadow-lg shadow-teal-500/30 icon-3d flex items-center justify-center">
                <div className="w-full h-full bg-gradient-to-br from-teal-600 to-teal-800 rounded-[14px] flex items-center justify-center text-white shadow-inner">
                  <LayoutDashboard className="w-8 h-8 drop-shadow-md" />
                </div>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-slate-900 shadow-md"></div>
            </div>

            <div>
              <h1 className="text-2xl font-black text-white tracking-tight flex items-center justify-center gap-2">
                <span>ເຂົ້າສູ່ລະບົບ</span>
                <Sparkles className="w-4 h-4 text-teal-400" />
              </h1>
              <p className="text-slate-400 text-xs sm:text-sm mt-0.5">
                ແຜງຄວບຄຸມລະບົບຄຸ້ມຄອງ (Admin Console)
              </p>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-xs font-semibold flex items-center gap-2 animate-in fade-in">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></div>
              <span>{error}</span>
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Username Input */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-slate-300 ml-1 uppercase tracking-wider">
                ຊື່ຜູ້ໃຊ້ (Username)
              </label>
              <div className="relative group">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-teal-400 transition-colors" />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="admin"
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-800/70 border border-slate-700/80 rounded-xl focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 outline-none transition-all text-xs sm:text-sm text-white placeholder:text-slate-500 shadow-inner"
                  required
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between ml-1">
                <label className="text-[11px] font-bold text-slate-300 uppercase tracking-wider">
                  ລະຫັດຜ່ານ (Password)
                </label>
                <span className="text-[11px] text-teal-400 font-medium">
                  ຄ່າເລີ່ມຕົ້ນ: password
                </span>
              </div>
              <div className="relative group">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-teal-400 transition-colors" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-10 py-2.5 bg-slate-800/70 border border-slate-700/80 rounded-xl focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 outline-none transition-all text-xs sm:text-sm text-white placeholder:text-slate-500 shadow-inner"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 transition-colors cursor-pointer"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Demo Quick Fill Helper */}
            <button
              type="button"
              onClick={handleFillDemo}
              className="w-full py-1.5 px-3 bg-teal-500/10 hover:bg-teal-500/20 border border-teal-500/30 rounded-xl text-[11px] font-semibold text-teal-300 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
              <span>ຄລິກເພື່ອຕື່ມຂໍ້ມູນທົດລອງ (admin / password)</span>
            </button>

            {/* 3D Action Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-2.5 bg-gradient-to-r from-teal-500 via-teal-600 to-teal-700 hover:from-teal-600 hover:to-teal-800 text-white rounded-xl font-bold text-xs sm:text-sm btn-3d transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group cursor-pointer mt-3"
            >
              {isLoading ? (
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                <>
                  <span>ເຂົ້າສູ່ລະບົບດຽວນີ້</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          {/* Footer */}
          <div className="pt-4 border-t border-slate-800 text-center">
            <p className="text-slate-400 text-xs">
              ຍັງບໍ່ມີບັນຊີ?{" "}
              <Link
                href="/register"
                className="font-bold text-teal-400 hover:text-teal-300 hover:underline transition-colors"
              >
                ລົງທະບຽນໃໝ່
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
