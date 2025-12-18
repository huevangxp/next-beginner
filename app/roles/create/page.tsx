"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Save,
  ShieldCheck,
  FileText,
  CheckCircle2,
  XCircle,
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

    // Mock saving process
    setTimeout(() => {
      setIsLoading(false);
      router.push("/roles");
    }, 1500);
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-gray-950 p-4 md:p-8 animate-in fade-in duration-500">
      <div className="space-y-8 mx-auto">
        {/* Header */}
        <div className="flex items-start gap-4 mb-8">
          <Link
            href="/roles"
            className="mt-1 p-2 hover:bg-white dark:hover:bg-gray-800 rounded-full transition-all text-gray-400 hover:text-gray-600 shadow-sm"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-[#0f172a] dark:text-white">
              ເພີ່ມປະເພດສິດໃໝ່
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              ກະລຸນາປ້ອນຂໍ້ມູນລຸ່ມນີ້ເພື່ອສ້າງປະເພດສິດໃໝ່ໃນລະບົບ.
            </p>
          </div>
        </div>

        {/* Main Form Card */}
        <div className="bg-white dark:bg-gray-900 rounded-[32px] shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
          <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-10">
            {/* Icon Section */}
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="w-24 h-24 rounded-3xl bg-teal-50 dark:bg-teal-900/20 flex items-center justify-center text-teal-600 dark:text-teal-400 border border-teal-100 dark:border-teal-900/30 shadow-inner">
                <ShieldCheck className="w-10 h-10" />
              </div>
              <div className="text-center">
                <h3 className="font-bold text-[#0f172a] dark:text-white">
                  ຂໍ້ມູນປະເພດສິດ
                </h3>
                <p className="text-xs text-gray-400 mt-1">
                  ກະລຸນາລະບຸຊື່ ແລະ ກຳນົດສິດທິໃຫ້ຊັດເຈນ
                </p>
              </div>
            </div>

            {/* Form Fields */}
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Role Name */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#0f172a] dark:text-gray-300 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#009688]" />
                    ຊື່ປະເພດສິດ
                  </label>
                  <input
                    type="text"
                    placeholder="ຕົວຢ່າງ: Manager"
                    className="w-full px-5 py-4 bg-[#f8fafc] dark:bg-gray-800 border-none rounded-2xl focus:ring-2 focus:ring-[#009688]/20 outline-none transition-all dark:text-white placeholder:text-gray-400"
                    required
                  />
                </div>

                {/* Status Toggle */}
                <div className="bg-[#f8fafc] dark:bg-gray-800/50 p-4 rounded-[24px] flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        isActive
                          ? "bg-emerald-100 dark:bg-emerald-900/30"
                          : "bg-red-100 dark:bg-red-900/30"
                      }`}
                    >
                      {isActive ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-600" />
                      )}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0f172a] dark:text-white text-sm">
                        ສະຖານະ
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {isActive ? "ເປີດໃຊ້ງານ" : "ປິດໃຊ້ງານ"}
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsActive(!isActive)}
                    className={`w-12 h-6 rounded-full transition-all relative ${
                      isActive ? "bg-[#009688]" : "bg-gray-300"
                    }`}
                  >
                    <div
                      className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${
                        isActive ? "right-1" : "left-1"
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#0f172a] dark:text-gray-300 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#009688]" />
                  ຄຳອະທິບາຍ
                </label>
                <textarea
                  placeholder="ລະບຸລາຍລະອຽດເພີ່ມເຕີມກ່ຽວກັບປະເພດສິດນີ້..."
                  rows={3}
                  className="w-full px-5 py-4 bg-[#f8fafc] dark:bg-gray-800 border-none rounded-2xl focus:ring-2 focus:ring-[#009688]/20 outline-none transition-all dark:text-white placeholder:text-gray-400 resize-none"
                />
              </div>

              {/* Permissions Matrix */}
              <div className="space-y-4">
                <label className="text-sm font-bold text-[#0f172a] dark:text-gray-300 flex items-center gap-2">
                  <Lock className="w-4 h-4 text-[#009688]" />
                  ກຳນົດສິດທິການເຂົ້າເຖິງ
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {permissionModules.map((module) => (
                    <div
                      key={module.id}
                      className="p-6 bg-[#f8fafc] dark:bg-gray-800/50 rounded-3xl border border-transparent hover:border-teal-500/20 transition-all group"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 rounded-lg bg-white dark:bg-gray-700 flex items-center justify-center text-gray-500 group-hover:text-teal-600 transition-colors">
                          <module.icon className="w-4 h-4" />
                        </div>
                        <h4 className="font-bold text-gray-800 dark:text-white">
                          {module.name}
                        </h4>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        {module.perms.map((perm) => (
                          <label
                            key={perm}
                            className="flex items-center gap-3 cursor-pointer group/item"
                          >
                            <div className="relative flex items-center justify-center">
                              <input
                                type="checkbox"
                                className="peer appearance-none w-5 h-5 border-2 border-gray-300 dark:border-gray-600 rounded-md checked:bg-teal-600 checked:border-teal-600 transition-all"
                              />
                              <CheckCircle2 className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" />
                            </div>
                            <span className="text-sm text-gray-600 dark:text-gray-400 group-hover/item:text-teal-600 transition-colors">
                              {perm}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Form Actions */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/roles"
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
                    <span>ບັນທຶກປະເພດສິດ</span>
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

export default CreateRolePage;
