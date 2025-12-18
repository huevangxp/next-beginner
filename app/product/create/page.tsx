"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Save,
  Image as ImageIcon,
  Upload,
  X,
  ShoppingBag,
  DollarSign,
  Layers,
  Box,
  FileText,
} from "lucide-react";
import Link from "next/link";

const CreateProductPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  React.useEffect(() => {
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

  if (!mounted) {
    return null;
  }

  return (
    <div className="max-w-ຢຂxl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link
            href="/product"
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-colors text-gray-500"
          >
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
              ເພີ່ມສິນຄ້າໃໝ່
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              ຕື່ມຂໍ້ມູນລຸ່ມນີ້ເພື່ອສ້າງສິນຄ້າໃໝ່ໃນລະບົບ
            </p>
          </div>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 lg:grid-cols-3 gap-8"
      >
        {/* Left Column: Main Info */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white dark:bg-gray-900 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1 flex items-center gap-2">
                <ShoppingBag className="w-4 h-4 text-teal-500" />
                ຊື່ສິນຄ້າ
              </label>
              <input
                type="text"
                placeholder="ຕົວຢ່າງ: ຫູຟັງໄຮ້ສາຍ Pro"
                className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl focus:ring-4 focus:ring-teal-500/10 focus:border-teal-500 outline-none transition-all dark:text-white"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1 flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-teal-500" />
                  ລາຄາ ($)
                </label>
                <input
                  type="number"
                  step="0.01"
                  placeholder="0.00"
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl focus:ring-4 focus:ring-teal-500/10 focus:border-teal-500 outline-none transition-all dark:text-white"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1 flex items-center gap-2">
                  <Box className="w-4 h-4 text-teal-500" />
                  ຈຳນວນໃນສາງ
                </label>
                <input
                  type="number"
                  placeholder="0"
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl focus:ring-4 focus:ring-teal-500/10 focus:border-teal-500 outline-none transition-all dark:text-white"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1 flex items-center gap-2">
                <Layers className="w-4 h-4 text-teal-500" />
                ໝວດໝູ່
              </label>
              <select className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl focus:ring-4 focus:ring-teal-500/10 focus:border-teal-500 outline-none transition-all dark:text-white appearance-none">
                <option value="electronics">ເຄື່ອງເອເລັກໂຕຣນິກ</option>
                <option value="wearables">ອຸປະກອນສວມໃສ່</option>
                <option value="accessories">ອຸປະກອນເສີມ</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1 flex items-center gap-2">
                <FileText className="w-4 h-4 text-teal-500" />
                ລາຍລະອຽດສິນຄ້າ
              </label>
              <textarea
                rows={5}
                placeholder="ຂຽນລາຍລະອຽດກ່ຽວກັບສິນຄ້າຂອງທ່ານ..."
                className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl focus:ring-4 focus:ring-teal-500/10 focus:border-teal-500 outline-none transition-all dark:text-white resize-none"
              />
            </div>
          </div>
        </div>

        {/* Right Column: Image & Actions */}
        <div className="space-y-6">
          {/* Image Upload */}
          <div className="bg-white dark:bg-gray-900 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm space-y-4">
            <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1 flex items-center gap-2">
              <ImageIcon className="w-4 h-4 text-teal-500" />
              ຮູບພາບສິນຄ້າ
            </label>

            <div className="relative group">
              {imagePreview ? (
                <div className="relative aspect-square rounded-2xl overflow-hidden border-2 border-teal-500/20">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => setImagePreview(null)}
                    className="absolute top-2 right-2 p-1.5 bg-red-500 text-white rounded-lg shadow-lg hover:bg-red-600 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <label className="flex flex-col items-center justify-center aspect-square rounded-2xl border-2 border-dashed border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 hover:bg-teal-50 dark:hover:bg-teal-900/10 hover:border-teal-500/50 transition-all cursor-pointer group">
                  <div className="p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-sm mb-3 group-hover:scale-110 transition-transform">
                    <Upload className="w-8 h-8 text-teal-500" />
                  </div>
                  <span className="text-sm font-bold text-gray-500 dark:text-gray-400">
                    ຄລິກເພື່ອອັບໂຫຼດຮູບ
                  </span>
                  <span className="text-xs text-gray-400 mt-1">
                    PNG, JPG ຂະໜາດບໍ່ເກີນ 5MB
                  </span>
                  <input
                    type="file"
                    className="hidden"
                    onChange={handleImageChange}
                    accept="image/*"
                  />
                </label>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm space-y-3">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-4 bg-teal-600 hover:bg-teal-700 text-white rounded-2xl font-bold text-lg shadow-xl shadow-teal-500/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
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
            <Link
              href="/product"
              className="w-full py-4 bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-2xl font-bold text-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-all block"
            >
              ຍົກເລີກ
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateProductPage;
