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
  Globe,
  Save,
  Lock,
} from "lucide-react";

import { useTranslations } from "next-intl";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("personal");
  const t = useTranslations("Profile");

  const tabs = [
    { id: "personal", name: t("tabs.personal"), icon: User },
    { id: "security", name: t("tabs.security"), icon: Shield },
    { id: "notifications", name: t("tabs.notifications"), icon: Bell },
  ];

  return (
    <div className="max-w-10xl mx-auto space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          {t("title")}
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">
          {t("description")}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Tabs */}
        <div className="lg:col-span-1 space-y-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
                  activeTab === tab.id
                    ? "bg-teal-600 text-white shadow-lg shadow-teal-100"
                    : "text-gray-600 hover:bg-white hover:shadow-sm"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{tab.name}</span>
              </button>
            );
          })}
        </div>

        {/* Main Content Area */}
        <div className="lg:col-span-3 space-y-6">
          {activeTab === "personal" && (
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden animate-in fade-in slide-in-from-right-4 duration-300">
              {/* Profile Cover & Avatar */}
              <div className="h-32 bg-gradient-to-r from-teal-500 to-teal-700 relative">
                <div className="absolute -bottom-12 left-8">
                  <div className="relative group">
                    <div className="w-24 h-24 rounded-2xl bg-white p-1 shadow-xl">
                      <div className="w-full h-full rounded-xl bg-gray-100 flex items-center justify-center overflow-hidden border border-gray-100">
                        <User className="w-12 h-12 text-gray-400" />
                      </div>
                    </div>
                    <button className="absolute bottom-0 right-0 bg-white p-2 rounded-lg shadow-lg border border-gray-100 text-teal-600 hover:scale-110 transition-transform">
                      <Camera className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="pt-16 p-8 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">
                      ຊື່ເຕັມ
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        defaultValue="Admin User"
                        className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">
                      ທີ່ຢູ່ອີເມວ
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="email"
                        defaultValue="admin@example.com"
                        className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">
                      ເບີໂທລະສັບ
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="tel"
                        defaultValue="+856 20 000-0000"
                        className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">
                      ທີ່ຢູ່
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        defaultValue="ນະຄອນຫຼວງວຽງຈັນ, ລາວ"
                        className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">
                    ກ່ຽວກັບຂ້ອຍ
                  </label>
                  <textarea
                    rows={4}
                    defaultValue="ມີຄວາມມັກໃນການສ້າງເວັບໄຊທ໌ທີ່ທັນສະໄໝດ້ວຍ Next.js ແລະ Tailwind CSS."
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all resize-none"
                  />
                </div>

                <div className="flex justify-end pt-4">
                  <button className="flex items-center gap-2 bg-teal-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-teal-700 transition-all shadow-lg shadow-teal-100">
                    <Save className="w-5 h-5" />
                    <span>ບັນທຶກການປ່ຽນແປງ</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === "security" && (
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 space-y-8 animate-in fade-in slide-in-from-right-4 duration-300">
              <div>
                <h3 className="text-xl font-bold text-gray-800">
                  ລະຫັດຜ່ານ ແລະ ຄວາມປອດໄພ
                </h3>
                <p className="text-gray-500 text-sm">
                  ອັບເດດລະຫັດຜ່ານ ແລະ ປົກປ້ອງບັນຊີຂອງທ່ານ.
                </p>
              </div>

              <div className="space-y-6 max-w-md">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">
                    ລະຫັດຜ່ານປັດຈຸບັນ
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="password"
                      placeholder="••••••••"
                      className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">
                    ລະຫັດຜ່ານໃໝ່
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="password"
                      placeholder="••••••••"
                      className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">
                    ຢືນຢັນລະຫັດຜ່ານໃໝ່
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="password"
                      placeholder="••••••••"
                      className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all"
                    />
                  </div>
                </div>
                <button className="w-full py-3 bg-gray-900 text-white rounded-xl font-bold hover:bg-black transition-all">
                  ອັບເດດລະຫັດຜ່ານ
                </button>
              </div>

              <div className="pt-8 border-t border-gray-50">
                <div className="flex items-center justify-between p-4 bg-red-50 rounded-2xl border border-red-100">
                  <div>
                    <h4 className="font-bold text-red-800">ລຶບບັນຊີ</h4>
                    <p className="text-red-600 text-sm">
                      ເມື່ອທ່ານລຶບບັນຊີແລ້ວ, ຈະບໍ່ສາມາດກູ້ຄືນໄດ້.
                    </p>
                  </div>
                  <button className="px-4 py-2 bg-red-600 text-white rounded-xl text-sm font-bold hover:bg-red-700 transition-all">
                    ລຶບ
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === "notifications" && (
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 animate-in fade-in slide-in-from-right-4 duration-300">
              <h3 className="text-xl font-bold text-gray-800 mb-6">
                ການຕັ້ງຄ່າການແຈ້ງເຕືອນ
              </h3>
              <div className="space-y-4">
                {[
                  {
                    title: "ການແຈ້ງເຕືອນຜ່ານອີເມວ",
                    desc: "ຮັບລາຍງານປະຈຳອາທິດ ແລະ ການອັບເດດຜ່ານອີເມວ.",
                  },
                  {
                    title: "ການແຈ້ງເຕືອນແບບ Push",
                    desc: "ຮັບການແຈ້ງເຕືອນທັນທີໃນຄອມພິວເຕີ ຫຼື ມືຖື.",
                  },
                  {
                    title: "ການອັບເດດສິນຄ້າ",
                    desc: "ຂ່າວສານກ່ຽວກັບຄຸນສົມບັດໃໝ່ ແລະ ການປັບປຸງ.",
                  },
                  {
                    title: "ການແຈ້ງເຕືອນຄວາມປອດໄພ",
                    desc: "ການແຈ້ງເຕືອນທີ່ສຳຄັນກ່ຽວກັບຄວາມປອດໄພຂອງບັນຊີ.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-2xl transition-colors group"
                  >
                    <div>
                      <h4 className="font-bold text-gray-700">{item.title}</h4>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        defaultChecked={i % 2 === 0}
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600"></div>
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
