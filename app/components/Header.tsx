"use client";

import React, { useState } from "react";
import { Settings, User, LogOut, Bell, Search } from "lucide-react";
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
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 h-20 flex items-center justify-between px-8 sticky top-0 z-10 shadow-sm transition-colors">
      <div className="flex items-center gap-8">
        {/* Logo & Title */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-teal-700 rounded-xl flex items-center justify-center shadow-lg shadow-teal-100 dark:shadow-none">
            <span className="text-white font-bold text-xl">L</span>
          </div>
          <div>
            <h1 className="text-lg font-bold text-gray-800 dark:text-white leading-none">
              ອັດຕະຫຼາດລະບົບຄົວເຫຼືອ
            </h1>
            <span className="text-xs font-medium text-teal-600 bg-teal-50 dark:bg-teal-900/30 px-2 py-0.5 rounded-full mt-1 inline-block">
              v1.0.0
            </span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl px-4 py-2 w-80 focus-within:bg-white dark:focus-within:bg-gray-900 focus-within:border-teal-200 transition-all">
          <Search className="w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="ຄົ້ນຫາ..."
            className="bg-transparent border-none focus:ring-0 text-sm ml-2 w-full text-gray-600 dark:text-gray-300 placeholder:text-gray-400"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        {/* Notifications */}
        <button className="relative p-2 text-gray-400 hover:text-teal-600 hover:bg-teal-50 dark:hover:bg-teal-900/30 rounded-xl transition-all">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 border-2 border-white dark:border-gray-900 rounded-full"></span>
        </button>

        {/* User Profile Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-3 p-1.5 pr-3 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-2xl transition-all border border-transparent hover:border-gray-100 dark:hover:border-gray-700"
          >
            <div className="w-9 h-9 rounded-xl bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center text-teal-700 dark:text-teal-400 font-bold">
              {user?.username?.charAt(0).toUpperCase() || "A"}
            </div>
            <div className="hidden sm:block text-left">
              <p className="text-sm font-bold text-gray-800 dark:text-white leading-none">
                {user?.username || "Admin User"}
              </p>
              <p className="text-[10px] font-medium text-gray-400 uppercase tracking-wider mt-1">
                {user?.role || "Administrator"}
              </p>
            </div>
            <ChevronDown
              className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-3 w-64 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl shadow-xl py-2 animate-in fade-in slide-in-from-top-2 duration-200 overflow-hidden">
              <div className="px-4 py-3 border-b border-gray-50 dark:border-gray-800 mb-1 bg-gray-50/50 dark:bg-gray-800/50">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  ບັນຊີຜູ້ໃຊ້
                </p>
                <p className="text-sm font-bold text-gray-800 dark:text-white mt-1">
                  {user?.username || "admin"}
                </p>
              </div>

              <Link
                href="/profile"
                onClick={() => setIsDropdownOpen(false)}
                className="w-full flex items-center gap-3 px-4 py-3 text-sm text-gray-600 dark:text-gray-300 hover:bg-teal-50 dark:hover:bg-teal-900/20 hover:text-teal-700 dark:hover:text-teal-400 transition-colors"
              >
                <div className="p-1.5 bg-gray-50 dark:bg-gray-800 rounded-lg group-hover:bg-white dark:group-hover:bg-gray-700">
                  <User className="w-4 h-4" />
                </div>
                <span className="font-medium">ໂປຣໄຟລ໌</span>
              </Link>

              <Link
                href="/settings"
                onClick={() => setIsDropdownOpen(false)}
                className="w-full flex items-center gap-3 px-4 py-3 text-sm text-gray-600 dark:text-gray-300 hover:bg-teal-50 dark:hover:bg-teal-900/20 hover:text-teal-700 dark:hover:text-teal-400 transition-colors"
              >
                <div className="p-1.5 bg-gray-50 dark:bg-gray-800 rounded-lg group-hover:bg-white dark:group-hover:bg-gray-700">
                  <Settings className="w-4 h-4" />
                </div>
                <span className="font-medium">ຕັ້ງຄ່າ</span>
              </Link>

              <div className="h-px bg-gray-50 dark:bg-gray-800 my-1"></div>

              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-4 py-3 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors"
              >
                <div className="p-1.5 bg-red-50 dark:bg-red-900/20 rounded-lg">
                  <LogOut className="w-4 h-4" />
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
