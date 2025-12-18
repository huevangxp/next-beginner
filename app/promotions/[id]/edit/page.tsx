"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import {
  ArrowLeft,
  Save,
  Tag,
  Percent,
  Calendar,
  Clock,
  CheckCircle2,
  XCircle,
  FileText,
  Zap,
} from "lucide-react";
import Link from "next/link";

const EditPromotionPage = () => {
  const router = useRouter();
  const params = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isActive, setIsActive] = useState(true);

  // Mock data for the promotion being edited
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
    // In a real app, you would fetch the promotion data here using params.id
  }, [params.id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Mock saving process
    setTimeout(() => {
      setIsLoading(false);
      router.push("/promotions");
    }, 1500);
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-gray-950 p-4 md:p-8 animate-in fade-in duration-500">
      <div className="space-y-8 mx-auto">
        {/* Header */}
        <div className="flex items-start gap-4 mb-8">
          <Link
            href="/promotions"
            className="mt-1 p-2 hover:bg-white dark:hover:bg-gray-800 rounded-full transition-all text-gray-400 hover:text-gray-600 shadow-sm"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-[#0f172a] dark:text-white">
              ແກ້ໄຂໂປຣໂມຊັ່ນ
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              ອັບເດດຂໍ້ມູນ ແລະ ເງື່ອນໄຂຂອງໂປຣໂມຊັ່ນ #{params.id}.
            </p>
          </div>
        </div>

        {/* Main Form Card */}
        <div className="bg-white dark:bg-gray-900 rounded-[32px] shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
          <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-10">
            {/* Icon Section */}
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="w-24 h-24 rounded-3xl bg-teal-50 dark:bg-teal-900/20 flex items-center justify-center text-teal-600 dark:text-teal-400 border border-teal-100 dark:border-teal-900/30 shadow-inner">
                <Tag className="w-10 h-10" />
              </div>
              <div className="text-center">
                <h3 className="font-bold text-[#0f172a] dark:text-white">
                  ແກ້ໄຂຂໍ້ມູນໂປຣໂມຊັ່ນ
                </h3>
                <p className="text-xs text-gray-400 mt-1">
                  ປ່ຽນແປງລະຫັດ ຫຼື ມູນຄ່າສ່ວນຫຼຸດ
                </p>
              </div>
            </div>

            {/* Form Fields */}
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Promo Name */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#0f172a] dark:text-gray-300 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-[#009688]" />
                    ຊື່ໂປຣໂມຊັ່ນ
                  </label>
                  <input
                    type="text"
                    value={promoData.name}
                    onChange={(e) =>
                      setPromoData({ ...promoData, name: e.target.value })
                    }
                    placeholder="ຕົວຢ່າງ: ສ່ວນຫຼຸດປີໃໝ່"
                    className="w-full px-5 py-4 bg-[#f8fafc] dark:bg-gray-800 border-none rounded-2xl focus:ring-2 focus:ring-[#009688]/20 outline-none transition-all dark:text-white placeholder:text-gray-400"
                    required
                  />
                </div>

                {/* Promo Code */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#0f172a] dark:text-gray-300 flex items-center gap-2">
                    <Tag className="w-4 h-4 text-[#009688]" />
                    ລະຫັດຄູປອງ
                  </label>
                  <input
                    type="text"
                    value={promoData.code}
                    onChange={(e) =>
                      setPromoData({ ...promoData, code: e.target.value })
                    }
                    placeholder="ຕົວຢ່າງ: NEWYEAR2024"
                    className="w-full px-5 py-4 bg-[#f8fafc] dark:bg-gray-800 border-none rounded-2xl focus:ring-2 focus:ring-[#009688]/20 outline-none transition-all dark:text-white placeholder:text-gray-400 font-mono"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Discount Type */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#0f172a] dark:text-gray-300 flex items-center gap-2">
                    <Percent className="w-4 h-4 text-[#009688]" />
                    ປະເພດສ່ວນຫຼຸດ
                  </label>
                  <select
                    value={promoData.type}
                    onChange={(e) =>
                      setPromoData({ ...promoData, type: e.target.value })
                    }
                    className="w-full px-5 py-4 bg-[#f8fafc] dark:bg-gray-800 border-none rounded-2xl focus:ring-2 focus:ring-[#009688]/20 outline-none transition-all dark:text-white appearance-none"
                  >
                    <option value="Percentage">ເປີເຊັນ (%)</option>
                    <option value="Fixed Amount">ຈຳນວນເງິນຄົງທີ່ (ກີບ)</option>
                  </select>
                </div>

                {/* Discount Value */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#0f172a] dark:text-gray-300 flex items-center gap-2">
                    <Percent className="w-4 h-4 text-[#009688]" />
                    ມູນຄ່າສ່ວນຫຼຸດ
                  </label>
                  <input
                    type="number"
                    value={promoData.value}
                    onChange={(e) =>
                      setPromoData({ ...promoData, value: e.target.value })
                    }
                    placeholder="ຕົວຢ່າງ: 10"
                    className="w-full px-5 py-4 bg-[#f8fafc] dark:bg-gray-800 border-none rounded-2xl focus:ring-2 focus:ring-[#009688]/20 outline-none transition-all dark:text-white placeholder:text-gray-400"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Start Date */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#0f172a] dark:text-gray-300 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#009688]" />
                    ວັນທີເລີ່ມຕົ້ນ
                  </label>
                  <input
                    type="date"
                    value={promoData.startDate}
                    onChange={(e) =>
                      setPromoData({ ...promoData, startDate: e.target.value })
                    }
                    className="w-full px-5 py-4 bg-[#f8fafc] dark:bg-gray-800 border-none rounded-2xl focus:ring-2 focus:ring-[#009688]/20 outline-none transition-all dark:text-white"
                    required
                  />
                </div>

                {/* End Date */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#0f172a] dark:text-gray-300 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#009688]" />
                    ວັນທີສິ້ນສຸດ
                  </label>
                  <input
                    type="date"
                    value={promoData.endDate}
                    onChange={(e) =>
                      setPromoData({ ...promoData, endDate: e.target.value })
                    }
                    className="w-full px-5 py-4 bg-[#f8fafc] dark:bg-gray-800 border-none rounded-2xl focus:ring-2 focus:ring-[#009688]/20 outline-none transition-all dark:text-white"
                    required
                  />
                </div>
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
                      ສະຖານະໂປຣໂມຊັ່ນ
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {isActive ? "ກຳລັງເປີດໃຊ້ງານ" : "ປິດການໃຊ້ງານ"}
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
                href="/promotions"
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
                    <span>ອັບເດດໂປຣໂມຊັ່ນ</span>
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

export default EditPromotionPage;
