"use client";

import React, { useState, useEffect } from "react";
import {
  Settings,
  Lock,
  Bell,
  Globe,
  Shield,
  Moon,
  Sun,
  Monitor,
  Save,
  Eye,
  EyeOff,
  CheckCircle2,
  Server,
  RefreshCw,
} from "lucide-react";
import { useAppContext } from "../context/AppContext";

const SettingsPage = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useAppContext();
  const [showPassword, setShowPassword] = useState(false);
  const [securitySaved, setSecuritySaved] = useState(false);
  const [generalSaved, setGeneralSaved] = useState(false);
  const [cacheCleared, setCacheCleared] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSecuritySave = (e: React.FormEvent) => {
    e.preventDefault();
    setSecuritySaved(true);
    setTimeout(() => setSecuritySaved(false), 2500);
  };

  const handleGeneralSave = (e: React.FormEvent) => {
    e.preventDefault();
    setGeneralSaved(true);
    setTimeout(() => setGeneralSaved(false), 2500);
  };

  const handleClearCache = () => {
    setCacheCleared(true);
    setTimeout(() => setCacheCleared(false), 2000);
  };

  if (!mounted) return null;

  return (
    <div className="space-y-6 animate-in fade-in duration-500 pb-8">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
          ຕັ້ງຄ່າລະບົບ (Settings)
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm mt-0.5">
          ຈັດການຮູບແບບການສະແດງຜົນ, ຄວາມປອດໄພ ແລະ ການແຈ້ງເຕືອນທັງໝົດ
        </p>
      </div>

      {/* 1. Appearance & General Settings Card */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden">
        <div className="p-5 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between bg-gray-50/50 dark:bg-gray-800/40">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-teal-50 dark:bg-teal-900/30 flex items-center justify-center text-teal-600">
              <Monitor className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-900 dark:text-white">
                ການສະແດງຜົນ ແລະ ພາສາ (Appearance & Language)
              </h3>
              <p className="text-[11px] text-gray-400">
                ປັບແຕ່ງຮູບແບບສີ (Theme) ແລະ ພາສາຫຼັກຂອງລະບົບ
              </p>
            </div>
          </div>
          <span className="text-[10px] font-bold text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/50 px-2 py-0.5 rounded-full border border-teal-200 dark:border-teal-900/40">
            UI & System
          </span>
        </div>

        <form onSubmit={handleGeneralSave} className="p-5 sm:p-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Theme Toggle */}
            <div className="p-4 rounded-xl bg-gray-50/60 dark:bg-gray-800/40 border border-gray-100 dark:border-gray-800 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-gray-900 dark:text-white">
                  ຮູບແບບສີ (Theme)
                </p>
                <p className="text-[11px] text-gray-500 dark:text-gray-400">
                  {theme === "dark" ? "ໂໝດກາງຄືນ (Dark)" : "ໂໝດກາງເວັນ (Light)"}
                </p>
              </div>
              <div className="flex bg-gray-200/80 dark:bg-gray-700/80 p-1 rounded-xl">
                <button
                  type="button"
                  onClick={() => setTheme("light")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    theme === "light"
                      ? "bg-white text-teal-700 shadow-sm"
                      : "text-gray-500 hover:text-gray-800 dark:text-gray-400"
                  }`}
                >
                  <Sun className="w-3.5 h-3.5" />
                  <span>Light</span>
                </button>
                <button
                  type="button"
                  onClick={() => setTheme("dark")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    theme === "dark"
                      ? "bg-gray-900 text-teal-400 shadow-sm"
                      : "text-gray-500 hover:text-gray-800 dark:text-gray-400"
                  }`}
                >
                  <Moon className="w-3.5 h-3.5" />
                  <span>Dark</span>
                </button>
              </div>
            </div>

            {/* Language Selection */}
            <div className="p-4 rounded-xl bg-gray-50/60 dark:bg-gray-800/40 border border-gray-100 dark:border-gray-800 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-gray-900 dark:text-white">
                  ພາສາ (Language)
                </p>
                <p className="text-[11px] text-gray-500 dark:text-gray-400">
                  ພາສາທີ່ສະແດງໃນລະບົບ
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-teal-600" />
                <select className="px-3 py-1.5 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-xs font-semibold text-gray-700 dark:text-gray-300 outline-none focus:ring-2 focus:ring-teal-500/20 cursor-pointer">
                  <option value="lo">ພາສາລາວ (Lao)</option>
                  <option value="en">English (US)</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2">
            <button
              type="submit"
              className="flex items-center gap-1.5 bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold shadow-md shadow-teal-600/20 active:scale-[0.98] transition-all cursor-pointer"
            >
              <Save className="w-4 h-4" />
              <span>ບັນທຶກການຕັ້ງຄ່າທົ່ວໄປ</span>
            </button>
            {generalSaved && (
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 animate-in fade-in">
                <CheckCircle2 className="w-4 h-4" />
                ບັນທຶກສຳເລັດແລ້ວ!
              </span>
            )}
          </div>
        </form>
      </div>

      {/* 2. Security & Password Card */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden">
        <div className="p-5 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between bg-gray-50/50 dark:bg-gray-800/40">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-rose-50 dark:bg-rose-950/30 flex items-center justify-center text-rose-600">
              <Shield className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-900 dark:text-white">
                ຄວາມປອດໄພ & ລະຫັດຜ່ານ (Security & Password)
              </h3>
              <p className="text-[11px] text-gray-400">
                ປ່ຽນລະຫັດຜ່ານ ແລະ ປົກປ້ອງບັນຊີຂອງທ່ານ
              </p>
            </div>
          </div>
          <span className="text-[10px] font-bold text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/50 px-2 py-0.5 rounded-full border border-rose-200 dark:border-rose-900/40">
            Protected
          </span>
        </div>

        <form onSubmit={handleSecuritySave} className="p-5 sm:p-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                ລະຫັດຜ່ານປັດຈຸບັນ
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full pl-3 pr-9 py-2 bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 outline-none transition-all dark:text-white"
                  placeholder="••••••••"
                  defaultValue="password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
                >
                  {showPassword ? (
                    <EyeOff className="w-3.5 h-3.5" />
                  ) : (
                    <Eye className="w-3.5 h-3.5" />
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
          </div>

          <div className="flex items-center justify-between pt-2">
            <button
              type="submit"
              className="flex items-center gap-1.5 bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold shadow-md shadow-teal-600/20 active:scale-[0.98] transition-all cursor-pointer"
            >
              <Lock className="w-4 h-4" />
              <span>ອັບເດດລະຫັດຜ່ານ</span>
            </button>
            {securitySaved && (
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 animate-in fade-in">
                <CheckCircle2 className="w-4 h-4" />
                ປ່ຽນລະຫັດຜ່ານສຳເລັດ!
              </span>
            )}
          </div>
        </form>
      </div>

      {/* 3. Notifications Settings Card */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden">
        <div className="p-5 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between bg-gray-50/50 dark:bg-gray-800/40">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600">
              <Bell className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-900 dark:text-white">
                ການແຈ້ງເຕືອນ (Notification Preferences)
              </h3>
              <p className="text-[11px] text-gray-400">
                ຈັດການຊ່ອງທາງ ແລະ ຮູບແບບການແຈ້ງເຕືອນທັງໝົດ
              </p>
            </div>
          </div>
          <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 px-2 py-0.5 rounded-full border border-blue-200 dark:border-blue-900/40">
            Alerts
          </span>
        </div>

        <div className="p-5 sm:p-6 space-y-3">
          {[
            {
              title: "ການແຈ້ງເຕືອນຜ່ານອີເມວ",
              desc: "ຮັບຂໍ້ມູນຂ່າວສານ ແລະ ການອັບເດດອໍເດີໃໝ່ຜ່ານອີເມວ",
              enabled: true,
            },
            {
              title: "ການແຈ້ງເຕືອນໃນລະບົບ (Push Alerts)",
              desc: "ສະແດງການແຈ້ງເຕືອນຢູ່ແຖບເມນູດ້ານເທິງ ແລະ Sidebar",
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

      {/* 4. System & Maintenance Card */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden">
        <div className="p-5 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between bg-gray-50/50 dark:bg-gray-800/40">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-purple-50 dark:bg-purple-900/30 flex items-center justify-center text-purple-600">
              <Server className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-900 dark:text-white">
                ຂໍ້ມູນລະບົບ & ການບຳລຸງຮັກສາ (System & Maintenance)
              </h3>
              <p className="text-[11px] text-gray-400">
                ສະຖານະ Server, ລຸ້ນຂອງລະບົບ ແລະ ການຈັດການ Cache
              </p>
            </div>
          </div>
          <span className="text-[10px] font-bold text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/50 px-2 py-0.5 rounded-full border border-purple-200 dark:border-purple-900/40">
            System
          </span>
        </div>

        <div className="p-5 sm:p-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-3.5 rounded-xl bg-gray-50/60 dark:bg-gray-800/40 border border-gray-100 dark:border-gray-800">
              <p className="text-[11px] text-gray-400 font-semibold">ເວີຊັນລະບົບ</p>
              <p className="text-sm font-black text-gray-900 dark:text-white mt-0.5">
                v2.4.0 (Next.js 15)
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-gray-50/60 dark:bg-gray-800/40 border border-gray-100 dark:border-gray-800">
              <p className="text-[11px] text-gray-400 font-semibold">ສະຖານະເຊີເວີ</p>
              <p className="text-sm font-black text-emerald-600 dark:text-emerald-400 mt-0.5 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Active (Healthy)
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-gray-50/60 dark:bg-gray-800/40 border border-gray-100 dark:border-gray-800">
              <p className="text-[11px] text-gray-400 font-semibold">ເວລາຕອບສະໜອງ</p>
              <p className="text-sm font-black text-teal-600 dark:text-teal-400 mt-0.5">
                ~24 ms
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2">
            <button
              type="button"
              onClick={handleClearCache}
              className="flex items-center gap-1.5 px-3.5 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl text-xs font-semibold transition-all cursor-pointer"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${cacheCleared ? "animate-spin" : ""}`} />
              <span>ລ້າງ Cache ລະບົບ</span>
            </button>
            {cacheCleared && (
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 animate-in fade-in">
                <CheckCircle2 className="w-4 h-4" />
                ລ້າງ Cache ສຳເລັດແລ້ວ!
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
