"use client";

import React, { useState } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Camera,
  Shield,
  Bell,
  Save,
  Lock,
  CheckCircle2,
} from "lucide-react";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("personal");
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const tabs = [
    { id: "personal", name: "ຂໍ້ມູນສ່ວນຕົວ", icon: User },
    { id: "security", name: "ຄວາມປອດໄພ", icon: Shield },
    { id: "notifications", name: "ການແຈ້ງເຕືອນ", icon: Bell },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-6 animate-in fade-in duration-500">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
          ຈັດການຂໍ້ມູນສ່ວນຕົວ
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm mt-0.5">
          ປັບປຸງຂໍ້ມູນສ່ວນຕົວ, ອັບເດດຮູບໂປຣໄຟລ໌ ແລະ ຄວາມປອດໄພຂອງບັນຊີ
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
                className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-teal-600 text-white shadow-md shadow-teal-600/20"
                    : "text-gray-600 dark:text-gray-400 hover:bg-white dark:hover:bg-gray-800 bg-gray-50/50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.name}</span>
              </button>
            );
          })}
        </div>

        {/* Main Content Area */}
        <div className="lg:col-span-3">
          {activeTab === "personal" && (
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden animate-in fade-in duration-300">
              {/* Profile Cover & Avatar */}
              <div className="h-28 bg-gradient-to-r from-teal-700 via-teal-600 to-teal-800 relative">
                <div className="absolute -bottom-10 left-6">
                  <div className="relative group">
                    <div className="w-20 h-20 rounded-2xl bg-white dark:bg-gray-800 p-1 shadow-lg">
                      <div className="w-full h-full rounded-xl bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center overflow-hidden text-white font-bold text-2xl">
                        A
                      </div>
                    </div>
                    <button className="absolute bottom-0 right-0 bg-white dark:bg-gray-800 p-1.5 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 text-teal-600 hover:scale-110 transition-transform cursor-pointer">
                      <Camera className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSave} className="pt-14 p-6 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                      ຊື່ເຕັມ
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        defaultValue="Admin User"
                        className="w-full pl-9 pr-3 py-2 bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 outline-none transition-all dark:text-white"
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                      ທີ່ຢູ່ອີເມວ
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="email"
                        defaultValue="admin@example.com"
                        className="w-full pl-9 pr-3 py-2 bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 outline-none transition-all dark:text-white"
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                      ເບີໂທລະສັບ
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="tel"
                        defaultValue="+856 20 5555 6666"
                        className="w-full pl-9 pr-3 py-2 bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 outline-none transition-all dark:text-white"
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                      ທີ່ຢູ່
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        defaultValue="ນະຄອນຫຼວງວຽງຈັນ, ສປປ ລາວ"
                        className="w-full pl-9 pr-3 py-2 bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 outline-none transition-all dark:text-white"
                      />
                    </div>
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

          {activeTab === "security" && (
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm p-6 space-y-4 animate-in fade-in duration-300">
              <h3 className="text-sm font-bold text-gray-900 dark:text-white">
                ປ່ຽນລະຫັດຜ່ານ
              </h3>
              <div className="space-y-3 max-w-md">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                    ລະຫັດຜ່ານປັດຈຸບັນ
                  </label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 outline-none transition-all dark:text-white"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                    ລະຫັດຜ່ານໃໝ່
                  </label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 outline-none transition-all dark:text-white"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                    ຢືນຢັນລະຫັດຜ່ານໃໝ່
                  </label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 outline-none transition-all dark:text-white"
                  />
                </div>
                <button
                  type="button"
                  className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold shadow-md shadow-teal-600/20 active:scale-[0.98] transition-all cursor-pointer mt-2"
                >
                  ອັບເດດລະຫັດຜ່ານ
                </button>
              </div>
            </div>
          )}

          {activeTab === "notifications" && (
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm p-6 space-y-4 animate-in fade-in duration-300">
              <h3 className="text-sm font-bold text-gray-900 dark:text-white">
                ການຕັ້ງຄ່າການແຈ້ງເຕືອນ
              </h3>
              <div className="space-y-3">
                {[
                  {
                    title: "ແຈ້ງເຕືອນເມື່ອມີອໍເດີໃໝ່",
                    desc: "ສົ່ງການແຈ້ງເຕືອນທັນທີເມື່ອລູກຄ້າສັ່ງຊື້ສິນຄ້າ",
                  },
                  {
                    title: "ແຈ້ງເຕືອນສິນຄ້າໃກ້ໝົດສະຕັອກ",
                    desc: "ແຈ້ງເຕືອນເມື່ອສິນຄ້າເຫຼືອຕ່ຳກວ່າລະດັບຂັ້ນຕ່ຳ",
                  },
                  {
                    title: "ລາຍງານສະຫຼຸບຍອດຂາຍປະຈຳວັນ",
                    desc: "ສົ່ງອີເມວສະຫຼຸບຍອດຂາຍໃນເວລາ 20:00 ໂມງທຸກໆວັນ",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-3.5 rounded-xl bg-gray-50/60 dark:bg-gray-800/40 border border-gray-100 dark:border-gray-800"
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
                        defaultChecked={i !== 2}
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

export default ProfilePage;
