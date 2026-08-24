"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import {
  ArrowLeft,
  Save,
  ShoppingBag,
  DollarSign,
  Box,
  Layers,
  FileText,
  Camera,
  Tag,
} from "lucide-react";
import Link from "next/link";

const EditProductPage = () => {
  const router = useRouter();
  const params = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isInStock, setIsInStock] = useState(true);

  const [formData, setFormData] = useState({
    name: "ຫູຟັງໄຮ້ສາຍ Sony WH-1000XM5",
    price: "59.99",
    category: "electronics",
    stock: "12",
    promotion: "LAONEWYEAR",
    description: "ຫູຟັງໄຮ້ສາຍລະດັບພຣີມ່ຽມ ຕັດສຽງລົບກວນໄດ້ດີຢ້ຽມ ແບັດເຕີຣີຍາວນານ 30 ຊົ່ວໂມງ",
  });

  useEffect(() => {
    setMounted(true);
  }, [params.id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      router.push("/product");
    }, 1000);
  };

  if (!mounted) return null;

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in duration-500">
      {/* Header */}
      <div className="flex items-center gap-3">
        <Link
          href="/product"
          className="p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-xl transition-all text-gray-500 hover:text-gray-900 dark:hover:text-white"
        >
          <ArrowLeft className="w-4 h-4" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
            ແກ້ໄຂຂໍ້ມູນສິນຄ້າ #{params.id}
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-0.5">
            ອັບເດດລາຍລະອຽດ, ລາຄາ ແລະ ຈຳນວນສະຕັອກສິນຄ້າ
          </p>
        </div>
      </div>

      {/* Main Form Card */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-800 overflow-hidden card-3d">
        <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
          {/* Image Section */}
          <div className="flex flex-col items-center justify-center space-y-3 pb-2">
            <div className="relative group">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center text-white shadow-lg shadow-teal-500/20 icon-3d">
                <ShoppingBag className="w-10 h-10" />
              </div>
              <button
                type="button"
                className="absolute bottom-0 right-0 p-1.5 bg-white dark:bg-slate-800 rounded-lg shadow-md border border-gray-200 dark:border-slate-700 text-teal-600 hover:scale-110 transition-transform cursor-pointer"
              >
                <Camera className="w-3.5 h-3.5" />
              </button>
            </div>
            <div className="text-center">
              <p className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                ຮູບພາບສິນຄ້າ
              </p>
              <p className="text-[11px] text-gray-400">
                ຄລິກທີ່ໄອຄອນກ້ອງເພື່ອອັບໂຫຼດຮູບໃໝ່
              </p>
            </div>
          </div>

          {/* Form Fields */}
          <div className="space-y-4">
            {/* Product Name */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-1.5">
                <ShoppingBag className="w-3.5 h-3.5 text-teal-600" />
                <span>ຊື່ສິນຄ້າ</span>
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-3.5 py-2 bg-gray-50 dark:bg-slate-800/60 border border-gray-200 dark:border-slate-700 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 outline-none transition-all dark:text-white"
                required
              />
            </div>

            {/* Price & Category */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-1.5">
                  <DollarSign className="w-3.5 h-3.5 text-teal-600" />
                  <span>ລາຄາ ($)</span>
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={formData.price}
                  onChange={(e) =>
                    setFormData({ ...formData, price: e.target.value })
                  }
                  className="w-full px-3.5 py-2 bg-gray-50 dark:bg-slate-800/60 border border-gray-200 dark:border-slate-700 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 outline-none transition-all dark:text-white"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-teal-600" />
                  <span>ໝວດໝູ່ສິນຄ້າ</span>
                </label>
                <select
                  value={formData.category}
                  onChange={(e) =>
                    setFormData({ ...formData, category: e.target.value })
                  }
                  className="w-full px-3.5 py-2 bg-gray-50 dark:bg-slate-800/60 border border-gray-200 dark:border-slate-700 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 outline-none transition-all dark:text-white cursor-pointer"
                >
                  <option value="electronics">ເຄື່ອງເອເລັກໂຕຣນິກ</option>
                  <option value="wearables">ອຸປະກອນສວມໃສ່</option>
                  <option value="accessories">ອຸປະກອນເສີມ</option>
                </select>
              </div>
            </div>

            {/* Stock & Promotion */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-1.5">
                  <Box className="w-3.5 h-3.5 text-teal-600" />
                  <span>ຈຳນວນໃນສາງ</span>
                </label>
                <input
                  type="number"
                  value={formData.stock}
                  onChange={(e) =>
                    setFormData({ ...formData, stock: e.target.value })
                  }
                  className="w-full px-3.5 py-2 bg-gray-50 dark:bg-slate-800/60 border border-gray-200 dark:border-slate-700 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 outline-none transition-all dark:text-white"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-1.5">
                  <Tag className="w-3.5 h-3.5 text-teal-600" />
                  <span>ໂປຣໂມຊັ່ນທີ່ກ່ຽວຂ້ອງ</span>
                </label>
                <select
                  value={formData.promotion}
                  onChange={(e) =>
                    setFormData({ ...formData, promotion: e.target.value })
                  }
                  className="w-full px-3.5 py-2 bg-gray-50 dark:bg-slate-800/60 border border-gray-200 dark:border-slate-700 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 outline-none transition-all dark:text-white cursor-pointer"
                >
                  <option value="">ບໍ່ມີໂປຣໂມຊັ່ນ</option>
                  <option value="LAONEWYEAR">LAONEWYEAR (20%)</option>
                  <option value="WELCOME">WELCOME (10%)</option>
                </select>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-teal-600" />
                <span>ລາຍລະອຽດສິນຄ້າ</span>
              </label>
              <textarea
                rows={3}
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                className="w-full px-3.5 py-2 bg-gray-50 dark:bg-slate-800/60 border border-gray-200 dark:border-slate-700 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 outline-none transition-all dark:text-white resize-none"
              />
            </div>

            {/* Status Toggle */}
            <div className="bg-gray-50 dark:bg-slate-800/50 p-4 rounded-xl flex items-center justify-between border border-gray-100 dark:border-slate-800">
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white text-xs">
                  ສະຖານະສິນຄ້າ
                </h4>
                <p className="text-[11px] text-gray-500 dark:text-gray-400">
                  {isInStock ? "ພ້ອມຈຳໜ່າຍ (In Stock)" : "ສິນຄ້າໝົດຊົ່ວຄາວ (Out of Stock)"}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsInStock(!isInStock)}
                className={`w-9 h-5 rounded-full transition-all relative cursor-pointer ${
                  isInStock ? "bg-teal-600" : "bg-gray-300 dark:bg-slate-700"
                }`}
              >
                <div
                  className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition-all ${
                    isInStock ? "right-0.5" : "left-0.5"
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex items-center gap-3 pt-2">
            <Link
              href="/product"
              className="flex-1 py-2 bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 rounded-xl text-xs sm:text-sm font-semibold text-center hover:bg-gray-200 dark:hover:bg-slate-700 transition-all cursor-pointer"
            >
              ຍົກເລີກ
            </Link>
            <button
              type="submit"
              disabled={isLoading}
              className="flex-1 py-2 bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white rounded-xl text-xs sm:text-sm font-semibold shadow-md shadow-teal-600/20 btn-3d transition-all flex items-center justify-center gap-1.5 disabled:opacity-70 cursor-pointer"
            >
              {isLoading ? (
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  <span>ອັບເດດສິນຄ້າ</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProductPage;
