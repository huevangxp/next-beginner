"use client";

import React, { useState, useEffect } from "react";
import {
  ShoppingBag,
  Plus,
  Search,
  Edit2,
  Trash2,
  Box,
  Layers,
  Download,
  Tag,
  FileSpreadsheet,
} from "lucide-react";
import Link from "next/link";
import { exportToExcel } from "../utils/exportUtils";
import Pagination from "../components/Pagination";

const ProductPage = () => {
  const [mounted, setMounted] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleDelete = (id: number) => {
    if (window.confirm("ທ່ານແນ່ໃຈບໍ່ວ່າຕ້ອງການລຶບສິນຄ້ານີ້?")) {
      console.log("Deleting product:", id);
    }
  };

  const products = [
    {
      id: 1,
      name: "ຫູຟັງໄຮ້ສາຍ Sony WH-1000XM5",
      price: 59.99,
      category: "electronics",
      categoryName: "ເຄື່ອງເອເລັກໂຕຣນິກ",
      stock: 12,
      promotion: "LAONEWYEAR",
    },
    {
      id: 2,
      name: "ໂມງອັດສະລິຍະ Apple Watch Series 9",
      price: 129.99,
      category: "wearables",
      categoryName: "ອຸປະກອນສວມໃສ່",
      stock: 8,
      promotion: null,
    },
    {
      id: 3,
      name: "ລຳໂພງບລູທູດ JBL Flip 6",
      price: 39.99,
      category: "electronics",
      categoryName: "ເຄື່ອງເອເລັກໂຕຣນິກ",
      stock: 25,
      promotion: "WELCOME",
    },
    {
      id: 4,
      name: "ເມົາສ໌ເກມມິ່ງ Logitech G Pro X",
      price: 24.99,
      category: "accessories",
      categoryName: "ອຸປະກອນເສີມ",
      stock: 15,
      promotion: null,
    },
    {
      id: 5,
      name: "ຄີບອດ Keychron K2 Pro Wireless",
      price: 89.99,
      category: "accessories",
      categoryName: "ອຸປະກອນເສີມ",
      stock: 6,
      promotion: "WELCOME",
    },
    {
      id: 6,
      name: "iPad Air M2 11-inch 128GB",
      price: 599.0,
      category: "electronics",
      categoryName: "ເຄື່ອງເອເລັກໂຕຣນິກ",
      stock: 10,
      promotion: null,
    },
    {
      id: 7,
      name: "ສາຍຮັດຂໍ້ມື Garmin Forerunner 265",
      price: 449.99,
      category: "wearables",
      categoryName: "ອຸປະກອນສວມໃສ່",
      stock: 4,
      promotion: "LAONEWYEAR",
    },
    {
      id: 8,
      name: "ແຜ່ນຮອງເມົາສ໌ SteelSeries QcK Prism",
      price: 19.99,
      category: "accessories",
      categoryName: "ອຸປະກອນເສີມ",
      stock: 30,
      promotion: null,
    },
  ];

  const filteredProducts = products.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.id.toString().includes(searchQuery);
    const matchesCategory =
      categoryFilter === "all" || p.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleDownloadExcel = () => {
    const exportData = filteredProducts.map((p) => ({
      ID: p.id,
      ຊື່ສິນຄ້າ: p.name,
      ລາຄາ: p.price,
      ໝວດໝູ່: p.categoryName,
      ຈຳນວນໃນສາງ: p.stock,
      ໂປຣໂມຊັ່ນ: p.promotion || "-",
    }));
    exportToExcel(exportData, "Product_Report");
  };

  if (!mounted) return null;

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
            ສິນຄ້າ
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm mt-0.5">
            ຈັດການສາງສິນຄ້າ ແລະ ລາຍການສິນຄ້າທັງໝົດໃນລະບົບ
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
          <Link href="/product/create">
            <button className="flex items-center gap-1.5 bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-md shadow-teal-600/20 active:scale-[0.98] cursor-pointer">
              <Plus className="w-4 h-4" />
              <span>ເພີ່ມສິນຄ້າ</span>
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
            placeholder="ຄົ້ນຫາສິນຄ້າ..."
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
            value={categoryFilter}
            onChange={(e) => {
              setCategoryFilter(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full sm:w-auto px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-xl text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800/60 focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-all cursor-pointer"
          >
            <option value="all">ທຸກໝວດໝູ່</option>
            <option value="electronics">ເຄື່ອງເອເລັກໂຕຣນິກ</option>
            <option value="wearables">ອຸປະກອນສວມໃສ່</option>
            <option value="accessories">ອຸປະກອນເສີມ</option>
          </select>
        </div>
      </div>

      {/* Products Table */}
      <div
        id="product-table"
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
                  ລາຄາ
                </th>
                <th className="px-5 py-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                  ຈຳນວນໃນສາງ
                </th>
                <th className="px-5 py-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                  ໂປຣໂມຊັ່ນ
                </th>
                <th className="px-5 py-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider text-right">
                  ຈັດການ
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-800 text-xs sm:text-sm">
              {paginatedProducts.map((product) => (
                <tr
                  key={product.id}
                  className="hover:bg-gray-50/70 dark:hover:bg-gray-800/30 transition-colors group"
                >
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center text-white font-bold text-sm shadow-sm">
                        <ShoppingBag className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 dark:text-white">
                          {product.name}
                        </p>
                        <p className="text-[11px] text-gray-400">
                          ID: #{product.id.toString().padStart(4, "0")}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-1.5 font-medium text-gray-600 dark:text-gray-300">
                      <Layers className="w-3.5 h-3.5 text-teal-600" />
                      <span>{product.categoryName}</span>
                    </div>
                  </td>
                  <td className="px-5 py-3.5">
                    <span className="font-bold text-gray-900 dark:text-white">
                      ${product.price.toLocaleString()}
                    </span>
                  </td>
                  <td className="px-5 py-3.5">
                    <span
                      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold ${
                        product.stock > 10
                          ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-900/30"
                          : "bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-400 border border-amber-200 dark:border-amber-900/30"
                      }`}
                    >
                      <Box className="w-3 h-3" />
                      {product.stock} ລາຍການ
                    </span>
                  </td>
                  <td className="px-5 py-3.5">
                    {product.promotion ? (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-teal-50 text-teal-700 dark:bg-teal-950/40 dark:text-teal-300 border border-teal-200 dark:border-teal-900/40">
                        <Tag className="w-3 h-3" />
                        {product.promotion}
                      </span>
                    ) : (
                      <span className="text-gray-400">—</span>
                    )}
                  </td>
                  <td className="px-5 py-3.5 text-right">
                    <div className="flex items-center justify-end gap-1.5">
                      <button className="p-1.5 text-gray-400 hover:text-teal-600 hover:bg-teal-50 dark:hover:bg-teal-900/20 rounded-lg transition-all cursor-pointer">
                        <Edit2 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => handleDelete(product.id)}
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

          {filteredProducts.length === 0 && (
            <div className="py-16 text-center text-gray-400">
              <p className="text-sm">ບໍ່ພົບຂໍ້ມູນສິນຄ້າທີ່ຄົ້ນຫາ</p>
            </div>
          )}
        </div>

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          totalItems={filteredProducts.length}
          itemsPerPage={itemsPerPage}
          onPageChange={(page) => setCurrentPage(page)}
          itemLabel="ສິນຄ້າ"
        />
      </div>
    </div>
  );
};

export default ProductPage;
