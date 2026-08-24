"use client";

import React, { useState, useEffect } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Camera,
  Shield,
  Save,
  CheckCircle2,
  Calendar,
  Smartphone,
  Check,
} from "lucide-react";
import { useAppContext } from "../context/AppContext";

const ProfilePage = () => {
  const [mounted, setMounted] = useState(false);
  const { user } = useAppContext();
  const [personalSaved, setPersonalSaved] = useState(false);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handlePersonalSave = (e: React.FormEvent) => {
    e.preventDefault();
    setPersonalSaved(true);
    setTimeout(() => setPersonalSaved(false), 2500);
  };

  if (!mounted) return null;

  return (
    <div className="space-y-6 animate-in fade-in duration-500 pb-8">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
          ໂປຣໄຟລ໌ສ່ວນຕົວ (Profile)
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm mt-0.5">
          ຈັດການຂໍ້ມູນບັນຊີ, ຮູບໂປຣໄຟລ໌ ແລະ ຄວາມປອດໄພຂອງຜູ້ໃຊ້
        </p>
      </div>

      {/* 1. Profile Hero & Overview Card */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden">
        {/* Cover Banner */}
        <div className="h-32 bg-gradient-to-r from-teal-700 via-teal-600 to-teal-800 relative">
          <div className="absolute top-3 right-3">
            <span className="text-[10px] font-bold text-white bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/30">
              Verified Administrator
            </span>
          </div>
        </div>

        {/* Profile Info Header */}
        <div className="px-6 pb-6 pt-0 relative">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 -mt-12 mb-4">
            <div className="flex items-end gap-4">
              <div className="relative group">
                <div className="w-24 h-24 rounded-2xl bg-white dark:bg-gray-800 p-1.5 shadow-lg border border-gray-100 dark:border-gray-700">
                  <div className="w-full h-full rounded-xl bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center text-white font-black text-3xl shadow-inner">
                    {user?.username?.charAt(0).toUpperCase() || "A"}
                  </div>
                </div>
                <button
                  type="button"
                  title="ປ່ຽນຮູບໂປຣໄຟລ໌"
                  className="absolute bottom-1 right-1 bg-white dark:bg-gray-800 p-1.5 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 text-teal-600 hover:scale-110 transition-transform cursor-pointer"
                >
                  <Camera className="w-3.5 h-3.5" />
                </button>
              </div>
              <div className="mb-1">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white leading-tight">
                  {user?.username || "Admin User"}
                </h2>
                <p className="text-xs text-teal-600 dark:text-teal-400 font-semibold mt-0.5 flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5" />
                  {user?.role || "Super Administrator"}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl text-xs font-semibold bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-900/30">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                ກຳລັງໃຊ້ງານ (Online)
              </span>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-gray-100 dark:border-gray-800">
            <div className="flex items-center gap-2.5 text-xs text-gray-600 dark:text-gray-400">
              <Calendar className="w-4 h-4 text-teal-600" />
              <span>ເຂົ້າຮ່ວມເມື່ອ: 01/01/2024</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-gray-600 dark:text-gray-400">
              <Shield className="w-4 h-4 text-teal-600" />
              <span>ສິດທິ: ເຕັມຮູບແບບ (Full Access)</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-gray-600 dark:text-gray-400">
              <Smartphone className="w-4 h-4 text-teal-600" />
              <span>ເຂົ້າສູ່ລະບົບຫຼ້າສຸດ: ມື້ນີ້</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Personal Information Card */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden">
        <div className="p-5 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between bg-gray-50/50 dark:bg-gray-800/40">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-teal-50 dark:bg-teal-900/30 flex items-center justify-center text-teal-600">
              <User className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-900 dark:text-white">
                ຂໍ້ມູນສ່ວນຕົວ (Personal Information)
              </h3>
              <p className="text-[11px] text-gray-400">
                ອັບເດດຊື່, ອີເມວ, ເບີໂທລະສັບ ແລະ ທີ່ຢູ່ຂອງທ່ານ
              </p>
            </div>
          </div>
          <span className="text-[10px] font-bold text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/50 px-2 py-0.5 rounded-full border border-teal-200 dark:border-teal-900/40">
            Account Info
          </span>
        </div>

        <form onSubmit={handlePersonalSave} className="p-5 sm:p-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-teal-600" />
                <span>ຊື່ເຕັມ</span>
              </label>
              <input
                type="text"
                defaultValue={user?.username || "Admin User"}
                className="w-full px-3.5 py-2 bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 outline-none transition-all dark:text-white placeholder:text-gray-400"
                required
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-teal-600" />
                <span>ອີເມວ</span>
              </label>
              <input
                type="email"
                defaultValue="admin@example.com"
                className="w-full px-3.5 py-2 bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 outline-none transition-all dark:text-white placeholder:text-gray-400"
                required
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-teal-600" />
                <span>ເບີໂທລະສັບ</span>
              </label>
              <input
                type="tel"
                defaultValue="+856 20 5555 6666"
                className="w-full px-3.5 py-2 bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 outline-none transition-all dark:text-white placeholder:text-gray-400"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-teal-600" />
                <span>ທີ່ຢູ່</span>
              </label>
              <input
                type="text"
                defaultValue="ນະຄອນຫຼວງວຽງຈັນ, ສປປ ລາວ"
                className="w-full px-3.5 py-2 bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 outline-none transition-all dark:text-white placeholder:text-gray-400"
              />
            </div>
          </div>

          <div className="flex items-center justify-between pt-2">
            <button
              type="submit"
              className="flex items-center gap-1.5 bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold shadow-md shadow-teal-600/20 active:scale-[0.98] transition-all cursor-pointer"
            >
              <Save className="w-4 h-4" />
              <span>ບັນທຶກຂໍ້ມູນສ່ວນຕົວ</span>
            </button>
            {personalSaved && (
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 animate-in fade-in">
                <CheckCircle2 className="w-4 h-4" />
                ບັນທຶກສຳເລັດແລ້ວ!
              </span>
            )}
          </div>
        </form>
      </div>

      {/* 3. Security & Activity Card */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden">
        <div className="p-5 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between bg-gray-50/50 dark:bg-gray-800/40">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600">
              <Shield className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-900 dark:text-white">
                ຄວາມປອດໄພບັນຊີ (Account Security & Sessions)
              </h3>
              <p className="text-[11px] text-gray-400">
                ການຢືນຢັນສອງຊັ້ນ (2FA) ແລະ ອຸປະກອນທີ່ກຳລັງເຂົ້າສູ່ລະບົບ
              </p>
            </div>
          </div>
          <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 px-2 py-0.5 rounded-full border border-blue-200 dark:border-blue-900/40">
            2FA Active
          </span>
        </div>

        <div className="p-5 sm:p-6 space-y-4">
          {/* 2FA Toggle */}
          <div className="p-4 rounded-xl bg-gray-50/60 dark:bg-gray-800/40 border border-gray-100 dark:border-gray-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-950/40 flex items-center justify-center text-emerald-600">
                <Check className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">
                  ການຢືນຢັນສອງຂັ້ນຕອນ (Two-Factor Authentication)
                </p>
                <p className="text-[11px] text-gray-500 dark:text-gray-400">
                  ເພີ່ມຄວາມປອດໄພໃຫ້ກັບບັນຊີຂອງທ່ານດ້ວຍລະຫັດ OTP
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setTwoFactorEnabled(!twoFactorEnabled)}
              className={`w-9 h-5 rounded-full transition-all relative cursor-pointer ${
                twoFactorEnabled ? "bg-teal-600" : "bg-gray-300 dark:bg-gray-700"
              }`}
            >
              <div
                className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition-all ${
                  twoFactorEnabled ? "right-0.5" : "left-0.5"
                }`}
              />
            </button>
          </div>

          {/* Active Sessions */}
          <div className="space-y-2 pt-1">
            <p className="text-xs font-bold text-gray-700 dark:text-gray-300">
              ອຸປະກອນທີ່ກຳລັງເຂົ້າສູ່ລະບົບ (Active Devices)
            </p>
            <div className="p-3.5 rounded-xl bg-gray-50/60 dark:bg-gray-800/40 border border-gray-100 dark:border-gray-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-teal-50 dark:bg-teal-900/30 flex items-center justify-center text-teal-600">
                  <Smartphone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900 dark:text-white">
                    Windows PC • Chrome Browser
                  </p>
                  <p className="text-[11px] text-gray-400">
                    ນະຄອນຫຼວງວຽງຈັນ • ເຄື່ອນໄຫວປັດຈຸບັນ
                  </p>
                </div>
              </div>
              <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/50 px-2 py-0.5 rounded-full">
                This Device
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
