"use client";

import React, { useState, useEffect } from "react";
import {
  ShoppingBag,
  Plus,
  Filter,
  Search,
  Edit2,
  Trash2,
  DollarSign,
  Box,
  Layers,
  Download,
  Tag,
  FileSpreadsheet,
  FileText as FilePdf,
} from "lucide-react";
import Link from "next/link";
import { exportToExcel, exportElementToPDF } from "../utils/exportUtils";

const ProductPage = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleDelete = (id: number) => {
    if (window.confirm("ທ່ານແນ່ໃຈບໍ່ວ່າຕ້ອງການລຶບສິນຄ້ານີ້?")) {
      // In a real app, you would call an API here
      console.log("Deleting product:", id);
    }
  };

  const handleDownloadExcel = () => {
    const exportData = products.map((p) => ({
      ID: p.id,
      ຊື່ສິນຄ້າ: p.name,
      ລາຄາ: p.price,
      ໝວດໝູ່: p.category,
      ຈຳນວນໃນສາງ: p.stock,
      name: "ຫູຟັງໄຮ້ສາຍ",
      price: 59.99,
      category: "ເຄື່ອງເອເລັກໂຕຣນິກ",
      stock: 12,
      promotion: "LAONEWYEAR",
    },
    {
      id: 2,
      name: "ໂມງອັດສະລິຍະ",
      price: 129.99,
      category: "ອຸປະກອນສວມໃສ່",
      stock: 8,
      promotion: null,
    },
    {
      id: 3,
      name: "ລຳໂພງບລູທູດ",
      price: 39.99,
      category: "ເຄື່ອງເອເລັກໂຕຣນິກ",
      stock: 25,
      promotion: "WELCOME",
    },
    {
      id: 4,
      name: "ເມົາສ໌ເກມມິ່ງ",
      price: 24.99,
      category: "ອຸປະກອນເສີມ",
      stock: 15,
      promotion: null,
    },
  ];

  if (!mounted) return null;

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
            ສິນຄ້າ
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            ຈັດການສາງສິນຄ້າ ແລະ ລາຍການສິນຄ້າຂອງທ່ານ
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
              <button
                onClick={handleDownloadPDF}
                className="w-full flex items-center gap-3 px-4 py-3 text-sm text-gray-600 dark:text-gray-300 hover:bg-teal-50 dark:hover:bg-teal-900/20 hover:text-teal-700 dark:hover:text-teal-400 transition-colors"
              >
                <FilePdf className="w-4 h-4" />
                <span>Download PDF</span>
              </button>
            </div>
          </div>
          <Link href="/product/create">
            <button className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-2xl font-bold transition-all shadow-lg shadow-teal-100 dark:shadow-none active:scale-95">
              <Plus className="w-5 h-5" />
              <span>ເພີ່ມສິນຄ້າ</span>
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
            placeholder="ຄົ້ນຫາສິນຄ້າ..."
            className="w-full pl-11 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl text-sm focus:outline-none focus:ring-4 focus:ring-teal-500/10 focus:border-teal-500 transition-all dark:text-white"
          />
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-3 border border-gray-100 dark:border-gray-700 rounded-2xl text-sm font-bold text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all">
            <Filter className="w-4 h-4" />
            <span>ກັ່ນຕອງ</span>
          </button>
          <select className="flex-1 md:flex-none px-5 py-3 border border-gray-100 dark:border-gray-700 rounded-2xl text-sm font-bold text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 focus:outline-none transition-all appearance-none">
            <option>ທຸກໝວດໝູ່</option>
            <option>ເຄື່ອງເອເລັກໂຕຣນິກ</option>
            <option>ອຸປະກອນສວມໃສ່</option>
            <option>ອຸປະກອນເສີມ</option>
          </select>
        </div>
      </div>

      {/* Products Table */}
      <div id="product-table" className="bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden">
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
                  ລາຄາ
                </th>
                <th className="px-8 py-5 text-xs font-bold text-gray-400 uppercase tracking-wider">
                  ຈຳນວນໃນສາງ
                </th>
                <th className="px-8 py-5 text-xs font-bold text-gray-400 uppercase tracking-wider">
                  ໂປຣໂມຊັ່ນ
                </th>
                <th className="px-8 py-5 text-xs font-bold text-gray-400 uppercase tracking-wider text-right">
                  ຈັດການ
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 dark:divide-gray-800">
              {products.map((product) => (
                <tr
                  key={product.id}
                  className="hover:bg-gray-50/50 dark:hover:bg-gray-800/30 transition-colors group"
                >
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-teal-900/20 flex items-center justify-center text-teal-600 dark:text-teal-400 font-bold text-lg border border-teal-100 dark:border-teal-900/30">
                        <ShoppingBag className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-800 dark:text-white">
                          {product.name}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          ID: #{product.id.toString().padStart(4, "0")}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-300">
                      <Layers className="w-4 h-4 text-teal-500" />
                      {product.category}
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-1 text-sm font-bold text-gray-800 dark:text-white">
                      <DollarSign className="w-4 h-4 text-teal-500" />
                      {product.price.toLocaleString()}
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-2">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${
                          product.stock > 10
                            ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400"
                            : "bg-orange-50 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400"
                        }`}
                      >
                        <Box className="w-3 h-3 mr-2" />
                        {product.stock} ລາຍການ
                      </span>
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    {product.promotion ? (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold bg-teal-50 text-teal-600 border border-teal-100">
                        <Tag className="w-3 h-3 mr-1.5" />
                        {product.promotion}
                      </span>
                    ) : (
                      <span className="text-xs text-gray-400">-</span>
                    )}
                  </td>
                  <td className="px-8 py-5 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 text-gray-400 hover:text-teal-600 hover:bg-teal-50 dark:hover:bg-teal-900/20 rounded-xl transition-all">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(product.id)}
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

export default ProductPage;
