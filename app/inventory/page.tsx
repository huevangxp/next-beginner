"use client";

import React, { useState, useEffect } from "react";
import {
  PackageSearch,
  Search,
  Filter,
  ArrowUpRight,
  ArrowDownRight,
  AlertTriangle,
  CheckCircle2,
  History,
  Download,
  Plus,
  Edit2,
  Box,
  XCircle,
  FileSpreadsheet,
  FileText as FilePdf,
} from "lucide-react";
import { exportToExcel, exportElementToPDF } from "../utils/exportUtils";

const InventoryPage = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleDownloadExcel = () => {
    const exportData = inventoryItems.map((item) => ({
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

  const inventoryItems = [
    {
      id: 1,
      name: "iPhone 15 Pro",
      category: "Mobile",
      stock: 5,
      minStock: 10,
      status: "low",
      lastUpdate: "2024-12-18",
    },
    {
      id: 2,
      name: "MacBook Air M2",
      category: "Laptop",
      stock: 15,
      minStock: 5,
      status: "ok",
      lastUpdate: "2024-12-17",
    },
    {
      id: 3,
      name: "AirPods Pro 2",
      category: "Audio",
      stock: 0,
      minStock: 20,
      status: "out",
      lastUpdate: "2024-12-15",
    },
    {
      id: 4,
      name: "Samsung S23 Ultra",
      category: "Mobile",
      stock: 8,
      minStock: 10,
      status: "low",
      lastUpdate: "2024-12-18",
    },
    {
      id: 5,
      name: "iPad Pro 11",
      category: "Tablet",
      stock: 25,
      minStock: 10,
      status: "ok",
      lastUpdate: "2024-12-16",
    },
  ];

  if (!mounted) return null;

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
            ສາງສິນຄ້າ (Inventory)
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            ຕິດຕາມລະດັບສິນຄ້າໃນສາງ ແລະ ການແຈ້ງເຕືອນສິນຄ້າໃກ້ໝົດ
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative group">
            <button className="flex items-center gap-2 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 text-gray-600 dark:text-gray-300 px-6 py-3 rounded-2xl font-bold transition-all shadow-sm hover:bg-gray-50 dark:hover:bg-gray-800">
              <Download className="w-5 h-5" />
              <span>ສົ່ງອອກ</span>
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
          <button className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-2xl font-bold transition-all shadow-lg shadow-teal-100 dark:shadow-none active:scale-95">
            <Plus className="w-5 h-5" />
            <span>ເພີ່ມສະຕັອກ</span>
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-900 p-6 rounded-[32px] border border-gray-100 dark:border-gray-800 shadow-sm flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600">
            <Box className="w-7 h-7" />
          </div>
          <div>
            <p className="text-sm text-gray-500">ສິນຄ້າທັງໝົດ</p>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
              1,240
            </h3>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-900 p-6 rounded-[32px] border border-gray-100 dark:border-gray-800 shadow-sm flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-amber-50 dark:bg-amber-900/20 flex items-center justify-center text-amber-600">
            <AlertTriangle className="w-7 h-7" />
          </div>
          <div>
            <p className="text-sm text-gray-500">ໃກ້ຈະໝົດ</p>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
              12 ລາຍການ
            </h3>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-900 p-6 rounded-[32px] border border-gray-100 dark:border-gray-800 shadow-sm flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-red-50 dark:bg-red-900/20 flex items-center justify-center text-red-600">
            <XCircle className="w-7 h-7" />
          </div>
          <div>
            <p className="text-sm text-gray-500">ໝົດສະຕັອກ</p>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
              3 ລາຍການ
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
            placeholder="ຄົ້ນຫາສິນຄ້າໃນສາງ..."
            className="w-full pl-11 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl text-sm focus:outline-none focus:ring-4 focus:ring-teal-500/10 focus:border-teal-500 transition-all dark:text-white"
          />
        </div>
        <div className="flex items-center gap-3">
          <button className="px-5 py-3 border border-gray-100 dark:border-gray-700 rounded-2xl text-sm font-bold text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all flex items-center gap-2">
            <Filter className="w-4 h-4" />
            <span>ກັ່ນຕອງ</span>
          </button>
        </div>
      </div>

      {/* Inventory Table */}
      <div
        id="inventory-table"
        className="bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/50 dark:bg-gray-800/50">
                <th className="px-8 py-5 text-xs font-bold text-gray-400 uppercase tracking-wider">
                  ສິນຄ້າ
                </th>
                <th className="px-8 py-5 text-xs font-bold text-gray-400 uppercase tracking-wider">
                  ໝວດໝູ່
                </th>
                <th className="px-8 py-5 text-xs font-bold text-gray-400 uppercase tracking-wider">
                  ຈຳນວນຄົງເຫຼືອ
                </th>
                <th className="px-8 py-5 text-xs font-bold text-gray-400 uppercase tracking-wider">
                  ລະດັບຕໍ່າສຸດ
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
              {inventoryItems.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-gray-50/50 dark:hover:bg-gray-800/30 transition-colors group"
                >
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-gray-400">
                        <Box className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-800 dark:text-white">
                          {item.name}
                        </p>
                        <p className="text-xs text-gray-400">
                          ອັບເດດ: {item.lastUpdate}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-5 text-sm text-gray-600 dark:text-gray-400">
                    {item.category}
                  </td>
                  <td className="px-8 py-5">
                    <span
                      className={`font-bold ${
                        item.stock <= item.minStock
                          ? "text-red-500"
                          : "text-gray-800 dark:text-white"
                      }`}
                    >
                      {item.stock} ລາຍການ
                    </span>
                  </td>
                  <td className="px-8 py-5 text-sm text-gray-500">
                    {item.minStock} ລາຍການ
                  </td>
                  <td className="px-8 py-5">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold ${
                        item.status === "ok"
                          ? "bg-emerald-50 text-emerald-600"
                          : item.status === "low"
                          ? "bg-amber-50 text-amber-600"
                          : "bg-red-50 text-red-600"
                      }`}
                    >
                      {item.status === "ok"
                        ? "ປົກກະຕິ"
                        : item.status === "low"
                        ? "ໃກ້ໝົດ"
                        : "ໝົດສະຕັອກ"}
                    </span>
                  </td>
                  <td className="px-8 py-5 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 text-gray-400 hover:text-teal-600 hover:bg-teal-50 dark:hover:bg-teal-900/20 rounded-xl transition-all">
                        <History className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-teal-600 hover:bg-teal-50 dark:hover:bg-teal-900/20 rounded-xl transition-all">
                        <Edit2 className="w-4 h-4" />
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

export default InventoryPage;
