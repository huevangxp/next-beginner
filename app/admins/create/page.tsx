"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Save,
  ShieldCheck,
  User,
  Mail,
  Phone,
  Lock,
  Eye,
  EyeOff,
  CheckCircle2,
  XCircle,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";

const CreateAdminPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      router.push("/admins");
    }, 1000);
  };

  if (!mounted) return null;

  return (
    <div className="space-y-6 animate-in fade-in duration-500 pb-8">
      {/* Header */}
      <div className="flex items-center gap-3">
        <Link
          href="/admins"
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-all text-gray-500 hover:text-gray-900 dark:hover:text-white"
        >
          <ArrowLeft className="w-4 h-4" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
            ເພີ່ມຜູ້ດູແລລະບົບໃໝ່
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-0.5">
            ກະລຸນາປ້ອນຂໍ້ມູນລຸ່ມນີ້ເພື່ອສ້າງບັນຊີຜູ້ດູແລລະບົບໃໝ່
          </p>
        </div>
      </div>

      {/* Main Form Card */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
        <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
          {/* Icon Header */}
          <div className="flex flex-col items-center justify-center space-y-2">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center text-white shadow-md shadow-teal-600/20">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div className="text-center">
              <h3 className="text-sm font-bold text-gray-900 dark:text-white">
                ຂໍ້ມູນຜູ້ດູແລ
              </h3>
              <p className="text-[11px] text-gray-400 mt-0.5">
                ກະລຸນາລະບຸຂໍ້ມູນສ່ວນຕົວ ແລະ ສິດທິການເຂົ້າເຖິງ
              </p>
            </div>
          </div>

          {/* Form Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Full Name */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-teal-600" />
                <span>ຊື່ ແລະ ນາມສະກຸນ</span>
              </label>
              <input
                type="text"
                placeholder="ຕົວຢ່າງ: ສົມສັກ ໄຊຍະວົງ"
                className="w-full px-3.5 py-2 bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 outline-none transition-all dark:text-white placeholder:text-gray-400"
                required
              />
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-teal-600" />
                <span>ອີເມວ</span>
              </label>
              <input
                type="email"
                placeholder="admin@example.com"
                className="w-full px-3.5 py-2 bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 outline-none transition-all dark:text-white placeholder:text-gray-400"
                required
              />
            </div>

            {/* Phone */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-teal-600" />
                <span>ເບີໂທລະສັບ</span>
              </label>
              <input
                type="tel"
                placeholder="020 5555 6666"
                className="w-full px-3.5 py-2 bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 outline-none transition-all dark:text-white placeholder:text-gray-400"
                required
              />
            </div>

            {/* Role Selection */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
                <span>ບົດບາດ (Role)</span>
              </label>
              <div className="relative">
                <select className="w-full px-3.5 py-2 bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 outline-none transition-all dark:text-white appearance-none cursor-pointer">
                  <option value="super_admin">Super Admin</option>
                  <option value="manager">Manager</option>
                  <option value="editor">Editor</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-teal-600" />
                <span>ລະຫັດຜ່ານ</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full pl-3.5 pr-9 py-2 bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 outline-none transition-all dark:text-white placeholder:text-gray-400"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Status Toggle */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
                <span>ສະຖານະການໃຊ້ງານ</span>
              </label>
              <div className="bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 px-3.5 py-2 rounded-xl flex items-center justify-between h-[42px]">
                <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                  {isActive ? "ເປີດໃຊ້ງານ" : "ປິດໃຊ້ງານ"}
                </span>
                <button
                  type="button"
                  onClick={() => setIsActive(!isActive)}
                  className={`w-9 h-5 rounded-full transition-all relative cursor-pointer ${
                    isActive ? "bg-teal-600" : "bg-gray-300 dark:bg-gray-700"
                  }`}
                >
                  <div
                    className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition-all ${
                      isActive ? "right-0.5" : "left-0.5"
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex items-center gap-3 pt-2">
            <Link
              href="/admins"
              className="flex-1 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl text-xs sm:text-sm font-semibold text-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-all cursor-pointer"
            >
              ຍົກເລີກ
            </Link>
            <button
              type="submit"
              disabled={isLoading}
              className="flex-1 py-2 bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white rounded-xl text-xs sm:text-sm font-semibold shadow-md shadow-teal-600/20 transition-all active:scale-[0.98] flex items-center justify-center gap-1.5 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
            >
              {isLoading ? (
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  <span>ບັນທຶກຜູ້ດູແລ</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAdminPage;
