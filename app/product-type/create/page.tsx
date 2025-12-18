"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Save,
  Layers,
  FileText,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import Link from "next/link";

const CreateProductTypePage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [mounted, setMounted] = useState(false);
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
      router.push("/product-type");
    }, 1500);
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-gray-950 p-4 md:p-8 animate-in fade-in duration-500">
      <div className="max-w-12xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-start gap-4 mb-8">
          <Link
            href="/product-type"
            className="mt-1 p-2 hover:bg-white dark:hover:bg-gray-800 rounded-full transition-all text-gray-400 hover:text-gray-600 shadow-sm"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-[#0f172a] dark:text-white">
              ເພີ່ມປະເພດສິນຄ້າໃໝ່
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              ກະລຸນາປ້ອນຂໍ້ມູນລຸ່ມນີ້ເພື່ອສ້າງປະເພດສິນຄ້າໃໝ່ໃນລະບົບ.
            </p>
          </div>
        </div>

        {/* Main Form Card */}
        <div className="bg-white dark:bg-gray-900 rounded-[32px] shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
          <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-10">
            {/* Icon Section */}
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="w-24 h-24 rounded-3xl bg-teal-50 dark:bg-teal-900/20 flex items-center justify-center text-teal-600 dark:text-teal-400 border border-teal-100 dark:border-teal-900/30 shadow-inner">
                <Layers className="w-10 h-10" />
              </div>
              <div className="text-center">
                <h3 className="font-bold text-[#0f172a] dark:text-white">
                  ຂໍ້ມູນປະເພດສິນຄ້າ
                </h3>
                <p className="text-xs text-gray-400 mt-1">
                  ກະລຸນາລະບຸຊື່ ແລະ ຄຳອະທິບາຍໃຫ້ຊັດເຈນ
                </p>
              </div>
            </div>

            {/* Form Fields */}
            <div className="space-y-6">
              {/* Type Name */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#0f172a] dark:text-gray-300 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#009688]" />
                  ຊື່ປະເພດສິນຄ້າ
                </label>
                <input
                  type="text"
                  placeholder="ຕົວຢ່າງ: ເຄື່ອງເອເລັກໂຕຣນິກ"
                  className="w-full px-5 py-4 bg-[#f8fafc] dark:bg-gray-800 border-none rounded-2xl focus:ring-2 focus:ring-[#009688]/20 outline-none transition-all dark:text-white placeholder:text-gray-400"
                  required
                />
              </div>

              {/* Description */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#0f172a] dark:text-gray-300 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#009688]" />
                  ຄຳອະທິບາຍ
                </label>
                <textarea
                  placeholder="ລະບຸລາຍລະອຽດເພີ່ມເຕີມກ່ຽວກັບປະເພດສິນຄ້ານີ້..."
                  rows={4}
                  className="w-full px-5 py-4 bg-[#f8fafc] dark:bg-gray-800 border-none rounded-2xl focus:ring-2 focus:ring-[#009688]/20 outline-none transition-all dark:text-white placeholder:text-gray-400 resize-none"
                />
              </div>

              {/* Status Toggle */}
              <div className="bg-[#f8fafc] dark:bg-gray-800/50 p-6 rounded-[24px] flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      isActive
                        ? "bg-emerald-100 dark:bg-emerald-900/30"
                        : "bg-red-100 dark:bg-red-900/30"
                    }`}
                  >
                    {isActive ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-600" />
                    )}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0f172a] dark:text-white text-sm">
                      ສະຖານະການໃຊ້ງານ
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {isActive ? "ກຳລັງເປີດໃຊ້ງານ" : "ປິດການໃຊ້ງານຊົ່ວຄາວ"}
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
            </div>

            {/* Form Actions */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/product-type"
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
                    <span>ບັນທຶກປະເພດສິນຄ້າ</span>
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

export default CreateProductTypePage;
