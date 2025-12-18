"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Save,
  ShoppingBag,
  DollarSign,
  Box,
  Layers,
  FileText,
  Camera,
  X,
  CheckCircle2,
  Upload,
  ChevronDown,
  Image as ImageIcon,
} from "lucide-react";
import Link from "next/link";

const CreateProductPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isInStock, setIsInStock] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Mock saving process
    setTimeout(() => {
      setIsLoading(false);
      router.push("/product");
    }, 1500);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-gray-950 p-4 md:p-8 animate-in fade-in duration-500">
      <div className="max-w-10xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-start gap-4 mb-8">
          <Link
            href="/product"
            className="mt-1 p-2 hover:bg-white dark:hover:bg-gray-800 rounded-full transition-all text-gray-400 hover:text-gray-600 shadow-sm"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-[#0f172a] dark:text-white">
              ເພີ່ມສິນຄ້າໃໝ່
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              ຕື່ມຂໍ້ມູນລຸ່ມນີ້ເພື່ອສ້າງສິນຄ້າໃໝ່ໃນລະບົບ.
            </p>
          </div>
        </div>

        {/* Main Form Card */}
        <div className="bg-white dark:bg-gray-900 rounded-[32px] shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
          <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-10">
            {/* Product Image Upload Section */}
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="relative">
                <div className="w-40 h-40 rounded-[32px] border-2 border-dashed border-gray-200 dark:border-gray-700 flex items-center justify-center bg-gray-50 dark:bg-gray-800 overflow-hidden">
                  {imagePreview ? (
                    <img
                      src={imagePreview}
                      alt="Product"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <ShoppingBag className="w-16 h-16 text-gray-300" />
                  )}
                </div>
                <label className="absolute bottom-2 right-2 p-3 bg-[#009688] text-white rounded-2xl shadow-lg hover:bg-[#00796b] transition-all cursor-pointer border-4 border-white dark:border-gray-900">
                  <Camera className="w-5 h-5" />
                  <input
                    type="file"
                    className="hidden"
                    onChange={handleImageChange}
                    accept="image/*"
                  />
                </label>
                {imagePreview && (
                  <button
                    type="button"
                    onClick={() => setImagePreview(null)}
                    className="absolute -top-2 -right-2 p-1.5 bg-red-500 text-white rounded-xl shadow-md hover:bg-red-600 transition-all"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
              <div className="text-center">
                <h3 className="font-bold text-[#0f172a] dark:text-white">
                  ອັບໂຫຼດຮູບພາບສິນຄ້າ
                </h3>
                <p className="text-xs text-gray-400 mt-1">
                  ຂະໜາດທີ່ແນະນຳ 800×800px (ສີ່ຫຼ່ຽມ)
                </p>
              </div>
            </div>

            {/* Form Fields Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {/* Product Name */}
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-bold text-[#0f172a] dark:text-gray-300 flex items-center gap-2">
                  <ShoppingBag className="w-4 h-4 text-[#009688]" />
                  ຊື່ສິນຄ້າ
                </label>
                <input
                  type="text"
                  placeholder="ຕົວຢ່າງ: ຫູຟັງໄຮ້ສາຍ Pro Max"
                  className="w-full px-5 py-4 bg-[#f8fafc] dark:bg-gray-800 border-none rounded-2xl focus:ring-2 focus:ring-[#009688]/20 outline-none transition-all dark:text-white placeholder:text-gray-400"
                  required
                />
              </div>

              {/* Price */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#0f172a] dark:text-gray-300 flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-[#009688]" />
                  ລາຄາ ($)
                </label>
                <input
                  type="number"
                  step="0.01"
                  placeholder="0.00"
                  className="w-full px-5 py-4 bg-[#f8fafc] dark:bg-gray-800 border-none rounded-2xl focus:ring-2 focus:ring-[#009688]/20 outline-none transition-all dark:text-white placeholder:text-gray-400"
                  required
                />
              </div>

              {/* Stock Quantity */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#0f172a] dark:text-gray-300 flex items-center gap-2">
                  <Box className="w-4 h-4 text-[#009688]" />
                  ຈຳນວນໃນສາງ
                </label>
                <input
                  type="number"
                  placeholder="0"
                  className="w-full px-5 py-4 bg-[#f8fafc] dark:bg-gray-800 border-none rounded-2xl focus:ring-2 focus:ring-[#009688]/20 outline-none transition-all dark:text-white placeholder:text-gray-400"
                  required
                />
              </div>

              {/* Category */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#0f172a] dark:text-gray-300 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#009688]" />
                  ໝວດໝູ່
                </label>
                <div className="relative">
                  <select className="w-full px-5 py-4 bg-[#f8fafc] dark:bg-gray-800 border-none rounded-2xl focus:ring-2 focus:ring-[#009688]/20 outline-none transition-all dark:text-white appearance-none cursor-pointer">
                    <option value="electronics">ເຄື່ອງເອເລັກໂຕຣນິກ</option>
                    <option value="wearables">ອຸປະກອນສວມໃສ່</option>
                    <option value="accessories">ອຸປະກອນເສີມ</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Status Toggle (In Stock / Out of Stock) */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#0f172a] dark:text-gray-300 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#009688]" />
                  ສະຖານະສິນຄ້າ
                </label>
                <div className="bg-[#f8fafc] dark:bg-gray-800/50 p-4 rounded-2xl flex items-center justify-between h-[60px]">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    {isInStock ? "ພ້ອມຈຳໜ່າຍ" : "ສິນຄ້າໝົດ"}
                  </span>
                  <button
                    type="button"
                    onClick={() => setIsInStock(!isInStock)}
                    className={`w-12 h-6 rounded-full transition-all relative ${
                      isInStock ? "bg-[#009688]" : "bg-gray-300"
                    }`}
                  >
                    <div
                      className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${
                        isInStock ? "right-1" : "left-1"
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Description */}
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-bold text-[#0f172a] dark:text-gray-300 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#009688]" />
                  ລາຍລະອຽດສິນຄ້າ
                </label>
                <textarea
                  rows={5}
                  placeholder="ຂຽນລາຍລະອຽດກ່ຽວກັບສິນຄ້າຂອງທ່ານ..."
                  className="w-full px-5 py-4 bg-[#f8fafc] dark:bg-gray-800 border-none rounded-2xl focus:ring-2 focus:ring-[#009688]/20 outline-none transition-all dark:text-white placeholder:text-gray-400 resize-none"
                />
              </div>
            </div>

            {/* Form Actions */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/product"
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
                    <span>ບັນທຶກສິນຄ້າ</span>
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

export default CreateProductPage;
