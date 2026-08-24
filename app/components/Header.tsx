"use client";

import React, { useState } from "react";
import {
  Settings,
  User,
  LogOut,
  Bell,
  Search,
  ChevronDown,
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
    <header className="bg-gradient-to-r from-teal-700 via-teal-600 to-teal-800 text-white border-b border-teal-800/40 h-16 md:h-18 flex items-center justify-between px-6 lg:px-8 sticky top-0 z-20 shadow-md">
      <div className="flex items-center gap-6 lg:gap-8">
        {/* Logo & Title */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-white/15 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center shadow-sm">
            <span className="text-white font-black text-lg">L</span>
          </div>
          <div>
            <h1 className="text-base md:text-lg font-bold text-white leading-none tracking-tight">
              ອັດຕະຫຼາດລະບົບຄົວເຫຼືອ
            </h1>
            <span className="text-[11px] font-medium text-teal-100 bg-white/15 px-2 py-0.5 rounded-full mt-1 inline-block">
              v1.0.0
            </span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center bg-white/15 backdrop-blur-md border border-white/20 rounded-xl px-3.5 py-1.5 w-72 focus-within:bg-white/25 focus-within:border-white/40 transition-all">
          <Search className="w-4 h-4 text-teal-100" />
          <input
            type="text"
            placeholder="ຄົ້ນຫາ..."
            className="bg-transparent border-none focus:ring-0 text-xs sm:text-sm ml-2 w-full text-white placeholder:text-teal-100/70 outline-none"
          />
        </div>
      </div>

      <div className="flex items-center gap-4 sm:gap-6">
        {/* Notifications */}
        <button className="relative p-2 text-teal-100 hover:text-white hover:bg-white/15 rounded-xl transition-all cursor-pointer">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-400 border border-teal-800 rounded-full"></span>
        </button>

        {/* User Profile Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-2.5 p-1.5 pr-2.5 hover:bg-white/15 rounded-xl transition-all border border-transparent hover:border-white/20 cursor-pointer"
          >
            <div className="w-8 h-8 rounded-lg bg-white/20 border border-white/30 flex items-center justify-center text-white font-bold text-sm shadow-sm">
              {user?.username?.charAt(0).toUpperCase() || "A"}
            </div>
            <div className="hidden sm:block text-left">
              <p className="text-xs sm:text-sm font-bold text-white leading-none">
                {user?.username || "Admin User"}
              </p>
              <p className="text-[10px] font-medium text-teal-100/80 uppercase tracking-wider mt-0.5">
                {user?.role || "Administrator"}
              </p>
            </div>
            <ChevronDown
              className={`w-3.5 h-3.5 text-teal-100 transition-transform duration-300 ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl shadow-2xl py-1.5 animate-in fade-in slide-in-from-top-2 duration-200 overflow-hidden z-50">
              <div className="px-4 py-2.5 border-b border-gray-100 dark:border-gray-800 mb-1 bg-gray-50/75 dark:bg-gray-800/50">
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
                className="w-full flex items-center gap-2.5 px-4 py-2.5 text-xs sm:text-sm text-gray-600 dark:text-gray-300 hover:bg-teal-50 dark:hover:bg-teal-900/20 hover:text-teal-700 dark:hover:text-teal-400 transition-colors"
              >
                <div className="p-1 bg-gray-100 dark:bg-gray-800 rounded-lg">
                  <User className="w-3.5 h-3.5" />
                </div>
                <span className="font-medium">ໂປຣໄຟລ໌</span>
              </Link>

              <Link
                href="/settings"
                onClick={() => setIsDropdownOpen(false)}
                className="w-full flex items-center gap-2.5 px-4 py-2.5 text-xs sm:text-sm text-gray-600 dark:text-gray-300 hover:bg-teal-50 dark:hover:bg-teal-900/20 hover:text-teal-700 dark:hover:text-teal-400 transition-colors"
              >
                <div className="p-1 bg-gray-100 dark:bg-gray-800 rounded-lg">
                  <Settings className="w-3.5 h-3.5" />
                </div>
                <span className="font-medium">ຕັ້ງຄ່າ</span>
              </Link>

              <div className="h-px bg-gray-100 dark:border-gray-800 my-1"></div>

              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-2.5 px-4 py-2.5 text-xs sm:text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors cursor-pointer"
              >
                <div className="p-1 bg-red-50 dark:bg-red-900/20 rounded-lg">
                  <LogOut className="w-3.5 h-3.5" />
                </div>
                <span className="font-bold">ອອກຈາກລະບົບ</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
