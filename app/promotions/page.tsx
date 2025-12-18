"use client";

import React, { useState, useEffect } from "react";
import {
  Tag,
  Plus,
  Search,
  Filter,
  Calendar,
  Clock,
  CheckCircle2,
  XCircle,
  Edit2,
  Trash2,
  Percent,
  Gift,
  Zap,
  FileSpreadsheet,
  FileText as FilePdf,
  Download,
} from "lucide-react";
import Link from "next/link";
import { exportToExcel, exportElementToPDF } from "../utils/exportUtils";

const PromotionsPage = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleDownloadExcel = () => {
    const exportData = promotions.map((promo) => ({
      ID: promo.id,
      ຊື່ໂປຣໂມຊັ່ນ: promo.name,
      ລະຫັດ: promo.code,
      ສ່ວນຫຼຸດ: promo.discount,
      ປະເພດ: promo.type,
      ວັນທີເລີ່ມ: promo.startDate,
      ວັນທີສິ້ນສຸດ: promo.endDate,
      ການນຳໃຊ້: promo.usage,
      ສະຖານະ: promo.status,
    }));
    exportToExcel(exportData, "Promotions_Report");
  };

  const handleDelete = (id: number) => {
    if (window.confirm("ທ່ານແນ່ໃຈບໍ່ວ່າຕ້ອງການລຶບໂປຣໂມຊັ່ນນີ້?")) {
      // In a real app, you would call an API here
      console.log("Deleting promo:", id);
    }
  };

  const promotions = [
    {
      id: 1,
      name: "ປີໃໝ່ລາວ 2024",
      code: "LAONEWYEAR",
      discount: "20%",
      type: "Percentage",
      status: "active",
      startDate: "2024-04-01",
      endDate: "2024-04-20",
      usage: "150/500",
    },
    {
      id: 2,
      name: "Flash Sale 12.12",
      code: "FLASH12",
      discount: "50,000 ກີບ",
      type: "Fixed Amount",
      status: "expired",
      startDate: "2024-12-12",
      endDate: "2024-12-12",
      usage: "100/100",
    },
    {
      id: 3,
      name: "ລູກຄ້າໃໝ່",
      code: "WELCOME",
      discount: "10%",
      type: "Percentage",
      status: "active",
      startDate: "2024-01-01",
      endDate: "2024-12-31",
      usage: "1,240/∞",
    },
  ];

  if (!mounted) return null;

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
            ໂປຣໂມຊັ່ນ (Promotions)
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            ຈັດການຄູປອງສ່ວນຫຼຸດ ແລະ ແຄມເປນການຕະຫຼາດ
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative group">
            <button className="flex items-center gap-2 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 text-gray-600 dark:text-gray-300 px-6 py-3 rounded-2xl font-bold transition-all shadow-sm hover:bg-gray-50 dark:hover:bg-gray-800">
              <Download className="w-5 h-5" />
              <span>ລາຍງານ</span>
            </button>
            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-20">
              <button
                onClick={handleDownloadExcel}
                className="w-full flex items-center gap-3 px-4 py-3 text-sm text-gray-600 dark:text-gray-300 hover:bg-teal-50 dark:hover:bg-teal-900/20 hover:text-teal-700 dark:hover:text-teal-400 transition-colors"
              >
                <FileSpreadsheet className="w-4 h-4" />
                <span>Download Excel</span>
              </button>
            </div>
          </div>
          <Link href="/promotions/create">
            <button className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-2xl font-bold transition-all shadow-lg shadow-teal-100 dark:shadow-none active:scale-95">
              <Plus className="w-5 h-5" />
              <span>ສ້າງໂປຣໂມຊັ່ນ</span>
            </button>
          </Link>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-900 p-6 rounded-[32px] border border-gray-100 dark:border-gray-800 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-teal-900/20 flex items-center justify-center text-teal-600">
            <Percent className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs text-gray-400 font-bold uppercase">
              ກຳລັງໃຊ້ງານ
            </p>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">
              5 ແຄມເປນ
            </h3>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-900 p-6 rounded-[32px] border border-gray-100 dark:border-gray-800 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600">
            <Gift className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs text-gray-400 font-bold uppercase">
              ຄູປອງທັງໝົດ
            </p>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">
              128 ລະຫັດ
            </h3>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-900 p-6 rounded-[32px] border border-gray-100 dark:border-gray-800 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center text-orange-600">
            <Zap className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs text-gray-400 font-bold uppercase">
              Flash Sale
            </p>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">
              ມີມື້ນີ້
            </h3>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white dark:bg-gray-900 p-4 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="ຄົ້ນຫາໂປຣໂມຊັ່ນ ຫຼື ລະຫັດ..."
            className="w-full pl-11 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl text-sm focus:outline-none focus:ring-4 focus:ring-teal-500/10 focus:border-teal-500 transition-all dark:text-white"
          />
        </div>
        <button className="px-5 py-3 border border-gray-100 dark:border-gray-700 rounded-2xl text-sm font-bold text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all flex items-center gap-2">
          <Filter className="w-4 h-4" />
          <span>ກັ່ນຕອງ</span>
        </button>
      </div>

      {/* Promotions Table */}
      <div
        id="promotions-table"
        className="bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/50 dark:bg-gray-800/50">
                <th className="px-8 py-5 text-xs font-bold text-gray-400 uppercase tracking-wider">
                  ໂປຣໂມຊັ່ນ
                </th>
                <th className="px-8 py-5 text-xs font-bold text-gray-400 uppercase tracking-wider">
                  ລະຫັດຄູປອງ
                </th>
                <th className="px-8 py-5 text-xs font-bold text-gray-400 uppercase tracking-wider">
                  ສ່ວນຫຼຸດ
                </th>
                <th className="px-8 py-5 text-xs font-bold text-gray-400 uppercase tracking-wider">
                  ໄລຍະເວລາ
                </th>
                <th className="px-8 py-5 text-xs font-bold text-gray-400 uppercase tracking-wider">
                  ການນຳໃຊ້
                </th>
                <th className="px-8 py-5 text-xs font-bold text-gray-400 uppercase tracking-wider">
                  ສະຖານະ
                </th>
                <th className="px-8 py-5 text-xs font-bold text-gray-400 uppercase tracking-wider text-right">
                  ຈັດການ
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 dark:divide-gray-800">
              {promotions.map((promo) => (
                <tr
                  key={promo.id}
                  className="hover:bg-gray-50/50 dark:hover:bg-gray-800/30 transition-colors group"
                >
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-900/20 flex items-center justify-center text-teal-600">
                        <Tag className="w-5 h-5" />
                      </div>
                      <span className="font-bold text-gray-800 dark:text-white">
                        {promo.name}
                      </span>
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-lg text-xs font-mono font-bold text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
                      {promo.code}
                    </span>
                  </td>
                  <td className="px-8 py-5">
                    <span className="font-bold text-teal-600">
                      {promo.discount}
                    </span>
                  </td>
                  <td className="px-8 py-5">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-[10px] text-gray-400">
                        <Calendar className="w-3 h-3" /> {promo.startDate}
                      </div>
                      <div className="flex items-center gap-2 text-[10px] text-gray-400">
                        <Clock className="w-3 h-3" /> {promo.endDate}
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-5 text-sm text-gray-500">
                    {promo.usage}
                  </td>
                  <td className="px-8 py-5">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold ${
                        promo.status === "active"
                          ? "bg-emerald-50 text-emerald-600"
                          : "bg-red-50 text-red-600"
                      }`}
                    >
                      {promo.status === "active" ? "ກຳລັງໃຊ້ງານ" : "ໝົດອາຍຸ"}
                    </span>
                  </td>
                  <td className="px-8 py-5 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Link href={`/promotions/${promo.id}/edit`}>
                        <button className="p-2 text-gray-400 hover:text-teal-600 hover:bg-teal-50 dark:hover:bg-teal-900/20 rounded-xl transition-all">
                          <Edit2 className="w-4 h-4" />
                        </button>
                      </Link>
                      <button
                        onClick={() => handleDelete(promo.id)}
                        className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl transition-all"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PromotionsPage;
