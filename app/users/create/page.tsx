"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Save,
  User,
  Mail,
  Lock,
  Shield,
  Phone,
  Camera,
  X,
  CheckCircle2,
  Upload,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";

const CreateUserPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
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
      router.push("/users");
    }, 1500);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-gray-950 p-4 md:p-8 animate-in fade-in duration-500">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-start gap-4 mb-8">
          <Link
            href="/users"
            className="mt-1 p-2 hover:bg-white dark:hover:bg-gray-800 rounded-full transition-all text-gray-400 hover:text-gray-600 shadow-sm"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-[#0f172a] dark:text-white">
              ເພີ່ມຜູ້ໃຊ້ໃໝ່
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              ຕື່ມຂໍ້ມູນລຸ່ມນີ້ເພື່ອສ້າງບັນຊີຜູ້ໃຊ້ໃໝ່.
            </p>
          </div>
        </div>

        {/* Main Form Card */}
        <div className="bg-white dark:bg-gray-900 rounded-[32px] shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
          <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-10">
            {/* Profile Upload Section */}
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="relative">
                <div className="w-32 h-32 rounded-full border-2 border-dashed border-gray-200 dark:border-gray-700 flex items-center justify-center bg-gray-50 dark:bg-gray-800 overflow-hidden">
                  {imagePreview ? (
                    <img
                      src={imagePreview}
                      alt="Avatar"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <User className="w-12 h-12 text-gray-300" />
                  )}
                </div>
                <label className="absolute bottom-1 right-1 p-2 bg-[#009688] text-white rounded-full shadow-lg hover:bg-[#00796b] transition-all cursor-pointer border-4 border-white dark:border-gray-900">
                  <Camera className="w-4 h-4" />
                  <input
                    type="file"
                    className="hidden"
                    onChange={handleImageChange}
                    accept="image/*"
                  />
                </label>
                {imagePreview && (
                  <button
                    type="button"
                    onClick={() => setImagePreview(null)}
                    className="absolute -top-1 -right-1 p-1 bg-red-500 text-white rounded-full shadow-md hover:bg-red-600 transition-all"
                  >
                    <X className="w-3 h-3" />
                  </button>
                )}
              </div>
              <div className="text-center">
                <h3 className="font-bold text-[#0f172a] dark:text-white">
                  ອັບໂຫຼດຮູບພາບ
                </h3>
                <p className="text-xs text-gray-400 mt-1">
                  ຂະໜາດທີ່ແນະນຳ 400×400px
                </p>
              </div>
            </div>

            {/* Form Fields Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {/* Full Name */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#0f172a] dark:text-gray-300 flex items-center gap-2">
                  <User className="w-4 h-4 text-[#009688]" />
                  ຊື່ ແລະ ນາມສະກຸນ
                </label>
                <input
                  type="text"
                  placeholder="ຕົວຢ່າງ: ສົມພອນ ໄຊຍະວົງ"
                  className="w-full px-5 py-4 bg-[#f8fafc] dark:bg-gray-800 border-none rounded-2xl focus:ring-2 focus:ring-[#009688]/20 outline-none transition-all dark:text-white placeholder:text-gray-400"
                  required
                />
              </div>

              {/* Email Address */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#0f172a] dark:text-gray-300 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#009688]" />
                  ທີ່ຢູ່ອີເມວ
                </label>
                <input
                  type="email"
                  placeholder="example@mail.com"
                  className="w-full px-5 py-4 bg-[#f8fafc] dark:bg-gray-800 border-none rounded-2xl focus:ring-2 focus:ring-[#009688]/20 outline-none transition-all dark:text-white placeholder:text-gray-400"
                  required
                />
              </div>

              {/* Phone Number */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#0f172a] dark:text-gray-300 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#009688]" />
                  ເບີໂທລະສັບ
                </label>
                <input
                  type="tel"
                  placeholder="+856 20 ..."
                  className="w-full px-5 py-4 bg-[#f8fafc] dark:bg-gray-800 border-none rounded-2xl focus:ring-2 focus:ring-[#009688]/20 outline-none transition-all dark:text-white placeholder:text-gray-400"
                />
              </div>

              {/* Role */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#0f172a] dark:text-gray-300 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[#009688]" />
                  ບົດບາດ
                </label>
                <div className="relative">
                  <select className="w-full px-5 py-4 bg-[#f8fafc] dark:bg-gray-800 border-none rounded-2xl focus:ring-2 focus:ring-[#009688]/20 outline-none transition-all dark:text-white appearance-none cursor-pointer">
                    <option value="admin">Administrator</option>
                    <option value="editor">Editor</option>
                    <option value="viewer">Viewer</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#0f172a] dark:text-gray-300 flex items-center gap-2">
                  <Lock className="w-4 h-4 text-[#009688]" />
                  ລະຫັດຜ່ານ
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-5 py-4 bg-[#f8fafc] dark:bg-gray-800 border-none rounded-2xl focus:ring-2 focus:ring-[#009688]/20 outline-none transition-all dark:text-white placeholder:text-gray-400"
                  required
                />
              </div>

              {/* Confirm Password */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#0f172a] dark:text-gray-300 flex items-center gap-2">
                  <Lock className="w-4 h-4 text-[#009688]" />
                  ຢືນຢັນລະຫັດຜ່ານ
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-5 py-4 bg-[#f8fafc] dark:bg-gray-800 border-none rounded-2xl focus:ring-2 focus:ring-[#009688]/20 outline-none transition-all dark:text-white placeholder:text-gray-400"
                  required
                />
              </div>
            </div>

            {/* Account Status Toggle */}
            <div className="bg-[#f8fafc] dark:bg-gray-800/50 p-6 rounded-[24px] flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0f172a] dark:text-white text-sm">
                    ສະຖານະບັນຊີ
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    ເປີດ ຫຼື ປິດການໃຊ້ງານບັນຊີນີ້
                  </p>
                </div>
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

            {/* Form Actions */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/users"
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
                    <span>ບັນທຶກຜູ້ໃຊ້</span>
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

export default CreateUserPage;
