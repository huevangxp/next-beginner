"use client";

import React, { useState, useEffect } from "react";
import {
  Tag,
  Plus,
  Search,
  Calendar,
  Edit2,
  Trash2,
  FileSpreadsheet,
  Download,
} from "lucide-react";
import Link from "next/link";
import { exportToExcel } from "../utils/exportUtils";
import Pagination from "../components/Pagination";
import { PROMOTIONS_MOCK_DATA } from "../constants";

const PromotionsPage = () => {
  const [mounted, setMounted] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    setMounted(true);
  }, []);

  const promotions = PROMOTIONS_MOCK_DATA;

  const handleDownloadExcel = () => {
    const exportData = filteredPromos.map((promo) => ({
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
      console.log("Deleting promo:", id);
    }
  };

  const filteredPromos = promotions.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.code.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "all" || p.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const totalPages = Math.ceil(filteredPromos.length / itemsPerPage);
  const paginatedPromos = filteredPromos.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  if (!mounted) return null;

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
            ໂປຣໂມຊັ່ນ (Promotions)
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm mt-0.5">
            ສ້າງ ແລະ ຈັດການຄູປອງສ່ວນຫຼຸດ, ໂຄ້ດໂປຣໂມຊັ່ນທັງໝົດ
          </p>
        </div>
        <div className="flex items-center gap-2.5">
          <div className="relative group">
            <button className="flex items-center gap-1.5 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-sm hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer">
              <Download className="w-4 h-4 text-teal-600" />
              <span>ລາຍງານ</span>
            </button>
            <div className="absolute right-0 mt-1.5 w-44 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl shadow-xl py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-20">
              <button
                onClick={handleDownloadExcel}
                className="w-full flex items-center gap-2 px-3.5 py-2 text-xs text-gray-600 dark:text-gray-300 hover:bg-teal-50 dark:hover:bg-teal-900/20 hover:text-teal-700 dark:hover:text-teal-400 transition-colors cursor-pointer"
              >
                <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-600" />
                <span>Export to Excel</span>
              </button>
            </div>
          </div>
          <Link href="/promotions/create">
            <button className="flex items-center gap-1.5 bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-md shadow-teal-600/20 active:scale-[0.98] cursor-pointer">
              <Plus className="w-4 h-4" />
              <span>ສ້າງໂປຣໂມຊັ່ນ</span>
            </button>
          </Link>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="bg-white dark:bg-gray-900 p-3.5 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col sm:flex-row gap-3 items-center justify-between">
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="ຄົ້ນຫາໂປຣໂມຊັ່ນ ຫຼື ໂຄ້ດ..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full pl-9 pr-3 py-2 bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 transition-all dark:text-white placeholder:text-gray-400"
          />
        </div>
        <div className="flex items-center gap-2.5 w-full sm:w-auto">
          <select
            value={statusFilter}
            onChange={(e) => {
              setStatusFilter(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full sm:w-auto px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-xl text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800/60 focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-all cursor-pointer"
          >
            <option value="all">ທຸກສະຖານະ</option>
            <option value="active">ກຳລັງໃຊ້ງານ</option>
            <option value="expired">ໝົດອາຍຸ</option>
          </select>
        </div>
      </div>

      {/* Promotions Table */}
      <div
        id="promotions-table"
        className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/80 dark:bg-gray-800/50">
                <th className="px-5 py-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                  ໂປຣໂມຊັ່ນ
                </th>
                <th className="px-5 py-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                  ລະຫັດ / ໂຄ້ດ
                </th>
                <th className="px-5 py-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                  ສ່ວນຫຼຸດ
                </th>
                <th className="px-5 py-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                  ໄລຍະເວລາ
                </th>
                <th className="px-5 py-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                  ສະຖານະ
                </th>
                <th className="px-5 py-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider text-right">
                  ຈັດການ
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-800 text-xs sm:text-sm">
              {paginatedPromos.map((promo) => (
                <tr
                  key={promo.id}
                  className="hover:bg-gray-50/70 dark:hover:bg-gray-800/30 transition-colors group"
                >
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center text-white font-bold text-sm shadow-sm">
                        <Tag className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 dark:text-white">
                          {promo.name}
                        </p>
                        <p className="text-[11px] text-gray-400">
                          ໃຊ້ແລ້ວ: {promo.usage}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-3.5">
                    <span className="font-mono text-xs font-bold px-2 py-1 bg-gray-100 dark:bg-gray-800 text-teal-700 dark:text-teal-300 rounded-lg border border-gray-200 dark:border-gray-700">
                      {promo.code}
                    </span>
                  </td>
                  <td className="px-5 py-3.5">
                    <span className="font-bold text-teal-600 dark:text-teal-400">
                      {promo.discount}
                    </span>
                  </td>
                  <td className="px-5 py-3.5 text-gray-500 dark:text-gray-400 text-xs">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-gray-400" />
                      <span>
                        {promo.startDate} - {promo.endDate}
                      </span>
                    </div>
                  </td>
                  <td className="px-5 py-3.5">
                    <span
                      className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${
                        promo.status === "active"
                          ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 border-emerald-200 dark:border-emerald-900/30"
                          : "bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-400 border-rose-200 dark:border-rose-900/30"
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          promo.status === "active"
                            ? "bg-emerald-500"
                            : "bg-rose-500"
                        }`}
                      ></span>
                      {promo.status === "active" ? "ກຳລັງໃຊ້ງານ" : "ໝົດອາຍຸ"}
                    </span>
                  </td>
                  <td className="px-5 py-3.5 text-right">
                    <div className="flex items-center justify-end gap-1.5">
                      <Link href={`/promotions/${promo.id}/edit`}>
                        <button className="p-1.5 text-gray-400 hover:text-teal-600 hover:bg-teal-50 dark:hover:bg-teal-900/20 rounded-lg transition-all cursor-pointer">
                          <Edit2 className="w-3.5 h-3.5" />
                        </button>
                      </Link>
                      <button
                        onClick={() => handleDelete(promo.id)}
                        className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-all cursor-pointer"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredPromos.length === 0 && (
            <div className="py-16 text-center text-gray-400">
              <p className="text-sm">ບໍ່ພົບຂໍ້ມູນໂປຣໂມຊັ່ນທີ່ຄົ້ນຫາ</p>
            </div>
          )}
        </div>

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          totalItems={filteredPromos.length}
          itemsPerPage={itemsPerPage}
          onPageChange={(page) => setCurrentPage(page)}
          itemLabel="ໂປຣໂມຊັ່ນ"
        />
      </div>
    </div>
  );
};

export default PromotionsPage;
