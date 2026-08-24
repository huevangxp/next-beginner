"use client";

import React, { useState, useEffect } from "react";
import {
  Settings,
  User,
  Lock,
  Bell,
  Globe,
  Shield,
  Moon,
  Sun,
  Monitor,
  Save,
  ChevronRight,
  Eye,
  EyeOff,
  CheckCircle2,
} from "lucide-react";
import { useAppContext } from "../context/AppContext";

const SettingsPage = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, user } = useAppContext();
  const [activeTab, setActiveTab] = useState("general");
  const [showPassword, setShowPassword] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  if (!mounted) return null;

  const tabs = [
    { id: "general", name: "ທົ່ວໄປ", icon: Settings },
    { id: "profile", name: "ໂປຣໄຟລ໌", icon: User },
    { id: "security", name: "ຄວາມປອດໄພ", icon: Shield },
    { id: "notifications", name: "ການແຈ້ງເຕືອນ", icon: Bell },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-6 animate-in fade-in duration-500">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
          ຕັ້ງຄ່າລະບົບ
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm mt-0.5">
          ຈັດການຂໍ້ມູນສ່ວນຕົວ, ຮູບແບບການສະແດງຜົນ ແລະ ການຕັ້ງຄ່າຄວາມປອດໄພ
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6">
        {/* Sidebar Tabs */}
        <div className="lg:col-span-1 space-y-1.5">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-teal-600 text-white shadow-md shadow-teal-600/20"
                    : "text-gray-600 dark:text-gray-400 hover:bg-white dark:hover:bg-gray-800 bg-gray-50/50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Icon className="w-4 h-4" />
                  <span>{tab.name}</span>
                </div>
                {activeTab === tab.id && <ChevronRight className="w-4 h-4" />}
              </button>
            );
          })}
        </div>

        {/* Content Area */}
        <div className="lg:col-span-3">
          {/* General Tab */}
          {activeTab === "general" && (
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm p-5 sm:p-6 space-y-5 animate-in fade-in duration-300">
              <div className="flex items-center gap-3 pb-4 border-b border-gray-100 dark:border-gray-800">
                <div className="w-9 h-9 rounded-xl bg-teal-50 dark:bg-teal-900/20 flex items-center justify-center text-teal-600">
                  <Monitor className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-900 dark:text-white">
                    ການສະແດງຜົນ
                  </h3>
                  <p className="text-xs text-gray-500">
                    ປັບແຕ່ງຮູບແບບສີ ແລະ ພາສາໃນລະບົບ
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 rounded-xl bg-gray-50/60 dark:bg-gray-800/40 border border-gray-100 dark:border-gray-800">
                  <div>
                    <p className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">
                      ຮູບແບບສີ (Theme)
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      ເລືອກຮູບແບບສີສະຫວ່າງ ຫຼື ມືດ
                    </p>
                  </div>
                  <div className="flex bg-gray-200/80 dark:bg-gray-700/80 p-1 rounded-xl w-fit">
                    <button
                      onClick={() => setTheme("light")}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                        theme === "light"
                          ? "bg-white text-teal-700 shadow-sm"
                          : "text-gray-500 hover:text-gray-800"
                      }`}
                    >
                      <Sun className="w-3.5 h-3.5" />
                      <span>Light</span>
                    </button>
                    <button
                      onClick={() => setTheme("dark")}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                        theme === "dark"
                          ? "bg-gray-900 text-teal-400 shadow-sm"
                          : "text-gray-400 hover:text-gray-200"
                      }`}
                    >
                      <Moon className="w-3.5 h-3.5" />
                      <span>Dark</span>
                    </button>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 rounded-xl bg-gray-50/60 dark:bg-gray-800/40 border border-gray-100 dark:border-gray-800">
                  <div>
                    <p className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">
                      ພາສາ (Language)
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      ເລືອກພາສາຫຼັກທີ່ໃຊ້ໃນລະບົບ
                    </p>
                  </div>
                  <select className="px-3 py-1.5 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-xs font-semibold text-gray-700 dark:text-gray-300 outline-none focus:ring-2 focus:ring-teal-500/20 cursor-pointer">
                    <option value="lo">ພາສາລາວ (Lao)</option>
                    <option value="en">English (US)</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Profile Tab */}
          {activeTab === "profile" && (
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm p-5 sm:p-6 space-y-5 animate-in fade-in duration-300">
              <div className="flex items-center gap-4 pb-4 border-b border-gray-100 dark:border-gray-800">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center text-white font-bold text-xl shadow-sm">
                  {user?.username?.charAt(0).toUpperCase() || "A"}
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900 dark:text-white">
                    {user?.username || "Admin User"}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {user?.role || "Administrator"}
                  </p>
                </div>
              </div>

              <form onSubmit={handleSave} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                      ຊື່ຜູ້ໃຊ້
                    </label>
                    <input
                      type="text"
                      defaultValue={user?.username || "admin"}
                      className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 outline-none transition-all dark:text-white"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                      ອີເມວ
                    </label>
                    <input
                      type="email"
                      defaultValue="admin@example.com"
                      className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 outline-none transition-all dark:text-white"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <button
                    type="submit"
                    className="flex items-center gap-1.5 bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold shadow-md shadow-teal-600/20 active:scale-[0.98] transition-all cursor-pointer"
                  >
                    <Save className="w-4 h-4" />
                    <span>ບັນທຶກຂໍ້ມູນ</span>
                  </button>
                  {saved && (
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 animate-in fade-in">
                      <CheckCircle2 className="w-4 h-4" />
                      ບັນທຶກສຳເລັດແລ້ວ!
                    </span>
                  )}
                </div>
              </form>
            </div>
          )}

          {/* Security Tab */}
          {activeTab === "security" && (
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm p-5 sm:p-6 space-y-5 animate-in fade-in duration-300">
              <div className="flex items-center gap-3 pb-4 border-b border-gray-100 dark:border-gray-800">
                <div className="w-9 h-9 rounded-xl bg-rose-50 dark:bg-rose-950/40 flex items-center justify-center text-rose-600">
                  <Lock className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-900 dark:text-white">
                    ປ່ຽນລະຫັດຜ່ານ
                  </h3>
                  <p className="text-xs text-gray-500">
                    ແນະນຳໃຫ້ປ່ຽນລະຫັດຜ່ານທຸກໆ 3 ເດືອນເພື່ອຄວາມປອດໄພ
                  </p>
                </div>
              </div>

              <form onSubmit={handleSave} className="space-y-3.5 max-w-md">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                    ລະຫັດຜ່ານປັດຈຸບັນ
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="w-full pl-3 pr-9 py-2 bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 outline-none transition-all dark:text-white"
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                    ລະຫັດຜ່ານໃໝ່
                  </label>
                  <input
                    type="password"
                    className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 outline-none transition-all dark:text-white"
                    placeholder="••••••••"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                    ຢືນຢັນລະຫັດຜ່ານໃໝ່
                  </label>
                  <input
                    type="password"
                    className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 outline-none transition-all dark:text-white"
                    placeholder="••••••••"
                  />
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <button
                    type="submit"
                    className="flex items-center gap-1.5 bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold shadow-md shadow-teal-600/20 active:scale-[0.98] transition-all cursor-pointer"
                  >
                    <Save className="w-4 h-4" />
                    <span>ອັບເດດລະຫັດຜ່ານ</span>
                  </button>
                  {saved && (
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 animate-in fade-in">
                      <CheckCircle2 className="w-4 h-4" />
                      ປ່ຽນລະຫັດຜ່ານສຳເລັດ!
                    </span>
                  )}
                </div>
              </form>
            </div>
          )}

          {/* Notifications Tab */}
          {activeTab === "notifications" && (
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm p-5 sm:p-6 space-y-5 animate-in fade-in duration-300">
              <div className="flex items-center gap-3 pb-4 border-b border-gray-100 dark:border-gray-800">
                <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600">
                  <Bell className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-900 dark:text-white">
                    ການແຈ້ງເຕືອນ
                  </h3>
                  <p className="text-xs text-gray-500">
                    ຈັດການຊ່ອງທາງ ແລະ ຮູບແບບການແຈ້ງເຕືອນ
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  {
                    title: "ການແຈ້ງເຕືອນຜ່ານອີເມວ",
                    desc: "ຮັບຂໍ້ມູນຂ່າວສານ ແລະ ການອັບເດດຜ່ານອີເມວຂອງທ່ານ",
                    enabled: true,
                  },
                  {
                    title: "ການແຈ້ງເຕືອນໃນລະບົບ",
                    desc: "ສະແດງການແຈ້ງເຕືອນຢູ່ແຖບເມນູດ້ານເທິງ",
                    enabled: true,
                  },
                  {
                    title: "ລາຍງານການຂາຍປະຈຳວັນ",
                    desc: "ສົ່ງສະຫຼຸບຍອດຂາຍປະຈຳວັນໃຫ້ທ່ານທຸກໆເຊົ້າ",
                    enabled: false,
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3.5 bg-gray-50/60 dark:bg-gray-800/40 rounded-xl border border-gray-100 dark:border-gray-800"
                  >
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">
                        {item.title}
                      </p>
                      <p className="text-[11px] text-gray-500 dark:text-gray-400">
                        {item.desc}
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        defaultChecked={item.enabled}
                        className="sr-only peer"
                      />
                      <div className="w-9 h-5 bg-gray-300 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-teal-600"></div>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
