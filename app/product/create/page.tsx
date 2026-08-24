"use client";

import React, { useState, useEffect, useRef } from "react";
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
  Upload,
  Image as ImageIcon,
  Tag,
} from "lucide-react";
import Link from "next/link";

const CreateProductPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageName, setImageName] = useState<string>("");
  const [isInStock, setIsInStock] = useState(true);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      router.push("/product");
    }, 1000);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageName(file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setImagePreview(null);
    setImageName("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  if (!mounted) return null;

  return (
    <div className="space-y-6 animate-in fade-in duration-500 pb-8">
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
            ເພີ່ມສິນຄ້າໃໝ່ (Create Product)
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-0.5">
            ຕື່ມຂໍ້ມູນລຸ່ມນີ້ເພື່ອສ້າງສິນຄ້າໃໝ່ໃນລະບົບ
          </p>
        </div>
      </div>

      {/* Main Form Card */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-800 overflow-hidden card-3d">
        <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
          {/* Product Image Upload Section with Local File Selection */}
          <div className="p-5 bg-gray-50/60 dark:bg-slate-800/40 rounded-2xl border border-dashed border-gray-200 dark:border-slate-700 flex flex-col items-center justify-center space-y-3">
            <input
              ref={fileInputRef}
              type="file"
              id="product-image-upload"
              className="hidden"
              onChange={handleImageChange}
              accept="image/*"
            />

            {imagePreview ? (
              <div className="relative group flex flex-col items-center">
                <div className="w-36 h-36 rounded-2xl border-2 border-teal-500 shadow-xl overflow-hidden bg-slate-900">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <button
                  type="button"
                  onClick={handleRemoveImage}
                  className="absolute -top-2 -right-2 p-1.5 bg-rose-500 hover:bg-rose-600 text-white rounded-full shadow-lg transition-all cursor-pointer"
                  title="ລຶບຮູບ"
                >
                  <X className="w-4 h-4" />
                </button>
                <span className="text-xs font-semibold text-teal-600 dark:text-teal-400 mt-2 truncate max-w-xs">
                  {imageName || "ຮູບພາບທີ່ເລືອກ"}
                </span>
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="text-[11px] text-gray-500 hover:text-teal-600 underline mt-1 cursor-pointer"
                >
                  ປ່ຽນຮູບພາບອື່ນ
                </button>
              </div>
            ) : (
              <div
                onClick={() => fileInputRef.current?.click()}
                className="flex flex-col items-center justify-center p-6 text-center cursor-pointer hover:bg-teal-50/50 dark:hover:bg-teal-950/20 rounded-xl transition-all w-full max-w-md"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center text-white shadow-lg shadow-teal-600/30 icon-3d mb-2">
                  <Upload className="w-6 h-6" />
                </div>
                <p className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">
                  ຄລິກເພື່ອເລືອກຮູບພາບສິນຄ້າຈາກເຄື່ອງ (Local Files)
                </p>
                <p className="text-[11px] text-gray-400 mt-1">
                  ຮອງຮັບ PNG, JPG, JPEG ຫຼື WebP (ຂະໜາດແນະນຳ 800×800px)
                </p>
              </div>
            )}
          </div>

          {/* Form Fields Grid */}
          <div className="space-y-4">
            {/* Product Name */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-1.5">
                <ShoppingBag className="w-3.5 h-3.5 text-teal-600" />
                <span>ຊື່ສິນຄ້າ</span>
              </label>
              <input
                type="text"
                placeholder="ຕົວຢ່າງ: ຫູຟັງໄຮ້ສາຍ Sony WH-1000XM5"
                className="w-full px-3.5 py-2 bg-gray-50 dark:bg-slate-800/60 border border-gray-200 dark:border-slate-700 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 outline-none transition-all dark:text-white placeholder:text-gray-400"
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
                  placeholder="0.00"
                  className="w-full px-3.5 py-2 bg-gray-50 dark:bg-slate-800/60 border border-gray-200 dark:border-slate-700 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 outline-none transition-all dark:text-white placeholder:text-gray-400"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-teal-600" />
                  <span>ໝວດໝູ່ສິນຄ້າ</span>
                </label>
                <select className="w-full px-3.5 py-2 bg-gray-50 dark:bg-slate-800/60 border border-gray-200 dark:border-slate-700 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 outline-none transition-all dark:text-white cursor-pointer">
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
                  placeholder="0"
                  className="w-full px-3.5 py-2 bg-gray-50 dark:bg-slate-800/60 border border-gray-200 dark:border-slate-700 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 outline-none transition-all dark:text-white placeholder:text-gray-400"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-1.5">
                  <Tag className="w-3.5 h-3.5 text-teal-600" />
                  <span>ໂປຣໂມຊັ່ນທີ່ກ່ຽວຂ້ອງ</span>
                </label>
                <select className="w-full px-3.5 py-2 bg-gray-50 dark:bg-slate-800/60 border border-gray-200 dark:border-slate-700 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 outline-none transition-all dark:text-white cursor-pointer">
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
                placeholder="ປ້ອນລາຍລະອຽດ, ຄຸນສົມບັດຂອງສິນຄ້າ..."
                className="w-full px-3.5 py-2 bg-gray-50 dark:bg-slate-800/60 border border-gray-200 dark:border-slate-700 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 outline-none transition-all dark:text-white placeholder:text-gray-400 resize-none"
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
              className="flex-1 py-2.5 bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 rounded-xl text-xs sm:text-sm font-semibold text-center hover:bg-gray-200 dark:hover:bg-slate-700 transition-all cursor-pointer"
            >
              ຍົກເລີກ
            </Link>
            <button
              type="submit"
              disabled={isLoading}
              className="flex-1 py-2.5 bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white rounded-xl text-xs sm:text-sm font-semibold shadow-md shadow-teal-600/20 btn-3d transition-all flex items-center justify-center gap-1.5 disabled:opacity-70 cursor-pointer"
            >
              {isLoading ? (
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  <span>ບັນທຶກສິນຄ້າໃໝ່</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProductPage;
