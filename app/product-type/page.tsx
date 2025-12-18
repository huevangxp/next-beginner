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
} from "lucide-react";
import Link from "next/link";

const ProductTypePage = () => {
  const [mounted, setMounted] = useState(false);

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

  if (!mounted) return null;

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
            ປະເພດສິນຄ້າ
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            ຈັດການໝວດໝູ່ ແລະ ປະເພດຂອງສິນຄ້າທັງໝົດໃນລະບົບ
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 text-gray-600 dark:text-gray-300 px-6 py-3 rounded-2xl font-bold transition-all shadow-sm hover:bg-gray-50 dark:hover:bg-gray-800">
            <Download className="w-5 h-5" />
            <span>ລາຍງານ</span>
          </button>
          <Link href="/product-type/create">
            <button className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-2xl font-bold transition-all shadow-lg shadow-teal-100 dark:shadow-none active:scale-95">
              <Plus className="w-5 h-5" />
              <span>ເພີ່ມປະເພດສິນຄ້າ</span>
            </button>
          </Link>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="bg-white dark:bg-gray-900 p-4 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="ຄົ້ນຫາປະເພດສິນຄ້າ..."
            className="w-full pl-11 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl text-sm focus:outline-none focus:ring-4 focus:ring-teal-500/10 focus:border-teal-500 transition-all dark:text-white"
          />
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-3 border border-gray-100 dark:border-gray-700 rounded-2xl text-sm font-bold text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all">
            <Filter className="w-4 h-4" />
            <span>ກັ່ນຕອງ</span>
          </button>
        </div>
      </div>

      {/* Product Types Table */}
      <div className="bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/50 dark:bg-gray-800/50">
                <th className="px-8 py-5 text-xs font-bold text-gray-400 uppercase tracking-wider">
                  ປະເພດສິນຄ້າ
                </th>
                <th className="px-8 py-5 text-xs font-bold text-gray-400 uppercase tracking-wider">
                  ຄຳອະທິບາຍ
                </th>
                <th className="px-8 py-5 text-xs font-bold text-gray-400 uppercase tracking-wider">
                  ຈຳນວນສິນຄ້າ
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
              {productTypes.map((type) => (
                <tr
                  key={type.id}
                  className="hover:bg-gray-50/50 dark:hover:bg-gray-800/30 transition-colors group"
                >
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-teal-900/20 flex items-center justify-center text-teal-600 dark:text-teal-400 font-bold text-lg border border-teal-100 dark:border-teal-900/30">
                        <Layers className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-800 dark:text-white">
                          {type.name}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          ID: #{type.id.toString().padStart(4, "0")}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 max-w-xs truncate">
                      <FileText className="w-4 h-4 text-gray-400 shrink-0" />
                      {type.description}
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <div className="text-sm font-bold text-gray-800 dark:text-white">
                      {type.count} ລາຍການ
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${
                        type.status === "active"
                          ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400"
                          : "bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400"
                      }`}
                    >
                      {type.status === "active" ? (
                        <>
                          <CheckCircle2 className="w-3 h-3 mr-1.5" />
                          ເປີດໃຊ້ງານ
                        </>
                      ) : (
                        <>
                          <XCircle className="w-3 h-3 mr-1.5" />
                          ປິດໃຊ້ງານ
                        </>
                      )}
                    </span>
                  </td>
                  <td className="px-8 py-5 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 text-gray-400 hover:text-teal-600 hover:bg-teal-50 dark:hover:bg-teal-900/20 rounded-xl transition-all">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl transition-all">
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

export default ProductTypePage;
