"use client";

import React, { useState, useEffect } from "react";
import {
  AlertTriangle,
  History,
  Download,
  Plus,
  Edit2,
  Box,
  XCircle,
  FileSpreadsheet,
  Search,
} from "lucide-react";
import { exportToExcel } from "../utils/exportUtils";
import Pagination from "../components/Pagination";

const InventoryPage = () => {
  const [mounted, setMounted] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    setMounted(true);
  }, []);

  const inventoryItems = [
    {
      id: 1,
      name: "iPhone 15 Pro Max 256GB",
      category: "Mobile",
      stock: 5,
      minStock: 10,
      status: "low",
      lastUpdate: "2024-12-18",
    },
    {
      id: 2,
      name: "MacBook Air M2 13-inch",
      category: "Laptop",
      stock: 15,
      minStock: 5,
      status: "ok",
      lastUpdate: "2024-12-17",
    },
    {
      id: 3,
      name: "AirPods Pro 2 USB-C",
      category: "Audio",
      stock: 0,
      minStock: 20,
      status: "out",
      lastUpdate: "2024-12-15",
    },
    {
      id: 4,
      name: "Samsung Galaxy S23 Ultra",
      category: "Mobile",
      stock: 8,
      minStock: 10,
      status: "low",
      lastUpdate: "2024-12-18",
    },
    {
      id: 5,
      name: "iPad Pro 11 M4 OLED",
      category: "Tablet",
      stock: 25,
      minStock: 10,
      status: "ok",
      lastUpdate: "2024-12-16",
    },
    {
      id: 6,
      name: "Dell UltraSharp 27 4K Monitor",
      category: "Monitor",
      stock: 12,
      minStock: 4,
      status: "ok",
      lastUpdate: "2024-12-15",
    },
    {
      id: 7,
      name: "Apple Magic Keyboard with Touch ID",
      category: "Accessories",
      stock: 3,
      minStock: 8,
      status: "low",
      lastUpdate: "2024-12-14",
    },
    {
      id: 8,
      name: "Sony WH-1000XM5 Silver",
      category: "Audio",
      stock: 0,
      minStock: 5,
      status: "out",
      lastUpdate: "2024-12-13",
    },
  ];

  const handleDownloadExcel = () => {
    const exportData = filteredItems.map((item) => ({
      ID: item.id,
      ຊື່ສິນຄ້າ: item.name,
      ໝວດໝູ່: item.category,
      ຈຳນວນຄົງເຫຼືອ: item.stock,
      ລະດັບຕໍ່າສຸດ: item.minStock,
      ສະຖານະ: item.status,
      ອັບເດດຫຼ້າສຸດ: item.lastUpdate,
    }));
    exportToExcel(exportData, "Inventory_Report");
  };

  const filteredItems = inventoryItems.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "all" || item.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const paginatedItems = filteredItems.slice(
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
            ສາງສິນຄ້າ (Inventory)
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm mt-0.5">
            ຕິດຕາມລະດັບສິນຄ້າໃນສາງ ແລະ ການແຈ້ງເຕືອນສິນຄ້າໃກ້ໝົດ
          </p>
        </div>
        <div className="flex items-center gap-2.5">
          <div className="relative group">
            <button className="flex items-center gap-1.5 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-sm hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer">
              <Download className="w-4 h-4 text-teal-600" />
              <span>ສົ່ງອອກ</span>
            </button>
            <div className="absolute right-0 mt-1.5 w-44 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl shadow-xl py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-20">
              <button
                onClick={handleDownloadExcel}
                className="w-full flex items-center gap-2 px-3.5 py-2 text-xs text-gray-600 dark:text-gray-300 hover:bg-teal-50 dark:hover:bg-teal-900/20 hover:text-teal-700 dark:hover:text-teal-400 transition-colors cursor-pointer"
              >
                <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-600" />
                <span>Download Excel</span>
              </button>
            </div>
          </div>
          <button className="flex items-center gap-1.5 bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-md shadow-teal-600/20 active:scale-[0.98] cursor-pointer">
            <Plus className="w-4 h-4" />
            <span>ເພີ່ມສະຕັອກ</span>
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-gray-900 p-4 sm:p-5 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
            <Box className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">ສິນຄ້າທັງໝົດ</p>
            <h3 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white mt-0.5 tracking-tight">
              1,240
            </h3>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 p-4 sm:p-5 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white shadow-md shadow-amber-500/20">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">ໃກ້ຈະໝົດ</p>
            <h3 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white mt-0.5 tracking-tight">
              12 ລາຍການ
            </h3>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 p-4 sm:p-5 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-rose-500 to-red-600 flex items-center justify-center text-white shadow-md shadow-rose-500/20">
            <XCircle className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">ໝົດສະຕັອກ</p>
            <h3 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white mt-0.5 tracking-tight">
              3 ລາຍການ
            </h3>
          </div>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="bg-white dark:bg-gray-900 p-3.5 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col sm:flex-row gap-3 items-center justify-between">
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="ຄົ້ນຫາສິນຄ້າໃນສາງ..."
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
            <option value="ok">ປົກກະຕິ</option>
            <option value="low">ໃກ້ໝົດ</option>
            <option value="out">ໝົດສະຕັອກ</option>
          </select>
        </div>
      </div>

      {/* Inventory Table */}
      <div
        id="inventory-table"
        className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/80 dark:bg-gray-800/50">
                <th className="px-5 py-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                  ສິນຄ້າ
                </th>
                <th className="px-5 py-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                  ໝວດໝູ່
                </th>
                <th className="px-5 py-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                  ຈຳນວນຄົງເຫຼືອ
                </th>
                <th className="px-5 py-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                  ລະດັບຕໍ່າສຸດ
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
              {paginatedItems.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-gray-50/70 dark:hover:bg-gray-800/30 transition-colors group"
                >
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center text-white font-bold text-sm shadow-sm">
                        <Box className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 dark:text-white">
                          {item.name}
                        </p>
                        <p className="text-[11px] text-gray-400">
                          ອັບເດດ: {item.lastUpdate}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-3.5 text-gray-600 dark:text-gray-400 font-medium">
                    {item.category}
                  </td>
                  <td className="px-5 py-3.5">
                    <span
                      className={`font-bold ${
                        item.stock <= item.minStock
                          ? "text-rose-600 dark:text-rose-400"
                          : "text-gray-900 dark:text-white"
                      }`}
                    >
                      {item.stock} ລາຍການ
                    </span>
                  </td>
                  <td className="px-5 py-3.5 text-gray-500 dark:text-gray-400">
                    {item.minStock} ລາຍການ
                  </td>
                  <td className="px-5 py-3.5">
                    <span
                      className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${
                        item.status === "ok"
                          ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 border-emerald-200 dark:border-emerald-900/30"
                          : item.status === "low"
                          ? "bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-400 border-amber-200 dark:border-amber-900/30"
                          : "bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-400 border-rose-200 dark:border-rose-900/30"
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          item.status === "ok"
                            ? "bg-emerald-500"
                            : item.status === "low"
                            ? "bg-amber-500"
                            : "bg-rose-500"
                        }`}
                      ></span>
                      {item.status === "ok"
                        ? "ປົກກະຕິ"
                        : item.status === "low"
                        ? "ໃກ້ໝົດ"
                        : "ໝົດສະຕັອກ"}
                    </span>
                  </td>
                  <td className="px-5 py-3.5 text-right">
                    <div className="flex items-center justify-end gap-1.5">
                      <button className="p-1.5 text-gray-400 hover:text-teal-600 hover:bg-teal-50 dark:hover:bg-teal-900/20 rounded-lg transition-all cursor-pointer">
                        <History className="w-3.5 h-3.5" />
                      </button>
                      <button className="p-1.5 text-gray-400 hover:text-teal-600 hover:bg-teal-50 dark:hover:bg-teal-900/20 rounded-lg transition-all cursor-pointer">
                        <Edit2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredItems.length === 0 && (
            <div className="py-16 text-center text-gray-400">
              <p className="text-sm">ບໍ່ພົບຂໍ້ມູນສິນຄ້າໃນສາງທີ່ຄົ້ນຫາ</p>
            </div>
          )}
        </div>

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          totalItems={filteredItems.length}
          itemsPerPage={itemsPerPage}
          onPageChange={(page) => setCurrentPage(page)}
          itemLabel="ລາຍການສິນຄ້າ"
        />
      </div>
    </div>
  );
};

export default InventoryPage;
