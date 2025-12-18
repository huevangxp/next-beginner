"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Save,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  Lock,
  Eye,
  ShoppingBag,
  Users,
  Settings,
  Layers,
  ShoppingCart,
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
      <div className="mx-auto space-y-8">
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
              ກຳນົດຊື່ບົດບາດ ແລະ ເລືອກສິດທິການເຂົ້າເຖິງລະບົບ.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left: Basic Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white dark:bg-gray-900 rounded-[32px] p-8 shadow-sm border border-gray-100 dark:border-gray-800">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-900/20 flex items-center justify-center text-teal-600">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-gray-800 dark:text-white">
                    ຂໍ້ມູນພື້ນຖານ
                  </h3>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 dark:text-gray-300">
                      ຊື່ປະເພດສິດ
                    </label>
                    <input
                      type="text"
                      placeholder="ຕົວຢ່າງ: Manager"
                      className="w-full px-5 py-4 bg-[#f8fafc] dark:bg-gray-800 border-none rounded-2xl focus:ring-2 focus:ring-teal-500/20 outline-none transition-all dark:text-white"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 dark:text-gray-300">
                      ຄຳອະທິບາຍ
                    </label>
                    <textarea
                      placeholder="ລະບຸລາຍລະອຽດຂອງສິດທິນີ້..."
                      rows={4}
                      className="w-full px-5 py-4 bg-[#f8fafc] dark:bg-gray-800 border-none rounded-2xl focus:ring-2 focus:ring-teal-500/20 outline-none transition-all dark:text-white resize-none"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 dark:text-gray-300">
                      ສະຖານະ
                    </label>
                    <div className="bg-[#f8fafc] dark:bg-gray-800/50 p-4 rounded-2xl flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                        {isActive ? "ເປີດໃຊ້ງານ" : "ປິດໃຊ້ງານ"}
                      </span>
                      <button
                        type="button"
                        onClick={() => setIsActive(!isActive)}
                        className={`w-12 h-6 rounded-full transition-all relative ${
                          isActive ? "bg-teal-600" : "bg-gray-300"
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
                </div>
              </div>
            </div>

            {/* Right: Permissions Grid */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white dark:bg-gray-900 rounded-[32px] p-8 shadow-sm border border-gray-100 dark:border-gray-800">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600">
                    <Lock className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-gray-800 dark:text-white">
                    ກຳນົດສິດທິການເຂົ້າເຖິງ
                  </h3>
                </div>

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

              {/* Form Actions */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/roles"
                  className="flex-1 py-4 bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 rounded-2xl font-bold text-center border border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
                >
                  ຍົກເລີກ
                </Link>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex-1 py-4 bg-teal-600 hover:bg-teal-700 text-white rounded-2xl font-bold text-lg shadow-lg shadow-teal-100 dark:shadow-none transition-all active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
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
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateRolePage;
