"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Lock,
  User,
  Mail,
  Eye,
  EyeOff,
  LayoutDashboard,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

import Image from "next/image";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("ລະຫັດຜ່ານບໍ່ກົງກັນ");
      return;
    }

    setIsLoading(true);

    // Mock registration
    setTimeout(() => {
      setIsLoading(false);
      router.push("/login");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 flex items-center justify-center p-0 md:p-6 relative overflow-hidden">
      {/* Background Decorative Elements */}
      {/* <img
        src="~/assets/images/login.png"
        alt="Auth Illustration"
        className="object-cover opacity-90 scale-x-[-1]"
      /> */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-teal-500/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="w-full max-w-6xl bg-white dark:bg-gray-900 rounded-none md:rounded-[40px] shadow-2xl border border-gray-100 dark:border-gray-800 overflow-hidden flex flex-col md:flex-row-reverse min-h-[700px] relative z-10">
        {/* Right Side: Illustration */}
        <div className="hidden md:flex md:w-1/2 relative items-center justify-center overflow-hidden border-l border-gray-50 dark:border-gray-800">
          <Image
            src="~/assets/images/auth.png"
            alt="Auth Illustration"
            className="object-cover opacity-90 scale-x-[-1]"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-teal-600/20 backdrop-blur-[2px]"></div>

          <div className="relative z-10 text-center space-y-8 animate-in fade-in slide-in-from-right-8 duration-1000 p-12">
            <div className="w-24 h-24 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl shadow-2xl flex items-center justify-center mx-auto transform -rotate-12 hover:rotate-0 transition-transform duration-500 border border-white/50">
              <User className="w-12 h-12 text-blue-600" />
            </div>
            <div className="space-y-4">
              <h2 className="text-4xl font-black text-white tracking-tight leading-tight drop-shadow-lg">
                ເລີ່ມຕົ້ນການເດີນທາງ <br />
                <span className="text-blue-300">ໄປພ້ອມກັບພວກເຮົາ</span>
              </h2>
              <p className="text-white/80 text-lg max-w-md mx-auto leading-relaxed drop-shadow-md">
                ສ້າງບັນຊີຂອງທ່ານໃນມື້ນີ້
                ເພື່ອເຂົ້າເຖິງເຄື່ອງມືການຈັດການທີ່ດີທີ່ສຸດ ແລະ
                ເພີ່ມປະສິດທິພາບໃຫ້ກັບທຸລະກິດຂອງທ່ານ.
              </p>
            </div>

            {/* Features List */}
            <div className="flex flex-col gap-3 max-w-xs mx-auto pt-4">
              <div className="flex items-center gap-3 bg-white/20 dark:bg-gray-800/20 backdrop-blur-md p-3 rounded-xl border border-white/30 shadow-sm text-left">
                <div className="w-8 h-8 bg-blue-100/20 rounded-lg flex items-center justify-center text-white font-bold">
                  ✓
                </div>
                <p className="text-sm font-bold text-white">
                  ຈັດການສິນຄ້າບໍ່ຈຳກັດ
                </p>
              </div>
              <div className="flex items-center gap-3 bg-white/20 dark:bg-gray-800/20 backdrop-blur-md p-3 rounded-xl border border-white/30 shadow-sm text-left">
                <div className="w-8 h-8 bg-teal-100/20 rounded-lg flex items-center justify-center text-white font-bold">
                  ✓
                </div>
                <p className="text-sm font-bold text-white">
                  ລາຍງານການຂາຍລະອຽດ
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Left Side: Form */}
        <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center relative bg-white dark:bg-gray-900">
          <div className="max-w-md mx-auto w-full space-y-8">
            <div className="flex flex-col items-center md:items-start space-y-4 animate-in fade-in slide-in-from-top-4 duration-700">
              <div className="md:hidden w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-xl shadow-blue-500/20 mb-2">
                <LayoutDashboard className="text-white w-8 h-8" />
              </div>
              <h1 className="text-4xl font-black text-gray-900 dark:text-white tracking-tight">
                ລົງທະບຽນໃໝ່
              </h1>
              <p className="text-gray-500 dark:text-gray-400 font-medium">
                ຕື່ມຂໍ້ມູນລຸ່ມນີ້ເພື່ອສ້າງບັນຊີຜູ້ໃຊ້ໃໝ່
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
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
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="admin"
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600 outline-none transition-all dark:text-white placeholder:text-gray-400 font-medium"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-black text-gray-700 dark:text-gray-300 ml-1 uppercase tracking-wider">
                  ອີເມວ
                </label>
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="example@mail.com"
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600 outline-none transition-all dark:text-white placeholder:text-gray-400 font-medium"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-black text-gray-700 dark:text-gray-300 ml-1 uppercase tracking-wider">
                    ລະຫັດຜ່ານ
                  </label>
                  <div className="relative group">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600 outline-none transition-all dark:text-white placeholder:text-gray-400 font-medium text-sm"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-black text-gray-700 dark:text-gray-300 ml-1 uppercase tracking-wider">
                    ຢືນຢັນ
                  </label>
                  <div className="relative group">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
                    <input
                      type={showPassword ? "text" : "password"}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600 outline-none transition-all dark:text-white placeholder:text-gray-400 font-medium text-sm"
                      required
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black text-lg shadow-2xl shadow-blue-500/30 transition-all active:scale-[0.98] flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed group"
              >
                {isLoading ? (
                  <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>
                    <span>ລົງທະບຽນດຽວນີ້</span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </>
                )}
              </button>
            </form>

            <div className="pt-8 border-t border-gray-100 dark:border-gray-800 text-center">
              <p className="text-gray-500 dark:text-gray-400 font-medium">
                ມີບັນຊີແລ້ວບໍ?{" "}
                <Link
                  href="/login"
                  className="text-blue-600 font-black hover:text-blue-700 transition-colors ml-1"
                >
                  ເຂົ້າສູ່ລະບົບ
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
