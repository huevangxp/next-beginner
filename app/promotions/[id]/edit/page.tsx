"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import {
  ArrowLeft,
  Save,
  Tag,
  Percent,
  Calendar,
  CheckCircle2,
  Zap,
} from "lucide-react";
import Link from "next/link";

const EditPromotionPage = () => {
  const router = useRouter();
  const params = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isActive, setIsActive] = useState(true);

  const [promoData, setPromoData] = useState({
    name: "ປີໃໝ່ລາວ 2024",
    code: "LAONEWYEAR",
    type: "Percentage",
    value: "20",
    startDate: "2024-04-01",
    endDate: "2024-04-20",
  });

  useEffect(() => {
    setMounted(true);
  }, [params.id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      router.push("/promotions");
    }, 1000);
  };

  if (!mounted) return null;

  return (
    <div className="space-y-6 animate-in fade-in duration-500 pb-8">
      {/* Header */}
      <div className="flex items-center gap-3">
        <Link
          href="/promotions"
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-all text-gray-500 hover:text-gray-900 dark:hover:text-white"
        >
          <ArrowLeft className="w-4 h-4" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
            ແກ້ໄຂໂປຣໂມຊັ່ນ
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-0.5">
            ອັບເດດຂໍ້ມູນ ແລະ ເງື່ອນໄຂຂອງໂປຣໂມຊັ່ນ #{params.id}
          </p>
        </div>
      </div>

      {/* Main Form Card */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
        <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
          {/* Icon Header */}
          <div className="flex flex-col items-center justify-center space-y-2">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center text-white shadow-md shadow-teal-600/20">
              <Tag className="w-8 h-8" />
            </div>
            <div className="text-center">
              <h3 className="text-sm font-bold text-gray-900 dark:text-white">
                ແກ້ໄຂຂໍ້ມູນໂປຣໂມຊັ່ນ
              </h3>
              <p className="text-[11px] text-gray-400 mt-0.5">
                ປ່ຽນແປງລະຫັດ ຫຼື ມູນຄ່າສ່ວນຫຼຸດ
              </p>
            </div>
          </div>

          {/* Form Fields */}
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Promo Name */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-teal-600" />
                  <span>ຊື່ໂປຣໂມຊັ່ນ</span>
                </label>
                <input
                  type="text"
                  value={promoData.name}
                  onChange={(e) =>
                    setPromoData({ ...promoData, name: e.target.value })
                  }
                  className="w-full px-3.5 py-2 bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 outline-none transition-all dark:text-white placeholder:text-gray-400"
                  required
                />
              </div>

              {/* Promo Code */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-1.5">
                  <Tag className="w-3.5 h-3.5 text-teal-600" />
                  <span>ລະຫັດຄູປອງ</span>
                </label>
                <input
                  type="text"
                  value={promoData.code}
                  onChange={(e) =>
                    setPromoData({ ...promoData, code: e.target.value })
                  }
                  className="w-full px-3.5 py-2 bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 outline-none transition-all dark:text-white placeholder:text-gray-400 font-mono uppercase"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Discount Type */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-1.5">
                  <Percent className="w-3.5 h-3.5 text-teal-600" />
                  <span>ປະເພດສ່ວນຫຼຸດ</span>
                </label>
                <select
                  value={promoData.type}
                  onChange={(e) =>
                    setPromoData({ ...promoData, type: e.target.value })
                  }
                  className="w-full px-3.5 py-2 bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 outline-none transition-all dark:text-white appearance-none cursor-pointer"
                >
                  <option value="Percentage">ເປີເຊັນ (%)</option>
                  <option value="Fixed Amount">ຈຳນວນເງິນຄົງທີ່ (ກີບ)</option>
                </select>
              </div>

              {/* Discount Value */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-1.5">
                  <Percent className="w-3.5 h-3.5 text-teal-600" />
                  <span>ມູນຄ່າສ່ວນຫຼຸດ</span>
                </label>
                <input
                  type="number"
                  value={promoData.value}
                  onChange={(e) =>
                    setPromoData({ ...promoData, value: e.target.value })
                  }
                  className="w-full px-3.5 py-2 bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 outline-none transition-all dark:text-white placeholder:text-gray-400"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Start Date */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-teal-600" />
                  <span>ວັນທີເລີ່ມຕົ້ນ</span>
                </label>
                <input
                  type="date"
                  value={promoData.startDate}
                  onChange={(e) =>
                    setPromoData({ ...promoData, startDate: e.target.value })
                  }
                  className="w-full px-3.5 py-2 bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 outline-none transition-all dark:text-white"
                  required
                />
              </div>

              {/* End Date */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-teal-600" />
                  <span>ວັນທີສິ້ນສຸດ</span>
                </label>
                <input
                  type="date"
                  value={promoData.endDate}
                  onChange={(e) =>
                    setPromoData({ ...promoData, endDate: e.target.value })
                  }
                  className="w-full px-3.5 py-2 bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 outline-none transition-all dark:text-white"
                  required
                />
              </div>
            </div>

            {/* Status Toggle */}
            <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-xl flex items-center justify-between border border-gray-100 dark:border-gray-800">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white text-xs">
                    ສະຖານະໂປຣໂມຊັ່ນ
                  </h4>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400">
                    {isActive ? "ກຳລັງເປີດໃຊ້ງານ" : "ປິດການໃຊ້ງານ"}
                  </p>
                </div>
              </div>
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

          {/* Form Actions */}
          <div className="flex items-center gap-3 pt-2">
            <Link
              href="/promotions"
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
                  <span>ອັບເດດໂປຣໂມຊັ່ນ</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPromotionPage;
