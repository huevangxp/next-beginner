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

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 flex items-center justify-center p-0 md:p-6 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-teal-500/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="w-full max-w-6xl bg-white dark:bg-gray-900 rounded-none md:rounded-[40px] shadow-2xl border border-gray-100 dark:border-gray-800 overflow-hidden flex flex-col md:flex-row min-h-[700px] relative z-10">
        {/* Left Side: Illustration */}
        <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-teal-500/10 to-blue-500/10 relative items-center justify-center p-12 overflow-hidden border-r border-gray-50 dark:border-gray-800">
          <div className="absolute inset-0 opacity-40">
            <div className="absolute top-20 left-20 w-64 h-64 bg-teal-400 rounded-full blur-[100px] animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-64 h-64 bg-blue-400 rounded-full blur-[100px] animate-pulse delay-700"></div>
          </div>

          <div className="relative z-10 text-center space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000">
            <div className="w-24 h-24 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl flex items-center justify-center mx-auto transform rotate-12 hover:rotate-0 transition-transform duration-500">
              <LayoutDashboard className="w-12 h-12 text-teal-600" />
            </div>
            <div className="space-y-4">
              <h2 className="text-4xl font-black text-gray-900 dark:text-white tracking-tight leading-tight">
                ຈັດການທຸລະກິດ <br />
                <span className="text-teal-600">ຢ່າງມືອາຊີບ</span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-lg max-w-md mx-auto leading-relaxed">
                ລະບົບຈັດການຫຼັງບ້ານທີ່ທັນສະໄໝ ພ້ອມເຄື່ອງມືທີ່ຄົບຄັນ
                ເພື່ອຊ່ວຍໃຫ້ທຸລະກິດຂອງທ່ານເຕີບໂຕ.
              </p>
            </div>

            {/* Stats Preview */}
            <div className="grid grid-cols-2 gap-4 pt-8">
              <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-md p-4 rounded-2xl border border-white/50 shadow-sm">
                <p className="text-2xl font-bold text-teal-600">99.9%</p>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">
                  Uptime
                </p>
              </div>
              <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-md p-4 rounded-2xl border border-white/50 shadow-sm">
                <p className="text-2xl font-bold text-blue-600">24/7</p>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">
                  Support
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center relative bg-white dark:bg-gray-900">
          <div className="max-w-md mx-auto w-full space-y-10">
            <div className="flex flex-col items-center md:items-start space-y-4 animate-in fade-in slide-in-from-top-4 duration-700">
              <div className="md:hidden w-16 h-16 bg-teal-600 rounded-2xl flex items-center justify-center shadow-xl shadow-teal-500/20 mb-2">
                <LayoutDashboard className="text-white w-8 h-8" />
              </div>
              <h1 className="text-4xl font-black text-gray-900 dark:text-white tracking-tight">
                ເຂົ້າສູ່ລະບົບ
              </h1>
              <p className="text-gray-500 dark:text-gray-400 font-medium">
                ກະລຸນາປ້ອນຂໍ້ມູນເພື່ອເຂົ້າເຖິງແຜງຄວບຄຸມ
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900/30 rounded-2xl text-red-600 dark:text-red-400 text-sm font-bold animate-in shake duration-300 flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></div>
                  {error}
                </div>
              )}

              <div className="space-y-2">
                <label className="text-sm font-black text-gray-700 dark:text-gray-300 ml-1 uppercase tracking-wider">
                  ຊື່ຜູ້ໃຊ້
                </label>
                <div className="relative group">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-teal-600 transition-colors" />
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="admin"
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 rounded-2xl focus:ring-4 focus:ring-teal-500/10 focus:border-teal-600 outline-none transition-all dark:text-white placeholder:text-gray-400 font-medium"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between ml-1">
                  <label className="text-sm font-black text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                    ລະຫັດຜ່ານ
                  </label>
                  <button
                    type="button"
                    className="text-xs font-black text-teal-600 hover:text-teal-700 transition-colors uppercase tracking-widest"
                  >
                    ລືມລະຫັດຜ່ານ?
                  </button>
                </div>
                <div className="relative group">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-teal-600 transition-colors" />
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-12 pr-12 py-4 bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 rounded-2xl focus:ring-4 focus:ring-teal-500/10 focus:border-teal-600 outline-none transition-all dark:text-white placeholder:text-gray-400 font-medium"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-5 bg-teal-600 hover:bg-teal-700 text-white rounded-2xl font-black text-lg shadow-2xl shadow-teal-500/30 transition-all active:scale-[0.98] flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed group"
              >
                {isLoading ? (
                  <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>
                    <span>ເຂົ້າສູ່ລະບົບດຽວນີ້</span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </>
                )}
              </button>
            </form>

            <div className="pt-8 border-t border-gray-100 dark:border-gray-800 text-center">
              <p className="text-gray-500 dark:text-gray-400 font-medium">
                ຍັງບໍ່ມີບັນຊີ?{" "}
                <Link
                  href="/register"
                  className="text-teal-600 font-black hover:text-teal-700 transition-colors ml-1"
                >
                  ລົງທະບຽນໃໝ່
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
