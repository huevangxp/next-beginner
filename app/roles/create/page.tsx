"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Save,
  ShieldCheck,
  FileText,
  CheckCircle2,
  Lock,
  ShoppingBag,
  ShoppingCart,
  Users,
  Settings,
} from "lucide-react";
import Link from "next/link";

const CreateRolePage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  const permissionModules = [
    {
      id: "products",
      name: "ຈັດການສິນຄ້າ",
      icon: ShoppingBag,
      perms: ["ເບິ່ງ", "ເພີ່ມ", "ແກ້ໄຂ", "ລຶບ"],
    },
    {
      id: "orders",
      name: "ຈັດການລາຍການສັ່ງຊື້",
      icon: ShoppingCart,
      perms: ["ເບິ່ງ", "ຢືນຢັນ", "ຍົກເລີກ", "ສຳເລັດ"],
    },
    {
      id: "users",
      name: "ຈັດການຜູ້ໃຊ້",
      icon: Users,
      perms: ["ເບິ່ງ", "ເພີ່ມ", "ແກ້ໄຂ", "ລຶບ"],
    },
    {
      id: "settings",
      name: "ຕັ້ງຄ່າລະບົບ",
      icon: Settings,
      perms: ["ເບິ່ງ", "ແກ້ໄຂ"],
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      router.push("/roles");
    }, 1000);
  };

  if (!mounted) return null;

  return (
    <div className="space-y-6 animate-in fade-in duration-500 pb-8">
      {/* Header */}
      <div className="flex items-center gap-3">
        <Link
          href="/roles"
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-all text-gray-500 hover:text-gray-900 dark:hover:text-white"
        >
          <ArrowLeft className="w-4 h-4" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
            ເພີ່ມປະເພດສິດໃໝ່
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-0.5">
            ກະລຸນາປ້ອນຂໍ້ມູນລຸ່ມນີ້ເພື່ອສ້າງປະເພດສິດໃໝ່ໃນລະບົບ
          </p>
        </div>
      </div>

      {/* Main Form Card */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
        <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
          {/* Icon Header */}
          <div className="flex flex-col items-center justify-center space-y-2">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center text-white shadow-md shadow-teal-600/20">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div className="text-center">
              <h3 className="text-sm font-bold text-gray-900 dark:text-white">
                ຂໍ້ມູນປະເພດສິດ
              </h3>
              <p className="text-[11px] text-gray-400 mt-0.5">
                ກະລຸນາລະບຸຊື່ ແລະ ກຳນົດສິດທິໃຫ້ຊັດເຈນ
              </p>
            </div>
          </div>

          {/* Form Fields */}
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Role Name */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
                  <span>ຊື່ປະເພດສິດ</span>
                </label>
                <input
                  type="text"
                  placeholder="ຕົວຢ່າງ: Manager"
                  className="w-full px-3.5 py-2 bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 outline-none transition-all dark:text-white placeholder:text-gray-400"
                  required
                />
              </div>

              {/* Status Toggle */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
                  <span>ສະຖານະ</span>
                </label>
                <div className="bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 px-3.5 py-2 rounded-xl flex items-center justify-between h-[42px]">
                  <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                    {isActive ? "ເປີດໃຊ້ງານ" : "ປິດໃຊ້ງານ"}
                  </span>
                  <button
                    type="button"
                    onClick={() => setIsActive(!isActive)}
                    className={`w-9 h-5 rounded-full transition-all relative cursor-pointer ${
                      isActive ? "bg-teal-600" : "bg-gray-300 dark:bg-gray-700"
                    }`}
                  >
                    <div
                      className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition-all ${
                        isActive ? "right-0.5" : "left-0.5"
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-teal-600" />
                <span>ຄຳອະທິບາຍ</span>
              </label>
              <textarea
                placeholder="ລະບຸລາຍລະອຽດເພີ່ມເຕີມກ່ຽວກັບປະເພດສິດນີ້..."
                rows={2}
                className="w-full px-3.5 py-2 bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 outline-none transition-all dark:text-white placeholder:text-gray-400 resize-none"
              />
            </div>

            {/* Permissions Matrix */}
            <div className="space-y-2.5 pt-2">
              <label className="text-xs font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-teal-600" />
                <span>ກຳນົດສິດທິການເຂົ້າເຖິງ</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {permissionModules.map((module) => (
                  <div
                    key={module.id}
                    className="p-3.5 bg-gray-50/60 dark:bg-gray-800/40 rounded-xl border border-gray-100 dark:border-gray-800 space-y-2.5"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-lg bg-teal-50 dark:bg-teal-900/30 flex items-center justify-center text-teal-600">
                        <module.icon className="w-3.5 h-3.5" />
                      </div>
                      <h4 className="font-bold text-xs text-gray-900 dark:text-white">
                        {module.name}
                      </h4>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      {module.perms.map((perm) => (
                        <label
                          key={perm}
                          className="flex items-center gap-2 cursor-pointer text-xs text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400"
                        >
                          <input
                            type="checkbox"
                            defaultChecked
                            className="w-3.5 h-3.5 rounded text-teal-600 focus:ring-teal-500/20"
                          />
                          <span>{perm}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex items-center gap-3 pt-2">
            <Link
              href="/roles"
              className="flex-1 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl text-xs sm:text-sm font-semibold text-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-all cursor-pointer"
            >
              ຍົກເລີກ
            </Link>
            <button
              type="submit"
              disabled={isLoading}
              className="flex-1 py-2 bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white rounded-xl text-xs sm:text-sm font-semibold shadow-md shadow-teal-600/20 transition-all active:scale-[0.98] flex items-center justify-center gap-1.5 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
            >
              {isLoading ? (
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  <span>ບັນທຶກປະເພດສິດ</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateRolePage;
