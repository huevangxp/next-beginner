"use client";

import React, { useState } from "react";
import {
  Settings,
  User,
  LogOut,
  Bell,
  Search,
  ChevronDown,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { useAppContext } from "../context/AppContext";
import { useRouter } from "next/navigation";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { user, logout } = useAppContext();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  return (
    <header className="bg-gradient-to-r from-teal-800 via-teal-700 to-teal-900 text-white border-b border-teal-700/50 h-16 md:h-18 flex items-center justify-between px-6 lg:px-8 sticky top-0 z-20 shadow-lg shadow-teal-950/20 backdrop-blur-md">
      <div className="flex items-center gap-6 lg:gap-8">
        {/* 3D Logo & Title */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 bg-gradient-to-br from-teal-400 via-teal-500 to-teal-700 p-0.5 rounded-xl flex items-center justify-center shadow-lg shadow-teal-900/40 icon-3d">
            <div className="w-full h-full bg-teal-900/60 backdrop-blur-md rounded-[10px] flex items-center justify-center border border-white/20">
              <span className="text-white font-black text-lg drop-shadow-md">L</span>
            </div>
          </div>
          <div>
            <h1 className="text-base md:text-lg font-black text-white leading-none tracking-tight flex items-center gap-1.5">
              <span>ລະບົບຈັດການສາງ & ການຄ້າ</span>
            </h1>
            <span className="text-[10px] font-bold text-teal-200 bg-white/15 px-2 py-0.5 rounded-full mt-1 inline-flex items-center gap-1 border border-white/10">
              <Sparkles className="w-2.5 h-2.5 text-teal-300" /> v2.4.0 Pro
            </span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center bg-white/10 hover:bg-white/15 focus-within:bg-white/20 backdrop-blur-md border border-white/15 focus-within:border-white/30 rounded-xl px-3.5 py-1.5 w-72 transition-all shadow-inner">
          <Search className="w-4 h-4 text-teal-200" />
          <input
            type="text"
            placeholder="ຄົ້ນຫາທຸກຢ່າງ..."
            className="bg-transparent border-none focus:ring-0 text-xs sm:text-sm ml-2 w-full text-white placeholder:text-teal-200/60 outline-none"
          />
        </div>
      </div>

      <div className="flex items-center gap-3 sm:gap-4">
        {/* Notifications */}
        <Link href="/notifications">
          <button
            title="ການແຈ້ງເຕືອນ"
            className="relative p-2 text-teal-100 hover:text-white hover:bg-white/15 rounded-xl transition-all cursor-pointer border border-transparent hover:border-white/20 active:scale-95"
          >
            <Bell className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-400 border-2 border-teal-900 rounded-full animate-pulse"></span>
          </button>
        </Link>

        {/* User Profile Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-2.5 p-1.5 pr-2.5 hover:bg-white/15 rounded-xl transition-all border border-transparent hover:border-white/20 cursor-pointer active:scale-95"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-400 to-teal-600 border border-white/30 flex items-center justify-center text-white font-bold text-sm shadow-md icon-3d">
              {user?.username?.charAt(0).toUpperCase() || "A"}
            </div>
            <div className="hidden sm:block text-left">
              <p className="text-xs sm:text-sm font-bold text-white leading-none">
                {user?.username || "Admin User"}
              </p>
              <p className="text-[10px] font-medium text-teal-200/80 uppercase tracking-wider mt-0.5">
                {user?.role || "Administrator"}
              </p>
            </div>
            <ChevronDown
              className={`w-3.5 h-3.5 text-teal-200 transition-transform duration-300 ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-2xl shadow-2xl py-1.5 animate-in fade-in slide-in-from-top-2 duration-200 overflow-hidden z-50 card-3d">
              <div className="px-4 py-2.5 border-b border-gray-100 dark:border-slate-800 mb-1 bg-gray-50/75 dark:bg-slate-800/50">
                <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
                  ບັນຊີຜູ້ໃຊ້
                </p>
                <p className="text-xs sm:text-sm font-bold text-gray-800 dark:text-white mt-0.5">
                  {user?.username || "admin"}
                </p>
              </div>

              <Link
                href="/profile"
                onClick={() => setIsDropdownOpen(false)}
                className="flex items-center gap-2.5 px-4 py-2 text-xs text-gray-700 dark:text-gray-300 hover:bg-teal-50 dark:hover:bg-teal-950/40 hover:text-teal-700 dark:hover:text-teal-300 transition-colors"
              >
                <User className="w-4 h-4 text-teal-600" />
                <span>ໂປຣໄຟລ໌ສ່ວນຕົວ</span>
              </Link>

              <Link
                href="/settings"
                onClick={() => setIsDropdownOpen(false)}
                className="flex items-center gap-2.5 px-4 py-2 text-xs text-gray-700 dark:text-gray-300 hover:bg-teal-50 dark:hover:bg-teal-950/40 hover:text-teal-700 dark:hover:text-teal-300 transition-colors"
              >
                <Settings className="w-4 h-4 text-teal-600" />
                <span>ຕັ້ງຄ່າລະບົບ</span>
              </Link>

              <div className="my-1 border-t border-gray-100 dark:border-slate-800" />

              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-2.5 px-4 py-2 text-xs text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-colors text-left cursor-pointer"
              >
                <LogOut className="w-4 h-4" />
                <span>ອອກຈາກລະບົບ</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
