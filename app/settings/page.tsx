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
} from "lucide-react";
import { useAppContext } from "../context/AppContext";

const SettingsPage = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, user } = useAppContext();
  const [activeTab, setActiveTab] = useState("general");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const tabs = [
    { id: "general", name: "ທົ່ວໄປ", icon: Settings },
    { id: "profile", name: "ໂປຣໄຟລ໌", icon: User },
    { id: "security", name: "ຄວາມປອດໄພ", icon: Shield },
    { id: "notifications", name: "ການແຈ້ງເຕືອນ", icon: Bell },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          ຕັ້ງຄ່າລະບົບ
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">
          ຈັດການຂໍ້ມູນສ່ວນຕົວ ແລະ ການຕັ້ງຄ່າຄວາມປອດໄພຂອງທ່ານ
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Tabs */}
        <div className="w-full lg:w-64 space-y-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-5 py-4 rounded-2xl font-bold transition-all ${
                  activeTab === tab.id
                    ? "bg-teal-600 text-white shadow-lg shadow-teal-100 dark:shadow-none"
                    : "text-gray-500 dark:text-gray-400 hover:bg-white dark:hover:bg-gray-900 hover:text-teal-600 border border-transparent hover:border-gray-100 dark:hover:border-gray-800"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{tab.name}</span>
                {activeTab === tab.id && (
                  <ChevronRight className="ml-auto w-4 h-4" />
                )}
              </button>
            );
          })}
        </div>

        {/* Content Area */}
        <div className="flex-1 space-y-6">
          {activeTab === "general" && (
            <div className="bg-white dark:bg-gray-900 rounded-[32px] border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden">
              <div className="p-8 md:p-10 space-y-8">
                <div className="flex items-center gap-4 pb-6 border-b border-gray-50 dark:border-gray-800">
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-teal-900/20 flex items-center justify-center text-teal-600">
                    <Monitor className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                      ການສະແດງຜົນ
                    </h3>
                    <p className="text-sm text-gray-500">
                      ປັບແຕ່ງຮູບແບບການສະແດງຜົນຂອງລະບົບ
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="font-bold text-gray-800 dark:text-white">
                        ຮູບແບບສີ (Theme)
                      </p>
                      <p className="text-sm text-gray-500">
                        ເລືອກຮູບແບບສີທີ່ທ່ານຕ້ອງການ
                      </p>
                    </div>
                    <div className="flex bg-gray-50 dark:bg-gray-800 p-1.5 rounded-2xl border border-gray-100 dark:border-gray-700">
                      <button
                        onClick={() => setTheme("light")}
                        className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                          theme === "light"
                            ? "bg-white dark:bg-gray-700 text-teal-600 shadow-sm"
                            : "text-gray-400 hover:text-gray-600"
                        }`}
                      >
                        <Sun className="w-4 h-4" />
                        <span>Light</span>
                      </button>
                      <button
                        onClick={() => setTheme("dark")}
                        className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                          theme === "dark"
                            ? "bg-white dark:bg-gray-700 text-teal-600 shadow-sm"
                            : "text-gray-400 hover:text-gray-600"
                        }`}
                      >
                        <Moon className="w-4 h-4" />
                        <span>Dark</span>
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-gray-50 dark:border-gray-800">
                    <div className="space-y-1">
                      <p className="font-bold text-gray-800 dark:text-white">
                        ພາສາ (Language)
                      </p>
                      <p className="text-sm text-gray-500">
                        ເລືອກພາສາທີ່ໃຊ້ໃນລະບົບ
                      </p>
                    </div>
                    <select className="px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl text-sm font-bold text-gray-700 dark:text-gray-300 outline-none focus:ring-2 focus:ring-teal-500/20">
                      <option value="lo">ພາສາລາວ</option>
                      <option value="en">English</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "security" && (
            <div className="bg-white dark:bg-gray-900 rounded-[32px] border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden">
              <div className="p-8 md:p-10 space-y-8">
                <div className="flex items-center gap-4 pb-6 border-b border-gray-50 dark:border-gray-800">
                  <div className="w-12 h-12 rounded-2xl bg-red-50 dark:bg-red-900/20 flex items-center justify-center text-red-600">
                    <Lock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                      ປ່ຽນລະຫັດຜ່ານ
                    </h3>
                    <p className="text-sm text-gray-500">
                      ແນະນຳໃຫ້ປ່ຽນລະຫັດຜ່ານທຸກໆ 3 ເດືອນ
                    </p>
                  </div>
                </div>

                <form className="space-y-6 max-w-md">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 dark:text-gray-300">
                      ລະຫັດຜ່ານປັດຈຸບັນ
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        className="w-full px-5 py-4 bg-gray-50 dark:bg-gray-800 border-none rounded-2xl focus:ring-2 focus:ring-teal-500/20 outline-none transition-all dark:text-white"
                        placeholder="••••••••"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                      >
                        {showPassword ? (
                          <EyeOff className="w-5 h-5" />
                        ) : (
                          <Eye className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 dark:text-gray-300">
                      ລະຫັດຜ່ານໃໝ່
                    </label>
                    <input
                      type="password"
                      className="w-full px-5 py-4 bg-gray-50 dark:bg-gray-800 border-none rounded-2xl focus:ring-2 focus:ring-teal-500/20 outline-none transition-all dark:text-white"
                      placeholder="••••••••"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 dark:text-gray-300">
                      ຢືນຢັນລະຫັດຜ່ານໃໝ່
                    </label>
                    <input
                      type="password"
                      className="w-full px-5 py-4 bg-gray-50 dark:bg-gray-800 border-none rounded-2xl focus:ring-2 focus:ring-teal-500/20 outline-none transition-all dark:text-white"
                      placeholder="••••••••"
                    />
                  </div>

                  <button
                    type="button"
                    className="w-full py-4 bg-teal-600 hover:bg-teal-700 text-white rounded-2xl font-bold shadow-lg shadow-teal-100 dark:shadow-none transition-all flex items-center justify-center gap-2"
                  >
                    <Save className="w-5 h-5" />
                    <span>ອັບເດດລະຫັດຜ່ານ</span>
                  </button>
                </form>
              </div>
            </div>
          )}

            </div>
          )}

          {activeTab === "notifications" && (
            <div className="bg-white dark:bg-gray-900 rounded-[32px] border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden">
              <div className="p-8 md:p-10 space-y-8">
                <div className="flex items-center gap-4 pb-6 border-b border-gray-50 dark:border-gray-800">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600">
                    <Bell className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                      ການແຈ້ງເຕືອນ
                    </h3>
                    <p className="text-sm text-gray-500">
                      ຈັດການວິທີການທີ່ທ່ານຕ້ອງການຮັບການແຈ້ງເຕືອນ
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
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
                    {
                      title: "ການແຈ້ງເຕືອນສິນຄ້າໃກ້ໝົດ",
                      desc: "ເຕືອນເມື່ອມີສິນຄ້າໃນສາງເຫຼືອໜ້ອຍກວ່າກຳນົດ",
                      enabled: true,
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-transparent hover:border-gray-100 dark:hover:border-gray-700 transition-all"
                    >
                      <div className="space-y-1">
                        <p className="font-bold text-gray-800 dark:text-white">
                          {item.title}
                        </p>
                        <p className="text-sm text-gray-500">{item.desc}</p>
                      </div>
                      <button
                        className={`w-12 h-6 rounded-full transition-all relative ${
                          item.enabled ? "bg-teal-600" : "bg-gray-300 dark:bg-gray-700"
                        }`}
                      >
                        <div
                          className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${
                            item.enabled ? "right-1" : "left-1"
                          }`}
                        />
                      </button>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <button className="w-full md:w-auto px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white rounded-2xl font-bold shadow-lg shadow-teal-100 dark:shadow-none transition-all flex items-center justify-center gap-2">
                    <Save className="w-5 h-5" />
                    <span>ບັນທຶກການຕັ້ງຄ່າ</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
