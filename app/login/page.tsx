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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[35%] h-[35%] bg-teal-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[35%] h-[35%] bg-blue-500/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="w-full max-w-md bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 overflow-hidden relative z-10 p-6 sm:p-8">
        <div className="w-full space-y-6">
          {/* Header */}
          <div className="flex flex-col items-center text-center space-y-2">
            <div className="w-12 h-12 bg-teal-600 rounded-xl flex items-center justify-center shadow-md shadow-teal-500/20 mb-1">
              <LayoutDashboard className="text-white w-6 h-6" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
              ເຂົ້າສູ່ລະບົບ
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">
              ກະລຸນາປ້ອນຂໍ້ມູນເພື່ອເຂົ້າເຖິງແຜງຄວບຄຸມ
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900/30 rounded-xl text-red-600 dark:text-red-400 text-xs font-semibold flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></div>
                {error}
              </div>
            )}

            {/* Username Input */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-700 dark:text-gray-300 ml-1 uppercase tracking-wider">
                ຊື່ຜູ້ໃຊ້
              </label>
              <div className="relative group">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-teal-600 transition-colors" />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="admin"
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 outline-none transition-all text-sm dark:text-white placeholder:text-gray-400"
                  required
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between ml-1">
                <label className="text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                  ລະຫັດຜ່ານ
                </label>
                <button
                  type="button"
                  className="text-xs font-medium text-teal-600 hover:text-teal-700 transition-colors"
                >
                  ລືມລະຫັດຜ່ານ?
                </button>
              </div>
              <div className="relative group">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-teal-600 transition-colors" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-10 py-2.5 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 outline-none transition-all text-sm dark:text-white placeholder:text-gray-400"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-2.5 bg-teal-600 hover:bg-teal-700 text-white rounded-xl font-medium text-sm shadow-md shadow-teal-600/20 transition-all active:scale-[0.99] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group cursor-pointer mt-2"
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
          <div className="pt-4 border-t border-gray-100 dark:border-gray-800 text-center">
            <p className="text-gray-500 dark:text-gray-400 text-xs">
              ຍັງບໍ່ມີບັນຊີ?{" "}
              <Link
                href="/register"
                className="text-teal-600 font-semibold hover:text-teal-700 transition-colors ml-1"
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
