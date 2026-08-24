"use client";

import React, { useState, useEffect } from "react";
import {
  Layers,
  Plus,
  Search,
  Filter,
  Edit2,
  Trash2,
  FileText,
  CheckCircle2,
  XCircle,
  Download,
  Box,
} from "lucide-react";
import Link from "next/link";

const ProductTypePage = () => {
  const [mounted, setMounted] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  const productTypes = [
    {
      id: 1,
      name: "ເຄື່ອງເອເລັກໂຕຣນິກ",
      description: "ອຸປະກອນໄຟຟ້າ ແລະ ເອເລັກໂຕຣນິກທຸກຊະນິດ",
      status: "active",
      count: 12,
    },
    {
      id: 2,
      name: "ອຸປະກອນສວມໃສ່",
      description: "ໂມງ, ແວ່ນຕາ ແລະ ອຸປະກອນເສີມຕ່າງໆ",
      status: "active",
      count: 8,
    },
    {
      id: 3,
      name: "ອຸປະກອນເສີມ",
      description: "ອຸປະກອນເສີມຄອມພິວເຕີ ແລະ ມືຖື",
      status: "inactive",
      count: 25,
    },
    {
      id: 4,
      name: "ເຄື່ອງໃຊ້ໃນເຮືອນ",
      description: "ອຸປະກອນ ແລະ ເຄື່ອງໃຊ້ພາຍໃນເຮືອນ",
      status: "active",
      count: 5,
    },
  ];

  const filteredTypes = productTypes.filter((type) =>
    type.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    type.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = (id: number) => {
    if (window.confirm("ທ່ານແນ່ໃຈບໍ່ວ່າຕ້ອງການລຶບປະເພດສິນຄ້ານີ້?")) {
      console.log("Deleting product type:", id);
    }
  };

  if (!mounted) return null;

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
            ປະເພດສິນຄ້າ
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm mt-0.5">
            ຈັດການໝວດໝູ່ ແລະ ປະເພດຂອງສິນຄ້າທັງໝົດໃນລະບົບ
          </p>
        </div>
        <div className="flex items-center gap-2.5">
          <button className="flex items-center gap-1.5 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-sm hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer">
            <Download className="w-4 h-4 text-teal-600" />
            <span>ລາຍງານ</span>
          </button>
          <Link href="/product-type/create">
            <button className="flex items-center gap-1.5 bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-md shadow-teal-600/20 active:scale-[0.98] cursor-pointer">
              <Plus className="w-4 h-4" />
              <span>ເພີ່ມປະເພດສິນຄ້າ</span>
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
            placeholder="ຄົ້ນຫາປະເພດສິນຄ້າ..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 transition-all dark:text-white placeholder:text-gray-400"
          />
        </div>
      </div>

      {/* Product Types Table */}
      <div
        id="product-type-table"
        className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/80 dark:bg-gray-800/50">
                <th className="px-5 py-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                  ປະເພດສິນຄ້າ
                </th>
                <th className="px-5 py-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                  ຄຳອະທິບາຍ
                </th>
                <th className="px-5 py-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                  ຈຳນວນສິນຄ້າ
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
              {filteredTypes.map((type) => (
                <tr
                  key={type.id}
                  className="hover:bg-gray-50/70 dark:hover:bg-gray-800/30 transition-colors group"
                >
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center text-white font-bold text-sm shadow-sm">
                        <Layers className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 dark:text-white">
                          {type.name}
                        </p>
                        <p className="text-[11px] text-gray-400">
                          ID: #{type.id.toString().padStart(4, "0")}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-3.5 text-gray-600 dark:text-gray-400 max-w-xs truncate">
                    {type.description}
                  </td>
                  <td className="px-5 py-3.5">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                      <Box className="w-3 h-3 text-teal-600" />
                      {type.count} ລາຍການ
                    </span>
                  </td>
                  <td className="px-5 py-3.5">
                    <span
                      className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${
                        type.status === "active"
                          ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 border-emerald-200 dark:border-emerald-900/30"
                          : "bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-400 border-rose-200 dark:border-rose-900/30"
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          type.status === "active"
                            ? "bg-emerald-500"
                            : "bg-rose-500"
                        }`}
                      ></span>
                      {type.status === "active" ? "ເປີດໃຊ້ງານ" : "ປິດໃຊ້ງານ"}
                    </span>
                  </td>
                  <td className="px-5 py-3.5 text-right">
                    <div className="flex items-center justify-end gap-1.5">
                      <button className="p-1.5 text-gray-400 hover:text-teal-600 hover:bg-teal-50 dark:hover:bg-teal-900/20 rounded-lg transition-all cursor-pointer">
                        <Edit2 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => handleDelete(type.id)}
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
        </div>
      </div>
    </div>
  );
};

export default ProductTypePage;
