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

    // Mock saving process
    setTimeout(() => {
      setIsLoading(false);
      router.push("/admins");
    }, 1500);
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-gray-950 p-4 md:p-8 animate-in fade-in duration-500">
      <div className="max-w-10xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-start gap-4 mb-8">
          <Link
            href="/admins"
            className="mt-1 p-2 hover:bg-white dark:hover:bg-gray-800 rounded-full transition-all text-gray-400 hover:text-gray-600 shadow-sm"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-[#0f172a] dark:text-white">
              ເພີ່ມຜູ້ດູແລລະບົບໃໝ່
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              ກະລຸນາປ້ອນຂໍ້ມູນລຸ່ມນີ້ເພື່ອສ້າງບັນຊີຜູ້ດູແລລະບົບໃໝ່.
            </p>
          </div>
        </div>

        {/* Main Form Card */}
        <div className="bg-white dark:bg-gray-900 rounded-[32px] shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
          <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-10">
            {/* Icon Section */}
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="w-24 h-24 rounded-3xl bg-teal-50 dark:bg-teal-900/20 flex items-center justify-center text-teal-600 dark:text-teal-400 border border-teal-100 dark:border-teal-900/30 shadow-inner">
                <ShieldCheck className="w-10 h-10" />
              </div>
              <div className="text-center">
                <h3 className="font-bold text-[#0f172a] dark:text-white">
                  ຂໍ້ມູນຜູ້ດູແລ
                </h3>
                <p className="text-xs text-gray-400 mt-1">
                  ກະລຸນາລະບຸຂໍ້ມູນສ່ວນຕົວ ແລະ ສິດທິການເຂົ້າເຖິງ
                </p>
              </div>
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Full Name */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#0f172a] dark:text-gray-300 flex items-center gap-2">
                  <User className="w-4 h-4 text-[#009688]" />
                  ຊື່ ແລະ ນາມສະກຸນ
                </label>
                <input
                  type="text"
                  placeholder="ຕົວຢ່າງ: ສົມສັກ ໄຊຍະວົງ"
                  className="w-full px-5 py-4 bg-[#f8fafc] dark:bg-gray-800 border-none rounded-2xl focus:ring-2 focus:ring-[#009688]/20 outline-none transition-all dark:text-white placeholder:text-gray-400"
                  required
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#0f172a] dark:text-gray-300 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#009688]" />
                  ອີເມວ
                </label>
                <input
                  type="email"
                  placeholder="admin@example.com"
                  className="w-full px-5 py-4 bg-[#f8fafc] dark:bg-gray-800 border-none rounded-2xl focus:ring-2 focus:ring-[#009688]/20 outline-none transition-all dark:text-white placeholder:text-gray-400"
                  required
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#0f172a] dark:text-gray-300 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#009688]" />
                  ເບີໂທລະສັບ
                </label>
                <input
                  type="tel"
                  placeholder="020 5555 6666"
                  className="w-full px-5 py-4 bg-[#f8fafc] dark:bg-gray-800 border-none rounded-2xl focus:ring-2 focus:ring-[#009688]/20 outline-none transition-all dark:text-white placeholder:text-gray-400"
                  required
                />
              </div>

              {/* Role Selection */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#0f172a] dark:text-gray-300 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#009688]" />
                  ບົດບາດ (Role)
                </label>
                <select className="w-full px-5 py-4 bg-[#f8fafc] dark:bg-gray-800 border-none rounded-2xl focus:ring-2 focus:ring-[#009688]/20 outline-none transition-all dark:text-white appearance-none cursor-pointer">
                  <option value="super_admin">Super Admin</option>
                  <option value="manager">Manager</option>
                  <option value="editor">Editor</option>
                </select>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#0f172a] dark:text-gray-300 flex items-center gap-2">
                  <Lock className="w-4 h-4 text-[#009688]" />
                  ລະຫັດຜ່ານ
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="w-full px-5 py-4 bg-[#f8fafc] dark:bg-gray-800 border-none rounded-2xl focus:ring-2 focus:ring-[#009688]/20 outline-none transition-all dark:text-white placeholder:text-gray-400"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Status Toggle */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#0f172a] dark:text-gray-300 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#009688]" />
                  ສະຖານະການໃຊ້ງານ
                </label>
                <div className="bg-[#f8fafc] dark:bg-gray-800/50 p-4 rounded-2xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        isActive
                          ? "bg-emerald-100 dark:bg-emerald-900/30"
                          : "bg-red-100 dark:bg-red-900/30"
                      }`}
                    >
                      {isActive ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      ) : (
                        <XCircle className="w-4 h-4 text-red-600" />
                      )}
                    </div>
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                      {isActive ? "ເປີດໃຊ້ງານ" : "ປິດໃຊ້ງານ"}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsActive(!isActive)}
                    className={`w-12 h-6 rounded-full transition-all relative ${
                      isActive ? "bg-[#009688]" : "bg-gray-300"
                    }`}
                  >
                    <div
                      className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${
                        isActive ? "right-1" : "left-1"
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Form Actions */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/admins"
                className="flex-1 py-4 bg-[#f8fafc] dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-2xl font-bold text-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
              >
                ຍົກເລີກ
              </Link>
              <button
                type="submit"
                disabled={isLoading}
                className="flex-1 py-4 bg-[#009688] hover:bg-[#00796b] text-white rounded-2xl font-bold text-lg shadow-lg shadow-[#009688]/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>
                    <Save className="w-5 h-5" />
                    <span>ບັນທຶກຜູ້ດູແລ</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateAdminPage;
