"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Save,
  User,
  Mail,
  Lock,
  Shield,
  Phone,
  Camera,
  X,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

const CreateUserPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Mock saving process
    setTimeout(() => {
      setIsLoading(false);
      router.push("/users");
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
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link
            href="/users"
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-colors text-gray-500"
          >
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
              ເພີ່ມຜູ້ໃຊ້ໃໝ່
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              ຕື່ມຂໍ້ມູນລຸ່ມນີ້ເພື່ອສ້າງບັນຊີຜູ້ໃຊ້ໃໝ່
            </p>
          </div>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 lg:grid-cols-3 gap-8"
      >
        {/* Left Column: Profile Picture & Status */}
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-900 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm text-center space-y-6">
            <div className="relative inline-block">
              <div className="w-32 h-32 rounded-3xl bg-gray-50 dark:bg-gray-800 p-1 border-2 border-dashed border-gray-200 dark:border-gray-700 overflow-hidden">
                {imagePreview ? (
                  <img
                    src={imagePreview}
                    alt="Avatar"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-300">
                    <User className="w-12 h-12" />
                  </div>
                )}
              </div>
              <label className="absolute -bottom-2 -right-2 p-2 bg-teal-600 text-white rounded-xl shadow-lg hover:bg-teal-700 transition-all cursor-pointer">
                <Camera className="w-4 h-4" />
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
                  className="absolute -top-2 -right-2 p-1 bg-red-500 text-white rounded-lg shadow-lg hover:bg-red-600 transition-all"
                >
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>

            <div>
              <h3 className="font-bold text-gray-800 dark:text-white">
                ຮູບໂປຣໄຟລ໌
              </h3>
              <p className="text-xs text-gray-500 mt-1">ແນະນຳຂະໜາດ 400x400px</p>
            </div>

            <div className="pt-4 border-t border-gray-50 dark:border-gray-800">
              <div className="flex items-center justify-between p-3 bg-emerald-50 dark:bg-emerald-900/10 rounded-2xl border border-emerald-100 dark:border-emerald-900/30">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span className="text-sm font-bold text-emerald-700 dark:text-emerald-400">
                    ສະຖານະ: ເປີດໃຊ້
                  </span>
                </div>
                <div className="w-10 h-5 bg-emerald-600 rounded-full relative">
                  <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full" />
                </div>
              </div>
            </div>
          </div>

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
                  <span>ບັນທຶກຜູ້ໃຊ້</span>
                </>
              )}
            </button>
            <Link
              href="/users"
              className="w-full py-4 bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-2xl font-bold text-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-all block"
            >
              ຍົກເລີກ
            </Link>
          </div>
        </div>

        {/* Right Column: User Details */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white dark:bg-gray-900 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1 flex items-center gap-2">
                  <User className="w-4 h-4 text-teal-500" />
                  ຊື່ ແລະ ນາມສະກຸນ
                </label>
                <input
                  type="text"
                  placeholder="ຕົວຢ່າງ: ສົມພອນ ໄຊຍະວົງ"
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl focus:ring-4 focus:ring-teal-500/10 focus:border-teal-500 outline-none transition-all dark:text-white"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-teal-500" />
                  ທີ່ຢູ່ອີເມວ
                </label>
                <input
                  type="email"
                  placeholder="example@mail.com"
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl focus:ring-4 focus:ring-teal-500/10 focus:border-teal-500 outline-none transition-all dark:text-white"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-teal-500" />
                  ເບີໂທລະສັບ
                </label>
                <input
                  type="tel"
                  placeholder="+856 20 ..."
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl focus:ring-4 focus:ring-teal-500/10 focus:border-teal-500 outline-none transition-all dark:text-white"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-teal-500" />
                  ບົດບາດ (Role)
                </label>
                <select className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl focus:ring-4 focus:ring-teal-500/10 focus:border-teal-500 outline-none transition-all dark:text-white appearance-none">
                  <option value="admin">Administrator</option>
                  <option value="editor">Editor</option>
                  <option value="viewer">Viewer</option>
                </select>
              </div>
            </div>

            <div className="pt-4 space-y-6">
              <div className="h-px bg-gray-50 dark:bg-gray-800" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1 flex items-center gap-2">
                    <Lock className="w-4 h-4 text-teal-500" />
                    ລະຫັດຜ່ານ
                  </label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl focus:ring-4 focus:ring-teal-500/10 focus:border-teal-500 outline-none transition-all dark:text-white"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1 flex items-center gap-2">
                    <Lock className="w-4 h-4 text-teal-500" />
                    ຢືນຢັນລະຫັດຜ່ານ
                  </label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl focus:ring-4 focus:ring-teal-500/10 focus:border-teal-500 outline-none transition-all dark:text-white"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateUserPage;
